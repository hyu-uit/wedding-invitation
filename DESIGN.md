---
name: Song Phụng Burgundy
description: A burgundy-and-cream Vietnamese wedding invitation built as a restrained ceremonial keepsake.
colors:
  burgundy: "#4a1212"
  burgundy-deep: "#290808"
  oxblood: "#710001"
  cream: "#fff0e7"
  cream-deep: "#f4ded0"
  guest-badge: "#efd2c4"
  guest-ink: "#760607"
  ceremonial-gold: "#c79a55"
  ceremonial-gold-light: "#e7c988"
  cream-ink: "#fff7ed"
  red-ink: "#421212"
typography:
  display:
    fontFamily: "'Bodoni Moda', 'Times New Roman', serif"
    fontSize: "clamp(2.7rem, 12vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  ceremony:
    fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif"
    fontSize: "2.45rem"
    fontWeight: 500
    lineHeight: 1
  body:
    fontFamily: "'Noto Serif', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.7
  script:
    fontFamily: "'Alex Brush', cursive"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
  handwritten:
    fontFamily: "'Dancing Script', 'Alex Brush', cursive"
    fontSize: "clamp(2.15rem, 10vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1
rounded:
  card: "16px"
  guest-badge: "22px"
  control: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "42px"
  xl: "78px"
components:
  invitation-cover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.oxblood}"
    rounded: "{rounded.card}"
    width: "min(88vw, 780px)"
  primary-button:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "11px 22px"
  guest-badge:
    backgroundColor: "{colors.cream-deep}"
    textColor: "{colors.oxblood}"
    rounded: "{rounded.guest-badge}"
    padding: "10px 22px 11px"
---

# Design System: Song Phụng Burgundy

## Overview

**Creative North Star: "The Burgundy Wedding Keepsake"**

The invitation combines a deep-red Vietnamese ceremonial field with warm cream paper, a tonal dragon-phoenix print, rising red-and-gold Hỷ symbols, restrained floral linework, and portrait photography. It should feel formal, intimate, and composed rather than ornate. The first screen keeps both decorative layers subordinate so the names, enlarged date, guest badge, and opening action remain the priorities.

**Key Characteristics:**

- A rounded cream invitation card centered on a clean burgundy field, with one pale dragon-phoenix print inside the card.
- A sparse field of red and gold Hỷ symbols rising behind the cover card at varied speeds.
- Alternating cream and burgundy sections after the card opens.
- Round red seals and thin gold keylines as restrained ceremonial signatures.
- Paper-led save-the-date storytelling in a responsive folio up to 760px wide.
- A paired bride-and-groom portrait spread follows the formal invitation details.
- The groom-family venue section leads with a full-length couple portrait before the address and map.
- A restrained September 2026 calendar marks the wedding date with a burgundy heart.
- A single rose-gold floral sprig softens the lower-right edge of the save-the-date hero without competing with the copy.
- Local background audio begins only from the guest's opening gesture.

## Colors

Burgundy owns the page-scale fields; cream behaves as physical invitation paper. Oxblood carries formal typography, while muted gold is reserved for seals, rules, and date accents.

**The Two-Layer Rule.** The supplied dragon-phoenix image is the only motif inside the card; rising Hỷ symbols belong only to the outer burgundy field. Both remain subordinate to the text.

**The Red-and-Paper Rule.** Large surfaces alternate between burgundy and cream; do not fragment the invitation into unrelated colored cards.

## Typography

**Display Font:** Bodoni Moda

**Ceremony Font:** Cormorant Garamond

**Body Font:** Noto Serif

**Script Font:** Alex Brush

**Handwritten Font:** Dancing Script

Bodoni gives titles and dates an engraved character, Cormorant carries ceremony headings, and Noto Serif keeps supporting details readable. Dancing Script gives the invitation names a fuller handwritten stroke matching the supplied reference, while Alex Brush remains reserved for lighter affectionate phrases.

**The Date Is Information Rule.** The opening date and time must remain visually prominent, never reduced to caption scale.

## Layout

The opened invitation is a single centered folio at `760px` maximum width. Mobile becomes edge-to-edge; wider screens expose a deep burgundy canvas around it. The first paper section is a tall editorial save-the-date composition with an asymmetric top label, compact offset script names, a broad oxblood panel crossed at its top edge by a central Hỷ glyph, and a quote below. Content then moves through families, paired portraits, address, gallery, RSVP, and closing sections.

## Elevation & Depth

Depth is concentrated at the threshold. The opening card uses one soft downward shadow against the burgundy field; the complete folio receives one ambient desktop shadow. Internal sections depend on color fields, photography, and overlap rather than stacked cards.

## Shapes

The opening card and guest badge use restrained `16px` corners. Primary controls are pill-shaped because they are compact actions. Photographs remain rectangular and editorial. Circular seals are the recurring ceremonial shape.

## Components

### Invitation Cover

- Clean cream surface with two inset keylines and `16px` outer corners.
- A circular Song Hỷ seal anchors the top.
- Names, enlarged time/date, “Kính mời”, “Bạn & người thương”, and the opening button form one centered reading order.
- The guest badge uses a deep-red bold serif on a stronger blush fill so it remains legible over the pale motif.
- The supplied dragon-phoenix image fills the card as a low-opacity background print without reducing text contrast.
- Eight red and gold Hỷ symbols rise behind the card with varied scale, drift, and duration; they pause when the page is hidden and disappear under reduced-motion preferences.

### Save-the-Date Hero

- Warm cream paper with tracked uppercase date copy at the top-left.
- Compact offset script couple names lead the section, followed by a broad oxblood panel crossed at its top edge by a central cream Hỷ glyph and a high-contrast Vietnamese quote.
- The supplied floral drawing sits at the lower-right as a translucent, multiply-blended paper motif behind the text.
- No phoenix or dragon imagery appears in this post-cover section.

### Primary Button

- Oxblood pill with cream uppercase copy and a drawn arrow.
- Hover rises by `2px`; keyboard focus uses a visible ceremonial-gold ring.
- Disabled state retains the label and signals the short opening transition.

### Music Control

- A fixed circular burgundy sound control appears only after opening.
- It toggles mute without restarting the local MP3 and never invokes video playback.

### RSVP Dialog

- Cream paper surface over a dark burgundy veil.
- Oxblood selected states, strong focus rings, explicit loading/error/success copy.

## Do's and Don'ts

### Do:

- **Do** keep the outer field clean and the dragon-phoenix image pale enough that the content hierarchy remains obvious within seconds.
- **Do** preserve the exact wedding facts, supplied photography, map, countdown, RSVP, and local audio.
- **Do** test the cover and audio flow on narrow mobile viewports.
- **Do** keep the save-the-date floral drawing subtle and confined to the lower-right edge.

### Don't:

- **Don't** add floral linework or geometric background frames to the cover around the supplied dragon-phoenix motif and rising Hỷ field.
- **Don't** add a video element or external media player for the background song.
- **Don't** merge this visual world back into the legacy invitation without an explicit request.
