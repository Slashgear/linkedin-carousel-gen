import type { Meta, StoryObj } from "@storybook/react";
import { Slide, Title, Subtitle, Badge, StatBox, CTABox } from "../../slides/components";
import { greenTheme } from "../../theme";
import { GalleryPreview } from "../decorators";

const theme = greenTheme;

const slides = [
  // Announcement
  <Slide theme={theme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={theme}>NEW RELEASE</Badge>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 32,
        borderLeft: `4px solid ${theme.colors.accent}`,
      }}
    >
      <Title theme={theme} highlight="v2.0">
        Introducing v2.0
      </Title>
      <Subtitle theme={theme}>The update you have been waiting for</Subtitle>
    </div>
  </Slide>,

  // Features
  <Slide theme={theme}>
    <Badge theme={theme} style={{ marginBottom: 40 }}>
      WHATS NEW
    </Badge>
    <Title theme={theme} style={{ marginBottom: 40 }}>
      Key Features
    </Title>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          display: "flex",
          backgroundColor: theme.colors.surface,
          padding: 24,
          borderRadius: 12,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <span style={{ fontSize: 28 }}>
          <span style={{ color: theme.colors.accent, fontWeight: 700 }}>Lightning fast</span> - 10x
          performance boost
        </span>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: theme.colors.surface,
          padding: 24,
          borderRadius: 12,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <span style={{ fontSize: 28 }}>
          <span style={{ color: theme.colors.accent, fontWeight: 700 }}>New UI</span> - Modern and
          intuitive design
        </span>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: theme.colors.surface,
          padding: 24,
          borderRadius: 12,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <span style={{ fontSize: 28 }}>
          <span style={{ color: theme.colors.accent, fontWeight: 700 }}>API v2</span> - Better
          developer experience
        </span>
      </div>
    </div>
  </Slide>,

  // Stats
  <Slide theme={theme}>
    <Badge theme={theme} style={{ marginBottom: 40 }}>
      BY THE NUMBERS
    </Badge>
    <Title theme={theme} style={{ marginBottom: 40 }}>
      Beta Results
    </Title>
    <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
      <StatBox theme={theme} value="10x" label="Faster" />
      <StatBox theme={theme} value="50%" label="Less code" />
      <StatBox theme={theme} value="99%" label="Uptime" />
    </div>
  </Slide>,

  // CTA
  <Slide theme={theme} style={{ alignItems: "center", justifyContent: "center" }}>
    <Title theme={theme} style={{ textAlign: "center", marginBottom: 16 }}>
      Ready to upgrade?
    </Title>
    <Subtitle theme={theme} style={{ textAlign: "center", marginBottom: 48 }}>
      Available now for all users
    </Subtitle>
    <CTABox theme={theme} title="Get started" url="example.com/v2" />
  </Slide>,
];

function ProductLaunchCarouselGallery() {
  return (
    <GalleryPreview
      slides={slides}
      pdfUrl="/downloads/product-launch.pdf"
      title="Product Launch Carousel"
      description="Announce a new product or feature. Uses the green theme."
    />
  );
}

const meta: Meta<typeof ProductLaunchCarouselGallery> = {
  title: "Galleries/Product Launch Carousel",
  component: ProductLaunchCarouselGallery,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ProductLaunchCarouselGallery>;

export const Default: Story = {};
