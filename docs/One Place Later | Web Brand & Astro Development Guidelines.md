# One Place Later
## Web Brand & Astro Development Guidelines v1.1

This document is the visual and implementation standard for the One Place Later website.

It translates the creative direction into decisions that can be applied consistently in Astro, HTML and CSS. When this document and an isolated example disagree, follow the principle rather than copying the example.

---

# 1. Purpose

The website is the permanent home of the films and the world around them.

It should feel like a quiet editorial archive of places, movement and ordinary life—not a creator landing page, travel blog, tourism site, portfolio or SaaS template.

The work comes first:

```text
image or film
→ title
→ factual context
→ action
```

The interface should be fast, calm, clear, human and slightly understated. It should make visitors want to watch without competing with what they came to see.

---

# 2. Decision Order

When making a design decision, use this order:

1. Preserve the truth of the image or film.
2. Make the page understandable and accessible.
3. Express the brand through composition, language and restraint.
4. Add interaction only when it clarifies movement or state.
5. Remove anything that exists only to make the interface look designed.

The brand should determine the implementation. The framework should not determine the brand.

---

# 3. Experience Principles

## Show the place, then provide context

Use images, titles, routes and concise captions. Do not lead with a manifesto.

## Quiet interface

Navigation and controls recede behind the work. Familiar interactions are preferred over experimental UX.

## Low cognitive load

Keep choices limited. Do not create categories, filters or navigation branches before real content requires them.

## Editorial continuity

Korea, Europe, home life and travel must feel like parts of the same world.

## Restraint creates identity

One repeated, meaningful detail is stronger than a collection of effects.

---

# 4. Site States and Information Architecture

The architecture grows with the films.

## Before the first film

```text
/
├── #about
├── YouTube ↗
└── Instagram ↗
```

The homepage uses a brand-led image hero, a short channel statement and the footer. A factual route may caption the image:

```text
Gangnam → Han River
```

Do not add placeholder film cards, empty archives or invented metadata.

## Once a real film is published

```text
/
├── /films
│   └── /films/[slug]
├── /about        only when the homepage introduction is insufficient
├── YouTube ↗
└── Instagram ↗
```

The homepage hero becomes the featured film:

```text
site-owned poster image
factual route or location · date
actual film title
one-line editorial description
permanent film page →
```

Use a semantic `<article>` with one clear route to `/films/[slug]`. Never label it `Latest video`, use a generic thumbnail treatment or instantiate a YouTube player on the homepage.

Add a recent-films sequence only when enough real work exists to make the sequence useful.

Do not launch speculative sections such as Journal, Gear, Newsletter, Shop, Guides, Resources, Categories, Tags or Search.

---

# 5. Visual Thesis

The site is:

- editorial rather than app-like
- warm rather than clinical
- observational rather than promotional
- architectural rather than card-heavy
- expressive through photography rather than decoration

Think independent magazine, photographic essay and quiet film journal.

Avoid dashboard cards, floating panels, gradient blobs, oversized pills, glass effects and feature-grid composition.

Each page should have one dominant visual idea. A strong image, strong title, a little context and somewhere to go is usually enough.

---

# 6. Colour System

## Palette

| Role | Value | Use |
| --- | --- | --- |
| Carbon | `#1A1A18` | Primary type and dark surfaces |
| Paper | `#F2EFE7` | Primary background and dark-surface type |
| Paper Light | `#F8F5EF` | Rare alternate surface |
| Stone | `#8C8B84` | Decorative neutral and non-text detail |
| Stone Dark | `#57544F` | Readable muted text and route paths |
| Rule | `#D8D2C7` | Fine separators |
| Route Red | `#C95C43` | Graphic punctuation and dark-surface accent |
| Route Red Dark | `#923D2D` | Small accent text and focus on Paper |

Default experience:

```text
Paper surface + Carbon type
```

