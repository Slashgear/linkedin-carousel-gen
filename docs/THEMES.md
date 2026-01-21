# Themes Guide

This guide explains how to use and customize themes.

## Built-in Themes

Seven themes are included out of the box:

```tsx
import {
  darkTheme, // Yellow accent on dark (default)
  lightTheme, // Blue accent on white
  blueTheme, // Bright blue accent on navy
  greenTheme, // Emerald accent on dark green
  redTheme, // Red accent on dark
  purpleTheme, // Violet accent on purple
  orangeTheme, // Orange accent on dark
} from "./src/theme";
```

### Theme Preview

| Theme         | Background | Accent  | Best For           |
| ------------- | ---------- | ------- | ------------------ |
| `darkTheme`   | #1a1a1a    | #f5c518 | Tech, Professional |
| `lightTheme`  | #ffffff    | #2563eb | Corporate, Clean   |
| `blueTheme`   | #0f172a    | #3b82f6 | Tech, Trust        |
| `greenTheme`  | #022c22    | #10b981 | Eco, Growth        |
| `redTheme`    | #1c1917    | #ef4444 | Urgency, Energy    |
| `purpleTheme` | #1e1b4b    | #a855f7 | Creative, Premium  |
| `orangeTheme` | #1c1917    | #f97316 | Warm, Friendly     |

## Using Themes

Pass the theme prop to any slide component:

```tsx
import { CoverSlide } from "./src/slides/generic";
import { blueTheme } from "./src/theme";

<CoverSlide theme={blueTheme} title="My Professional Title" badge="TIPS" />;
```

## Theme Structure

A theme is an object with the following structure:

```typescript
interface Theme {
  name: string;
  colors: {
    background: string; // Main background
    surface: string; // Cards, boxes
    accent: string; // Highlights, badges
    text: string; // Primary text
    textMuted: string; // Secondary text
    border: string; // Borders
  };
  typography: {
    fontFamily: string; // "Inter"
    fontSizeXl: number; // 64 - Titles
    fontSizeLg: number; // 48 - Large text
    fontSizeMd: number; // 32 - Body
    fontSizeSm: number; // 24 - Small text
  };
  spacing: {
    sm: number; // 16
    md: number; // 24
    lg: number; // 32
    xl: number; // 48
    slidePadding: number; // 60
  };
  radii: {
    sm: number; // 4
    md: number; // 8
    lg: number; // 16
  };
}
```

## Creating Custom Themes

### Option 1: Extend a preset

```tsx
import { darkTheme, type Theme } from "./src/theme";

const myTheme: Theme = {
  ...darkTheme,
  name: "my-theme",
  colors: {
    ...darkTheme.colors,
    accent: "#ff6b6b", // Custom accent color
    border: "#ff6b6b",
  },
};
```

### Option 2: Create from scratch

```tsx
import { typography, spacing, radii, type Theme } from "./src/theme";

const customTheme: Theme = {
  name: "custom",
  colors: {
    background: "#0d1117",
    surface: "#161b22",
    accent: "#58a6ff",
    text: "#c9d1d9",
    textMuted: "#8b949e",
    border: "#30363d",
  },
  // Reuse default tokens
  typography,
  spacing,
  radii,
};
```

### Option 3: Override typography/spacing

```tsx
import { darkTheme, type Theme } from "./src/theme";

const compactTheme: Theme = {
  ...darkTheme,
  name: "compact",
  typography: {
    ...darkTheme.typography,
    fontSizeXl: 56, // Smaller titles
    fontSizeLg: 40,
  },
  spacing: {
    ...darkTheme.spacing,
    slidePadding: 40, // Less padding
  },
};
```

## Default Theme

If no theme is passed, components use `darkTheme`:

```tsx
// These are equivalent:
<CoverSlide title="Hello" />
<CoverSlide title="Hello" theme={darkTheme} />
```

## Theme Context

For applications rendering multiple slides, use `ThemeProvider` to avoid passing the theme to each component:

```tsx
import { ThemeProvider, blueTheme } from "./src/theme";
import { CoverSlide, ListSlide, CTASlide } from "./src/slides/generic";

function MyCarousel() {
  return (
    <ThemeProvider theme={blueTheme}>
      <CoverSlide title="Welcome" />
      <ListSlide title="Key Points" items={["One", "Two", "Three"]} />
      <CTASlide title="Get Started" buttonText="Learn More" />
    </ThemeProvider>
  );
}
```

Access the current theme in custom components with `useTheme`:

```tsx
import { useTheme } from "./src/theme";

function CustomComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.colors.accent }}>Accent colored text</div>;
}
```

## Backward Compatibility

The legacy `colors` object is still exported for existing code:

```tsx
import { colors } from "./src/slides/components";
// colors === darkTheme.colors
```

## Tips

1. **Consistency** - Use one theme per carousel
2. **Contrast** - Ensure text is readable against backgrounds
3. **Accent sparingly** - Use accent color for emphasis, not everywhere
4. **Test in Storybook** - Preview themes with `bun run storybook`
