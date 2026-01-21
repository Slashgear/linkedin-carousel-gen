/**
 * Example: Event Promotion Carousel
 * Promote a conference, meetup, or webinar
 */
import { renderSlidesToPdf } from "../src/lib/render";
import { Slide, Title, Subtitle, Badge, StatBox, CTABox } from "../src/slides/components";
import { purpleTheme } from "../src/theme";

const theme = purpleTheme;

const slides = [
  // Event announcement
  <Slide theme={theme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={theme}>MARCH 2026</Badge>
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
      <Title theme={theme} highlight="DevConf">
        Join us at DevConf
      </Title>
      <Subtitle theme={theme}>The biggest developer conference of the year</Subtitle>
    </div>
  </Slide>,

  // What to expect
  <Slide theme={theme}>
    <Badge theme={theme} style={{ marginBottom: 40 }}>
      WHAT TO EXPECT
    </Badge>
    <Title theme={theme} style={{ marginBottom: 40 }}>
      3 Days of Learning
    </Title>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.colors.surface,
          padding: 24,
          borderRadius: 12,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: theme.colors.accent,
            color: "#000",
            marginRight: 20,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          1
        </div>
        <span style={{ fontSize: 28 }}>50+ Technical talks</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.colors.surface,
          padding: 24,
          borderRadius: 12,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: theme.colors.accent,
            color: "#000",
            marginRight: 20,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          2
        </div>
        <span style={{ fontSize: 28 }}>Hands-on workshops</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.colors.surface,
          padding: 24,
          borderRadius: 12,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: theme.colors.accent,
            color: "#000",
            marginRight: 20,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          3
        </div>
        <span style={{ fontSize: 28 }}>Networking parties</span>
      </div>
    </div>
  </Slide>,

  // Stats
  <Slide theme={theme}>
    <Badge theme={theme} style={{ marginBottom: 40 }}>
      LAST YEAR
    </Badge>
    <div
      style={{ display: "flex", gap: 24, justifyContent: "center", flex: 1, alignItems: "center" }}
    >
      <StatBox theme={theme} value="2000+" label="Attendees" />
      <StatBox theme={theme} value="50" label="Speakers" />
      <StatBox theme={theme} value="98%" label="Satisfaction" />
    </div>
  </Slide>,

  // CTA
  <Slide theme={theme} style={{ alignItems: "center", justifyContent: "center" }}>
    <Title theme={theme} style={{ textAlign: "center", marginBottom: 16 }}>
      Early bird tickets available
    </Title>
    <Subtitle theme={theme} style={{ textAlign: "center", marginBottom: 48 }}>
      Save 30% until February
    </Subtitle>
    <CTABox theme={theme} title="Get your ticket" url="devconf.io/tickets" />
  </Slide>,
];

const outputPath = "out/event-promo.pdf";
console.log("Generating event promo carousel...");
const pdfBytes = await renderSlidesToPdf(slides);
await Bun.write(outputPath, pdfBytes);
console.log(`Saved to ${outputPath}`);
