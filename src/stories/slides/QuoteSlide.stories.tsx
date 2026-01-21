import type { Meta, StoryObj } from "@storybook/react";
import { QuoteSlide } from "../../slides/generic";

const meta: Meta<typeof QuoteSlide> = {
  title: "Slides/QuoteSlide",
  component: QuoteSlide,
};

export default meta;
type Story = StoryObj<typeof QuoteSlide>;

export const Default: Story = {
  args: {
    quote: "Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais.",
    author: "Cory House",
    role: "Software Architect",
    badge: "CITATION",
  },
};

export const WithAvatar: Story = {
  args: {
    quote: "La simplicité est la sophistication suprême.",
    author: "Leonardo da Vinci",
    role: "Artiste & Inventeur",
    avatarUrl: "avatar.svg",
  },
};

export const LongQuote: Story = {
  args: {
    quote:
      "Tout le monde peut écrire du code qu'un ordinateur comprend. Les bons programmeurs écrivent du code que les humains comprennent.",
    author: "Martin Fowler",
    role: "Chief Scientist, ThoughtWorks",
  },
};

export const WithLogo: Story = {
  args: {
    quote: "Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais.",
    author: "Cory House",
    role: "Software Architect",
    badge: "CITATION",
    logoUrl: "logo.svg",
  },
};
