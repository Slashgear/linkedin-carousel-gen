import type { Meta, StoryObj } from "@storybook/react";
import { StatsSlide } from "../../slides/generic";

const meta: Meta<typeof StatsSlide> = {
  title: "Slides/StatsSlide",
  component: StatsSlide,
};

export default meta;
type Story = StoryObj<typeof StatsSlide>;

export const Row: Story = {
  args: {
    title: "Nos résultats",
    badge: "STATS",
    layout: "row",
    stats: [
      { value: "50+", label: "Participants" },
      { value: "12", label: "Meetups/an" },
      { value: "100%", label: "Satisfaction" },
    ],
  },
};

export const Grid: Story = {
  args: {
    title: "En chiffres",
    layout: "grid",
    stats: [
      { value: "10K+", label: "Utilisateurs" },
      { value: "99.9%", label: "Uptime" },
      { value: "< 50ms", label: "Latence" },
      { value: "24/7", label: "Support" },
    ],
  },
};

export const WithoutTitle: Story = {
  args: {
    badge: "IMPACT",
    stats: [
      { value: "3x", label: "Plus rapide" },
      { value: "-50%", label: "Bugs" },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    title: "Nos résultats",
    badge: "STATS",
    layout: "row",
    logoUrl: "logo.svg",
    stats: [
      { value: "50+", label: "Participants" },
      { value: "12", label: "Meetups/an" },
      { value: "100%", label: "Satisfaction" },
    ],
  },
};
