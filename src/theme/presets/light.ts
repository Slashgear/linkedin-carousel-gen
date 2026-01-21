import type { Theme } from "../types";
import { typography, spacing, radii } from "../tokens";

export const lightTheme: Theme = {
  name: "light",
  colors: {
    background: "#ffffff",
    surface: "#f5f5f5",
    accent: "#2563eb",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    border: "#2563eb",
  },
  typography,
  spacing,
  radii,
};
