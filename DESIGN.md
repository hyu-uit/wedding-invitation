---
name: Bridge and Bloom
description: An ivory wedding folio where portraiture, oxblood type, and family ceremony form one authored invitation.
colors:
  oxblood: "#8f0f1b"
  deep-oxblood: "#6e0812"
  blush-petal: "#e9b5c6"
  ivory-paper: "#f8f3f0"
  deep-ivory-paper: "#eee5e0"
  black-ink: "#171213"
  soft-ink: "#615456"
  porcelain-white: "#fffdfb"
  warm-stone-backdrop: "#d7cfca"
typography:
  display:
    fontFamily: "'Bodoni Moda', 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 9vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.06em"
  headline:
    fontFamily: "'Bodoni Moda', 'Times New Roman', serif"
    fontSize: "clamp(2rem, 6vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Alex Brush', cursive"
    fontSize: "clamp(2rem, 6vw, 3.55rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "'Noto Serif', Georgia, serif"
    fontSize: "clamp(0.83rem, 2.45vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "'Bodoni Moda', 'Times New Roman', serif"
    fontSize: "clamp(1.35rem, 4vw, 2rem)"
    fontWeight: 500
    letterSpacing: "normal"
rounded:
  folio-arch: "50% 50% 0 0 / 100% 100% 0 0"
  petal: "84% 22% 76% 31%"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-5: "1.5rem"
  space-6: "2rem"
  space-7: "3rem"
  space-8: "4rem"
  space-9: "6rem"
  space-10: "8rem"
components:
  invitation-folio:
    backgroundColor: "{colors.ivory-paper}"
    textColor: "{colors.black-ink}"
    width: "min(100%, 760px)"
  hero-arch:
    backgroundColor: "{colors.ivory-paper}"
    textColor: "{colors.oxblood}"
    rounded: "{rounded.folio-arch}"
    padding: "0 1rem clamp(1.25rem, 3vw, 2rem)"
    width: "min(82%, 620px)"
    height: "auto"
  invitation-details:
    backgroundColor: "{colors.ivory-paper}"
    textColor: "{colors.black-ink}"
    padding: "4rem clamp(1.25rem, 5vw, 3rem) 6rem"
  family-portrait:
    backgroundColor: "{colors.deep-ivory-paper}"
    width: "100%"
  bow-mark-hero:
    backgroundColor: "{colors.ivory-paper}"
    textColor: "{colors.oxblood}"
    size: "clamp(5.25rem, 14vw, 8.25rem)"
  bow-mark-family:
    backgroundColor: "{colors.ivory-paper}"
    textColor: "{colors.oxblood}"
    size: "clamp(2.3rem, 6vw, 3.6rem)"
---

# Design System: Bridge and Bloom

## Overview

**Creative North Star: "The Ivory Vow Folio"**

The Ivory Vow Folio treats the invitation as a vertical piece of wedding stationery brought to life by portrait photography. Ivory paper, black ink, oxblood ceremony lettering, formal hairline rules, and the authored ribbon mark create an intimate printed world; the interface refuses generic app chrome so the couple and the invitation remain the only protagonists.

The system is formal but tender, with generous vertical pacing, a dense two-family composition, and type that shifts deliberately between Bodoni ceremony, Alex Brush intimacy, and Noto Serif fact. It is mobile-first, static, and tactile: paper grain, still blush petals, restrained photographic shade, and one ambient folio shadow supply atmosphere without animation or transitions.

**Key Characteristics:**

- Portrait-led first viewport with upper-left save-the-date copy.
- Ivory paper and black ink punctuated by rare oxblood ceremony lettering.
- Formal Bodoni display type, intimate Alex Brush names, and readable Noto Serif details.
- A true ivory semicircle and authored ribbon mark as the signature silhouettes.
- Static paper grain and blush petals; no animation or transition language.

## Colors

The palette reads like warm wedding stationery: oxblood provides ceremony, blush provides a quiet floral note, and warm ivory neutrals carry nearly every surface and line of information.

### Primary

- **Wedding Oxblood** (`colors.oxblood`): Marks the wedding title, bride and groom labels, and ribbon strokes so ceremonial emphasis is immediate but scarce.
- **Deep Oxblood** (`colors.deep-oxblood`): The declared darker companion for oxblood where the system needs deeper tonal continuity; the shipped page does not assign it to a visible component.

### Secondary

- **Pressed Blush Petal** (`colors.blush-petal`): Names the floral accent family behind the details section's softly translucent static petals.

### Neutral

- **Ivory Paper** (`colors.ivory-paper`): The principal folio, hero arch, details surface, and ribbon fill.
- **Deep Ivory Paper** (`colors.deep-ivory-paper`): The quiet fallback behind family portraits while images load.
- **Black Ink** (`colors.black-ink`): All primary invitation copy, family information, dates, and hairline rules.
- **Soft Ink** (`colors.soft-ink`): The declared softened text neutral; it remains unassigned in the shipped composition.
- **Porcelain White** (`colors.porcelain-white`): Save-the-date copy over the couple portrait.
- **Warm Stone Backdrop** (`colors.warm-stone-backdrop`): The desktop canvas that frames the centered invitation folio.

