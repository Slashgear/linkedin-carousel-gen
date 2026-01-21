import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface ProblemItem {
  text: string;
  icon?: string;
}

export interface ProblemSlideProps {
  title: string;
  problems: ProblemItem[];
  badge?: string;
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function ProblemSlide({
  title,
  problems,
  badge,
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: ProblemSlideProps) {
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
          flexDirection: "column",
          gap: theme.spacing.md,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {problems.map((problem, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radii.lg,
              padding: theme.spacing.md,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: theme.colors.accent,
                marginRight: theme.spacing.md,
                fontSize: 24,
              }}
            >
              {problem.icon || "✗"}
            </div>
            <span style={{ fontSize: theme.typography.fontSizeMd, flex: 1 }}>{problem.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
