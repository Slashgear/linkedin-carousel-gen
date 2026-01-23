# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tool to generate LinkedIn carousel posts as PDFs. Built with React + Satori for declarative slide composition.

**Stack:** Bun + React + Satori + resvg + pdf-lib + Storybook

## Commands

```bash
bun install          # Install dependencies
bun run generate     # Generate carousel PDF from index.ts
bun run storybook    # Start Storybook dev server
bun run build-storybook  # Build static Storybook
bun run typecheck    # Type check with tsc
bun run lint         # Run oxlint
bun run format       # Format code with oxfmt
bun run format:check # Check formatting without writing
```

## Architecture

**Pipeline:** React components -> Satori (SVG) -> resvg (PNG) -> pdf-lib (PDF)

### Core Files

- `src/lib/render.tsx` - Core rendering functions (`renderSlidesToPdf`, `renderSlideToPng`)
- `src/lib/images.ts` - Image loading utilities for Satori
- `index.ts` - Entry point, defines which slides to render

### Theme System

- `src/theme/types.ts` - Theme TypeScript interfaces
- `src/theme/tokens.ts` - Default typography, spacing, radii values
- `src/theme/presets/` - 7 built-in themes (dark, light, blue, green, red, purple, orange)
- `src/theme/index.ts` - Main exports

### Slide Components

- `src/slides/components.tsx` - Base components (Slide, Badge, Title, StatBox, CheckItem, CTABox)
- `src/slides/generic/` - 12 generic slide components:
  - CoverSlide, ProblemSlide, SolutionSlide, ListSlide
  - QuoteSlide, StatsSlide, ComparisonSlide, ProcessSlide
  - ChecklistSlide, CTASlide, ImageTextSlide, ProfileSlide

### Storybook

- `.storybook/` - Storybook configuration
- `src/stories/` - Component stories and documentation

### Assets

- `assets/fonts/` - Font files (Inter) required by Satori
- `assets/placeholders/` - Placeholder SVG images

## Creating Slides

Slides are React components using Satori-compatible CSS (flexbox only, no grid). Use generic slides with themes:

```tsx
import { CoverSlide, ListSlide, CTASlide } from "./src/slides/generic";
import { blueTheme } from "./src/theme";

const slides = [
  <CoverSlide theme={blueTheme} title="My Title" badge="TIPS" />,
  <ListSlide theme={blueTheme} title="Key Points" items={[...]} />,
  <CTASlide theme={blueTheme} title="Follow me!" ctaUrl="example.com" />,
];
```

Or use base components for custom layouts:

```tsx
import { Slide, Title, Subtitle } from "./src/slides/components";
import { greenTheme } from "./src/theme";

<Slide theme={greenTheme}>
  <Title theme={greenTheme} highlight="keyword">
    Text with keyword
  </Title>
  <Subtitle theme={greenTheme}>Description</Subtitle>
</Slide>;
```

## Output

Generated PDFs and PNGs are stored in `out/`. Slides are 1080x1080px (LinkedIn carousel format).

Use `renderSlidesToPdf(slides)` for PDF output and `renderSlideToPng(slide)` for individual PNG images.