### Named Rules

**The Ink-and-Wine Rule.** Black ink carries information; oxblood carries ceremony. Do not reverse those responsibilities or spread oxblood across ordinary body copy.

**The Paper Rule.** Ivory is the default surface. Pure white appears only as legible copy over photography, never as a generic card background.

## Typography

**Display Font:** Bodoni Moda (with Times New Roman and serif fallbacks)  
**Body Font:** Noto Serif (with Georgia and serif fallbacks)  
**Script Font:** Alex Brush (with a cursive fallback)

**Character:** Bodoni Moda gives dates and headings the authority of formal engraved stationery. Alex Brush softens the couple's names and save-the-date phrase, while Noto Serif keeps Vietnamese family details composed and readable.

### Hierarchy

- **Display** (400, `clamp(2.5rem, 9vw, 5.4rem)`, 0.95 line-height, `0.06em` tracking): The uppercase “Wedding” word inside the hero arch.
- **Headline** (500, `clamp(2rem, 6vw, 3.4rem)`, 1.1 line-height, `-0.03em` tracking): The uppercase invitation heading, balanced to a maximum width of 18 characters.
- **Title** (400, `clamp(2rem, 6vw, 3.55rem)`, 1 line-height): Script names beneath the hero title and family portraits; the hero pair tightens tracking to `-0.03em`.
- **Body** (400, `clamp(0.83rem, 2.45vw, 1.18rem)`, 1.55 line-height): Family names and addresses, centered and balanced; compact screens pin this copy to `0.875rem` and then `0.8125rem`.
- **Label** (500, `clamp(1.35rem, 4vw, 2rem)`): Uppercase day, time, and family labels. The primary date scales separately to `clamp(2.1rem, 6vw, 3.5rem)` with a 1 line-height and `-0.03em` tracking.
- **Section title** (400, `clamp(2.3rem, 7vw, 4.25rem)`, 0.94 line-height, `-0.04em` tracking): Large editorial titles such as `ADDRESS`, kept below the hero display scale.
- **Section label** (500, `clamp(1.1rem, 3.2vw, 1.75rem)`, 1.1 line-height, `-0.01em` tracking): Uppercase venue and context labels that support a section title without competing with it.
- **Section heading** (500, `clamp(1.9rem, 5.2vw, 3rem)`, 1.1 line-height, `-0.02em` tracking): Action-oriented section headings such as `Xác nhận tham dự`.
- **Emotional copy** (400, `clamp(1.4rem, 3.8vw, 2.05rem)`, 1.3 line-height, `0.01em` tracking): Short invitation phrases such as `Gửi lời chúc tới cô dâu chú rể`, quieter than section titles.

### Named Rules

**The Three Voices Rule.** Bodoni speaks ceremony, Alex Brush speaks affection, and Noto Serif speaks fact; never collapse all three roles into one family.

**The Uppercase Restraint Rule.** Reserve uppercase for formal English and Vietnamese labels. Names in script and family addresses retain natural casing.

## Layout

The page is a single centered folio constrained to `min(100%, 760px)` against the warm stone backdrop. The hero preserves a portrait ratio of `692 / 1148` with a minimum height of `650px`; the couple photograph fills that plane, save-the-date copy anchors to a fluid upper-left inset, and a true 2:1 semicircle meets the image-paper intersection at its flat diameter. The couple's names sit just below that intersection on the details paper. On viewports at least `900px` wide and `700px` tall, the hero becomes one small viewport high (`100svh`) with a `1260px` ceiling.

The details section is at least one viewport high and uses paper-grain material beneath a centered heading followed by a permanent two-column family grid. Its desktop padding is `4rem clamp(1.25rem, 5vw, 3rem) 6rem`; the family gap grows from `1rem` to `3.25rem`. At `560px` and below, outer padding contracts to `3rem 1rem 4rem`, the hero arch widens to `90%`, and spacing compresses without stacking the families. At `360px` and below, hero and family-copy heights are tuned again to preserve the composition.

The spacing system is a quarter-rem base scale from `0.25rem` through `8rem`. Use its named steps for recurring vertical rhythm; fluid `clamp()` values are reserved for viewport-sensitive insets, gaps, and display scale.

**The Paired-Families Rule.** Bride and groom information remains a balanced two-column pair at every shipped breakpoint; compression changes spacing and type size, not the narrative order.

## Elevation & Depth

The system is printed-first and nearly flat. On canvases wider than `560px`, the complete folio receives one ambient shadow (`0 28px 80px rgba(42, 27, 27, 0.2)`) to separate paper from the warm stone backdrop; that shadow disappears on mobile, where the folio becomes the viewport. Save-the-date copy uses a localized text shadow (`0 2px 16px rgba(0, 0, 0, 0.36)`) and a dark-to-clear photographic gradient protects legibility. Paper grain, photography, and tonal contrast create all remaining depth.

### Shadow Vocabulary

