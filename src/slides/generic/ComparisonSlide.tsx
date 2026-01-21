import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface ComparisonItem {
  text: string;
}

export interface ComparisonSlideProps {
  title?: string;
  leftTitle: string;
  rightTitle: string;
  leftItems: ComparisonItem[];
  rightItems: ComparisonItem[];
  badge?: string;
  mode?: "before-after" | "vs";
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function ComparisonSlide({
  title,
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
  badge,
  mode = "before-after",
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: ComparisonSlideProps) {
  const leftColor = mode === "before-after" ? theme.colors.textMuted : theme.colors.text;
  const rightColor = theme.colors.accent;

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
            marginBottom: theme.spacing.lg,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
      )}
      <div
        style={{
          display: "flex",
          gap: theme.spacing.md,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {/* Left column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: theme.colors.surface,
            borderRadius: theme.radii.lg,
            padding: theme.spacing.md,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: theme.spacing.md,
              padding: theme.spacing.sm,
              borderBottom: `2px solid ${leftColor}`,
            }}
          >
            <span
              style={{ fontSize: theme.typography.fontSizeMd, fontWeight: 700, color: leftColor }}
            >
              {leftTitle}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: theme.spacing.sm }}>
            {leftItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                }}
              >
                <span
                  style={{
                    marginRight: theme.spacing.sm,
                    color: leftColor,
                    fontSize: 20,
                  }}
                >
                  {mode === "before-after" ? "✗" : "•"}
                </span>
                <span style={{ fontSize: theme.typography.fontSizeSm }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VS divider */}
        {mode === "vs" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
            }}
          >
            <span
              style={{
                fontSize: theme.typography.fontSizeMd,
                fontWeight: 700,
                color: theme.colors.accent,
              }}
            >
              VS
            </span>
          </div>
        )}

        {/* Right column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: theme.colors.surface,
            borderRadius: theme.radii.lg,
            padding: theme.spacing.md,
            border: `2px solid ${theme.colors.accent}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: theme.spacing.md,
              padding: theme.spacing.sm,
              borderBottom: `2px solid ${rightColor}`,
            }}
          >
            <span
              style={{ fontSize: theme.typography.fontSizeMd, fontWeight: 700, color: rightColor }}
            >
              {rightTitle}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: theme.spacing.sm }}>
            {rightItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                }}
              >
                <span
                  style={{
                    marginRight: theme.spacing.sm,
                    color: rightColor,
                    fontSize: 20,
                  }}
                >
                  {mode === "before-after" ? "✓" : "•"}
                </span>
                <span style={{ fontSize: theme.typography.fontSizeSm }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
