import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    background: "#1a1a1a",
    surface: "#2a2a2a",
    accent: "#f5c518",
    text: "#ffffff",
    textMuted: "#a0a0a0",
    border: "#f5c518",
  },
  typography,
  spacing,
  radii,
};
