/**
 * Example: LyonJS Meetup Carousel
 * Announce a local tech meetup event
 */
import { renderSlidesToPdf, renderSlideToPng } from "../src/lib/render";
import { loadImageFromUrl } from "../src/lib/images";
import { Slide, Title, Subtitle, Badge, StatBox, CTABox } from "../src/slides/components";
import { darkTheme } from "../src/theme";

const theme = darkTheme;

// Load images
const [logoLyonJS, photoChafik, photoMatthias, bg1, bg2, bg3] = await Promise.all([
  loadImageFromUrl("https://www.lyonjs.org/lyonjs.png"),
  loadImageFromUrl(
    "https://media.licdn.com/dms/image/v2/D4E03AQFDKlP3tcrWZg/profile-displayphoto-shrink_800_800/B4EZcbFG2HHsAc-/0/1748506013514?e=1770854400&v=beta&t=ivYI6zcAt0BuyzTRiSKrKM06ZvlMZN8aZl0OebK1Zps",
  ),
  loadImageFromUrl(
    "https://media.licdn.com/dms/image/v2/D4D03AQGqX7FUf7XgwA/profile-displayphoto-crop_800_800/B4DZvqN6K.GcAI-/0/1769161073807?e=1770854400&v=beta&t=7kTUeJX91lsiSEoxhr8fr9K-SChSYDKaLP3KzTXqRiY",
  ),
  loadImageFromUrl("https://www.lyonjs.org/lyonjs100/lyonJS3.jpg"),
  loadImageFromUrl("https://www.lyonjs.org/lyonjs100/lyonJS5.jpg"),
  loadImageFromUrl("https://www.lyonjs.org/lyonjs100/lyonJS10.jpg"),
]);

const slides = [
  // Cover - Event announcement
  <Slide theme={theme} style={{ justifyContent: "flex-end" }}>
    <img
      src={bg1}
      width={1080}
      height={1080}
      style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.3 }}
    />
    <img
      src={logoLyonJS}
      width={120}
      height={120}
      style={{ position: "absolute", top: 60, right: 60, objectFit: "contain" }}
    />
    <div style={{ display: "flex", marginBottom: 40 }}>
      <Badge theme={theme}>#112 LYONJS</Badge>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.85)",
        padding: 32,
        borderLeft: `4px solid ${theme.colors.accent}`,
      }}
    >
      <Title theme={theme} highlight="SSE Chronicles">
        libmodulor et SSE Chronicles
      </Title>
      <Subtitle theme={theme}>Mardi 10 février 2026 - 19h00</Subtitle>
    </div>
  </Slide>,

  // Talk 1 - libmodulor
  <Slide theme={theme}>
    <img
      src={logoLyonJS}
      width={80}
      height={80}
      style={{ position: "absolute", top: 60, right: 60, objectFit: "contain" }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <img
        src={photoChafik}
        width={160}
        height={160}
        style={{
          borderRadius: 80,
          border: `4px solid ${theme.colors.accent}`,
          marginBottom: 32,
          objectFit: "cover",
        }}
      />
      <span
        style={{
          fontSize: theme.typography.fontSizeXl,
          fontWeight: 700,
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Chafik H
      </span>
      <span
        style={{
          fontSize: theme.typography.fontSizeMd,
          color: theme.colors.accent,
          marginBottom: 24,
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        libmodulor
      </span>
      <span
        style={{
          fontSize: theme.typography.fontSizeSm,
          color: theme.colors.textMuted,
          textAlign: "center",
          maxWidth: 700,
          lineHeight: 1.4,
        }}
      >
        Une nouvelle façon de créer des applications platform-agnostic. Documentation automatisée et
        tests intégrés.
      </span>
    </div>
  </Slide>,

  // Talk 2 - SSE Chronicles
  <Slide theme={theme}>
    <img
      src={logoLyonJS}
      width={80}
      height={80}
      style={{ position: "absolute", top: 60, right: 60, objectFit: "contain" }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <img
        src={photoMatthias}
        width={160}
        height={160}
        style={{
          borderRadius: 80,
          border: `4px solid ${theme.colors.accent}`,
          marginBottom: 32,
          objectFit: "cover",
        }}
      />
      <span
        style={{
          fontSize: theme.typography.fontSizeXl,
          fontWeight: 700,
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Matthias Dugué (m4dz)
      </span>
      <span
        style={{
          fontSize: theme.typography.fontSizeMd,
          color: theme.colors.accent,
          marginBottom: 24,
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        SSE Chronicles - Zenika Lyon
      </span>
      <span
        style={{
          fontSize: theme.typography.fontSizeSm,
          color: theme.colors.textMuted,
          textAlign: "center",
          maxWidth: 700,
          lineHeight: 1.4,
        }}
      >
        Server-Sent Events vs WebSockets. Démo interactive avec Bun + RabbitMQ.
      </span>
    </div>
  </Slide>,

  // Infos pratiques
  <Slide theme={theme}>
    <img
      src={bg2}
      width={1080}
      height={1080}
      style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.2 }}
    />
    <img
      src={logoLyonJS}
      width={80}
      height={80}
      style={{ position: "absolute", top: 60, right: 60, objectFit: "contain" }}
    />
    <div
      style={{ display: "flex", gap: 24, justifyContent: "center", flex: 1, alignItems: "center" }}
    >
      <StatBox theme={theme} value="19h00" label="Accueil" />
      <StatBox theme={theme} value="75" label="Places" />
      <StatBox theme={theme} value="Gratuit" label="Entrée" />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 32,
        fontSize: 28,
        color: theme.colors.textMuted,
      }}
    >
      <span>Esker - 113 Bd de Stalingrad, Villeurbanne</span>
    </div>
  </Slide>,

  // CTA
  <Slide theme={theme} style={{ alignItems: "center", justifyContent: "center" }}>
    <img
      src={bg3}
      width={1080}
      height={1080}
      style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.2 }}
    />
    <img
      src={logoLyonJS}
      width={150}
      height={150}
      style={{ marginBottom: 32, objectFit: "contain" }}
    />
    <Title theme={theme} style={{ textAlign: "center", marginBottom: 16 }}>
      On vous attend !
    </Title>
    <Subtitle theme={theme} style={{ textAlign: "center", marginBottom: 48 }}>
      Apéro offert par Esker
    </Subtitle>
    <CTABox theme={theme} title="Inscription gratuite" url="meetup.com/lyonjs" />
  </Slide>,
];

const outputPath = "out/lyonjs-meetup.pdf";
console.log("Generating LyonJS meetup carousel...");
const pdfBytes = await renderSlidesToPdf(slides);
await Bun.write(outputPath, pdfBytes);
console.log(`Saved to ${outputPath}`);

// Generate PNG images
console.log("Generating PNG slides...");
for (let i = 0; i < slides.length; i++) {
  const pngBytes = await renderSlideToPng(slides[i]);
  const pngPath = `out/lyonjs-meetup-${i + 1}.png`;
  await Bun.write(pngPath, pngBytes);
  console.log(`Saved to ${pngPath}`);
}
