import type { Meta, StoryObj } from "@storybook/react";
import { CoverSlide } from "../../slides/generic";

const meta: Meta<typeof CoverSlide> = {
  title: "Slides/CoverSlide",
  component: CoverSlide,
};

export default meta;
type Story = StoryObj<typeof CoverSlide>;

export const Default: Story = {
  args: {
    title: "Et si c'était VOUS sur scène ?",
    subtitle: "Devenez speaker en 2026",
    badge: "LyonJS",
    highlight: "VOUS",
  },
};

export const WithoutBadge: Story = {
  args: {
    title: "5 conseils pour réussir vos présentations",
    subtitle: "Un guide pratique",
  },
};

export const WithHighlight: Story = {
  args: {
    title: "Découvrez les secrets du succès",
    highlight: "secrets",
    badge: "TIPS",
  },
};

export const MinimalTitle: Story = {
  args: {
    title: "Hello World",
  },
};

export const WithLogo: Story = {
  args: {
    title: "Et si c'était VOUS sur scène ?",
    subtitle: "Devenez speaker en 2026",
    badge: "LyonJS",
    highlight: "VOUS",
    logoUrl: "logo.svg",
  },
};

export const WithLargeLogo: Story = {
  args: {
    title: "Et si c'était VOUS sur scène ?",
    subtitle: "Devenez speaker en 2026",
    badge: "LyonJS",
    highlight: "VOUS",
    logoUrl: "logo.svg",
    logoSize: 96,
  },
};
