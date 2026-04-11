# LinkedIn Carousel Generator

[![CI](https://github.com/Slashgear/linkedin-carousel-gen/actions/workflows/ci.yml/badge.svg)](https://github.com/Slashgear/linkedin-carousel-gen/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://slashgear.github.io/linkedin-carousel-gen/)

Tool to generate LinkedIn carousel posts as PDFs. Built with TypeScript, Bun, React and Satori.

<p align="center">
  <img src="assets/previews/tips-carousel.png" width="250" alt="Tips Carousel" />
  <img src="assets/previews/product-launch.png" width="250" alt="Product Launch" />
  <img src="assets/previews/event-promo.png" width="250" alt="Event Promo" />
</p>

**[View Storybook Demo](https://slashgear.github.io/linkedin-carousel-gen/)** | **[Download Example PDFs](https://slashgear.github.io/linkedin-carousel-gen/?path=/docs/galleries-tips-carousel--docs)**

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

| Example                                           | Description                   | Theme  | PDF                                                                                        |
| ------------------------------------------------- | ----------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| [tips-carousel.tsx](examples/tips-carousel.tsx)   | Tips/guide style carousel     | Blue   | [Download](https://slashgear.github.io/linkedin-carousel-gen/downloads/tips-carousel.pdf)  |
| [product-launch.tsx](examples/product-launch.tsx) | Product announcement carousel | Green  | [Download](https://slashgear.github.io/linkedin-carousel-gen/downloads/product-launch.pdf) |
| [event-promo.tsx](examples/event-promo.tsx)       | Event promotion carousel      | Purple | [Download](https://slashgear.github.io/linkedin-carousel-gen/downloads/event-promo.pdf)    |

Run an example:

```bash
bun run examples/tips-carousel.tsx
```

### LyonJS Meetup Generator (JSON-driven)

For recurring LyonJS meetups, `scripts/generate-lyonjs-meetup.tsx` produces a carousel from a JSON file instead of hand-edited JSX. Drop a `meetup.json` + the referenced images in a directory and run one command — everything else (layout, theme, logo, backpage CTA) is baked into the script.

1. Create a directory for the edition, e.g. `lyonjs/2026-04-23/`, containing:
   - `meetup.json` (schema below)
   - Three backgrounds referenced from the JSON (e.g. `cover.jpeg`, `infos.jpeg`, `backpage.jpg`)
   - One avatar per speaker (falls back to a placeholder if the file is missing)

2. Write `meetup.json` — the example below is the real `lyonjs/2026-04-23/meetup.json` shipped in this repo:

```json
{
  "cover": {
    "edition": "#113 LYONJS x YEESO (EN MIXITE)",
    "title": "Loi de Conway, Documentation et Permissions",
    "date": "Jeudi 23 avril 2026 - 19h00",
    "background": "cover.jpeg"
  },
  "speakers": [
    {
      "avatar": "sarah.jpeg",
      "name": "Sarah Haïm-Lubczanski",
      "company": "Documentation Architect, Bedrock Streaming",
      "description": "Loi de Conway et documentation"
    },
    {
      "avatar": "celine.jpeg",
      "name": "Céline Louvet",
      "company": "Staff Engineer / Senior Lead Developer, Shine",
      "description": "Les mystères des permissions"
    }
  ],
  "infos": {
    "time": "19h00",
    "seats": 80,
    "price": "Gratuit",
    "address": "Wanadev - 13 Quai du Commerce, Lyon",
    "background": "infos.jpeg"
  },
  "backpage": {
    "description": "Apéro offert par Wanadev",
    "background": "backpage.jpg"
  }
}
```

All image paths are resolved relative to the directory passed to the script. `speakers` can contain any number of entries — one slide is produced per speaker.

3. Generate the carousel:

```bash
bun run scripts/generate-lyonjs-meetup.tsx lyonjs/2026-04-23
```

Output: `out/meetup-lyonjs/2026-04-23/caroussel.pdf` + `page-1.png` … `page-N.png` (one per slide). The output directory mirrors the input path with `meetup-` prepended to the first segment, so every LyonJS edition lands under `out/meetup-lyonjs/`.

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

## Base Components API

For custom layouts, use the base components from `src/slides/components`:

| Component   | Props                                      | Description                          |
| ----------- | ------------------------------------------ | ------------------------------------ |
| `Slide`     | `theme`, `style`, `children`               | Base container (1080x1080px)         |
| `Badge`     | `theme`, `style`, `children`               | Colored label/tag                    |
| `Title`     | `theme`, `style`, `children`, `highlight?` | Main heading with optional highlight |
| `Subtitle`  | `theme`, `style`, `children`               | Secondary text                       |
| `StatBox`   | `theme`, `style`, `value`, `label`         | Metric display box                   |
| `CheckItem` | `theme`, `children`, `highlight?`          | Checklist item with checkmark        |
| `CTABox`    | `theme`, `style`, `title`, `url`           | Call-to-action box                   |

Example:

```tsx
import { Slide, Title, Badge, CheckItem } from "./src/slides/components";
import { purpleTheme } from "./src/theme";

<Slide theme={purpleTheme}>
  <Badge theme={purpleTheme}>PRO TIP</Badge>
  <Title theme={purpleTheme} highlight="faster">
    Ship code faster
  </Title>
  <CheckItem theme={purpleTheme} highlight="tests">
    Write tests first
  </CheckItem>
</Slide>;
```

## Documentation

- [Usage Guide](docs/USAGE.md) - Detailed usage instructions
- [Themes Guide](docs/THEMES.md) - Theme customization
- [Contributing](CONTRIBUTING.md) - How to contribute

## License

MIT
