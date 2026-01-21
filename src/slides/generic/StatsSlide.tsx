import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsSlideProps {
  title?: string;
  stats: StatItem[];
  badge?: string;
  layout?: "row" | "grid";
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function StatsSlide({
  title,
  stats,
  badge,
  layout = "row",
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: StatsSlideProps) {
  const isGrid = layout === "grid" || stats.length > 3;

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
      {title && (
        <h1
          style={{
            fontSize: theme.typography.fontSizeXl,
            fontWeight: 700,
            margin: 0,
            marginBottom: theme.spacing.xl,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: isGrid ? "wrap" : "nowrap",
          gap: theme.spacing.md,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.colors.surface,
              border: `2px solid ${theme.colors.border}`,
              borderRadius: theme.radii.lg,
              padding: theme.spacing.lg,
              width: isGrid ? "calc(50% - 12px)" : "auto",
              flex: isGrid ? "none" : 1,
              minWidth: isGrid ? "auto" : 200,
            }}
          >
            <span
              style={{
                fontSize: theme.typography.fontSizeXl,
                fontWeight: 700,
                color: theme.colors.accent,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: theme.typography.fontSizeSm,
                color: theme.colors.text,
                marginTop: theme.spacing.sm / 2,
                textAlign: "center",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
