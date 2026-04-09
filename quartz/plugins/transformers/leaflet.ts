import { QuartzTransformerPlugin } from "../types"
import { Root, Code, Html } from "mdast"
import { visit } from "unist-util-visit"
import path from "path"
import { FilePath, FullSlug, slugifyFilePath } from "../../util/path"
import { slug as slugAnchor } from "github-slugger"
import { BuildCtx } from "../../util/ctx"

interface LeafletMarker {
  lat: number
  lng: number
  url: string
  label: string
}

interface LeafletConfig {
  id: string
  image: string
  height: string
  minZoom: number
  maxZoom: number
}

function parseLeafletBlock(content: string): LeafletConfig {
  const config: LeafletConfig = {
    id: "map-" + Math.random().toString(36).slice(2, 8),
    image: "",
    height: "450px",
    minZoom: 1,
    maxZoom: 10,
  }

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim()
    const colonIdx = line.indexOf(":")
    if (colonIdx === -1) continue

    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim()

    switch (key) {
      case "id":
        config.id = value
        break
      case "image": {
        const m = value.match(/\[\[(.+?)\]\]/)
        if (m) config.image = m[1]
        break
      }
      case "height":
        config.height = value
        break
      case "minZoom":
        config.minZoom = parseFloat(value)
        break
      case "maxZoom":
        config.maxZoom = parseFloat(value)
        break
    }
  }

  return config
}

/**
 * Resolve an asset filename (e.g. "Image.png") to an absolute URL
 * using Quartz's "shortest" strategy: find the unique slug whose
 * filename part matches, mirroring CrawlLinks behaviour.
 */
function resolveAssetUrl(imageName: string, allSlugs: FullSlug[]): string {
  const imageSlug = slugifyFilePath(imageName as FilePath)
  // filename part only (no directory)
  const imageFn = imageSlug.split("/").at(-1) ?? imageSlug

  const matches = allSlugs.filter((s) => {
    const fn = s.split("/").at(-1)
    return fn === imageFn
  })

  if (matches.length === 1) {
    return `/${matches[0]}`
  }

  // fallback: bare filename (may 404 if in a subdirectory, but better than nothing)
  return `/${imageSlug}`
}

function resolveMarkers(content: string, dir: string): LeafletMarker[] {
  const markers: LeafletMarker[] = []

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim()
    if (!line.startsWith("marker:")) continue

    const value = line.slice("marker:".length).trim()
    const commaIdx1 = value.indexOf(",")
    const commaIdx2 = value.indexOf(",", commaIdx1 + 1)
    const commaIdx3 = value.indexOf(",", commaIdx2 + 1)
    if (commaIdx1 === -1 || commaIdx2 === -1 || commaIdx3 === -1) continue

    const lat = parseFloat(value.slice(commaIdx1 + 1, commaIdx2).trim())
    const lng = parseFloat(value.slice(commaIdx2 + 1, commaIdx3).trim())
    const linkStr = value.slice(commaIdx3 + 1).trim()
    const lm = linkStr.match(/\[\[(.+?)\]\]/)
    if (!lm) continue

    // OFM textTransform pre-processes wikilinks: [[File#Anchor]] → [[File#slugified|DisplayText]]
    // Split at | first (alias), then at # (anchor).
    const linkContent = lm[1]
    const pipeIdx = linkContent.indexOf("|")
    const withoutAlias = pipeIdx !== -1 ? linkContent.slice(0, pipeIdx).trim() : linkContent.trim()
    const aliasText = pipeIdx !== -1 ? linkContent.slice(pipeIdx + 1).trim() : ""

    const hashIdx = withoutAlias.indexOf("#")
    const linkFile = hashIdx !== -1 ? withoutAlias.slice(0, hashIdx).trim() : withoutAlias.trim()
    const rawAnchor = hashIdx !== -1 ? withoutAlias.slice(hashIdx + 1).trim() : ""
    // Use github-slugger (same as Quartz heading IDs) for the anchor fragment
    const anchor = rawAnchor ? slugAnchor(rawAnchor) : ""

    // Label: prefer alias (human-readable display text), then raw anchor, then file name
    const label = aliasText || rawAnchor || linkFile

    const linkSlug = slugifyFilePath(linkFile as FilePath)
    const url =
      (dir === "." ? `/${linkSlug}` : `/${dir}/${linkSlug}`) +
      (anchor ? `#${anchor}` : "")

    markers.push({ lat, lng, url, label })
  }

  return markers
}

