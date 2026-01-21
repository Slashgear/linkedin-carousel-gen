import type { Meta, StoryObj } from "@storybook/react";
import { ProcessSlide } from "../../slides/generic";

const meta: Meta<typeof ProcessSlide> = {
  title: "Slides/ProcessSlide",
  component: ProcessSlide,
};

export default meta;
type Story = StoryObj<typeof ProcessSlide>;

export const Default: Story = {
  args: {
    title: "Notre processus",
    badge: "MÉTHODE",
    steps: [
      { title: "Découverte", description: "Comprendre vos besoins" },
      { title: "Conception", description: "Définir l'architecture" },
      { title: "Développement", description: "Implémenter la solution" },
      { title: "Livraison", description: "Déployer et itérer" },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    title: "Comment ça marche",
    steps: [
      { title: "Inscrivez-vous", description: "Créez votre compte en 2 min", icon: "📝" },
      { title: "Configurez", description: "Personnalisez vos préférences", icon: "⚙️" },
      { title: "Lancez", description: "Commencez à utiliser", icon: "🚀" },
    ],
  },
};

export const Simple: Story = {
  args: {
    title: "Les étapes",
    badge: "GUIDE",
    steps: [{ title: "Étape 1" }, { title: "Étape 2" }, { title: "Étape 3" }],
  },
};
