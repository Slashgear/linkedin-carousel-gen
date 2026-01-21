import type { Meta, StoryObj } from "@storybook/react";
import { Slide, Badge, Title, Subtitle, StatBox, CheckItem } from "../slides/components";
import {
  darkTheme,
  lightTheme,
  blueTheme,
  greenTheme,
  redTheme,
  purpleTheme,
  orangeTheme,
  type Theme,
} from "../theme";

const ThemeShowcase = ({ theme }: { theme: Theme }) => (
  <Slide theme={theme}>
    <div style={{ display: "flex", marginBottom: 24 }}>
      <Badge theme={theme}>BADGE</Badge>
    </div>
    <Title theme={theme}>{`Theme: ${theme.name}`}</Title>
    <Subtitle theme={theme}>This is a subtitle demonstrating the theme colors</Subtitle>
    <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
      <StatBox theme={theme} value="42" label="Stat" />
      <StatBox theme={theme} value="100%" label="Complete" />
    </div>
    <div style={{ marginTop: 24 }}>
      <CheckItem theme={theme} highlight="highlighted">
        A checklist item with highlighted text
      </CheckItem>
    </div>
  </Slide>
);

const meta: Meta<typeof ThemeShowcase> = {
  title: "Theme/Overview",
  component: ThemeShowcase,
};

export default meta;
type Story = StoryObj<typeof ThemeShowcase>;

export const Dark: Story = {
  args: { theme: darkTheme },
};

export const Light: Story = {
  args: { theme: lightTheme },
};

export const Blue: Story = {
  args: { theme: blueTheme },
};

export const Green: Story = {
  args: { theme: greenTheme },
};

export const Red: Story = {
  args: { theme: redTheme },
};

export const Purple: Story = {
  args: { theme: purpleTheme },
};

export const Orange: Story = {
  args: { theme: orangeTheme },
};
