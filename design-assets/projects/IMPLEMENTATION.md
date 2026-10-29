# Project implementation

Implemented from the approved Paper design on 28 October 2026.

- Homepage: shared project panels between the expertise band and introduction to Jack.
- `/projects`: the same three panels, with project-specific colours and contribution labels.
- `/projects/foodedo`: full product case study with current screenshots.
- `/projects/mike-hamer-gardens`: concise contribution summary and two supplied website captures.
- The Vault has no detail route or link. The panel describes selected page rework on the existing website.
- Projects navigation, accessible mobile menu, page metadata and sitemap entries are included.

Production assets live in `public/projects/` as WebP files. The Mike homepage asset is cropped to source columns 0–2541 before resizing, excluding the dark strip and its resampling fringe. Keep the user-supplied originals unchanged. Foodedo images are the approved live captures; the garden and Vault photos were downloaded from their exact Paper image-fill URLs.

Validation: ESLint, Next.js production build (including TypeScript), route/metadata/sitemap/image smoke checks, and a right-edge pixel check passed. All three new routes were checked at viewport widths 320, 640, 768, 1024 and 1440 with no horizontal overflow. Mobile navigation and project links were exercised. Desktop and mobile production previews are saved alongside this document.

The site was rebranded to Odd Robin on 29 October 2026. The production origin is now `https://oddrobin.co.uk` across metadata, structured data, robots and sitemap entries. No deployment was performed.
