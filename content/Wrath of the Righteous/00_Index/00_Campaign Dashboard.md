---
title: Dashboard di Campagna
description: Stato attuale della campagna Wrath of the Righteous.
tags: [index, dashboard]
---

# Dashboard di Campagna

## Il Gruppo

```dataview
TABLE race AS "Razza", class AS "Classe", level AS "Livello", player AS "Giocatore"
FROM "Wrath of the Righteous/02_Party/Members"
SORT file.name ASC
```

---

## Missioni Attive

```dataview
TABLE status AS "Stato", giver AS "Committente", location AS "Luogo"
FROM "Wrath of the Righteous/05_Quests"
WHERE status = "Attiva"
SORT file.name ASC
```

---

## Sessioni Recenti

```dataview
TABLE date AS "Data", location AS "Luogo"
FROM "Wrath of the Righteous/01_Sessions"
SORT date DESC
LIMIT 5
```

---

## Link Rapidi

- [[01_Session Index|Tutte le Sessioni]]
- [[02_NPC Index|Indice PNG]]
- [[03_Location Index|Indice Luoghi]]
- [[04_Quest Index|Indice Missioni]]
- [[05_Party Index|Indice Gruppo]]