Route Red is punctuation. Use it for origins, arrows, routes, focus, selected metadata and tiny editorial details. Never use it for large surfaces, full headings, long copy or every interaction.

On dark surfaces, Paper becomes the primary foreground and the brighter Route Red may be used for small details. Colour must never be the only carrier of meaning.

Do not add a dark-mode toggle. Carbon sections are intentional editorial moments, not an alternate theme.

## Semantic token contract

Components use semantic variables, not palette values.

```css
@layer tokens {
  :root {
    --color-bg: #f2efe7;
    --color-bg-soft: #f8f5ef;
    --color-text: #1a1a18;
    --color-text-muted: #57544f;
    --color-stone: #8c8b84;
    --color-border: #d8d2c7;
    --color-accent: #c95c43;
    --color-accent-strong: #923d2d;
    --color-surface-dark: #1a1a18;
    --color-text-on-dark: #f2efe7;
  }
}
```

Use `color-mix()` for contextual softening rather than creating many near-duplicate colours.

---

# 7. Typography

Use Pretendard Variable for both Latin and Korean text.

```css
--font-sans:
  "Pretendard Variable",
  "Pretendard",
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Use only weights 400, 500 and 600.

- 400: body copy and large editorial statements
- 500: navigation, metadata, labels and display titles
- 600: compact wordmark emphasis only

Do not add a serif merely to appear editorial. The editorial quality comes from scale, rhythm and composition.

## Type tokens

```css
:root {
  --text-xs: clamp(0.75rem, 0.72rem + 0.1vw, 0.8125rem);
  --text-sm: clamp(0.875rem, 0.84rem + 0.15vw, 0.95rem);
  --text-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  --text-lg: clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem);
  --text-xl: clamp(1.55rem, 1.3rem + 1vw, 2.1rem);
  --text-2xl: clamp(2rem, 1.55rem + 1.8vw, 3.25rem);
  --text-3xl: clamp(3rem, 2rem + 5vw, 6.75rem);
}
```

## Rules

- Body copy: `line-height: 1.6`, maximum `65ch`.
- Large titles: medium weight, tight but readable leading, negative tracking used carefully.
- Film titles: never all caps.
- Metadata: small, concise and visibly secondary.
- Uppercase: reserved for short editorial labels such as `FROM HERE`.
- Use `text-wrap: balance` for short headings and `text-wrap: pretty` for prose where supported.
- Never shrink meaningful mobile copy into miniature metadata.

---

# 8. Spacing and Layout

## Tokens

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: clamp(2.5rem, 5vw, 4rem);
  --space-8: clamp(4rem, 8vw, 7rem);
  --space-9: clamp(6rem, 12vw, 11rem);

  --width-copy: 46rem;
  --width-content: 72rem;
  --width-page: 90rem;
  --gutter: clamp(1rem, 3vw, 2.75rem);
}
```

Prefer generous vertical rhythm. Do not use boxes to compensate for weak hierarchy.

```css
.l-wrapper {
  width: min(
    calc(100% - (var(--gutter) * 2)),
    var(--width-page)
  );
  margin-inline: auto;
}
```

Use CSS Grid for editorial composition and Flexbox for one-dimensional alignment. A twelve-column grid may support complex pages, but visitors should never see the grid as a visual effect.

## Responsive rules

Design mobile first and add breakpoints where content breaks—not by device name.

Baseline references:

```css
@media (min-width: 40rem) { }
@media (min-width: 64rem) { }
@media (min-width: 90rem) { }
```

Use container queries when a reusable component should respond to its own width. Preserve full-bleed imagery, comfortable touch targets, readable text, intentional crops and zero horizontal overflow.

The persistent header counts against the initial viewport. Full-height heroes must subtract its height.

---

# 9. Shape, Rules and Depth

One Place Later is not a rounded-card brand.

```css
:root {
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-media: 0.25rem;
  --border-default: 1px solid var(--color-border);
}
```

Use fine rules for section separation, metadata and footer boundaries. Do not box ordinary content.

