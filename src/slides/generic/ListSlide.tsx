import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface ListItem {
  text: string;
  highlight?: string;
}

export interface ListSlideProps {
  title: string;
  items: ListItem[];
  badge?: string;
  numbered?: boolean;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function ListSlide({
  title,
  items,
  badge,
  numbered = true,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: ListSlideProps) {
  const renderText = (item: ListItem) => {
    if (!item.highlight) return <span>{item.text}</span>;
    const idx = item.text.indexOf(item.highlight);
    if (idx === -1) return <span>{item.text}</span>;
    const before = item.text.slice(0, idx);
    const after = item.text.slice(idx + item.highlight.length);
    return (
      <span>
        {before}
        <span style={{ color: theme.colors.accent, fontWeight: 700 }}>{item.highlight}</span>
        {after}
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
          gap: theme.spacing.sm,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radii.lg,
              padding: "20px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: theme.colors.accent,
                color: "#000",
                marginRight: theme.spacing.md,
                fontSize: theme.typography.fontSizeSm,
                fontWeight: 700,
              }}
            >
              {numbered ? index + 1 : "•"}
            </div>
            <span style={{ fontSize: 28, flex: 1 }}>{renderText(item)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
