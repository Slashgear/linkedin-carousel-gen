import { renderSlidesToPdf } from "./src/lib/render";
import { veilleDiscordSlides } from "./src/slides/veille-discord";

const outputPath = "out/lyonjs-veille-discord.pdf";

console.log("Generating carousel...");
const pdfBytes = await renderSlidesToPdf(veilleDiscordSlides);

await Bun.write(outputPath, pdfBytes);
console.log(`Carousel saved to ${outputPath}`);
