# Ochakai — Image & Illustration Approach

How we generate imagery for the site (currently Midjourney v7 on the Standard monthly plan). Keep this in sync when we learn new things so we don't drift into a different aesthetic.

---

## Visual direction

Warm, quiet, editorial. Gouache / watercolor texture — **not** flat graphic poster, **not** digital vector, **not** photography. The feeling should read as a book-jacket illustration or an op-ed spot piece: soft light, simplified figures, generous negative space, contemplative mood.

Reference artists:

- **Tatsuro Kiuchi** — warm daylight scenes, simplified figures, textured gouache brushwork.
- **Ryo Takemasa** — quiet editorial compositions, soft color fields, clear focal moments.

Avoid drifting toward: Malika Favre (too flat/saturated), mid-century travel poster, anime/manga, 3D render, hyperreal photography, Mediterranean villa aesthetic, teal nocturne (we drifted there early — don't go back).

---

## Palette anchors

Match the site tokens in `src/styles/global.css`. Reference these by hex in prompts so MJ nudges the output toward the site's palette:

- Cream background — `#F5F1E8`
- Ink foreground — `#1E2A33`
- Slate-teal accent — `#3E5C6E`
- Matcha sage — `#8FA668`
- Warm sand highlight — `#C4B896`

Say "cream and matcha palette, slate-teal accents" in prompts. Avoid asking for "vibrant" or "saturated".

---

## Midjourney parameter pattern

Default tail for all Ochakai prompts:

```
--ar 16:9 --style raw --stylize 350 --chaos 8
```

- `--ar 16:9` — wide editorial crop. Use `3:2` for article headers if we want more vertical room; `2:3` for portrait sections (rare).
- `--style raw` — keeps MJ from over-stylizing; we want restraint.
- `--stylize 350` — middle range. Higher (500+) gets too painterly/busy; lower (100–200) gets too literal.
- `--chaos 8` — mild variation across the four grid results.
- Add `--sw 100 --iw 1.5` when using style references so the sref dominates but doesn't overwhelm.

### Style references (sref)

Reuse the same `--sref` across all site images so they read as a set. Currently: whatever Tatsuro Kiuchi warm-daylight refs produced the engawa `hero.png`. When generating a new image, grab that sref from the original hero job.

**Refs that worked:** Kiuchi warm daylight illustrations, Takemasa editorial pieces.
**Refs that didn't:** early park-scene ref + ginkgo ref (pulled Mediterranean), original teal nocturne (wrong mood).

---

## Composition rules we've learned

- **Match the story beat.** Don't just illustrate a noun ("neighbour at door") — illustrate the *moment* ("the door opening to warmth"). Pick the article's emotional crux.
- **Show the relationship, not just the subject.** If the piece is about two people meeting, frame both — not one lone figure staring at a door. One-figure compositions read as isolation, which is the opposite of the Ochakai message.
- **No detailed faces.** Simplified figures in three-quarter or from behind. Keeps figures universal and on-brand with the editorial feel. "Simplified figure, no visible face" belongs in every prompt with people.
- **Strangers, not family.** Postures should suggest polite first-meeting distance, not intimate closeness. We burned a batch by getting "family dinner" vibes instead of neighbours.
- **Matcha/tea motifs are welcome but not mandatory.** Don't force a chasen (tea whisk) into every frame — it didn't land well when we tried. A teacup on a low table is enough.
- **Leave negative space.** Cream walls, empty floor, window light. The quiet is the message.

---

## Where images live

- `public/images/hero.png` — homepage full-viewport hero (engawa tea scene).
- `public/images/journal/<slug>.png` — article header images.
- `public/brand/` — logos and icons (not MJ; these are the real brand lockups).
- `public/og-image.jpg` — social share card.

Keep filenames lowercase-hyphenated. Export from MJ at the highest upscale ("Subtle" upscale usually preserves texture better than "Creative").

---

## Prompt history (what we actually ran)

Log winning prompts here so we can reuse and evolve them. Include the MJ job URL or the sref code if known.

### `public/images/hero.png` — engawa tea scene

Final composition: neighbours gathered on a sunlit engawa, matcha in front of them, warm afternoon light. (Paste the exact winning prompt here next time we re-run — currently stored in the MJ account history.)

### `public/images/journal/both-sides-were-waiting.png` — pending

Working prompt (balanced two-figure version):

```
Warm editorial gouache illustration, two neighbours meeting at an open apartment door in a quiet Dutch hallway — one woman standing in the corridor holding a small teacup, the other standing in the doorway welcoming her in with a calm smile, both figures in soft three-quarter view with simplified faces, balanced composition with both figures roughly equal weight across the frame, warm afternoon light spilling from the apartment interior across cream walls and pale sage trim, a small potted plant on the tiled floor beside the doorway, a glimpse of a low wooden table and a teapot just visible inside the apartment, cream #F5F1E8 and matcha sage palette with slate-teal accents, loose textured gouache brushwork, soft grain, warm earthy shadows, in the quiet editorial illustration style of Tatsuro Kiuchi and Ryo Takemasa, contemplative mood, no saturated flat color blocks, no graphic poster style --ar 16:9 --style raw --stylize 350 --chaos 8
```

Update this section with the final winning prompt + MJ job URL once we land the image.
