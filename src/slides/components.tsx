import type { CSSProperties, ReactNode } from "react";

// Design tokens
export const colors = {
  background: "#1a1a1a",
  surface: "#2a2a2a",
  accent: "#f5c518",
  text: "#ffffff",
  textMuted: "#a0a0a0",
  border: "#f5c518",
};

// Base slide wrapper
export function Slide({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: "Inter",
        padding: 60,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Badge component (like LyonJS badge)
export function Badge({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: colors.accent,
        color: "#000",
        padding: "12px 24px",
        borderRadius: 8,
        fontWeight: 700,
        fontSize: 24,
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
}: {
  children: string;
  highlight?: string;
  style?: CSSProperties;
}) {
  if (!highlight) {
    return (
      <h1
        style={{
          fontSize: 64,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.2,
          ...style,
        }}
      >
        {children}
      </h1>
    );
  }
  const idx = children.indexOf(highlight);
  if (idx === -1) {
    return (
      <h1
        style={{
          fontSize: 64,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.2,
          ...style,
        }}
      >
        {children}
      </h1>
    );
  }
  const before = children.slice(0, idx);
  const after = children.slice(idx + highlight.length);
  return (
    <h1
      style={{
        fontSize: 64,
        fontWeight: 700,
        margin: 0,
        lineHeight: 1.2,
        display: "flex",
        flexWrap: "wrap",
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      <span>{before}</span>
      <span style={{ color: colors.accent }}>{highlight}</span>
      <span>{after}</span>
    </h1>
  );
}

// Subtitle/description text
export function Subtitle({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p
      style={{
        fontSize: 32,
        color: colors.textMuted,
        margin: 0,
        marginTop: 16,
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
}: {
  value: string;
  label: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.surface,
        border: `2px solid ${colors.border}`,
        borderRadius: 12,
        padding: "24px 40px",
        ...style,
      }}
    >
      <span style={{ fontSize: 48, fontWeight: 700, color: colors.accent }}>{value}</span>
      <span style={{ fontSize: 24, color: colors.text }}>{label}</span>
    </div>
  );
}

// Check list item
export function CheckItem({ children, highlight }: { children: string; highlight?: string }) {
  const renderText = () => {
    if (!highlight) return <span>{children}</span>;
    const idx = children.indexOf(highlight);
    if (idx === -1) return <span>{children}</span>;
    const before = children.slice(0, idx);
    const after = children.slice(idx + highlight.length);
    // Use template string to preserve spaces
    return (
      <span>
        {before}
        <span style={{ color: colors.accent, fontWeight: 700 }}>{highlight}</span>
        {after}
      </span>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: 12,
        padding: "20px 32px",
        marginBottom: 16,
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
          backgroundColor: colors.accent,
          marginRight: 20,
          fontSize: 24,
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
}: {
  title: string;
  url: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: colors.surface,
        border: `2px solid ${colors.border}`,
        borderRadius: 16,
        padding: "32px 48px",
        ...style,
      }}
    >
      <span
        style={{
          fontSize: 24,
          color: colors.accent,
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {title}
      </span>
      <span style={{ fontSize: 36, fontWeight: 700 }}>{url}</span>
    </div>
  );
}
