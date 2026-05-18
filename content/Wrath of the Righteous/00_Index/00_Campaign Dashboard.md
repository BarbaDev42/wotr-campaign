---
title: Dashboard di Campagna
description: Stato attuale della campagna Wrath of the Righteous.
tags: [index, dashboard]
---

# Dashboard di Campagna

## Il Gruppo

<!-- QueryToSerialize: TABLE race AS "Razza", class AS "Classe", level AS "Livello", player AS "Giocatore" FROM "Wrath of the Righteous/02_Party/Members" SORT file.name ASC -->
<!-- SerializedQuery: TABLE race AS "Razza", class AS "Classe", level AS "Livello", player AS "Giocatore" FROM "Wrath of the Righteous/02_Party/Members" SORT file.name ASC -->

| File                                                                            | Razza             | Classe    | Livello | Giocatore |
| ------------------------------------------------------------------------------- | ----------------- | --------- | ------- | --------- |
| [[Wrath of the Righteous/02_Party/Members/Agira.md\|Agira]]                     | Mezzelfo          | Sorcerer  | 2       | Luca      |
| [[Wrath of the Righteous/02_Party/Members/Caslek Makiya.md\|Caslek Makiya]]     | Tabaxi            | Rogue     | 2       | Anti      |
| [[Wrath of the Righteous/02_Party/Members/Kaelen Vortanis.md\|Kaelen Vortanis]] | Tiefling          | Craftsman | 2       | Blue      |
| [[Wrath of the Righteous/02_Party/Members/Tamar Darkmane.md\|Tamar Darkmane]]   | Umano             | Cleric    | 2       | Piro      |
| [[Wrath of the Righteous/02_Party/Members/Vlamyra Ruzclaw.md\|Vlamyra Ruzclaw]] | Dragonide (Rossa) | Paladin   | 2       | Nina      |

<!-- SerializedQuery END -->

---

## Missioni Attive

<!-- QueryToSerialize: TABLE status AS "Stato", giver AS "Committente", location AS "Luogo" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->
<!-- SerializedQuery: TABLE status AS "Stato", giver AS "Committente", location AS "Luogo" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->

| File                                                                                                     | Stato  | Committente                                                      | Luogo                                                                                                       |
| -------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [[Wrath of the Righteous/05_Quests/Distruggere il Villaggio Ostile.md\|Distruggere il Villaggio Ostile]] | Attiva | [[Wrath of the Righteous/03_NPCs/Sull.md\|Sull]]                 | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]] |
| [[Wrath of the Righteous/05_Quests/Risalire in Superficie.md\|Risalire in Superficie]]                   | Attiva |                                                                  | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]] |
| [[Wrath of the Righteous/05_Quests/Scorta di Horgus Gwerm.md\|Scorta di Horgus Gwerm]]                   | Attiva | [[Wrath of the Righteous/03_NPCs/Horgus Gwerm.md\|Horgus Gwerm]] | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]] |

<!-- SerializedQuery END -->

---

## Sessioni Recenti

<!-- QueryToSerialize: TABLE date_ingame AS "Data in-game", date_played AS "Giocata il", location AS "Luogo" FROM "Wrath of the Righteous/01_Sessions" SORT date_played DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE date_ingame AS "Data in-game", date_played AS "Giocata il", location AS "Luogo" FROM "Wrath of the Righteous/01_Sessions" SORT date_played DESC LIMIT 5 -->

| File                                                                 | Data in-game    | Giocata il     | Luogo                                                                                                             |
| -------------------------------------------------------------------- | --------------- | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| [[Wrath of the Righteous/01_Sessions/Sessione 007.md\|Sessione 007]] | August 17, 4713 | May 15, 2026   | [[Wrath of the Righteous/04_Locations/Villaggio degli Ibridati Traditori.md\|Villaggio degli Ibridati Traditori]] |
| [[Wrath of the Righteous/01_Sessions/Sessione 006.md\|Sessione 006]] | August 17, 4713 | May 08, 2026   | [[Wrath of the Righteous/04_Locations/Villaggio degli Ibridati Traditori.md\|Villaggio degli Ibridati Traditori]] |
| [[Wrath of the Righteous/01_Sessions/Sessione 005.md\|Sessione 005]] | August 17, 4713 | April 24, 2026 | [[Wrath of the Righteous/04_Locations/Neatholm.md\|Neatholm]]                                                     |
| [[Wrath of the Righteous/01_Sessions/Sessione 004.md\|Sessione 004]] | August 17, 4713 | April 17, 2026 | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]]       |
| [[Wrath of the Righteous/01_Sessions/Sessione 003.md\|Sessione 003]] | August 16, 4713 | April 10, 2026 | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]]       |

<!-- SerializedQuery END -->

---

## Link Rapidi

- [[01_Session Index|Tutte le Sessioni]]
- [[02_NPC Index|Indice PNG]]
- [[03_Location Index|Indice Luoghi]]
- [[04_Quest Index|Indice Missioni]]
- [[05_Party Index|Indice Gruppo]]
