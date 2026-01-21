import type { CSSProperties, ReactNode } from "react";
import type { Theme } from "../theme";
import { defaultTheme } from "../theme";

// Legacy colors export for backward compatibility
export const colors = defaultTheme.colors;

// Base slide wrapper
export function Slide({
  children,
  style,
  theme = defaultTheme,
}: {
  children: ReactNode;
  style?: CSSProperties;
  theme?: Theme;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamily,
        padding: theme.spacing.slidePadding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Badge component (like LyonJS badge)
export function Badge({
  children,
  style,
  theme = defaultTheme,
}: {
  children: ReactNode;
  style?: CSSProperties;
  theme?: Theme;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.colors.accent,
        color: "#000",
        padding: "12px 24px",
        borderRadius: theme.radii.md,
        fontWeight: 700,
        fontSize: theme.typography.fontSizeSm,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Title with optional highlighted word
export function Title({
  children,
  highlight,
  style,
  theme = defaultTheme,
}: {
  children: string;
  highlight?: string;
  style?: CSSProperties;
  theme?: Theme;
}) {
  const baseStyle: CSSProperties = {
    fontSize: theme.typography.fontSizeXl,
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
    ...style,
  };

  if (!highlight) {
    return <h1 style={baseStyle}>{children}</h1>;
  }

  const idx = children.indexOf(highlight);
  if (idx === -1) {
    return <h1 style={baseStyle}>{children}</h1>;
  }

  const before = children.slice(0, idx);
  const after = children.slice(idx + highlight.length);

  return (
    <h1
      style={{
        ...baseStyle,
        display: "flex",
        flexWrap: "wrap",
        whiteSpace: "pre-wrap",
      }}
    >
      <span>{before}</span>
      <span style={{ color: theme.colors.accent }}>{highlight}</span>
      <span>{after}</span>
    </h1>
  );
}

// Subtitle/description text
export function Subtitle({
  children,
  style,
  theme = defaultTheme,
}: {
  children: ReactNode;
  style?: CSSProperties;
  theme?: Theme;
}) {
  return (
    <p
      style={{
        fontSize: theme.typography.fontSizeMd,
        color: theme.colors.textMuted,
        margin: 0,
        marginTop: theme.spacing.sm,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// Stat box (like "50+ Participants")
export function StatBox({
  value,
  label,
  style,
  theme = defaultTheme,
}: {
  value: string;
  label: string;
  style?: CSSProperties;
  theme?: Theme;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderRadius: 12,
        padding: "24px 40px",
        ...style,
      }}
    >
      <span
        style={{
          fontSize: theme.typography.fontSizeLg,
          fontWeight: 700,
          color: theme.colors.accent,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: theme.typography.fontSizeSm, color: theme.colors.text }}>
        {label}
      </span>
    </div>
  );
}

// Check list item
export function CheckItem({
  children,
  highlight,
  theme = defaultTheme,
}: {
  children: string;
  highlight?: string;
  theme?: Theme;
}) {
  const renderText = () => {
    if (!highlight) return <span>{children}</span>;
    const idx = children.indexOf(highlight);
    if (idx === -1) return <span>{children}</span>;
    const before = children.slice(0, idx);
    const after = children.slice(idx + highlight.length);
    return (
      <span>
        {before}
        <span style={{ color: theme.colors.accent, fontWeight: 700 }}>{highlight}</span>
        {after}
      </span>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: 12,
        padding: "20px 32px",
        marginBottom: theme.spacing.sm,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: theme.colors.accent,
          marginRight: 20,
          fontSize: theme.typography.fontSizeSm,
        }}
      >
        ✓
      </div>
      <span style={{ fontSize: 28 }}>{renderText()}</span>
    </div>
  );
}

// CTA Box
export function CTABox({
  title,
  url,
  style,
  theme = defaultTheme,
}: {
  title: string;
  url: string;
  style?: CSSProperties;
  theme?: Theme;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderRadius: theme.radii.lg,
        padding: "32px 48px",
        ...style,
      }}
    >
      <span
        style={{
          fontSize: theme.typography.fontSizeSm,
          color: theme.colors.accent,
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: theme.spacing.sm,
        }}
      >
        {title}
      </span>
      <span style={{ fontSize: 36, fontWeight: 700 }}>{url}</span>
    </div>
  );
}
