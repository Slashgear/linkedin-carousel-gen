import type { Preview } from "@storybook/react";
import {
  darkTheme,
  lightTheme,
  blueTheme,
  greenTheme,
  redTheme,
  purpleTheme,
  orangeTheme,
} from "../src/theme";
import { withSlidePreview } from "../src/stories/decorators";
import "./preview.css";

export const themes = {
  dark: darkTheme,
  light: lightTheme,
  blue: blueTheme,
  green: greenTheme,
  red: redTheme,
  purple: purpleTheme,
  orange: orangeTheme,
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#ffffff" },
        { name: "gray", value: "#333333" },
      ],
    },
  },
  argTypes: {
    theme: {
      control: "select",
      options: Object.keys(themes),
      mapping: themes,
      description: "Theme preset",
    },
  },
  args: {
    theme: darkTheme,
  },
  decorators: [withSlidePreview],
};

export default preview;
