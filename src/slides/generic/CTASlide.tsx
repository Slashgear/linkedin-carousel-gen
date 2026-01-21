import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface CTASlideProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaUrl: string;
  icon?: string;
  badge?: string;
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function CTASlide({
  title,
  subtitle,
  ctaLabel,
  ctaUrl,
  icon,
  badge,
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: CTASlideProps) {
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
      {/* Header with badge and logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: theme.spacing.lg,
        }}
      >
        {badge ? (
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
        ) : (
          <div />
        )}
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            style={{ height: logoSize, width: "auto", objectFit: "contain" }}
          />
        )}
      </div>

      {/* Content centered */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {icon && (
          <div
            style={{
              display: "flex",
              fontSize: 120,
              color: theme.colors.accent,
              marginBottom: theme.spacing.lg,
            }}
          >
            {icon}
          </div>
        )}
        <h1
          style={{
            fontSize: theme.typography.fontSizeXl,
            fontWeight: 700,
            margin: 0,
            marginBottom: theme.spacing.sm,
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: theme.typography.fontSizeMd,
              color: theme.colors.textMuted,
              margin: 0,
              marginBottom: theme.spacing.xl,
              textAlign: "center",
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: theme.colors.surface,
            border: `2px solid ${theme.colors.border}`,
            borderRadius: theme.radii.lg,
            padding: "32px 48px",
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
            {ctaLabel}
          </span>
          <span style={{ fontSize: 36, fontWeight: 700 }}>{ctaUrl}</span>
        </div>
      </div>
    </div>
  );
}
