import type { Meta, StoryObj } from "@storybook/react";
import { ComparisonSlide } from "../../slides/generic";

const meta: Meta<typeof ComparisonSlide> = {
  title: "Slides/ComparisonSlide",
  component: ComparisonSlide,
};

export default meta;
type Story = StoryObj<typeof ComparisonSlide>;

export const BeforeAfter: Story = {
  args: {
    title: "La transformation",
    badge: "AVANT/APRÈS",
    mode: "before-after",
    leftTitle: "Avant",
    rightTitle: "Après",
    leftItems: [
      { text: "Déploiements manuels" },
      { text: "Tests sporadiques" },
      { text: "Documentation absente" },
    ],
    rightItems: [
      { text: "CI/CD automatisé" },
      { text: "TDD systématique" },
      { text: "Docs as Code" },
    ],
  },
};

export const VsMode: Story = {
  args: {
    title: "Quel choix faire ?",
    mode: "vs",
    leftTitle: "Option A",
    rightTitle: "Option B",
    leftItems: [{ text: "Gratuit" }, { text: "Open source" }, { text: "Communauté active" }],
    rightItems: [{ text: "Support pro" }, { text: "SLA garanti" }, { text: "Features avancées" }],
  },
};

export const WithoutTitle: Story = {
  args: {
    mode: "before-after",
    leftTitle: "Sans nous",
    rightTitle: "Avec nous",
    leftItems: [{ text: "Stress" }, { text: "Retards" }],
    rightItems: [{ text: "Sérénité" }, { text: "Livraisons à l'heure" }],
  },
};