Default shadow: none.

If genuine elevation is required:

```css
box-shadow: 0 8px 28px rgb(26 26 24 / 0.08);
```

Never use large radii, pill navigation, floating rounded containers or shadows on ordinary film entries.

---

# 10. Identity System

## Hierarchy

1. The written **One Place Later** wordmark is the primary logo.
2. The bespoke rounded route glyph is the secondary mark.
3. The square route mark is reserved for favicons, avatars and constrained formats.
4. Typographic arrows are editorial punctuation.

The route glyph always preserves the same low, rounded geometry. Route Red identifies the origin. The path uses Stone Dark on Paper and softened Paper on Carbon.

Hover or keyboard focus may shift the complete glyph 2–4px and strengthen the neutral path. The origin remains red. Do not animate the mark autonomously or replace every typographic arrow with it.

## Arrow grammar

```text
Gangnam → Han River
One place later →
YouTube ↗
```

- `→` communicates route, sequence or continuation.
- `↗` identifies an external destination.
- Use arrows only where direction is meaningful.

---

# 11. Photography and Image Treatment

Photography is the main visual identity.

Prefer environmental, candid and specific images. The person may be present without dominating the place. Preserve natural seasonal colour and useful negative space.

Do not add colour overlays, heavy gradients, fake grain, vignettes, duotones or decorative filters. CSS does not need to manufacture atmosphere already present in the image.

## Recurring ratios

| Use | Ratio |
| --- | --- |
| Film poster or thumbnail | `16 / 9` |
| Environmental image | `3 / 2` |
| Portrait or human detail | `4 / 5` |
| Full-width landscape | Native ratio allowed |

Do not force every image into the same crop. Check the subject at every breakpoint; mobile cropping must not accidentally remove the person or meaningful detail.

Use Astro's image pipeline for site-owned imagery and include intrinsic dimensions through the generated output.

Alt text describes the meaningful scene, not the brand or SEO target.

Good:

```text
Cycling along the Han River with Seoul apartment towers behind the path
```

Avoid:

```text
One Place Later cinematic Seoul lifestyle travel vlog thumbnail
```

---

# 12. Video and YouTube

Never autoplay video or sound.

Use this sequence:

```text
site-owned poster → user intent → video
```

Index pages show poster images and link to permanent film pages. Film pages may contain one lightweight, lazy or click-to-load YouTube player.

External destinations remain explicit:

```text
Watch on YouTube ↗
```

The page should feel like an editorial film home, not a media-player interface.

---

# 13. Component Direction

## Header

- Compact Paper surface.
- Written wordmark and route glyph on the left.
- Only necessary destinations on the right.
- Internal and external links share one quiet editorial treatment.
- External arrow may use Route Red.
- Sticky is acceptable; disappearing, resizing and glassmorphism are not.
- Keep interactive targets at least 44px high.
- Use a menu trigger only when the navigation genuinely outgrows the mobile width.

## Hero

- Full bleed and image led.
- One composition, not a panel layout.
- Title is the dominant text.
- Factual route, Hangul or film metadata may provide small context.
- Text must sit on a reliably calm, high-contrast part of the image.
- Preserve the subject in responsive crops.

## Introduction

- One short editorial label.
- One strong statement.
- One restrained sign-off or route.
- No explanatory brand manifesto.

## Footer

- Carbon end frame.
- Wordmark, short brand line, Seoul location and real external destinations.
- Do not repeat the introduction or add decorative content to fill space.

## Film feature and film entries

The image dominates. Use factual metadata, the actual title and at most one short deck.

Do not place film entries inside panels with backgrounds, borders, shadows or large radii. The title/image region may form the link.

Hover may scale the image by at most 1–2%, reveal a title underline or move an arrow slightly. Never darken an image dramatically.

## Links and buttons

Most navigation is a text link.

```css
a {
  color: inherit;
  text-decoration-color:
    color-mix(in srgb, currentColor 35%, transparent);
  text-underline-offset: 0.18em;
}
```

