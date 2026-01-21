import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const purpleTheme: Theme = {
  name: "purple",
  colors: {
    background: "#1e1b4b",
    surface: "#312e81",
    accent: "#a855f7",
    text: "#faf5ff",
    textMuted: "#c4b5fd",
    border: "#a855f7",
  },
  typography,
  spacing,
  radii,
};
