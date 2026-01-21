import type { Meta, StoryObj } from "@storybook/react";
import { ImageTextSlide } from "../../slides/generic";

const meta: Meta<typeof ImageTextSlide> = {
  title: "Slides/ImageTextSlide",
  component: ImageTextSlide,
};

export default meta;
type Story = StoryObj<typeof ImageTextSlide>;

export const Bottom: Story = {
  args: {
    title: "Découvrez notre univers",
    subtitle: "Une expérience unique vous attend",
    imageUrl: "photo.svg",
    position: "bottom",
    badge: "NOUVEAU",
  },
};

export const Top: Story = {
  args: {
    title: "Bienvenue",
    subtitle: "Explorez les possibilités",
    imageUrl: "photo.svg",
    position: "top",
  },
};

export const Center: Story = {
  args: {
    title: "Au cœur de l'action",
    imageUrl: "photo.svg",
    position: "center",
  },
};

export const NoOverlay: Story = {
  args: {
    title: "Titre sans overlay",
    imageUrl: "photo.svg",
    overlay: false,
  },
};
