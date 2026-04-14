---
title: Indice Missioni
description: Tutte le missioni — attive, completate e fallite.
tags: [index, missioni]
---

# Indice Missioni

## Attive

<!-- QueryToSerialize: TABLE giver AS "Committente", location AS "Luogo", session_started AS "Iniziata" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->
<!-- SerializedQuery: TABLE giver AS "Committente", location AS "Luogo", session_started AS "Iniziata" FROM "Wrath of the Righteous/05_Quests" WHERE status = "Attiva" SORT file.name ASC -->

| File                                                                                   | Committente                                                      | Luogo                                                                                                       | Iniziata                                                             |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [[Risalire in Superficie]] |                                                                  | [[Caverne Sotterranee di Kenabres]] | [[Sessione 001]] |
| [[Scorta di Horgus Gwerm]] | [[Horgus Gwerm]] | [[Caverne Sotterranee di Kenabres]] | [[Sessione 003]] |

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
