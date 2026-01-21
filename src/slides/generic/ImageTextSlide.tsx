import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface ImageTextSlideProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  badge?: string;
  position?: "top" | "center" | "bottom";
  overlay?: boolean;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function ImageTextSlide({
  title,
  subtitle,
  imageUrl,
  badge,
  position = "bottom",
  overlay = true,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: ImageTextSlideProps) {
  const justifyContent =
    position === "top" ? "flex-start" : position === "center" ? "center" : "flex-end";

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
        backgroundImage: `url(${imageUrl})`,
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

      {/* Content wrapper with position */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: overlay ? "rgba(0,0,0,0.8)" : "transparent",
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
            {title}
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
    </div>
  );
}
