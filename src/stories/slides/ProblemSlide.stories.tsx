import type { Meta, StoryObj } from "@storybook/react";
import { ProblemSlide } from "../../slides/generic";

const meta: Meta<typeof ProblemSlide> = {
  title: "Slides/ProblemSlide",
  component: ProblemSlide,
};

export default meta;
type Story = StoryObj<typeof ProblemSlide>;

export const Default: Story = {
  args: {
    title: "Les problèmes courants",
    badge: "PROBLÈME",
    problems: [
      { text: "Pas assez de temps pour coder" },
      { text: "Documentation obsolète" },
      { text: "Tests difficiles à maintenir" },
    ],
  },
};

export const WithCustomIcons: Story = {
  args: {
    title: "Ce qui ne fonctionne pas",
    problems: [
      { text: "Meetings trop longs", icon: "⏰" },
      { text: "Communication floue", icon: "💬" },
      { text: "Deadlines irréalistes", icon: "📅" },
    ],
  },
};

export const SingleProblem: Story = {
  args: {
    title: "Le problème principal",
    badge: "FOCUS",
    problems: [{ text: "Le code legacy ralentit toute l'équipe", icon: "🐌" }],
  },
};
