---
name: "Gita Tarigan Editorial"
description: "High-fashion editorial magazine design system pairing warm cream silk surfaces, deep obsidian bands, champagne gold accents, and high-contrast serif display typography."
---

## Overview

Gita Tarigan Editorial is a personal portfolio design system crafted with a high-fashion editorial magazine aesthetic. It balances warm cream silk paper tones with deep obsidian dark bands, restrained champagne gold accents, and dramatic high-contrast serif display typography to present technical engineering work with poise and clarity.

The system serves recruiters, engineering leads, and academic collaborators reviewing Gita Irene Natania Tarigan's software projects, programming skills, and academic background at Institut Teknologi PLN.

## Colors

The palette alternates between warm cream silk (`#F3ECE2`) and deep obsidian (`#11100F`) editorial bands, unified by champagne gold (`#B89768` and `#D4B78C`) accents.

- **Surface & Surface Dark:** Alternating light and dark editorial bands create natural section rhythm without heavy dividers.
- **Gold & Gold Light:** Used sparingly for kickers, editorial numerals, signature typography, hairline dividers, and interactive hover highlights.
- **Primary:** Deep bronze-gold (`#755A30`) for high-contrast interactive actions on light surfaces.

```yaml
colors:
  primary: "#755A30"
  on-primary: "#FFFFFF"
  surface: "#F3ECE2"
  on-surface: "#161514"
  surface-elevated: "#FAF6F0"
  on-surface-elevated: "#161514"
  surface-dark: "#11100F"
  on-surface-dark: "#F3ECE2"
  surface-dark-card: "#1B1917"
  on-surface-dark-card: "#F3ECE2"
  gold: "#B89768"
  gold-light: "#D4B78C"
  ink-muted: "#5A554E"
  ink-light-muted: "#C4BCB0"
  border-dark: "#D6CFC5"
  border-light: "#32302F"
  quote-backdrop: "#2A241E"
```

## Typography

High-contrast editorial serif display headings in **Cormorant Garamond** and **Playfair Display** pair with **Plus Jakarta Sans** for clean geometric body copy and wide-tracked uppercase kickers.

```yaml
typography:
  display-hero:
    fontFamily: "Cormorant Garamond"
    fontSize: 160px
    fontWeight: 400
    lineHeight: 140px
    letterSpacing: -3px
  display-hero-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 50px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 42px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: 0px
  headline-lg-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0px
  headline-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0px
  title-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: 0.25px
  title-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0.5px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0px
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 2.2px
  label-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 1.4px
```

## Layout & Spacing

The layout uses a centered `1280px` max-width editorial container with `5vw` horizontal page padding and generous vertical section rhythm (`84px` to `110px`). Multi-column asymmetrical grids collapse cleanly to single-column stacks on tablet and mobile viewports (`375px`, `768px`, `1024px`, `1440px`) with zero horizontal overflow.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 36px
  section-sm: 64px
  section-md: 84px
  section-lg: 110px
```

## Elevation & Depth

Visual hierarchy relies on **tonal contrast and hairline borders** rather than drop shadows. Dark editorial cards sit on `#1B1917` over `#11100F` with 1px low-opacity borders that transition to champagne gold on hover. Modals use a deep obsidian surface over a dimmed backdrop.

## Shapes

Sharp, architectural editorial corners (`0px` to `2px`) define poster frames, quote cards, and buttons, while pill tags and circular stamp emblems use `9999px` full rounding.

```yaml
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  full: 9999px
```

## Motion & Micro-interaction

Motion is poised and editorial, using a decelerating `cubic-bezier(0.22, 1, 0.36, 1)` curve. Scroll-triggered reveals fade and rise gently over `900ms`, project cards lift `-6px` on hover, and the circular stamp emblem rotates continuously at `24s` per revolution. All animations pause or reduce under `prefers-reduced-motion`.

```yaml
motion:
  editorial-reveal:
    duration: 900ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
  card-hover:
    duration: 350ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
```

## Voice & Content Strategy

- **Tone of voice:** Poised, concise, and technically grounded. Avoid buzzwords; let concrete project details (C++ systems, Python automation, academic milestones) speak clearly.
- **Capitalisation:** Wide-tracked uppercase for editorial kickers, section headers, and pill tags; sentence case for bio and project descriptions.
- **Focus & Accessibility:** Visible champagne gold focus outlines (`2px solid #B89768`) on all interactive controls, semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), and keyboard-accessible modal dialogs.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Modal** → `@components/modal.html`: `modal-standard`, `modal-alert`, `modal-drawer`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
