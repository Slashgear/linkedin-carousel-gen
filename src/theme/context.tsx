import { createContext, useContext, type ReactNode } from "react";
import type { Theme } from "./types";
import { defaultTheme } from "./index";

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ theme, children }: { theme: Theme; children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

export { ThemeContext };
