# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tool to generate LinkedIn carousel posts as PDFs. Built with React + Satori for declarative slide composition.

**Stack:** Bun + React + Satori + resvg + pdf-lib

## Commands

```bash
bun install          # Install dependencies
bun run generate     # Generate carousel PDF from index.ts
bun run typecheck    # Type check with tsc
bun run lint         # Run oxlint
bun run format       # Format code with oxfmt
bun run format:check # Check formatting without writing
```

## Architecture

**Pipeline:** React components -> Satori (SVG) -> resvg (PNG) -> pdf-lib (PDF)

- `src/lib/render.tsx` - Core rendering functions (`renderSlidesToPdf`, `renderSlideToPng`)
- `src/slides/components.tsx` - Reusable slide components (Slide, Badge, Title, StatBox, CheckItem, CTABox)
- `src/slides/example.tsx` - Example carousel slides
- `index.ts` - Entry point, defines which slides to render
- `assets/fonts/` - Font files (Inter) required by Satori

## Creating Slides

Slides are React components using Satori-compatible CSS (flexbox only, no grid). Use components from `src/slides/components.tsx`:

```tsx
import { Slide, Title, Subtitle } from "./components";

export function MySlide() {
  return (
    <Slide>
      <Title highlight="keyword">Text with keyword highlighted</Title>
      <Subtitle>Description text</Subtitle>
    </Slide>
  );
}
```

## Output

Generated PDFs are stored in `out/`. Slides are 1080x1080px (LinkedIn carousel format).
