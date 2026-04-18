# Design System Document: The Curated Chronicle

## 1. Overview & Creative North Star
This design system serves as the foundational framework for a digital experience that bridges the gap between a historical archive and a premium travel editorial. Our mission is to present the province of Nghệ An not as a static museum, but as a "Living Heritage."

**The Creative North Star: "The Curated Chronicle"**
Unlike standard educational portals that feel like rigid databases, this system is inspired by high-end coffee table books and curated exhibition spaces. We break the "template" look by using intentional asymmetry, generous white space, and a typographic scale that prioritizes storytelling. The UI should feel like a series of physical layers—fine paper, translucent glass, and rich textiles—stacked to create a tactile, immersive depth.

---

## 2. Colors & Tonal Architecture
The palette is rooted in the soul of Nghệ An: the deep reds of revolutionary history, the golden hues of the lotus, and the azure of the Cửa Lò coast.

### The Palette (Material Design Tokens)
- **Primary (Deep Heritage Red):** `#7c000e` (Base) | `#a01a1f` (Container)
- **Secondary (Golden Lotus Yellow):** `#735c00` (Base) | `#fed65b` (Container)
- **Tertiary (Coastal Azure Blue):** `#003c6c` (Base) | `#005393` (Container)
- **Surface Neutrals:** From `surface-container-lowest` (`#ffffff`) to `surface-dim` (`#eed4d2`).

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through color-blocking or tonal shifts. Use `surface-container-low` for secondary sections and `surface-container-high` for interactive sidebars. 

### Glass & Gradient Rule
To prevent the heritage colors from feeling "heavy" or dated, use **Glassmorphism** for floating UI elements (Navigation bars, info-overlays). Apply `surface-tint` at 60% opacity with a `20px` backdrop-blur. 
- **Signature Gradient:** For primary CTAs, use a subtle linear gradient (135°) from `primary` to `primary-container`. This adds "soul" and a three-dimensional quality that flat hex codes lack.

---

## 3. Typography: The Editorial Voice
Typography is the primary vehicle for the "Living Textbook" feel. We pair the geometric modernity of **Manrope** with the clinical legibility of **Inter**.

- **Display (Manrope):** Set in `display-lg` (3.5rem). Used for hero statements and chapter titles. Increase letter-spacing to `-0.02em` for a tighter, premium feel.
- **Headlines (Manrope):** `headline-lg` to `headline-sm`. These act as the "Captions" in our digital museum.
- **Body (Inter):** `body-lg` (1rem) for narrative passages; `body-md` (0.875rem) for metadata. 
- **The Visual Hook:** Headlines should often be placed asymmetrically, sometimes overlapping the edge of an image or a background container to break the grid and create an editorial flow.

---

## 4. Elevation & Depth: Tonal Layering
We move away from the traditional shadow-heavy "Material" look in favor of **Tonal Layering**.

- **The Layering Principle:** Treat the screen as a physical desk.
    - **Level 0 (Desk):** `surface` background.
    - **Level 1 (Paper):** `surface-container-low` for large content areas.
    - **Level 2 (Card):** `surface-container-lowest` for interactive cards, creating a "lift" through contrast rather than shadows.
- **Ambient Shadows:** Only use shadows for "floating" elements (Modals, Dropdowns). Use a large blur (`32px`) and low opacity (`6%`). Tint the shadow with `on-surface` (`#261817`) to keep it warm and integrated.
- **The "Ghost Border" Fallback:** If a distinction is absolutely required for accessibility, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components: The Museum Toolkit

### The "Museum Card"
The core component of this system. Cards should have no borders.
- **Background:** `surface-container-highest` or a very low-opacity `tertiary-container`.
- **Corner Radius:** `xl` (0.75rem) for a modern, approachable feel.
- **Pattern Overlay:** Incorporate a subtle Dong Son drum pattern at 3% opacity as a background texture for featured cards.

### Buttons
- **Primary:** `primary` background with `on-primary` text. Use a `md` (0.375rem) radius.
- **Secondary:** `surface-container-low` background with a `primary` label. No border.
- **Tertiary:** Text-only with a `primary` underline that expands on hover.

### Form Inputs & Text Fields
- **Styling:** Use "Inscribed" inputs—background set to `surface-container-highest` with a `Ghost Border` at the bottom only. 
- **Focus State:** Transition the bottom border to `secondary` (Golden Lotus) to signify the "light" of knowledge.

### Editorial Lists
- **Rule:** Forbid divider lines.
- **Execution:** Use `body-sm` labels and vertical spacing (`1.5rem`) to separate list items. Use a small `secondary` lotus-petal icon as a bullet point for high-intent lists.

### Interactive Artifacts (Additional Component)
A custom component for the "Living Heritage" theme. A container that features an artifact image on the left, overlapping the edge of the card, with metadata in `label-sm` Inter typography on the right.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use asymmetrical layouts. Let images bleed off the edge of the screen to suggest a larger world.
- **Do** use large amounts of "Active White Space"—negative space that guides the eye toward the "Curated Chronicle" content.
- **Do** use `secondary_container` (Gold) sparingly as an accent for "Discovery" moments or gold-medal achievements in educational quizzes.

### Don’t:
- **Don't** use standard 1px grey dividers (#EEEEEE). Use a color-shifted background section instead.
- **Don't** use pure black for text. Always use `on-surface` (`#261817`) to maintain a sophisticated, warm-grey tone.
- **Don't** crowd the interface. If the content feels like a "template," add more padding and vary the font sizes to restore the editorial hierarchy.

---

## 7. Sign-off Note
This design system is a living document. It is not a cage of rules, but a set of brushes. Every screen you design should feel like a page worth saving—a piece of Nghệ An's heritage brought to life through modern, sophisticated craft.