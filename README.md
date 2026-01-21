# LinkedIn Carousel Generator

[![CI](https://github.com/Slashgear/linkedin-carousel-gen/actions/workflows/ci.yml/badge.svg)](https://github.com/Slashgear/linkedin-carousel-gen/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Tool to generate LinkedIn carousel posts as PDFs. Built with TypeScript, Bun, React and Satori.

## Features

- **Theme System** - 7 built-in color themes (dark, light, blue, green, red, purple, orange)
- **12 Generic Slides** - Reusable slide components for common carousel patterns
- **Storybook** - Visual documentation and component playground
- **PDF Export** - 1080x1080px LinkedIn-optimized carousel format

## Installation

```bash
bun install
```

## Usage

### Generate PDF

```bash
bun run generate
```

Generates a PDF in the `out/` folder.

### Development with Storybook

```bash
bun run storybook
```

Opens Storybook at http://localhost:6006 for visual component development.

### Build Storybook

```bash
bun run build-storybook
```

Builds static Storybook to `storybook-static/`.

## Quick Start

```tsx
import { CoverSlide, ListSlide, CTASlide } from "./src/slides/generic";
import { blueTheme } from "./src/theme";

const slides = [
  <CoverSlide theme={blueTheme} title="5 Tips for Better Code" badge="TIPS" highlight="Better" />,
  <ListSlide
    theme={blueTheme}
    title="The essentials"
    items={[
      { text: "Write tests first" },
      { text: "Keep functions small" },
      { text: "Document your decisions" },
    ]}
  />,
  <CTASlide theme={blueTheme} title="Ready to start?" ctaLabel="Learn more" ctaUrl="example.com" />,
];
```

## Available Themes

| Theme         | Description                                  |
| ------------- | -------------------------------------------- |
| `darkTheme`   | Dark background with yellow accent (default) |
| `lightTheme`  | Light background with blue accent            |
| `blueTheme`   | Dark blue background with bright blue accent |
| `greenTheme`  | Dark green background with emerald accent    |
| `redTheme`    | Dark background with red accent              |
| `purpleTheme` | Dark purple background with violet accent    |
| `orangeTheme` | Dark background with orange accent           |

## Available Slides

| Slide             | Description                                     |
| ----------------- | ----------------------------------------------- |
| `CoverSlide`      | Hook/title slide with optional background image |
| `ProblemSlide`    | List of pain points with icons                  |
| `SolutionSlide`   | Features with vertical/grid layout              |
| `ListSlide`       | Numbered or bulleted list                       |
| `QuoteSlide`      | Citation with author avatar                     |
| `StatsSlide`      | Metrics in row or grid layout                   |
| `ComparisonSlide` | Before/after or VS comparison                   |
| `ProcessSlide`    | Steps with visual connectors                    |
| `ChecklistSlide`  | Styled checklist                                |
| `CTASlide`        | Call-to-action finale                           |
| `ImageTextSlide`  | Full image with text overlay                    |
| `ProfileSlide`    | Author profile card                             |

## Examples

Ready-to-run example carousels in the `examples/` folder:

| Example                                           | Description                   | Theme  |
| ------------------------------------------------- | ----------------------------- | ------ |
| [tips-carousel.tsx](examples/tips-carousel.tsx)   | Tips/guide style carousel     | Blue   |
| [product-launch.tsx](examples/product-launch.tsx) | Product announcement carousel | Green  |
| [event-promo.tsx](examples/event-promo.tsx)       | Event promotion carousel      | Purple |

Run an example:

```bash
bun run examples/tips-carousel.tsx
```

## Stack

- **Bun** - TypeScript runtime
- **React** - Declarative slide composition
- **Satori** - React -> SVG rendering
- **resvg** - SVG -> PNG conversion
- **pdf-lib** - PDF assembly
- **Storybook** - Component documentation

## Commands

```bash
bun install          # Install dependencies
bun run generate     # Generate carousel PDF
bun run storybook    # Start Storybook dev server
bun run build-storybook  # Build static Storybook
bun run typecheck    # Type check with tsc
bun run lint         # Run oxlint
bun run format       # Format code with oxfmt
```

## Documentation

- [Usage Guide](docs/USAGE.md) - Detailed usage instructions
- [Themes Guide](docs/THEMES.md) - Theme customization

## License

MIT
