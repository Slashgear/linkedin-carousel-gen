import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface CoverSlideProps {
  title: string;
  subtitle?: string;
  badge?: string;
  highlight?: string;
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function CoverSlide({
  title,
  subtitle,
  badge,
  highlight,
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: CoverSlideProps) {
  const renderTitle = () => {
    if (!highlight) {
      return <span>{title}</span>;
    }
    const idx = title.indexOf(highlight);
    if (idx === -1) {
      return <span>{title}</span>;
    }
    const before = title.slice(0, idx);
    const after = title.slice(idx + highlight.length);
    return (
      <span style={{ display: "flex", flexWrap: "wrap" }}>
        <span>{before}</span>
        <span style={{ color: theme.colors.accent }}>{highlight}</span>
        <span>{after}</span>
      </span>
    );
  };

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
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    >
      {/* Header with logo */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: theme.spacing.md }}>
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            style={{ height: logoSize, width: "auto", objectFit: "contain" }}
          />
        )}
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {badge && (
        <div style={{ display: "flex", marginBottom: theme.spacing.xl }}>
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
            }}
          >
            {badge}
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: theme.spacing.lg,
          borderLeft: `4px solid ${theme.colors.accent}`,
        }}
      >
        <h1
          style={{
            fontSize: theme.typography.fontSizeXl,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {renderTitle()}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: theme.typography.fontSizeMd,
              color: theme.colors.textMuted,
              margin: 0,
              marginTop: theme.spacing.sm,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