Navigation and image links may omit a persistent underline when context makes interactivity clear, but hover and focus must restore an obvious state.

Use a filled Carbon button only for a genuine primary action that cannot read clearly as an editorial link. Buttons are small-radius, shadowless and never pill-shaped.

---

# 14. Motion

Motion communicates direction, continuity or state change.

```css
:root {
  --motion-fast: 120ms;
  --motion-base: 220ms;
  --motion-slow: 450ms;
  --ease-standard: cubic-bezier(0.2, 0.7, 0.2, 1);
}
```

Allowed:

- arrow movement of 2–4px
- small opacity or colour changes
- image scale of 1–2%
- one restrained entrance for a dominant hero
- an optional page fade or shared film-image transition

Avoid parallax, scroll-jacking, cursor followers, magnetic buttons, tilting cards, continuous floating, large staggered sequences and universal scroll reveals.

The films move. The interface moves only to explain something.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 15. Accessibility

Target WCAG 2.2 AA.

Non-negotiable:

- semantic HTML and logical headings
- skip navigation
- complete keyboard access
- visible focus
- minimum 44px touch targets for primary navigation
- sufficient contrast for body and muted text
- meaningful alt text
- labelled controls and embedded video
- reduced-motion support
- no colour-only meaning
- usable layout at 200% text zoom
- no horizontal overflow

```css
:focus-visible {
  outline: 3px solid var(--color-accent-strong);
  outline-offset: 3px;
}

[data-surface="dark"] :focus-visible {
  outline-color: var(--color-text-on-dark);
}
```

Route Red is an accent first, not the default colour for small text.

---

# 16. Language and Interface Copy

Copy is specific, understated and conversational.

Use:

```text
Watch film →
More films →
About
One place later →
```

Avoid:

```text
Click here to watch
Explore our content library
Discover the story behind One Place Later
```

Factual context has more personality than generic labels:

```text
Gangnam → Han River
```

Dry humour may appear in rare empty or error states:

```text
One place too far.
That page isn't here.
Back home →
```

Do not make the interface constantly wink at the visitor.

---

# 17. Astro and CSS Architecture

Use Astro-rendered HTML and native CSS by default. Add client JavaScript only for behaviour that cannot be delivered accessibly with HTML and CSS.

```text
tokens
↓
global foundations
↓
layouts
↓
Astro components
↓
content
↓
optional interaction
```

Recommended style structure:

```text
src/styles/
├── tokens.css
├── global.css
└── utilities.css
```

- Tokens define the shared visual contract.
- Global CSS contains reset, base elements and shared surface behaviour.
- Layout utilities remain few and explicit.
- Component CSS stays scoped inside its `.astro` component.

Use cascade layers:

```css
@layer reset, tokens, base, layout, utilities;
```

Keep selectors shallow. Astro already scopes component styles; do not recreate a large BEM or utility framework.

Naming:

```css
.card {}
.image {}
.meta {}
.title {}

.l-wrapper {}
.l-stack {}
.l-cluster {}

.u-visually-hidden {}
.u-no-wrap {}
```

Use data attributes for meaningful variants and surfaces:

```html
<section data-surface="dark">
```

Do not add React, Vue or Svelte unless a future interaction genuinely benefits from isolated hydration.

---

# 18. Global CSS Foundation

```css
@layer reset, tokens, base, layout, utilities;

@layer reset {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    text-size-adjust: 100%;
  }

  body,
  h1,
  h2,
  h3,
  p,
  figure,
  blockquote {
    margin: 0;
  }

  img,
  picture,
  video,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
}

@layer base {
  html {
    background: var(--color-bg);
    color: var(--color-text);
  }

  body {
    min-height: 100vh;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    line-height: 1.05;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
  }

  ::selection {
    color: var(--color-bg);
    background: var(--color-text);
  }
}
```

Do not build a generic design system beyond what the site uses.

