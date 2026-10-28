# Project design review — 28 October 2026

Paper: https://app.paper.design/file/01KZ22BH6GK8H3VXE6R370F79K/1-0

## Verdict

The existing type, spacing system and overall visual identity are sound. The project sections needed stronger evidence and more accurate content. Foodedo, Mike Hamer Gardens and The Vault Gym now use a shared project-panel layout, with different project colours. Ownership and contribution are clearly labelled. This is sufficient content for a first release; further case-study expansion should not delay implementation.

## Final layout direction — supersedes the compact Vault treatment below

- Use the same panel structure for all three projects on the homepage and project listing: preview image, category label, title, descriptive copy, contribution tags and CTA/status area.
- Desktop panels share the same image dimensions, copy padding, hierarchy and height. Mobile panels stack image and copy using the same shared hierarchy.
- Foodedo uses Penumbra's neutral surface and blue accents; Mike uses cream/green; The Vault uses charcoal/yellow.
- The Vault has a full visual panel again, with accurate selected-key-page rework copy and `Page rework` / `Existing website` tags. Its final line reads `More project details coming soon` as plain text, without an arrow or project link. Do not create a Vault detail route for launch.
- Mike's standalone project page remains unchanged: concise contribution summary and two website screenshots.
- Repositioned lower canvas frames after the homepage became taller, maintaining separate desktop/mobile groups and the archived Vault exploration.

## Second pass — agreed launch scope

- The Vault Gym: selected key-page rework on an existing website. The original website build was not Jack's work. Removed the prominent image/card treatment and project links on both desktop and mobile; retain a short factual mention only. No dedicated route or case study for launch.
- The old Vault artboard is retained for reference, labelled `ARCHIVE — Vault exploration — Not for launch`, and placed apart from the active desktop sequence. Do not implement it.
- Mike Hamer Gardens: a brief introduction, a concise explanation of Jack's design/build contribution, two website screenshots and a live link are enough. Moved the contribution block above the screenshots and simplified its wording. No additional long narrative or invented results are needed.
- Foodedo: retain the more detailed product example and current screenshots. Tightened the trial-before-signup explanation to match its heading.
- Homepage: Foodedo and Mike have project entries; The Vault has a restrained text row. Introductory copy now allows for both full projects and focused contributions.
- Canvas: homepage desktop and mobile excerpt are grouped at the top. The next desktop row reads Projects, Foodedo, Mike; existing mobile views sit below their corresponding desktop frames. The layer-tree order follows these groups. Checked all eight artboard bounds: no overlaps.
- Final visual verdict: spacing, type hierarchy, contrast, alignment and artboard fit are suitable for first-release implementation. No application source changes or deployment in this pass.

## Problems addressed in Paper

- Foodedo screenshots represented the previous interface and appeared repeatedly, including as supposed shopping evidence. Replaced them with distinct live dashboard, generated-week, recipe-library and planning-setup captures.
- Green Foodedo washes and low-contrast green labels no longer matched the live product. The portfolio now uses Penumbra's existing neutral surfaces and blue labels around the real product screenshots.
- Corrected the broken homepage headline and replaced beta language with the relaunched status.
- Replaced unsupported leftover-first, seven-day-only and speed claims with the current days / servings / suggested-meals flow.
- Separated Foodedo's personal-product status from client website work and made the design/build contribution explicit.
- Mike's project showed garden photography without sufficient evidence of the website. Added the live homepage and before-and-after gallery, with explanations of their purpose.
- Corrected Mike's location from Gloucester to Stroud, following the live website.
- Replaced the invented placeholder testimonial attributed to Mike with factual project-brief content. Do not publish any client quote without actual approved wording.
- Removed internal design-note copy from visible content.
- Fixed inherited screenshot offsets, inconsistent image framing and exposed background strips.
- Replaced simulated phone status bars with website navigation and extended the Foodedo mobile case study with contribution, recipe-library and contact/project links.

## Information to carry into implementation

Each listing needs a project name, ownership/type, plain-language summary, real screenshot and project link. Detail pages should explain the brief, personal contribution, design decisions, delivered functionality and live destination. Use measured results only when evidence exists.

Suggested routes: `/projects`, `/projects/foodedo`, `/projects/mike-hamer-gardens`. These are implementation proposals, not routes added to this repository.

Use the real existing site navigation when implementing mobile. Paper's Menu text is a visual specification, not an implemented interactive menu.

## Screenshot sources

Mike's two website images were replaced with user-supplied clean captures (`Capture-2026-10-28-205358.png` and `Capture-2026-10-28-205507.png`). The `mike-hamer-home-clean.png` and `mike-hamer-gallery-clean.png` assets are the final versions imported into Paper. The homepage capture is also used in the desktop/mobile project previews. Layout and copy were preserved.

Follow-up verification found that the homepage source has four dark pixel columns at its right edge (columns 2550–2553 of the 2554px-wide image). The gallery source has no corresponding dark edge. All five homepage screenshot placements now use a native clipping frame in Paper, excluding the rightmost 12 source pixels: the four dark columns plus eight pixels of neutral background to avoid a resampling fringe. The original supplied file is untouched. Preserve this crop in implementation or export a cropped asset from Paper; do not use the untrimmed file directly. Fresh detail, desktop-card and mobile-card renders were checked to confirm the vertical line is gone.

Captured from public live pages on 28 October 2026:

- `foodedo-dashboard`: https://www.foodedo.com/ after choosing Try Foodedo.
- `foodedo-week`: https://www.foodedo.com/week after generating a guest plan.
- `foodedo-recipes`: https://www.foodedo.com/recipes
- `foodedo-setup`: https://www.foodedo.com/week/setup
- `mike-hamer-home`: https://www.mikehamergardens.co.uk/
- `mike-hamer-gallery`: https://www.mikehamergardens.co.uk/gallery

The `-detail` variants crop the Foodedo captures to the central application column. These are desktop browser captures presented within mobile Paper layouts; they are not native mobile screenshot captures. Guest plan dates and recipe suggestions are sample live state, not permanent product copy.

`review-*.png` are exported Paper previews. Original captures and previews are design assets, not production-optimized public assets.

## Validation and limits

Visually reviewed desktop homepage project section, desktop listing, both updated desktop case studies, mobile homepage projects, mobile listing and Foodedo mobile detail. Checked spacing, hierarchy, contrast, alignment, image framing and artboard clipping. Searched their exported JSX for beta wording, placeholder copy, the headline typo and old module notes; none remained in visible text.

No application source was changed and nothing was deployed. The Vault's delivered scope was clarified by the user in the second pass; it is now a text-only mention, with no dedicated detail page planned for launch.

Automatic approval review rejected a multi-layer deletion cleanup. The existing layers were retained, and outdated content was updated in place instead. No deletion approval is needed for the completed design changes.