- **Folio Ambient** (`box-shadow: 0 28px 80px rgba(42, 27, 27, 0.2)`): Frames the complete invitation on wider canvases only.
- **Portrait Copy Veil** (`text-shadow: 0 2px 16px rgba(0, 0, 0, 0.36)`): Keeps the small save-the-date lockup legible over photography.

### Named Rules

**The One-Shadow Rule.** Only the complete folio lifts from the desktop canvas; sections, portraits, arches, and decorative marks remain shadowless.

## Shapes

The form language combines unrounded editorial rectangles with one ceremonial curve. Photography stays edge-to-edge and square-cornered. The hero title surface is a geometrically true semicircle: its width is exactly twice its height, its curved edge faces upward, and its flat diameter aligns with the image-paper boundary. One-pixel black rules underline the invitation heading and date. Petals use an asymmetric `rounded.petal` contour plus polygon clipping; their irregularity is floral, not a general corner treatment. The Bow Mark is an authored open-line ribbon with round caps, round joins, ivory fill, and oxblood stroke.

**The Singular Curve Rule.** The arch belongs to the hero title and the irregular radius belongs to petals; do not turn either into a generic card radius.

## Components

### Invitation Folio

The folio is the quiet stage for the entire invitation.

- **Frame:** Centered at a maximum width of `760px`, with hidden overflow and an ivory-paper background.
- **Desktop Depth:** Uses the Folio Ambient shadow; removes it at `560px` and below.
- **Composition:** Contains the Hero Section followed directly by the Invitation Section, with no navigation or application chrome between them.

### Hero Section

The opening is photographic, immediate, and ceremonial.

- **Image Plane:** The couple portrait covers the full `692 / 1148` frame with centered cropping and a deep green-black fallback (`#172116`).
- **Save the Date:** Alex Brush copy and a Bodoni date sit at fluid upper-left insets in porcelain white, protected by the portrait shade and text veil.
- **Hero Semicircle:** An ivory 2:1 semicircle spans up to `82%` of the folio and `620px`. Its diameter lands on the image-paper boundary; the ribbon and “Wedding” stay inside the curve while the couple's names sit below the boundary on paper.
- **Behavior:** Entirely static; there are no hover, focus, transition, or animation states.

### Invitation Section

The details surface reads as the formal inner page of the folio.

- **Surface:** Ivory paper with the shipped paper-grain SVG stretched once across the section.
- **Heading:** Centered uppercase Bodoni title, one-pixel rule, uppercase day and time, then a large underlined date.
- **Family Grid:** Two equal columns with balanced copy above portrait photography and a named title below.
- **Decoration:** Five non-interactive blush petals sit behind content, and the small Bow Mark closes the family pair at the bottom center.

### Family Portrait Pair

The portrait pair binds factual family information to the bride and groom without becoming separate cards.

- **Copy Block:** Centered, fixed-minimum-height content keeps both portraits aligned despite different family-copy lengths.
- **Portraits:** Full-width images use a `0.67` aspect ratio, centered cover cropping, square corners, and deep-ivory loading backgrounds.
- **Person Titles:** Oxblood uppercase roles sit above black-ink Alex Brush names; names remain on one line.

### Bow Mark

The ribbon is the system's authored signature, not an interchangeable icon.

- **Construction:** A `120 × 78` SVG view box with six open paths and a filled center knot.
- **Hero Variant:** Oxblood stroke at `3.5` with a fluid width from `5.25rem` to `8.25rem`; it overlaps the crown of the ivory arch.
- **Family Variant:** Oxblood stroke at `4` with a fluid width from `2.3rem` to `3.6rem`; it centers beneath the paired portraits.
- **Accessibility:** Decorative in both placements and hidden from assistive technology.

### Static Petal Field

Five translucent blush forms provide a sparse floral trace without becoming spectacle.

- **Placement:** Absolute, asymmetrical, and behind all invitation copy with pointer events disabled.
- **Shape:** Each petal is `20px × 11px`, combines the petal radius with polygon clipping, and varies only by fixed rotation and scale.
- **Behavior:** Static at every viewport; no drifting, falling, parallax, transition, or animation is part of the component.

## Do's and Don'ts

### Do:

- **Do** preserve the portrait-led first viewport, upper-left save-the-date lockup, and true bottom semicircle meeting the image-paper boundary as one opening composition.
- **Do** use Bodoni for ceremony, Alex Brush for affection, and Noto Serif for factual Vietnamese copy.
- **Do** keep oxblood rare and intentional against ivory paper and black ink.
- **Do** maintain the permanent two-column family pair while compressing spacing and type at narrow widths.
- **Do** keep paper grain, petals, ribbon marks, and all typography static.

### Don't:

- **Don't** introduce generic app bars, dashboards, floating controls, or card grids into the folio world.
- **Don't** animate or transition petals, ribbons, photographs, type, or sections.
- **Don't** replace the authored Bow Mark with a library icon or emoji.
- **Don't** round portrait corners or reuse the hero arch as a generic container shape.
- **Don't** add internal section shadows; the complete desktop folio owns the only structural shadow.
