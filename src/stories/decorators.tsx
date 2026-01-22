import type { ReactNode, JSX } from "react";
import type { Decorator } from "@storybook/react";
import { ThemeProvider } from "../theme/context";
import type { Theme } from "../theme";

export const SLIDE_SIZE = 1080;
export const PREVIEW_SCALE = 0.6;
export const GALLERY_SCALE = 0.4;

export function SlidePreview({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: SLIDE_SIZE * PREVIEW_SCALE,
        height: SLIDE_SIZE * PREVIEW_SCALE,
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: SLIDE_SIZE,
          height: SLIDE_SIZE,
          transform: `scale(${PREVIEW_SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div style={{ width: SLIDE_SIZE, height: SLIDE_SIZE }}>{children}</div>
      </div>
    </div>
  );
}

export const withSlidePreview: Decorator = (Story, context) => {
  const theme = context.args.theme as Theme | undefined;

  const content = (
    <SlidePreview>
      <Story />
    </SlidePreview>
  );

  if (theme) {
    return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
  }

  return content;
};

export function GallerySlidePreview({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: SLIDE_SIZE * GALLERY_SCALE,
        height: SLIDE_SIZE * GALLERY_SCALE,
        overflow: "hidden",
        borderRadius: 6,
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          width: SLIDE_SIZE,
          height: SLIDE_SIZE,
          transform: `scale(${GALLERY_SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div style={{ width: SLIDE_SIZE, height: SLIDE_SIZE }}>{children}</div>
      </div>
    </div>
  );
}

interface GalleryPreviewProps {
  slides: JSX.Element[];
  pdfUrl: string;
  title: string;
  description?: string;
}

export function GalleryPreview({ slides, pdfUrl, title, description }: GalleryPreviewProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>{title}</h2>
        {description && <p style={{ margin: 0, fontSize: 14, color: "#666" }}>{description}</p>}
        <a
          href={pdfUrl}
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            backgroundColor: "#0066cc",
            color: "white",
            borderRadius: 6,
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            width: "fit-content",
          }}
        >
          Download PDF
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {slides.map((slide, index) => (
          <GallerySlidePreview key={index}>{slide}</GallerySlidePreview>
        ))}
      </div>
    </div>
  );
}
