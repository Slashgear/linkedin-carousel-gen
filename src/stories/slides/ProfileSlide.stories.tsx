import type { Meta, StoryObj } from "@storybook/react";
import { ProfileSlide } from "../../slides/generic";

const meta: Meta<typeof ProfileSlide> = {
  title: "Slides/ProfileSlide",
  component: ProfileSlide,
};

export default meta;
type Story = StoryObj<typeof ProfileSlide>;

export const Full: Story = {
  args: {
    name: "Jean Dupont",
    role: "Senior Developer @ Company",
    bio: "Passionné de JavaScript depuis 10 ans, j'aime partager mes connaissances et contribuer à l'open source.",
    avatarUrl: "avatar.svg",
    badge: "SPEAKER",
    socials: [
      { platform: "Twitter", handle: "@jeandupont" },
      { platform: "GitHub", handle: "jeandupont" },
      { platform: "LinkedIn", handle: "in/jeandupont" },
    ],
  },
};

export const Minimal: Story = {
  args: {
    name: "Marie Martin",
    role: "Tech Lead",
  },
};

export const WithAvatar: Story = {
  args: {
    name: "Pierre Durand",
    role: "Full Stack Developer",
    avatarUrl: "avatar.svg",
    bio: "Building great products with great people.",
  },
};

export const WithSocials: Story = {
  args: {
    name: "Sophie Bernard",
    role: "DevRel Engineer",
    socials: [
      { platform: "Twitter", handle: "@sophieb" },
      { platform: "YouTube", handle: "SophieCodes" },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    name: "Jean Dupont",
    role: "Senior Developer @ Company",
    bio: "Passionné de JavaScript depuis 10 ans, j'aime partager mes connaissances.",
    avatarUrl: "avatar.svg",
    badge: "SPEAKER",
    logoUrl: "logo.svg",
    socials: [
      { platform: "Twitter", handle: "@jeandupont" },
      { platform: "GitHub", handle: "jeandupont" },
    ],
  },
};
