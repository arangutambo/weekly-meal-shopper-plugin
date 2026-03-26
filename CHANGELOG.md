# Changelog

## Unreleased

### Added
- Feature toggles for `Basic` and `Meal Prep` modes.
- Workflow presets (`Balanced`, `Basic only`, `Meal Prep`) for faster configuration.
- `Create weekly meal-prep canvas` command with folder/name-template settings.
- Settings import/export JSON flow.
- Collapsible + searchable settings blocks for shopping categories, excluded ingredients, and ingredient overrides.
- Unit-density rules file (`unit-density-rules.json`) as an extensibility hook.
- Unit alias rules file (`unit-aliases.json`) as an extensibility hook.
- Shopping list explainability (`why` reason text) and override links.
- Command to add ingredient override from current shopping list line.
- Fixture-based Node test suite for parsing, unit conversion, section sync, and categorization regressions.

### Changed
- Ingredient parsing now uses an mtime/size-based cache to reduce unnecessary re-parsing.
- Weight preference support for ingredient parsing/output where conversion is appropriate.
- URL/image transcription now has retry/backoff and clearer failure handling.
- URL transcription creates a fallback recipe template if transcription fails.

### Fixed
- Direction bolding now avoids overlapping phrase artifacts.
- Step ingredient emphasis now uses phrase-boundary matching for cleaner highlights.
