# Ochakai — Site Plan

**Last updated:** 2026-04-23
**Status:** Planning — not yet scaffolded
**Tech:** Astro (Scalar template v1.2.0, same base as trift-site)
**Location (once built):** `/Users/nawaznow/Desktop/working-folder/ochakai-site/`

---

## What Ochakai is

A small service that helps housing organisations run gatherings and communication tools so neighbours in apartment buildings actually connect. Tagline: *Activating Urban Connections*. The name is Japanese for "tea gathering" — the matcha bowl + bamboo whisk in the logo is literal, not decorative.

Customer is B2B (housing orgs, property managers, cooperatives). End-user is the resident. Site has to read credible enough for the buyer and warm enough for the brand to feel like itself.

---

## Site map (deliberately small)

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Mission, hero illustration, service teaser, CTA |
| Services | `/services` | The 3 offerings (renamed from "What we do") |
| About | `/about` | Who Ochakai is, philosophy, optional team |
| Contact | `/contact` | Form + email |

No blog, no pricing, no auth, no data-driven content (no JSON catalogs). Copy lives inline in `.astro` pages.

Nav order: Home · Services · About · Contact.

---

## Visual direction

**Reference tier (from research):** Ippodo Tea, Kettl, KINTO Japan, D&DEPARTMENT, Stumptown, Cohere. Modern Japanese editorial — cream ground, restrained palette, editorial typography, generous whitespace. Not Ghibli watercolor, not sumi-e rustic, not SaaS.

### Hero is the centerpiece

**Hero = one large custom illustration.** This is the defining visual decision for the site. The illustration carries the brand — everything else gets quieter to let it breathe. No carousels, no animated gradients, no stock photography in the hero.

Illustration style target: **modern Japanese editorial illustration** — flat fills with subtle texture, confident lines, warm palette-constrained. Reference illustrators whose work lands this register:

- **Tatsuro Kiuchi** — the prime reference. Warm, flat-color, slightly grainy urban scenes. Often depicts food, tea, quiet human moments. If we could commission one artist in this exact register, it'd be him.
- **Ryo Takemasa** — clean Japanese editorial, slightly more graphic.
- **Yuko Shimizu** — bolder, more decorative; useful as a secondary reference for detail treatment.

**Scene concept (to refine):** an elevated / diorama view of an apartment building courtyard with neighbours gathering — tea being poured, a whisk in a bowl, two residents greeting on a landing, soft warm light. Urban, not rural. Multiple small narrative moments in one frame — the eye travels and discovers.

**Sourcing: AI-generated illustration.** No budget for a human illustrator. Site launches with an AI hero and stays with it until/unless budget appears — at which point the AI image doubles as the brief for a human commission.

