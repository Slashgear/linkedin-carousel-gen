import satori, { type FontWeight } from "satori";
import { Resvg } from "@resvg/resvg-js";
import { PDFDocument } from "pdf-lib";
import type { ReactNode } from "react";

const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1080;

let fontsLoaded: { name: string; data: ArrayBuffer; weight: FontWeight }[] | null = null;

async function loadFonts() {
  if (fontsLoaded) return fontsLoaded;

  const [interRegular, interBold] = await Promise.all([
    Bun.file("assets/fonts/Inter-Regular.ttf").arrayBuffer(),
    Bun.file("assets/fonts/Inter-Bold.ttf").arrayBuffer(),
  ]);

  fontsLoaded = [
    { name: "Inter", data: interRegular, weight: 400 as FontWeight },
    { name: "Inter", data: interBold, weight: 700 as FontWeight },
  ];

  return fontsLoaded;
}

export async function renderSlideToSvg(element: ReactNode): Promise<string> {
  const fonts = await loadFonts();

  return satori(element, {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    fonts,
  });
}

export async function renderSlideToPng(element: ReactNode): Promise<Buffer> {
  const svg = await renderSlideToSvg(element);
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: SLIDE_WIDTH },
  });
  return Buffer.from(resvg.render().asPng());
}

export async function renderSlidesToPdf(slides: ReactNode[]): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();

  for (const slide of slides) {
    const pngBytes = await renderSlideToPng(slide);
    const pngImage = await pdfDoc.embedPng(pngBytes);

    const page = pdfDoc.addPage([SLIDE_WIDTH, SLIDE_HEIGHT]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
    });
  }

  return pdfDoc.save();
}

export { SLIDE_WIDTH, SLIDE_HEIGHT };
