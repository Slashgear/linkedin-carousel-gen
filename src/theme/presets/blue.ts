import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const blueTheme: Theme = {
  name: "blue",
  colors: {
    background: "#0f172a",
    surface: "#1e293b",
    accent: "#3b82f6",
    text: "#f8fafc",
    textMuted: "#94a3b8",
    border: "#3b82f6",
  },
  typography,
  spacing,
  radii,
};
