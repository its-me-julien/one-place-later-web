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
- A Route Red SVG arrow is the persistent header mark: it signals direction and transition while the written name remains the identity.
- The visual source of truth is the web brand guidelines; the creative-direction document governs voice and editorial choices.

---

# Page Tracker

| Route | Status | Purpose | Current scope |
| --- | --- | --- | --- |
| `/` | Live | Editorial home for the channel | Sticky navigation, full-screen Seoul hero, short channel introduction, YouTube link, and footer destinations for YouTube and Instagram. No video embed yet. |
| `/films` | Planned | Permanent archive of films | Build only when there is enough film content to browse. |
| `/films/[slug]` | Planned | Permanent home for an individual film | Editorial context, poster-first YouTube playback, stills, and previous/next-film navigation. |
| `/about` | Planned | Additional creator and channel context | Add only when the homepage introduction is no longer sufficient. |

## Homepage Content Baseline

- Brand line: **Ordinary life, noticed in motion.**
- Channel focus: routines, food, night rides, small escapes, and the occasional long way round.
- No autoplay, background video, film listing, creator-template sections, or technique explanation.

---

# Meaningful Change Log

| Date | Area | Change | Reference |
| --- | --- | --- | --- |
| 2026-08-17 | Foundation | Created the Astro site, GitHub repository, and Cloudflare Worker release path. | `fdbc0ed` |
| 2026-08-17 | Homepage | Released the first editorial homepage, semantic layout system, generated Seoul hero, accessibility baseline, metadata, and favicon. | `6202f5c` |
| 2026-08-17 | Channel language | Established `night rides` as the active content category in place of generic weather language. | `67b2194` |

---

# Next Meaningful Work

1. Add the first real film as content before building the Films archive.
2. Introduce the film content model and a poster-first, lightweight YouTube component when that film is ready.
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
