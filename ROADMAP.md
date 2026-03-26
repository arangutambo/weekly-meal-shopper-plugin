# Weekly Meal Shopper v1.0 Publishing Roadmap

Target: stable public v1.0 release with clear UX modes, predictable parsing, and publish-ready docs.

## Milestone 1: Product Surface Freeze (Week 1)

Scope:
- Lock command set and mode toggles (`Basic`, `Meal Prep`).
- Finalize settings IA: explanations, collapsible sections, per-section search.
- Freeze config file contracts:
  - `ingredient-categories.json`
  - `unit-density-rules.json`

Exit criteria:
- No command removals planned after this milestone.
- All settings labels/descriptions reviewed for user-facing clarity.

## Milestone 2: Parsing + Unit Correctness (Week 2)

Scope:
- Fixture-driven validation for ingredient parsing and formatting templates.
- AU/US/custom cup/tbsp/tsp conversion validation.
- Weight-preference conversion validation for applicable ingredients.
- Direction bolding and step-emphasis edge-case stabilization.

Exit criteria:
- 0 known regressions on fixture pack.
- Known limitations documented in README.

## Milestone 3: Meal Prep Engine Reliability (Week 3)

Scope:
- Performance indexing pass:
  - parsed ingredient cache hit-rate instrumentation
  - avoid unnecessary full re-parse on unchanged notes
- Shopping output explainability polishing:
  - clear `why` reason strings
  - override flow reliability from generated output

Exit criteria:
- Shopping list generation deterministic across repeated runs.
- Explainability lines understandable without source code knowledge.

## Milestone 4: API Safety + Recovery (Week 4)

Scope:
- Rate-limit retry/backoff tuning.
- Error taxonomy in notices (429 vs network vs parse failure).
- Fallback template behavior hardening for failed transcription.

Exit criteria:
- No destructive failure path in URL/image transcription.
- User always ends with either a successful recipe file or fallback template.

## Milestone 5: Public Documentation + Demo Pack (Week 5)

Scope:
- README polish for public listing.
- GIF walkthrough set:
  - recipe view
  - shopping list generation
  - URL transcription
- sample vault + sample canvas package.

Exit criteria:
- New user can complete quick start in <= 5 minutes.
- Docs match current command/settings names exactly.

## Milestone 6: Release Operations (Week 6)

Scope:
- Semver tagging policy: `0.x` rapid changes -> `1.0.0` stability contract.
- Changelog process and migration notes template.
- Compatibility matrix by Obsidian version.
- Final pre-release checklist run.

Exit criteria:
- `1.0.0` tag with changelog + migration notes + compatibility matrix.
- Repeatable release checklist completed and archived.

## Backlog (post-1.0)

- Interactive shopping-list override UI without command URI dependence.
- Optional pantry inventory subtraction mode.
- Optional OCR pre-processing profiles for noisy image inputs.
