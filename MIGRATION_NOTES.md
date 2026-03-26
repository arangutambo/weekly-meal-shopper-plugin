# Migration Notes

## 0.1.x -> 0.2.x

### New settings
- `workflowPreset`
- `featureBasicEnabled`
- `featureMealPrepEnabled`
- `mealPrepCanvasFolder`
- `mealPrepCanvasNameTemplate`
- `settingsImportExportPath`
- `showCategoryReasonsInShoppingList`
- `includeOverrideLinksInShoppingList`

### New extensibility files
- `.obsidian/plugins/weekly-meal-shopper/ingredient-categories.json`
- `.obsidian/plugins/weekly-meal-shopper/unit-density-rules.json`
- `.obsidian/plugins/weekly-meal-shopper/unit-aliases.json`

### Behavior changes
- Shopping list output now supports category explainability (`why: ...`) and optional override links.
- Recipe parsing now caches by file signature (`mtime:size`) to avoid unnecessary re-parsing.
- URL transcription now falls back to a safe template file if parsing/transcription fails.

### Operator actions
1. Open settings once after updating so new defaults are persisted.
2. Review mode toggles (`Basic`, `Meal Prep`) and preset choice.
3. If you customized ingredient categories, compare your file against the new defaults before merging.
