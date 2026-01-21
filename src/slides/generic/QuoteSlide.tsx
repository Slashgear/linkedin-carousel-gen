import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface QuoteSlideProps {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  badge?: string;
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function QuoteSlide({
  quote,
  author,
  role,
  avatarUrl,
  badge,
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: QuoteSlideProps) {
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
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 80,
            color: theme.colors.accent,
            marginBottom: theme.spacing.md,
            lineHeight: 0.5,
          }}
        >
          "
        </div>
        <p
          style={{
            fontSize: theme.typography.fontSizeLg,
            fontWeight: 500,
            margin: 0,
            marginBottom: theme.spacing.xl,
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          {quote}
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={author}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                marginRight: theme.spacing.md,
                objectFit: "cover",
              }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: theme.typography.fontSizeMd, fontWeight: 700 }}>{author}</span>
            {role && (
              <span
                style={{ fontSize: theme.typography.fontSizeSm, color: theme.colors.textMuted }}
              >
                {role}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
