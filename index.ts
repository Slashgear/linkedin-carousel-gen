import { renderSlidesToPdf } from "./src/lib/render";
import { exampleSlides } from "./src/slides/example";

const outputPath = "out/example-carousel.pdf";

console.log("Generating carousel...");
const pdfBytes = await renderSlidesToPdf(exampleSlides);

await Bun.write(outputPath, pdfBytes);
console.log(`Carousel saved to ${outputPath}`);
