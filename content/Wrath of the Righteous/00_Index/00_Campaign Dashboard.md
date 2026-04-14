---
title: Dashboard di Campagna
description: Stato attuale della campagna Wrath of the Righteous.
tags: [index, dashboard]
---

# Dashboard di Campagna

## Il Gruppo

<!-- QueryToSerialize: TABLE race AS "Razza", class AS "Classe", level AS "Livello", player AS "Giocatore" FROM "Wrath of the Righteous/02_Party/Members" SORT file.name ASC -->
<!-- SerializedQuery: TABLE race AS "Razza", class AS "Classe", level AS "Livello", player AS "Giocatore" FROM "Wrath of the Righteous/02_Party/Members" SORT file.name ASC -->

| File                                                                            | Razza             | Classe | Livello | Giocatore |
| ------------------------------------------------------------------------------- | ----------------- | ------ | ------- | --------- |
| [[Agira]]                     | Mezzelfo          | \-     | 1       | Luca      |
| [[Caslek Makiya]]     | Tabaxi            | \-     | 2       | Anti      |
| [[Kaelen Vortanis]] | Tiefling          | \-     | 1       | Blue      |
| [[Tamar Darkmane]]   | Umano             | \-     | 1       | Piro      |
| [[Vlamyra Ruzclaw]] | Dragonide (Rossa) | \-     | 1       | Nina      |

<!-- SerializedQuery END -->

---

## Missioni Attive

<!-- QueryToSerialize: TABLE status AS "Stato", giver AS "Committente", location AS "Luogo" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->
<!-- SerializedQuery: TABLE status AS "Stato", giver AS "Committente", location AS "Luogo" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->

| File                                                                                   | Stato  | Committente                                                      | Luogo                                                                                                       |
| -------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [[Risalire in Superficie]] | Attiva |                                                                  | [[Caverne Sotterranee di Kenabres]] |
| [[Scorta di Horgus Gwerm]] | Attiva | [[Horgus Gwerm]] | [[Caverne Sotterranee di Kenabres]] |

<!-- SerializedQuery END -->

---

## Sessioni Recenti

<!-- QueryToSerialize: TABLE date_ingame AS "Data in-game", date_played AS "Giocata il", location AS "Luogo" FROM "Wrath of the Righteous/01_Sessions" SORT date_played DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE date_ingame AS "Data in-game", date_played AS "Giocata il", location AS "Luogo" FROM "Wrath of the Righteous/01_Sessions" SORT date_played DESC LIMIT 5 -->

| File                                                                 | Data in-game    | Giocata il     | Luogo                                                                                                       |
| -------------------------------------------------------------------- | --------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| [[Sessione 003]] | August 16, 4713 | April 10, 2026 | [[Caverne Sotterranee di Kenabres]] |
| [[Sessione 002]] | August 16, 4713 | April 03, 2026 | [[Caverne Sotterranee di Kenabres]] |
| [[Sessione 001]] | August 16, 4713 | March 26, 2026 | [[Kenabres]]                                               |

<!-- SerializedQuery END -->

---

## Link Rapidi

- [[01_Session Index|Tutte le Sessioni]]
- [[02_NPC Index|Indice PNG]]
- [[03_Location Index|Indice Luoghi]]
- [[04_Quest Index|Indice Missioni]]
- [[05_Party Index|Indice Gruppo]]
