# Usage Guide

This guide covers how to create LinkedIn carousels using the slide components.

## Basic Structure

A carousel is an array of React components that get rendered to a PDF:

```tsx
import { renderSlidesToPdf } from "./src/lib/render";
import { CoverSlide, CTASlide } from "./src/slides/generic";
import { darkTheme } from "./src/theme";

const slides = [
  <CoverSlide theme={darkTheme} title="My Title" />,
  <CTASlide theme={darkTheme} title="Follow me!" ctaLabel="Link" ctaUrl="example.com" />,
];

const pdfBytes = await renderSlidesToPdf(slides);
await Bun.write("out/carousel.pdf", pdfBytes);
```

## Slide Components

### CoverSlide

The opening hook slide. Use it to grab attention.

```tsx
<CoverSlide
  title="Et si c'était VOUS sur scène ?"
  subtitle="Devenez speaker en 2026"
  badge="LyonJS"
  highlight="VOUS" // Word to highlight in accent color
  backgroundImage="data:image/..." // Optional background
  theme={darkTheme}
/>
```

### ProblemSlide

Present pain points your audience relates to.

```tsx
<ProblemSlide
  title="Les problèmes courants"
  badge="PROBLÈME"
  problems={[
    { text: "Pas assez de temps", icon: "⏰" },
    { text: "Documentation obsolète", icon: "📚" },
    { text: "Tests difficiles" }, // Default icon: ✗
  ]}
  theme={darkTheme}
/>
```

### SolutionSlide

Present your solutions with vertical or grid layout.

```tsx
<SolutionSlide
  title="La solution"
  badge="SOLUTION"
  layout="grid" // "vertical" or "grid"
  solutions={[
    { title: "Automatisation", description: "CI/CD robustes", icon: "⚡" },
    { title: "Documentation", description: "Docs as Code", icon: "📚" },
  ]}
  theme={darkTheme}
/>
```

### ListSlide

Numbered or bulleted lists.

```tsx
<ListSlide
  title="5 étapes pour réussir"
  badge="GUIDE"
  numbered={true} // false for bullets
  items={[{ text: "Définir les objectifs" }, { text: "Focus sur la valeur", highlight: "valeur" }]}
  theme={darkTheme}
/>
```

### QuoteSlide

Feature a memorable quote.

```tsx
<QuoteSlide
  quote="Le code est comme l'humour..."
  author="Cory House"
  role="Software Architect"
  avatarUrl="data:image/..." // Optional
  badge="CITATION"
  theme={darkTheme}
/>
```

### StatsSlide

Display impressive metrics.

```tsx
<StatsSlide
  title="Nos résultats"
  badge="STATS"
  layout="row" // "row" or "grid"
  stats={[
    { value: "50+", label: "Participants" },
    { value: "99.9%", label: "Uptime" },
  ]}
  theme={darkTheme}
/>
```

### ComparisonSlide

Before/after or VS comparisons.

```tsx
<ComparisonSlide
  title="La transformation"
  badge="AVANT/APRÈS"
  mode="before-after" // "before-after" or "vs"
  leftTitle="Avant"
  rightTitle="Après"
  leftItems={[{ text: "Déploiements manuels" }]}
  rightItems={[{ text: "CI/CD automatisé" }]}
  theme={darkTheme}
/>
```

### ProcessSlide

Show step-by-step processes.

```tsx
<ProcessSlide
  title="Notre processus"
  badge="MÉTHODE"
  steps={[
    { title: "Découverte", description: "Comprendre vos besoins" },
    { title: "Conception", description: "Définir l'architecture", icon: "🎨" },
    { title: "Livraison" },
  ]}
  theme={darkTheme}
/>
```

### ChecklistSlide

Interactive-looking checklists.

```tsx
<ChecklistSlide
  title="Le CFP c'est :"
  badge="CHECKLIST"
  items={[
    { text: "Ouvert toute l'année", highlight: "Ouvert", checked: true },
    { text: "Tous niveaux bienvenus", checked: true },
    { text: "Encore à faire", checked: false },
  ]}
  theme={darkTheme}
/>
```

### CTASlide

The call-to-action finale.

```tsx
<CTASlide
  title="Prêt à partager votre passion ?"
  subtitle="Soumettez votre talk"
  ctaLabel="Proposez votre sujet"
  ctaUrl="conference-hall.io"
  icon="🚀" // Optional large icon
  badge="GRATUIT"
  theme={darkTheme}
/>
```

### ImageTextSlide

Full-bleed image with text overlay.

```tsx
<ImageTextSlide
  title="Découvrez notre univers"
  subtitle="Une expérience unique"
  imageUrl="data:image/..."
  position="bottom" // "top", "center", "bottom"
  overlay={true} // Semi-transparent background for text
  badge="NOUVEAU"
  theme={darkTheme}
/>
```

### ProfileSlide

Author/speaker profile card.

```tsx
<ProfileSlide
  name="Jean Dupont"
  role="Senior Developer"
  bio="Passionné de JavaScript depuis 10 ans..."
  avatarUrl="data:image/..."
  badge="SPEAKER"
  socials={[
    { platform: "Twitter", handle: "@jeandupont" },
    { platform: "GitHub", handle: "jeandupont" },
  ]}
  theme={darkTheme}
/>
```

## Using Images

Images must be embedded as data URLs for Satori compatibility:

```tsx
import { loadImageAsDataUrl } from "./src/lib/images";

const avatarUrl = await loadImageAsDataUrl("path/to/avatar.png");

<ProfileSlide avatarUrl={avatarUrl} ... />
```

Built-in placeholders are available:

```tsx
import { getPlaceholder } from "./src/lib/images";

const avatar = await getPlaceholder("avatar");
const photo = await getPlaceholder("photo");
const logo = await getPlaceholder("logo");
```

## Satori Limitations

Since slides are rendered with Satori, keep these limitations in mind:

- **Flexbox only** - No CSS Grid
- **No `position: absolute`** - Use flexbox for positioning
- **Limited CSS** - Stick to common properties
- **Images as data URLs** - External URLs won't work

## Carousel Tips

1. **Hook first** - Start with an attention-grabbing CoverSlide
2. **3-7 slides** - Keep it digestible
3. **End with CTA** - Always include a clear call-to-action
4. **Consistent theme** - Use one theme throughout
5. **Highlight keywords** - Use the `highlight` prop strategically
