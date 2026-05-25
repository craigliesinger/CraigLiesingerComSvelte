---
trigger: always_on
---

---
name: Executive Tech Minimalist
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#444653'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#003c36'
  on-tertiary: '#ffffff'
  tertiary-container: '#00554e'
  on-tertiary-container: '#5fcdbf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
  surface-base: '#FFFFFF'
  surface-subtle: '#F3F4F6'
  deep-navy: '#111827'
  electric-cyan: '#06B6D4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The brand persona is that of a "Strategic Architect"—blending the rigorous precision of Project Management with the forward-thinking innovation of Software Development. It evokes a sense of calm authority, intellectual curiosity, and modern reliability.

The design system employs a **Corporate / Modern** aesthetic with a strong lean toward **Minimalism**. It prioritizes clarity and function, using generous whitespace to allow technical achievements to breathe. The visual language is defined by structured grids, subtle tonal layering, and high-precision typography, ensuring the brand feels premium and established while remaining agile and tech-oriented.

## Colors

The palette is anchored by "Deep Professional Blues" to establish trust and stability. 

- **Primary (Deep Navy/Blue):** Used for headlines and core brand elements to project authority.
- **Secondary (Vibrant Blue):** Primarily used for interactive elements and primary actions, providing a tech-forward energy.
- **Tertiary (Sophisticated Teal):** Used sparingly as an accent for success states or highlights in technical data.
- **Neutral (Cool Grays):** Utilized for secondary text and structural borders to maintain a clean, organized look without the harshness of pure black.

The design utilizes a light-mode default to maximize readability and "airiness," with the deep navy acting as the high-contrast anchor.

## Typography

This system uses a tiered typographic approach to balance personality with utility.

1.  **Headlines (Montserrat):** A geometric sans-serif that provides a bold, confident architectural structure. Large displays should use tighter letter spacing for a premium editorial feel.
2.  **Body (Inter):** Chosen for its exceptional legibility on digital screens, maintaining a neutral but modern tone.
3.  **Technical Labels (JetBrains Mono):** Introduced for small labels, metadata, and technical skills to subtly nod to software development and precision.

On mobile devices, headline sizes scale down significantly to ensure three-line headings do not push primary content below the fold.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a hard max-width for desktop to preserve line-length readability.

- **Desktop (1024px+):** 12-column grid with 24px gutters. Content is centered with wide 40px+ margins to create a "canvas" feel.
- **Tablet (768px - 1023px):** 8-column grid with 20px gutters.
- **Mobile (<767px):** 4-column grid with 16px margins. Elements generally stack vertically.

Vertical rhythm is strictly maintained using multiples of 8px. Section gaps are generous (80px+) to clearly delineate different chapters of the personal brand (Bio, Experience, Projects).

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows, keeping the UI light and fast.

1.  **Level 0 (Background):** Pure white (#FFFFFF) or very light gray (#F3F4F6) for the main page surface.
2.  **Level 1 (Cards):** White surfaces with a 1px border (#E5E7EB).
3.  **Level 2 (Hover/Active):** A very soft, diffused ambient shadow (0px 4px 20px rgba(30, 64, 175, 0.05)) is applied only when a user interacts with a card, creating a subtle "lift" effect.

Depth is also suggested through the use of translucent header backgrounds (90% opacity with backdrop-blur) to maintain context while scrolling.

## Shapes

The shape language is **Rounded**, striking a balance between the friendliness of consumer tech and the professionalism of enterprise software.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Container Elements:** Project and Experience cards use a 1rem (16px) radius to feel more substantial and modern.
- **Accents:** The profile photo and specific icon containers may use a "pill" or "circular" shape to provide a visual break from the otherwise rectangular grid.

## Components

### Buttons
- **Primary:** Solid `secondary_color_hex` with white text. High-contrast, bold weight.
- **Secondary:** Outlined with `primary_color_hex`, 1px border, for less critical actions.
- **Ghost:** No border or background, `neutral_color_hex` text, turning `primary_color_hex` on hover.

### Cards (Projects/Experience)
Cards are the core of the portfolio. They feature a white background, 1px subtle border, and 24px internal padding. Titles use `headline-md`. Technical tags/chips are placed at the bottom using `label-sm`.

### Chips / Tags
Small, pill-shaped badges for skills (e.g., "SvelteKit", "Product Management"). Backgrounds are a 10% opacity tint of the `primary_color_hex` with the text using the full-strength color.

### Input Fields
Minimalist design. No background (transparent) with a bottom-only border that transforms into a full 1px primary-colored outline upon focus.

### Lists
Standard vertical lists for experience should include a thin vertical "line" on the left (the timeline) in `surface-subtle`, with nodes highlighted in `secondary_color_hex`.