// Init script loaded via externalResources (uses dangerouslySetInnerHTML — no escaping).
// Reads data-* attributes and initialises Leaflet maps.
// Uses "prenav" (fired by Quartz SPA before micromorph) to destroy maps and reset state,
// so that micromorph can reuse DOM elements cleanly on the next navigation.
const LEAFLET_INIT = `
(function(){
  // Before each SPA navigation: destroy existing maps and clear the ready flag
  // so that initMaps() re-initialises them on the next "nav" event.
  document.addEventListener('prenav',function(){
    document.querySelectorAll('.leaflet-map[data-lmap-ready]').forEach(function(el){
      if(el._lmap){try{el._lmap.remove();}catch(e){} el._lmap=null;}
      el.removeAttribute('data-lmap-ready');
    });
  });

  function initMaps(){
    var els=document.querySelectorAll('.leaflet-map:not([data-lmap-ready])');
    if(!els.length)return;
    if(typeof L==='undefined')return;
    els.forEach(function(el){
      el.setAttribute('data-lmap-ready','1');
      var imageUrl=el.getAttribute('data-image');
      var minZoom=parseFloat(el.getAttribute('data-minzoom')||'1');
      var maxZoom=parseFloat(el.getAttribute('data-maxzoom')||'10');
      var markers=JSON.parse(el.getAttribute('data-markers')||'[]');
      var map;
      try{
        map=L.map(el,{crs:L.CRS.Simple,minZoom:minZoom,maxZoom:maxZoom,zoomSnap:0.5});
      }catch(e){return;}
      el._lmap=map;
      function placeMarkers(){
        markers.forEach(function(m){
          var a=document.createElement('a');
          a.href=m.url;
          a.textContent=m.label;
          L.marker([m.lat,m.lng]).addTo(map).bindPopup(a);
        });
      }
      var img=new Image();
      img.onload=function(){
        var scale=Math.pow(2,maxZoom-1);
        var bounds=[[-img.naturalHeight/scale,0],[0,img.naturalWidth/scale]];
        L.imageOverlay(imageUrl,bounds).addTo(map);
        map.fitBounds(bounds);
        placeMarkers();
      };
      img.onerror=function(){
        var scale=Math.pow(2,maxZoom-1);
        var bounds=[[-512/scale,0],[0,768/scale]];
        L.imageOverlay(imageUrl,bounds).addTo(map);
        map.fitBounds(bounds);
        placeMarkers();
      };
      img.src=imageUrl;
    });
  }
  document.addEventListener('nav',initMaps);
  initMaps();
})();
`.trim()

export const Leaflet: QuartzTransformerPlugin = () => {
  return {
    name: "Leaflet",
    markdownPlugins(ctx: BuildCtx) {
      return [
        () => (tree: Root, file) => {
          const slug = file.data.slug as FullSlug
          const dir = path.posix.dirname(slug)

          visit(tree, "code", (node: Code, index, parent) => {
            if (node.lang !== "leaflet" || index === undefined || !parent) return

            const config = parseLeafletBlock(node.value)
            if (!config.image) return

            // Resolve image using "shortest" strategy across all vault assets
            const imageUrl = resolveAssetUrl(config.image, ctx.allSlugs)
            const markers = resolveMarkers(node.value, dir)

            // JSON in a double-quoted HTML attribute: escape " to &quot;
            // Browser decodes &quot; → " when reading dataset, so JSON.parse works correctly
            const markersAttr = JSON.stringify(markers).replace(/"/g, "&quot;")
            const mapId = `lmap-${config.id}`

            const html =
              `<div class="leaflet-map" id="${mapId}"` +
              ` data-image="${imageUrl}"` +
              ` data-minzoom="${config.minZoom}"` +
              ` data-maxzoom="${config.maxZoom}"` +
              ` data-markers="${markersAttr}"` +
              ` style="height:${config.height};width:100%;border:1px solid var(--lightgray,#e5e5e5);border-radius:5px;"` +
              `></div>`

            parent.children.splice(index, 1, { type: "html", value: html } as Html)
          })
        },
      ]
    },
    externalResources() {
      return {
        css: [
          {
            content: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
            inline: false,
            spaPreserve: true,
          },
        ],
        js: [
          {
            src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
            contentType: "external" as const,
            loadTime: "beforeDOMReady" as const,
            spaPreserve: true,
          },
          {
            script: LEAFLET_INIT,
            contentType: "inline" as const,
            loadTime: "afterDOMReady" as const,
            spaPreserve: true,
          },
        ],
      }
    },
  }
}
