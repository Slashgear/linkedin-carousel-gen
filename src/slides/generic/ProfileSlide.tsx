import type { CSSProperties } from "react";
import type { Theme } from "../../theme";
import { defaultTheme } from "../../theme";

export interface SocialLink {
  platform: string;
  handle: string;
}

export interface ProfileSlideProps {
  name: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
  socials?: SocialLink[];
  badge?: string;
  backgroundImage?: string;
  logoUrl?: string;
  logoSize?: number;
  theme?: Theme;
  style?: CSSProperties;
}

export function ProfileSlide({
  name,
  role,
  bio,
  avatarUrl,
  socials,
  badge,
  backgroundImage,
  logoUrl,
  logoSize = 64,
  theme = defaultTheme,
  style,
}: ProfileSlideProps) {
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
        {/* Avatar */}
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={name}
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
              border: `4px solid ${theme.colors.accent}`,
              marginBottom: theme.spacing.lg,
              objectFit: "cover",
            }}
          />
        )}

        {/* Name */}
        <h1
          style={{
            fontSize: theme.typography.fontSizeXl,
            fontWeight: 700,
            margin: 0,
            marginBottom: theme.spacing.sm / 2,
            textAlign: "center",
          }}
        >
          {name}
        </h1>

        {/* Role */}
        <p
          style={{
            fontSize: theme.typography.fontSizeMd,
            color: theme.colors.accent,
            margin: 0,
            marginBottom: theme.spacing.md,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          {role}
        </p>

        {/* Bio */}
        {bio && (
          <p
            style={{
              fontSize: theme.typography.fontSizeSm,
              color: theme.colors.textMuted,
              margin: 0,
              marginBottom: theme.spacing.lg,
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            {bio}
          </p>
        )}

        {/* Social links */}
        {socials && socials.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: theme.spacing.sm,
              justifyContent: "center",
            }}
          >
            {socials.map((social, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: theme.radii.md,
                  padding: "12px 20px",
                }}
              >
                <span
                  style={{
                    fontSize: theme.typography.fontSizeSm,
                    color: theme.colors.textMuted,
                    marginRight: theme.spacing.sm / 2,
                  }}
                >
                  {social.platform}:
                </span>
                <span
                  style={{
                    fontSize: theme.typography.fontSizeSm,
                    fontWeight: 600,
                  }}
                >
                  {social.handle}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
