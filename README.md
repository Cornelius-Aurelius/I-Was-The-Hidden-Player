# I Was the Hidden Player — Story + Hidden Signals Challenge

An original personal-account and colour blindness in football awareness site created by **Cornelius Aurelius**. The upgrade preserves the original first-person story, sponsorship and personal tip links, and related external resources.

## Added features
- A free twelve-decision Matchday Challenge with instant educational explanations and automatic next-question progression.
- Practice mode, on-device personal best, contrast toggle, responsive layout, keyboard 1–3 answers and Enter to proceed immediately.
- Dedicated mobile / tablet / desktop layout, better navigation, reading comfort toggle and reading progress indicator.
- Canonical, creator/about information, `Person`/`AboutPage`/`LearningResource` JSON-LD, sitemap, robots, social-preview PNG, and llms.txt.
- Source links are not displayed publicly.

## No claims of live transaction or medical outcomes
The game does not simulate a colour vision deficiency, evaluate a player’s sight, or approve kits. The page retains its personal story as originally written; no new personal experience has been invented or modified.

## QA
`node --test tests/*.test.mjs`

Local Chromium smoke tests can run with `python -m http.server 8765` from the repository root and the Playwright script in `tests/browser.py` (requires Python Playwright + Chromium).

**Publishing:** GitHub Pages `main` / root. Verify deployment and manual live-page interactions before linking from corneliusaurelius.com. Actual Google/AI indexing is external and not guaranteed.