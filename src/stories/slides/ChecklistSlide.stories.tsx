import type { Meta, StoryObj } from "@storybook/react";
import { ChecklistSlide } from "../../slides/generic";

const meta: Meta<typeof ChecklistSlide> = {
  title: "Slides/ChecklistSlide",
  component: ChecklistSlide,
};

export default meta;
type Story = StoryObj<typeof ChecklistSlide>;

export const AllChecked: Story = {
  args: {
    title: "Le CFP LyonJS, c'est :",
    badge: "CHECKLIST",
    items: [
      { text: "Ouvert toute l'année", highlight: "Ouvert" },
      { text: "10 à 45 min de talk", highlight: "10 à 45 min" },
      { text: "Tous niveaux bienvenus", highlight: "Tous niveaux" },
      { text: "JS/TS et écosystème web", highlight: "JS/TS" },
    ],
  },
};

export const PartiallyChecked: Story = {
  args: {
    title: "Votre progression",
    items: [
      { text: "Créer un compte", checked: true },
      { text: "Configurer le projet", checked: true },
      { text: "Écrire les tests", checked: false },
      { text: "Déployer en production", checked: false },
    ],
  },
};

export const WithHighlights: Story = {
  args: {
    title: "Ce qu'on offre",
    badge: "AVANTAGES",
    items: [
      { text: "Support 24/7 inclus", highlight: "24/7" },
      { text: "Mises à jour gratuites", highlight: "gratuites" },
      { text: "Formation personnalisée", highlight: "personnalisée" },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    title: "Le CFP LyonJS, c'est :",
    badge: "CHECKLIST",
    logoUrl: "logo.svg",
    items: [
      { text: "Ouvert toute l'année", highlight: "Ouvert" },
      { text: "10 à 45 min de talk", highlight: "10 à 45 min" },
      { text: "Tous niveaux bienvenus", highlight: "Tous niveaux" },
      { text: "JS/TS et écosystème web", highlight: "JS/TS" },
    ],
  },
};