---

# 19. Content and Film Pages

Films are content entries, not hard-coded page markup.

Start with fields that support real presentation:

```ts
{
  title: string;
  slug: string;
  date: Date;
  location: string;
  country: string;
  description: string;
  youtubeId: string;
  cover: Image;
  coverAlt: string;
  duration?: string;
  featured?: boolean;
  draft?: boolean;
}
```

Add coordinates, chapters, related films or galleries only when real content needs them.

Each film gets a permanent page:

```text
actual film title
location · date
short editorial introduction
16:9 film
optional note or selected stills
previous film ←     One place later →
```

The next-film phrase is a signature interaction. Use it there, not on every button.

---

# 20. Metadata, URLs and SEO

Every page needs:

- a unique title and meta description
- canonical URL
- Open Graph title, description and image
- meaningful headings
- descriptive social imagery

Title patterns:

```text
One Place Later
Films | One Place Later
About | One Place Later
Escaping Gangnam Without Leaving Seoul | One Place Later
```

URLs remain short and durable:

```text
/films/escaping-gangnam
/films/seoul-after-work
/about
```

Avoid date folders, category stacks, IDs and keyword stuffing. Brand clarity is more valuable than repetitive `Seoul vlog` phrasing.

---

# 21. Performance

Priority order:

1. Useful HTML quickly.
2. Correctly sized, optimized imagery.
3. Minimal font payload.
4. Minimal client JavaScript.
5. Third-party content only after user intent.

Avoid autoplay media, multiple YouTube players, large animation libraries, unnecessary analytics, unused font weights and oversized source images.

Static content renders as content. Do not use skeleton loaders for it. A film poster is the loading state for deferred video.

A beautiful site that feels slow is off-brand.

---

# 22. Explicit Exclusions

Do not build these without a demonstrated need:

- custom cursor
- splash screen or loading percentage
- intro animation
- horizontal-scroll site
- scroll hijacking or parallax
- autoplay audio or background video
- floating social dock
- elaborate navigation
- infinite scroll or carousels
- testimonial or feature cards
- tag clouds
- glassmorphism or neumorphism
- giant rounded containers
- theme toggle
- autonomous logo animation
- fake film-grain interface layer

Restraint is the design, not missing functionality.

---

# 23. Release QA

## Content

- Titles, dates, locations and routes are factual.
- Description adds context rather than repeating the title.
- Poster crop works at mobile size.
- Alt text describes the scene.
- YouTube destination is correct.
- Social preview uses a strong image.
- No placeholder or draft content is public.

## Accessibility and interaction

- Keyboard reaches every interaction in visual order.
- Skip link and focus styles work.
- Headings are logical.
- Controls have names.
- Touch targets are comfortable.
- Text and muted text meet contrast requirements.
- Reduced motion removes unnecessary animation.
- Meaning does not depend on colour or hover.
- The page works with text zoom and landscape mobile.

## Responsive and technical

Check at least:

```text
320 · 375 · 430 · 768 · 1024 · 1440 · 1920
```

- No horizontal overflow.
- No accidental layout shift.
- No broken links, missing images or console errors.
- No unnecessary client hydration.
- No missing image dimensions or oversized assets.
- No duplicate titles, localhost URLs or stale metadata.
- Production build and whitespace checks pass.

## Brand

Ask:

1. Does the footage dominate?
2. Does the page feel editorial rather than templated?
3. Is Route Red punctuation rather than surface?
4. Is every movement purposeful?
5. Could the system hold the next film in Seoul, France or somewhere new?

If the answer weakens, simplify.

---

# 24. North Star

The website should feel like One Place Later before the visitor has read the words “One Place Later.”

The identity comes from:

```text
pace
space
imagery
restraint
movement
language
detail
```

Not decorative branding.

When deciding whether to add something, ask:

**Does this help someone understand, experience or move through the work?**

If yes, build it carefully.

If no, leave it out.
