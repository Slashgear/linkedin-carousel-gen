import type { Meta, StoryObj } from "@storybook/react";
import { CTASlide } from "../../slides/generic";

const meta: Meta<typeof CTASlide> = {
  title: "Slides/CTASlide",
  component: CTASlide,
};

export default meta;
type Story = StoryObj<typeof CTASlide>;

export const Default: Story = {
  args: {
    title: "Prêt à partager votre passion ?",
    subtitle: "Soumettez votre talk dès maintenant",
    ctaLabel: "Proposez votre sujet",
    ctaUrl: "conference-hall.io/lyon-js",
    icon: "JS",
  },
};

export const WithBadge: Story = {
  args: {
    title: "Rejoignez-nous !",
    subtitle: "Plus de 1000 développeurs nous font confiance",
    ctaLabel: "Commencer gratuitement",
    ctaUrl: "example.com/signup",
    badge: "GRATUIT",
  },
};

export const Minimal: Story = {
  args: {
    title: "En savoir plus",
    ctaLabel: "Visitez notre site",
    ctaUrl: "example.com",
  },
};

export const WithEmoji: Story = {
  args: {
    title: "Prêt pour l'aventure ?",
    subtitle: "Lancez-vous dès aujourd'hui",
    ctaLabel: "S'inscrire",
    ctaUrl: "signup.example.com",
    icon: "🚀",
  },
};

export const WithLogo: Story = {
  args: {
    title: "Prêt à partager votre passion ?",
    subtitle: "Soumettez votre talk dès maintenant",
    ctaLabel: "Proposez votre sujet",
    ctaUrl: "conference-hall.io/lyon-js",
    badge: "CALL FOR SPEAKERS",
    logoUrl: "logo.svg",
  },
};
