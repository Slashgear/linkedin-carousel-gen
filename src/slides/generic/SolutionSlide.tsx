import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface SolutionItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface SolutionSlideProps {
  title: string;
  solutions: SolutionItem[];
  badge?: string;
  layout?: "vertical" | "grid";
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function SolutionSlide({
  title,
  solutions,
  badge,
  layout = "vertical",
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: SolutionSlideProps) {
  const isGrid = layout === "grid" && solutions.length <= 4;

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
        paddingTop: theme.spacing.slidePadding,
        paddingBottom: theme.spacing.slidePadding,
        paddingLeft: theme.spacing.slidePadding,
        paddingRight: 0,
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
          paddingRight: theme.spacing.slidePadding,
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
      <div
        style={{
          display: "flex",
          flexDirection: isGrid ? "row" : "column",
          flexWrap: isGrid ? "wrap" : "nowrap",
          gap: theme.spacing.md,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {solutions.map((solution, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: isGrid ? "column" : "row",
              alignItems: isGrid ? "center" : "flex-start",
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radii.lg,
              padding: theme.spacing.md,
              width: isGrid ? "calc(50% - 12px)" : "100%",
              textAlign: isGrid ? "center" : "left",
            }}
          >
            {solution.icon && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: theme.colors.accent,
                  marginRight: isGrid ? 0 : theme.spacing.md,
                  marginBottom: isGrid ? theme.spacing.sm : 0,
                  fontSize: 28,
                }}
              >
                {solution.icon}
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <span
                style={{
                  fontSize: theme.typography.fontSizeMd,
                  fontWeight: 700,
                }}
              >
                {solution.title}
              </span>
              {solution.description && (
                <span
                  style={{
                    fontSize: theme.typography.fontSizeSm,
                    color: theme.colors.textMuted,
                    marginTop: theme.spacing.sm / 2,
                  }}
                >
                  {solution.description}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
