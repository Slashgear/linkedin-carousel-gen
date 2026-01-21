import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const orangeTheme: Theme = {
  name: "orange",
  colors: {
    background: "#1c1917",
    surface: "#292524",
    accent: "#f97316",
    text: "#fafaf9",
    textMuted: "#a8a29e",
    border: "#f97316",
  },
  typography,
  spacing,
  radii,
};
