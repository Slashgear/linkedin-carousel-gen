# linkedin-carousel-gen

Tool to generate LinkedIn carousel posts as PDFs. Built with TypeScript, Bun, React and Satori.

## Installation

```bash
bun install
```

## Usage

```bash
bun run generate
```

Generates a PDF in the `out/` folder.

## Stack

- **Bun** - TypeScript runtime
- **React** - Declarative slide composition
- **Satori** - React -> SVG rendering
- **resvg** - SVG -> PNG conversion
- **pdf-lib** - PDF assembly

## Creating a carousel

Edit `index.ts` to define which slides to render, using components from `src/slides/components.tsx`.
