# Test Plan (Fixture-Based)

## Goals

- Protect parsing and unit conversion correctness.
- Prevent regressions in section sync and shopping categorization.
- Validate safety behavior for transcription failures.

## Fixture Groups

1. Ingredient parsing fixtures
- Inputs: recipe markdown files with edge-case ingredient lines.
- Outputs: expected `IngredientsParsed` objects and normalized ingredient lines.

2. Unit conversion fixtures
- Inputs: same recipe under AU/US/custom presets.
- Outputs: expected metric values and shorthand formatting.

3. Section sync fixtures
- Inputs: recipes with `####` section pairings across ingredients/directions.
- Outputs: expected active/dimmed section behavior by step index.

4. Shopping categorization fixtures
- Inputs: categorized ingredient corpus + overrides + exclusions.
- Outputs: expected category, reason string, and rendered checklist lines.

## Suggested Fixture Paths

- `tests/fixtures/ingredients/*.md`
- `tests/fixtures/categorization/*.json`
- `tests/fixtures/transcription/*.json`

## Automated Runner

- Command: `npm test` (inside `.obsidian/plugins/weekly-meal-shopper`)
- Files:
  - `tests/ingredient-parsing.test.js`
  - `tests/unit-conversion.test.js`
  - `tests/section-sync.test.js`
  - `tests/shopping-categorization.test.js`

## Minimum Regression Set Per Release

- 10 parsing fixtures
- 6 unit-conversion fixtures (AU/US/custom)
- 4 section-sync fixtures
- 8 categorization fixtures

## Manual Smoke Tests

- Run quick start in clean vault.
- Generate shopping list twice; verify deterministic output.
- Simulate API 429 and confirm retry/backoff + notice.
