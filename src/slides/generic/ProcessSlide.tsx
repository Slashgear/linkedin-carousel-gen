import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface ProcessStep {
  title: string;
  description?: string;
  icon?: string;
}

export interface ProcessSlideProps {
  title: string;
  steps: ProcessStep[];
  badge?: string;
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function ProcessSlide({
  title,
  steps,
  badge,
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: ProcessSlideProps) {
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
          gap: 0,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {/* Step number and connector */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: theme.spacing.md,
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
                  color: "#000",
                  fontSize: theme.typography.fontSizeSm,
                  fontWeight: 700,
                }}
              >
                {step.icon || index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  style={{
                    width: 4,
                    height: 40,
                    backgroundColor: theme.colors.border,
                  }}
                />
              )}
            </div>

            {/* Step content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                paddingBottom: theme.spacing.md,
              }}
            >
              <span
                style={{
                  fontSize: theme.typography.fontSizeMd,
                  fontWeight: 700,
                }}
              >
                {step.title}
              </span>
              {step.description && (
                <span
                  style={{
                    fontSize: theme.typography.fontSizeSm,
                    color: theme.colors.textMuted,
                    marginTop: theme.spacing.sm / 2,
                  }}
                >
                  {step.description}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
