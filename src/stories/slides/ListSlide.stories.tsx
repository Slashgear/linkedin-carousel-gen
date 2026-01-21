import type { Meta, StoryObj } from "@storybook/react";
import { ListSlide } from "../../slides/generic";

const meta: Meta<typeof ListSlide> = {
  title: "Slides/ListSlide",
  component: ListSlide,
};

export default meta;
type Story = StoryObj<typeof ListSlide>;

export const Numbered: Story = {
  args: {
    title: "5 étapes pour réussir",
    badge: "GUIDE",
    numbered: true,
    items: [
      { text: "Définir les objectifs" },
      { text: "Planifier les sprints" },
      { text: "Développer en itérations" },
      { text: "Tester régulièrement" },
      { text: "Livrer et itérer" },
    ],
  },
};

export const Bulleted: Story = {
  args: {
    title: "Ce qu'il faut retenir",
    numbered: false,
    items: [
      { text: "La simplicité prime" },
      { text: "Automatisez tout" },
      { text: "Documentez vos choix" },
    ],
  },
};

export const WithHighlights: Story = {
  args: {
    title: "Les points clés",
    badge: "RÉSUMÉ",
    items: [
      { text: "Focus sur la valeur utilisateur", highlight: "valeur" },
      { text: "Tests avant tout", highlight: "Tests" },
      { text: "Itérations courtes", highlight: "courtes" },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    title: "5 étapes pour réussir",
    badge: "GUIDE",
    numbered: true,
    logoUrl: "logo.svg",
    items: [
      { text: "Définir les objectifs" },
      { text: "Planifier les sprints" },
      { text: "Développer en itérations" },
      { text: "Tester régulièrement" },
      { text: "Livrer et itérer" },
    ],
  },
};

export const WithLargeLogo: Story = {
  args: {
    title: "5 étapes pour réussir",
    badge: "GUIDE",
    numbered: true,
    logoUrl: "logo.svg",
    logoSize: 96,
    items: [
      { text: "Définir les objectifs" },
      { text: "Planifier les sprints" },
      { text: "Développer en itérations" },
    ],
  },
};
