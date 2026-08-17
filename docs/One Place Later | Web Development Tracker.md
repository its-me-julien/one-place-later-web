# One Place Later
## Web Development Tracker

Last updated: 2026-08-17

---

# Purpose

This is the practical development record for the One Place Later website.

Use it to track:

- live and planned pages
- significant design, architecture and content decisions
- release state and meaningful milestones

Do not use it for small wording changes, routine dependency updates, or isolated CSS adjustments.

---

# Current Production State

| Item | Current state |
| --- | --- |
| Live site | [one-place-later-web.jp-tollie.workers.dev](https://one-place-later-web.jp-tollie.workers.dev) |
| Repository | [its-me-julien/one-place-later-web](https://github.com/its-me-julien/one-place-later-web) |
| Branch | `main` |
| Hosting | Cloudflare Worker with static Astro assets |
| Worker | `one-place-later-web` |
| Public destinations | [YouTube @OnePlaceLater](https://www.youtube.com/@OnePlaceLater) · [Instagram @oneplacelater](https://www.instagram.com/oneplacelater) |
| Release process | Push `main`, then run `npm run deploy` |

## Technical Baseline

- Astro static output served by the existing Cloudflare Worker asset binding.
- HTML and CSS first: no client-side framework or homepage JavaScript.
- One generated, site-owned hero image is processed through Astro’s image pipeline.
- Pretendard Variable is loaded as a pinned dynamic subset, with system-font fallbacks.
- The shared BrandMark component keeps the written name as the primary logo and pairs it with the bespoke rounded route glyph as the secondary mark; typographic arrows remain editorial grammar.
- `one-place-later-square-mark.svg` is the compact mark for favicon, avatar, and profile contexts; the full wordmark remains the primary identity.
- The reusable site masthead keeps About and YouTube as equally quiet editorial links, with Route Red limited to outbound punctuation.
- The reusable footer is a restrained Carbon end-mark: a short brand line, Seoul location, and explicitly external social destinations.
- The visual source of truth is the web brand guidelines; the creative-direction document governs voice and editorial choices.

---

# Page Tracker

| Route | Status | Purpose | Current scope |
| --- | --- | --- | --- |
| `/` | Live | Editorial home for the channel | Sticky navigation, full-screen Seoul hero, short channel introduction, YouTube link, and footer destinations for YouTube and Instagram. No video embed yet. |
| `/creative-field-guide/` | Internal reference | Full working system for story, filming, sound, editing, publishing, and review | Direct-link page using the site identity; intentionally omitted from navigation and marked `noindex, nofollow`. |
| `/films` | Planned | Permanent archive of films | Build only when there is enough film content to browse. |
| `/films/[slug]` | Planned | Permanent home for an individual film | Editorial context, poster-first YouTube playback, stills, and previous/next-film navigation. |
| `/about` | Planned | Additional creator and channel context | Add only when the homepage introduction is no longer sufficient. |

## Homepage Content Baseline

- Hero title: **One Place Later**, with **원 플레이스 레이터** as its subtitle and the English wordmark retained in the masthead and footer.
- Brand line: **Ordinary life, noticed in motion.**
- Channel focus: routines, food, quiet details, small escapes, and the occasional long way round.
- No autoplay, background video, film listing, creator-template sections, or technique explanation.

---

# Meaningful Change Log

| Date | Area | Change | Reference |
| --- | --- | --- | --- |
| 2026-08-17 | Foundation | Created the Astro site, GitHub repository, and Cloudflare Worker release path. | `fdbc0ed` |
| 2026-08-17 | Homepage | Released the first editorial homepage, semantic layout system, generated Seoul hero, accessibility baseline, metadata, and favicon. | `6202f5c` |
| 2026-08-17 | Channel language | Established `night rides` as the active content category in place of generic weather language. | `67b2194` |
| 2026-08-17 | Navigation | Reworked the reusable masthead around a quiet wordmark, editorial section link, and a single clear YouTube destination. | Release record |
| 2026-08-17 | Footer | Reworked the reusable footer into a compact editorial closing frame with YouTube and Instagram destinations. | Release record |
| 2026-08-17 | Identity | Consolidated the wordmark and route glyph into a reusable BrandMark component for a consistent, accessible logo across the site. | Release record |
| 2026-08-17 | Homepage language | Added the Hangul rendering as the hero subtitle while retaining the English title and site wordmark. | Release record |
| 2026-08-17 | Identity | Added a square route-glyph mark for compact digital contexts and made it the site favicon. | Release record |
| 2026-08-17 | Homepage language | Replaced `night rides` with `observations` and introduced the route-led Korea sign-off. | Release record |
| 2026-08-17 | Brand system | Formalized the route glyph as the secondary mark, quieted the masthead, adopted `quiet details`, and stabilized the mobile Korea sign-off. | Release record |
| 2026-08-17 | Identity | Redrew the square mark from the main route geometry and unified every logo lockup around a Route Red origin with a surface-aware neutral path. | Release record |
| 2026-08-17 | Homepage direction | Added the factual `Gangnam → Han River` hero caption, tuned the mobile crop to retain the cyclist, and documented the poster-first featured-film hero for the first release. | Release record |
| 2026-08-17 | Guidelines | Consolidated the web brand and Astro guidelines into one decision-led standard, removing repetition and reconciling the tokens, staged architecture, identity behaviour and release QA with the live site. | Release record |
| 2026-08-17 | Internal reference | Published the channel operating document as the unlisted, non-indexed **Creative Field Guide**, with a long-form editorial layout and section navigation. | Release record |
| 2026-08-17 | Creative Field Guide | Established the reusable chapter pattern across sections 1–30: numbered orientation, concise thesis, structured comparisons, routes, templates, step sequences, or decision prompts, and one working takeaway, with responsive anchor positioning. Sections 15–30 add filming roles, sound and graphic systems, narration and cultural-observation tests, editing rhythm, authored transitions, and travel orientation. | Release record |
| 2026-08-17 | Brand assets | Expanded the guide’s graphic-language chapter into a working identity specimen covering the wordmark, route glyph, editorial arrows, route compositions and colour behaviour; added downloadable editorial-arrow and route-divider SVG assets alongside the existing route and square marks. | Release record |
| 2026-08-17 | Creative Field Guide | Expanded section 30 into a distinctive orientation toolkit with production-style location cards, schematic Seoul and European journey maps, meaningful time cards, and compact transit, distance and change-state cards. | Release record |
| 2026-08-17 | Creative Field Guide | Reworked sections 31–35 into a unified continuity-and-return chapter with a timelapse proof strip, closing grammar and final-frame study, outward/return route loops, a recurring-object travel thread, and a scannable thematic field. | Release record |
| 2026-08-17 | Creative Field Guide | Rebuilt sections 36–40 as a practical field workflow: a filled pre-production brief, ordered filming priorities, a capture-or-stop shot test, a keep-or-cut scene audit, and a selective travel coverage edit. | Release record |
| 2026-08-17 | Creative Field Guide | Completed sections 41–58 as a coherent closing system spanning trip-scale story planning, edit rescue, publishing identity, brand boundaries and decisions, project/travel references, post-publish learning, the reusable working brief, manifesto and North Star. | Release record |
| 2026-08-17 | Creative Field Guide | Reorganized the 58-section reference into a focused cover directory and nine chapter routes, with stable legacy anchors, CSS-only mobile and desktop chapter navigation, adjacent-chapter controls, and a clear relationship between the worked example brief and canonical reusable brief. | Release record |
| 2026-08-17 | Creative Field Guide | Removed the redundant usage introduction from the guide cover so the chapter directory begins immediately beneath the editorial hero. | Release record |
| 2026-08-17 | Brand assets | Completed the Brand Graphic Language chapter with a unified motion-and-outcome system for Fast Pace, Slow Pace, Problem and Success; added four downloadable SVG assets and documented their production rules. | Release record |
| 2026-08-17 | Brand assets | Extended the Brand Graphic Language chapter with an on-brand transport family for Walk, Bicycle, Rail, Car and Flight, including five downloadable route-led SVGs and usage rules. | Release record |
| 2026-08-17 | Brand assets | Removed the unused Fast and Slow Pace marks, renamed Success to Solution, and added practical route-led editorial signals for Location, Tool, Tip or Info, and Quote with downloadable SVGs. | Release record |
| 2026-08-17 | Brand assets | Corrected the Bicycle and Car transport silhouettes so both face and move toward the route arrow. | Release record |
| 2026-08-17 | Brand assets | Rebuilt the four editorial callout marks around one consistent origin dot and route baseline, with distinct route transformations for Location, Tool, Tip or Info, and Quote. | Release record |
| 2026-08-17 | Brand assets | Redrew the Bicycle transport asset from scratch with a cleaner, mechanically legible right-facing city-bike silhouette. | Release record |
| 2026-08-17 | Brand assets | Reduced the editorial callout system to the two production-useful marks—Tool and Tip or Info—and retired Location and Quote. | Release record |
| 2026-08-17 | Brand assets | Added route-led Notice / Detail and Return / Callback marks plus a flexible Distance / Progress strip, with downloadable SVG assets and clear production-use boundaries. | Release record |
| 2026-08-17 | Creative Field Guide | Expanded Section 30 into a fuller orientation toolkit with departure, threshold and return locations; progress and return maps; elapsed, waiting and local-time treatments; and six practical supporting states. | Release record |

---

# Next Meaningful Work

1. Publish the first real film and promote it to the poster-first homepage hero, with an actual title, factual route, and permanent film page.
2. Introduce the film content model and a lightweight YouTube component on that permanent film page when it is ready.
3. Build `/films` and `/films/[slug]` together so every listed film has a permanent destination.
4. Reassess whether a separate About page adds useful context once the channel has a body of work.

---

# Tracker Update Rules

Add an entry when a change introduces or materially alters:

- a public route or page purpose
- the content model, navigation, external integration, hosting, or release process
- the visual system, accessibility standard, or brand direction
- a content decision that changes the channel’s public positioning

Do not add an entry for:

- ordinary copy edits that do not change positioning
- bug fixes confined to one component
- dependency, formatting, or build-output churn
- routine production releases with no meaningful product change
