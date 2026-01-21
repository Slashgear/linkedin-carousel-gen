import type { ReactNode } from "react";
import type { Decorator } from "@storybook/react";
import { ThemeProvider } from "../theme/context";
import type { Theme } from "../theme";

export const SLIDE_SIZE = 1080;
export const PREVIEW_SCALE = 0.6;

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
