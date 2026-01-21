export interface ThemeColors {
  background: string;
  surface: string;
  accent: string;
  text: string;
  textMuted: string;
  border: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSizeXl: number; // 64
  fontSizeLg: number; // 48
  fontSizeMd: number; // 32
  fontSizeSm: number; // 24
}

export interface ThemeSpacing {
  sm: number; // 16
  md: number; // 24
  lg: number; // 32
  xl: number; // 48
  slidePadding: number; // 60
}

export interface ThemeRadii {
  sm: number; // 4
  md: number; // 8
  lg: number; // 16
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radii: ThemeRadii;
}