**Implications for the AI image (because it's now the real deliverable, not a placeholder):**
- Pick the tool carefully. Midjourney v6/v7 and Flux are the two realistic candidates for the Kiuchi-adjacent register. Avoid DALL·E — weaker at flat-color editorial illustration.
- Generate many variants; curate ruthlessly. The hero carries the brand, so we pick the one that reads *intentional*, not the one that looks "pretty good."
- Avoid the tells: no hands if we can help it (crop/angle them out), no visible text or signage (we'll overlay type), no weird architectural impossibilities in the courtyard.
- Final image at 2x (roughly 2880×1800) so it holds up on retina hero displays. Export also a mobile crop (portrait-safe region).
- Consider a light hand-touch pass (Photoshop) to fix obvious AI tells before it ships.

### Palette (locked from logo)

```
--ink:         #1E2A33   /* body text, deep accents */
--slate-teal:  #3E5C6E   /* primary — logo bowl + wordmark */
--matcha:      #8FA668   /* accent, used sparingly */
--bamboo:      #C4B896   /* warm neutral, dividers, tags */
--cream:       #F5F1E8   /* page background — washi paper */
--paper:       #FBF8F1   /* elevated surfaces, card backgrounds */
--muted:       #6B7680   /* secondary text */
--border:      #E3DDCF   /* hairline borders on cream */
```

One saturated accent at a time. Matcha green is for quiet highlights (a single underline, a small icon, a hover state) — never large blocks of it. CTAs use slate-teal.

### Type

| Role | Font | Size/weight |
|------|------|-------------|
| Display / H1 | Fraunces (or Shippori Mincho for slight Japanese nod) | 56–72px, 500 weight |
| Headings H2 | Fraunces | 32–40px, 500 |
| H3 | Fraunces | 22–26px, 500 |
| Body | Inter | 17–18px, 400, line-height 1.6 |
| Small / caption | Inter | 13–14px, 500, letter-spacing .02em |
| Label / tag | Inter | 11px, 600, uppercase, letter-spacing .08em |

Body is 18px (not 16px) — editorial, not SaaS. Noted as a trift lesson carried forward.

### Language treatment (EN primary + JP as editorial texture)

English is primary and carries all functional content. Japanese appears alongside as editorial texture — not a parallel translated site. Same pattern as KINTO and D&DEPARTMENT.

Where Japanese appears:

- **Wordmark & title bar**: `Ochakai / お茶会`
- **Section labels**: small Japanese subtitle under English section titles (e.g., `Services` with `サービス` below in smaller type, or more meaningfully, Japanese terms that carry philosophical weight)
- **Service names**: each service gets a small Japanese subtitle — e.g., *The tea gathering / お茶会*, *Between gatherings / 日常のつながり*, *Over a season / 季節を通して* (translations to confirm with Aya)
- **About page**: the word **安全な場** (*anzen na ba* — "safe space / a place of safety") appears inline in the origin story — it's the Japanese concept behind the whole service, and seeing it in Japanese earns it
- **Footer**: Japanese tagline alongside English
- **Workshop script preview** (if we show one on `/services`): render one or two lines bilingually

**Not translated:** body copy, form labels, legal pages, error states. We're not maintaining two content trees.

**Font implications:** the body sans (Inter) does not render Japanese — pair it with **Noto Sans JP** or **IBM Plex Sans JP** for any Japanese text. The display serif (Shippori Mincho) already supports both scripts, so headings with Japanese co-set nicely. Noted for Phase 2 (tokens & type).

**Aya should review all Japanese text** before launch — native speaker, native judgment on what reads naturally vs. what reads like a tourist slogan.

### Voice & copy

The **workshop script is the tonal reference** for all site copy. Cadence to echo:

- Short sentences. Present tense. Plain words.
- Unhurried — the copy breathes the way the ceremony breathes.
- Second person, inclusive ("we," "let us") when talking about the practice; third person when talking about the service (for B2B credibility).
- No corporate verbs ("leverage," "empower," "transform"). No urgency. No adjective stacks.
- The word **"safe space"** is load-bearing — it came from the ceremony itself and earns its place. Use sparingly.

Example (H1 candidate in this register): *A cup of tea. A safer space to meet your neighbours.*

### Motifs

- **One saturated accent at a time.** Rule of restraint.
- **Hairline dividers** in `--border` rather than heavy rules.
- **Brush-stroke accent** (single, optional) — a thin green matcha-ink underline beneath H2s, used sparingly. Only if it doesn't fight the hero illustration.
- **No torii gates, no sakura petals, no fans, no chopsticks.** If it feels like a tourism poster, cut it.

---

## Page-by-page

### Home `/`

Sections, top to bottom:

1. **Hero** — dark slate-teal band with the large illustration overlaid. One H1 line + one supporting line + primary CTA. Transitions into cream body below.
   - H1 (candidate): *Neighbours meeting over tea. Buildings that feel like home.*
   - Sub: *Ochakai helps housing organisations build community in their buildings through small gatherings, communication tools, and long-term engagement support.*
   - CTA: *Get in touch* → `/contact`
2. **Mission block** — cream section, one column, the "Creating simple ways for neighbours to share spaces…" copy, edited down to 2–3 short paragraphs. Quiet, no image.
3. **Services teaser** — 3 cards side-by-side, titles + one-line descriptions. Links to `/services`.
4. **Impact strip** — a horizontal band pulling the "Impact observed in past pilots" snippets as short quotes. No metrics, just observed behaviour (neighbours greeting each other, lending items, sharing knowledge).
5. **CTA footer band** — *Want to build community in your buildings?* → Contact.

### Services `/services`

Replaces "What we do" entirely. Title: **Services** (plural).

Image removed per 11/09 decision. In its place: a thin editorial intro paragraph, then the three services as long-form blocks (not cards, since they need room to breathe).

Intro (direct from your copy, lightly tightened):
> Ochakai partners with organisations to design and host small-scale interventions that foster neighbourly connection. Whether you need a single event, a pilot project, or a long-term engagement strategy, our formats are easy to implement, culturally rooted, and adaptable to different residential settings.

**Scene-framed service names (options to pick from):**

| Option A — Current | Option B — Scene-framed | Option C — Outcome-framed | Option D — Practice-anchored |
|---|---|---|---|
| Gatherings & activities | In the courtyard | Meeting neighbours | The tea gathering |
| Communication tools | Between gatherings | Staying in touch | Between gatherings |
| Long-term engagement support | Over a season | Building the habit | Over a season |

**Option D is now my recommendation** — updated after reading the workshop script. "The tea gathering" (singular, specific) names the actual thing you do rather than abstracting it. The other two stay scene-framed. Reads honest and specific, and the homepage H1 can echo it.

Each service block has:
- Scene title (from chosen option)
- Short paragraph (your current copy)
- Examples list (your current bullets)
- Impact observed in past pilots — as a quiet pull-quote or italicised paragraph, not a metric card

**"What's included" block — under The tea gathering only.**

Frames the service as turnkey (what Ochakai brings) rather than as a host kit (what the client has to prepare). B2B selling point: housing orgs don't want a new thing to manage; they want a moment that lands with minimal effort on their side.

Copy:
> **What's included**
> We bring everything — matcha, bowls, bamboo whisks, cloths, the quiet ceremony itself. All you need is a room and neighbours willing to show up.

The raw event-needs checklist stays internal (Aya's prep document), not on the public site.

### About `/about`

Founder-led — Aya Toriyama is the brand and the practitioner. The page is built around her, with philosophy woven through.

**Structure:**

1. **The origin (short)** — the samurai / "leave your weapons outside" story from the workshop script, told as two paragraphs. This is why tea specifically. Sets up the idea that Ochakai is about safety and care, not about Japanese aesthetics.
2. **Meet Aya** — one portrait photo + short bio:
   - Japanese founder based in The Hague
   - MSc Urban Management & Development (Erasmus / IHS). Thesis on *sense of belonging and the physiological benefits of public transportation* — Ochakai is the applied continuation of that research.
   - Background in cross-cultural community work (45-person team at Gamers8 JapaMura in Riyadh; years of youth education and volunteer coordination in Kyoto and abroad)
   - Started Ochakai in The Hague in July 2025 after piloting the model in her own housing
3. **How we work** — 3–4 short points drawn from her Ochakai description:
   - Grounded in user research with residents
   - Small, repeatable, low-tech interventions
   - Prototype → pilot → framework that housing orgs can replicate
   - Always built on what residents actually say they need
4. **Optional closing line**: an invitation to collaborate with practitioners / housing orgs / researchers working on urban belonging.

**What not to include:** full CV, every volunteer role, every academic credential. The bio reads as a paragraph, not a LinkedIn export. Essential threads only: Japanese + Dutch context, urban-belonging research background, community practitioner track record, Ochakai as the applied work.

### Contact `/contact`

- One-sentence opener: *Get in touch — we'd love to hear what you're working on.*
- Contact form: name, organisation, email, message. Submits to email (Formspree or Netlify Forms — decide at build time).
- Direct email address visible.
- No phone, no address (unless you want them).

---

## 11/09 decisions (confirmed)

| Decision | Status |
|---|---|
| Rename "What we do" → "Services" | ✅ adopted |
| Remove image on Services page | ✅ adopted |
| Homepage hero goes dark (ashy black / dark blue) | ✅ adopted — using `--slate-teal #3E5C6E` which matches the logo |
| "What's included" block on /services (tea gathering only) — turnkey framing, not host-kit | ✅ adopted |

---

## Components: reuse vs. build

**Reuse from Scalar template:**
- `BaseHead.astro` (update meta, fonts)
- `layouts/` primitives (adapt)
- `sections/Hero` shell (rebuild contents, keep structure)
- `sections/FAQ` pattern (not used initially but useful later)

**Strip from Scalar (not needed):**
- Pricing, mockup-preview, roadmap sections
- Auth pages (login, signup, forgot-password)
- Blog / MDX article system
- Product feature grids

**Build fresh:**
- `HeroIllustration.astro` — hosts the custom illustration with responsive sizing
- `ServiceBlock.astro` — the long-form service block used on `/services` and teased on `/`
- `ImpactQuote.astro` — quiet italicised quote format for pilot observations
- `BrushDivider.astro` — optional matcha underline motif
- `ContactForm.astro` — form with Formspree/Netlify Forms handler

---

## Build phases

| Phase | Scope |
|---|---|
| 0 — This doc | PLAN.md written, decisions captured |
| 1 — Scaffold | Copy Scalar template → `ochakai-site/`, strip SaaS scaffolding, install, verify dev server |
| 2 — Tokens & type | Palette in `global.css`, load Fraunces + Inter, base typography scale |
| 3 — Hero concept | Generate/source concept illustration for hero (AI draft acceptable for v1) |
| 4 — Home + Services | Build both pages with real copy, wire navigation |
| 5 — About + Contact | Build remaining two pages, wire contact form |
| 6 — Polish | Responsive pass, mobile check, favicon, meta, social share card |
| 7 — Deploy | Netlify, domain TBD |

---

## Open questions for user

1. ~~Illustrator sourcing~~ — **RESOLVED**: AI-generated hero (no budget for human illustrator). Tool TBD — Midjourney or Flux.
2. **Service naming** — Option B (scene-framed: *In the courtyard / Between gatherings / Over a season*), Option A (keep current), or Option C (outcome-framed)?
3. ~~About page content~~ — **RESOLVED**: founder-led, built around Aya, philosophy woven through (samurai origin + research background + how we work).
4. **Contact form backend** — Netlify Forms (free, comes with Netlify hosting) or Formspree?
5. **Domain** — `ochakai.com`? `.co`? Something else?
6. ~~Languages~~ — **RESOLVED**: English primary, Japanese as editorial texture (wordmark, section subtitles, key philosophical terms, footer). Aya to review all Japanese text before launch.
