import type { Meta, StoryObj } from "@storybook/react";
import { SolutionSlide } from "../../slides/generic";

const meta: Meta<typeof SolutionSlide> = {
  title: "Slides/SolutionSlide",
  component: SolutionSlide,
};

export default meta;
type Story = StoryObj<typeof SolutionSlide>;

export const Vertical: Story = {
  args: {
    title: "La solution",
    badge: "SOLUTION",
    layout: "vertical",
    solutions: [
      { title: "Automatisation", description: "Scripts CI/CD robustes", icon: "⚡" },
      { title: "Documentation", description: "Docs as Code", icon: "📚" },
      { title: "Tests", description: "TDD et coverage", icon: "✅" },
    ],
  },
};

export const Grid: Story = {
  args: {
    title: "Nos avantages",
    badge: "FEATURES",
    layout: "grid",
    solutions: [
      { title: "Rapide", description: "Performance optimale", icon: "🚀" },
      { title: "Simple", description: "API intuitive", icon: "✨" },
      { title: "Fiable", description: "99.9% uptime", icon: "🛡️" },
      { title: "Évolutif", description: "Scale à volonté", icon: "📈" },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    title: "Comment on résout ça",
    solutions: [
      { title: "Refactoring progressif", description: "Petits changements, gros impacts" },
      { title: "Code review systématique", description: "Qualité garantie" },
    ],
  },
};
