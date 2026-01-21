import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const greenTheme: Theme = {
  name: "green",
  colors: {
    background: "#022c22",
    surface: "#064e3b",
    accent: "#10b981",
    text: "#f0fdf4",
    textMuted: "#86efac",
    border: "#10b981",
  },
  typography,
  spacing,
  radii,
};
