---
title: Indice Missioni
description: Tutte le missioni — attive, completate e fallite.
tags: [index, missioni]
---

# Indice Missioni

## Attive

<!-- QueryToSerialize: TABLE giver AS "Committente", location AS "Luogo", session_started AS "Iniziata" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->
<!-- SerializedQuery: TABLE giver AS "Committente", location AS "Luogo", session_started AS "Iniziata" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->

| File                                                                                                     | Committente                                                      | Luogo                                                                                                       | Iniziata                                                             |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [[Wrath of the Righteous/05_Quests/Distruggere il Villaggio Ostile.md\|Distruggere il Villaggio Ostile]] | [[Wrath of the Righteous/03_NPCs/Sull.md\|Sull]]                 | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]] | [[Wrath of the Righteous/01_Sessions/Sessione 004.md\|Sessione 004]] |
| [[Wrath of the Righteous/05_Quests/Risalire in Superficie.md\|Risalire in Superficie]]                   |                                                                  | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]] | [[Wrath of the Righteous/01_Sessions/Sessione 001.md\|Sessione 001]] |
| [[Wrath of the Righteous/05_Quests/Scorta di Horgus Gwerm.md\|Scorta di Horgus Gwerm]]                   | [[Wrath of the Righteous/03_NPCs/Horgus Gwerm.md\|Horgus Gwerm]] | [[Wrath of the Righteous/04_Locations/Caverne Sotterranee di Kenabres.md\|Caverne Sotterranee di Kenabres]] | [[Wrath of the Righteous/01_Sessions/Sessione 003.md\|Sessione 003]] |

<!-- SerializedQuery END -->

## Completate

<!-- QueryToSerialize: TABLE giver AS "Committente", session_completed AS "Completata" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Completata" SORT file.name ASC -->
<!-- SerializedQuery: TABLE giver AS "Committente", session_completed AS "Completata" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Completata" SORT file.name ASC -->

| File | Committente | Completata |
| ---- | ----------- | ---------- |

<!-- SerializedQuery END -->


## Fallite / Abbandonate

<!-- QueryToSerialize: TABLE giver AS "Committente" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Fallita" OR status = "Abbandonata" SORT file.name ASC -->
<!-- SerializedQuery: TABLE giver AS "Committente" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Fallita" OR status = "Abbandonata" SORT file.name ASC -->

| File | Committente |
| ---- | ----------- |

<!-- SerializedQuery END -->

