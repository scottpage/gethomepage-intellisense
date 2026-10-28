# Roadmap and upstream PR checklist

## Completed
- TypeScript migration and source maps.
- Locale-aware schema registration and snippets for English and Portuguese.
- VS Code activation fix, debugger launch, and build task.
- Oxfmt/Oxlint and workspace extension recommendations.
- Offline locale scaffolding and developer documentation.

## Translation progress

- All seven English schemas have translated descriptions (282 description fields in total).
- The initial four smaller schemas were committed separately as `b52dae7`.
- Translation moved away from the unofficial Google Translate endpoint after HTTP 429 errors; the remaining schema descriptions were translated directly with AI assistance, **not** through a replacement API.
- All 24 English snippets now have descriptive English labels and English placeholder defaults; existing Portuguese completion aliases remain available for compatibility.
- Manual English/Portuguese testing in the Extension Development Host is still pending.

## Before PR
- [x] Complete English schema descriptions and snippet names, descriptions, and placeholders.
- [ ] Test both English and Portuguese in the Extension Development Host.
- [ ] Verify schema validation, hover descriptions, and completion/snippet behavior.
- [x] Run TypeScript, lint, formatting, tests, and VSIX packaging.
- [x] Open upstream draft PR #5 for early feedback.
- [ ] Review final diff and packaging contents before marking the PR ready for review.

## Future
- Add an untranslated-string report for translation completeness.
- Consider extension-host integration tests for YAML schema registration.
- Keep this document updated with subsequent development decisions.
