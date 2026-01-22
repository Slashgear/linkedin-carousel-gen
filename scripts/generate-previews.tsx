/**
 * Generate PNG previews of example carousels for README
 */
import { renderSlideToPng } from "../src/lib/render";
import { Slide, Title, Subtitle, Badge, CheckItem, CTABox, StatBox } from "../src/slides/components";
import { blueTheme, greenTheme, purpleTheme } from "../src/theme";

// Tips carousel - first slide
const tipsSlide = (
  <Slide theme={blueTheme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={blueTheme}>5 TIPS</Badge>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 32,
        borderLeft: `4px solid ${blueTheme.colors.accent}`,
      }}
    >
      <Title theme={blueTheme} highlight="Productivity">
        Boost Your Productivity
      </Title>
      <Subtitle theme={blueTheme}>Simple habits for developers</Subtitle>
    </div>
  </Slide>
);

// Product launch - first slide
const productSlide = (
  <Slide theme={greenTheme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={greenTheme}>NEW RELEASE</Badge>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 32,
        borderLeft: `4px solid ${greenTheme.colors.accent}`,
      }}
    >
      <Title theme={greenTheme} highlight="v2.0">
        Introducing v2.0
      </Title>
      <Subtitle theme={greenTheme}>The update you have been waiting for</Subtitle>
    </div>
  </Slide>
);

// Event promo - first slide
const eventSlide = (
  <Slide theme={purpleTheme} style={{ justifyContent: "flex-end" }}>
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={purpleTheme}>MARCH 2026</Badge>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 32,
        borderLeft: `4px solid ${purpleTheme.colors.accent}`,
      }}
    >
      <Title theme={purpleTheme} highlight="DevConf">
        Join us at DevConf
      </Title>
      <Subtitle theme={purpleTheme}>The biggest developer conference of the year</Subtitle>
    </div>
  </Slide>
);

console.log("Generating preview images...");

const [tipsPng, productPng, eventPng] = await Promise.all([
  renderSlideToPng(tipsSlide),
  renderSlideToPng(productSlide),
  renderSlideToPng(eventSlide),
]);

await Promise.all([
  Bun.write("assets/previews/tips-carousel.png", tipsPng),
  Bun.write("assets/previews/product-launch.png", productPng),
  Bun.write("assets/previews/event-promo.png", eventPng),
]);

console.log("Done! Previews saved to assets/previews/");
