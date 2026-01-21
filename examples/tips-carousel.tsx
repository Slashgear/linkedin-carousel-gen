/**
 * Example: Tips Carousel
 * A guide/tips style carousel for sharing knowledge
 */
import { renderSlidesToPdf } from "../src/lib/render";
import { Slide, Title, Subtitle, Badge, CheckItem, CTABox } from "../src/slides/components";
import { blueTheme } from "../src/theme";

const theme = blueTheme;

const slides = [
  // Cover
  <Slide theme={theme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={theme}>5 TIPS</Badge>
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
      <Title theme={theme} highlight="Productivity">
        Boost Your Productivity
      </Title>
      <Subtitle theme={theme}>Simple habits for developers</Subtitle>
    </div>
  </Slide>,

  // Tips list
  <Slide theme={theme}>
    <Badge theme={theme} style={{ marginBottom: 40 }}>
      THE ESSENTIALS
    </Badge>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CheckItem theme={theme} highlight="morning">
        Start your morning with the hardest task
      </CheckItem>
      <CheckItem theme={theme} highlight="breaks">
        Take regular breaks every 90 minutes
      </CheckItem>
      <CheckItem theme={theme} highlight="notifications">
        Turn off notifications while coding
      </CheckItem>
      <CheckItem theme={theme} highlight="tomorrow">
        Plan tomorrow before leaving today
      </CheckItem>
    </div>
  </Slide>,

  // CTA
  <Slide theme={theme} style={{ alignItems: "center", justifyContent: "center" }}>
    <Title theme={theme} style={{ textAlign: "center", marginBottom: 16 }}>
      Want more tips?
    </Title>
    <Subtitle theme={theme} style={{ textAlign: "center", marginBottom: 48 }}>
      Follow for daily productivity hacks
    </Subtitle>
    <CTABox theme={theme} title="Follow me" url="@devtips" />
  </Slide>,
];

const outputPath = "out/tips-carousel.pdf";
console.log("Generating tips carousel...");
const pdfBytes = await renderSlidesToPdf(slides);
await Bun.write(outputPath, pdfBytes);
console.log(`Saved to ${outputPath}`);
