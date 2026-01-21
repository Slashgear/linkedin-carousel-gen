import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const redTheme: Theme = {
  name: "red",
  colors: {
    background: "#1c1917",
    surface: "#292524",
    accent: "#ef4444",
    text: "#fafaf9",
    textMuted: "#a8a29e",
    border: "#ef4444",
  },
  typography,
  spacing,
  radii,
};
