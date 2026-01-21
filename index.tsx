import { renderSlidesToPdf } from "./src/lib/render";
import { Slide, Title, Subtitle, Badge, StatBox, CheckItem, CTABox } from "./src/slides/components";
import { blueTheme } from "./src/theme";

const theme = blueTheme;

// Example carousel using base components
const slides = [
  // Slide 1: Cover
  <Slide theme={theme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={theme}>TIPS</Badge>
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
      <Title theme={theme} highlight="Better">
        5 Tips for Better Code
      </Title>
      <Subtitle theme={theme}>A practical guide for developers</Subtitle>
    </div>
  </Slide>,

  // Slide 2: Checklist
  <Slide theme={theme}>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
      <Badge theme={theme} style={{ marginRight: 16 }}>
        GUIDE
      </Badge>
    </div>
    <Title theme={theme} style={{ marginBottom: 40 }}>
      The Essentials
    </Title>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CheckItem theme={theme} highlight="tests">
        Write tests first
      </CheckItem>
      <CheckItem theme={theme} highlight="small">
        Keep functions small
      </CheckItem>
      <CheckItem theme={theme} highlight="Document">
        Document your decisions
      </CheckItem>
      <CheckItem theme={theme} highlight="Review">
        Review code regularly
      </CheckItem>
    </div>
  </Slide>,

  // Slide 3: Stats
  <Slide theme={theme}>
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 40 }}>
      <Badge theme={theme}>RESULTS</Badge>
    </div>
    <Title theme={theme} style={{ marginBottom: 40 }}>
      The Impact
    </Title>
    <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
      <StatBox theme={theme} value="50%" label="Less bugs" />
      <StatBox theme={theme} value="2x" label="Faster reviews" />
      <StatBox theme={theme} value="100%" label="Confidence" />
    </div>
  </Slide>,

  // Slide 4: CTA
  <Slide theme={theme} style={{ alignItems: "center", justifyContent: "center" }}>
    <Title theme={theme} style={{ textAlign: "center", marginBottom: 16 }}>
      Ready to improve?
    </Title>
    <Subtitle theme={theme} style={{ textAlign: "center", marginBottom: 48 }}>
      Start applying these tips today
    </Subtitle>
    <CTABox theme={theme} title="Learn more" url="example.com/tips" />
  </Slide>,
];

const outputPath = "out/example-carousel.pdf";

console.log("Generating carousel...");
const pdfBytes = await renderSlidesToPdf(slides);

await Bun.write(outputPath, pdfBytes);
console.log(`Carousel saved to ${outputPath}`);
