---
title: Indice Missioni
description: Tutte le missioni — attive, completate e fallite.
tags: [index, missioni]
---

# Indice Missioni

## Attive

```dataview
TABLE giver AS "Committente", location AS "Luogo", session_started AS "Iniziata"
FROM "Wrath of the Righteous/05_Quests"
WHERE status = "Attiva"
SORT file.name ASC
```

## Completate

```dataview
TABLE giver AS "Committente", session_completed AS "Completata"
FROM "Wrath of the Righteous/05_Quests"
WHERE status = "Completata"
SORT file.name ASC
```

## Fallite / Abbandonate

```dataview
TABLE giver AS "Committente"
FROM "Wrath of the Righteous/05_Quests"
WHERE status = "Fallita" OR status = "Abbandonata"
SORT file.name ASC
```
