/**
 * Generate a LyonJS meetup carousel from a directory containing
 * a meetup.json + all its assets (backgrounds + speaker avatars).
 *
 * Usage: bun run scripts/generate-lyonjs-meetup.tsx <dir>
 *   e.g. bun run scripts/generate-lyonjs-meetup.tsx lyonjs/2026-04-23
 *
 * Output: out/meetup-<first-segment>/<rest>/caroussel.pdf + page-{N}.png
 */
import { existsSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";
import { renderSlidesToPdf, renderSlideToPng } from "../src/lib/render";
import { loadImageAsDataUrl, getPlaceholder } from "../src/lib/images";
import { Slide, Title, Subtitle, Badge, StatBox, CTABox } from "../src/slides/components";
import { darkTheme } from "../src/theme";

type Speaker = {
  avatar: string;
  name: string;
  company: string;
  description: string;
};

type MeetupData = {
  cover: { edition: string; title: string; date: string; background: string };
  speakers: Speaker[];
  infos: { time: string; seats: number; price: string; address: string; background: string };
  backpage: { description: string; background: string };
};

const theme = darkTheme;

function validate(data: unknown): asserts data is MeetupData {
  if (!data || typeof data !== "object") throw new Error("meetup.json: root must be an object");
  const d = data as Record<string, unknown>;
  const cover = d.cover as Record<string, unknown> | undefined;
  if (!cover?.edition || !cover.title || !cover.date || !cover.background)
    throw new Error("meetup.json: cover requires edition, title, date, background");
  if (!Array.isArray(d.speakers) || d.speakers.length === 0)
    throw new Error("meetup.json: speakers must be a non-empty array");
  for (const [i, s] of (d.speakers as Record<string, unknown>[]).entries()) {
    if (!s.avatar || !s.name || !s.company || !s.description)
      throw new Error(`meetup.json: speakers[${i}] requires avatar, name, company, description`);
  }
  const infos = d.infos as Record<string, unknown> | undefined;
  if (!infos?.time || infos.seats === undefined || !infos.price || !infos.address || !infos.background)
    throw new Error("meetup.json: infos requires time, seats, price, address, background");
  const bp = d.backpage as Record<string, unknown> | undefined;
  if (!bp?.description || !bp.background)
    throw new Error("meetup.json: backpage requires description, background");
}

async function resolveImage(dataDir: string, name: string, fallback?: "avatar"): Promise<string> {
  const fullPath = resolve(dataDir, name);
  if (existsSync(fullPath)) return loadImageAsDataUrl(fullPath);
  if (fallback === "avatar") return getPlaceholder("avatar");
  throw new Error(`Missing required image: ${fullPath}`);
}

function coverSlide(data: MeetupData, logo: string, background: string) {
  return (
    <Slide theme={theme} style={{ justifyContent: "flex-end" }}>
      <img
        src={background}
        width={1080}
        height={1080}
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.3 }}
      />
      <img
        src={logo}
        width={120}
        height={120}
        style={{ position: "absolute", top: 60, right: 60, objectFit: "contain" }}
      />
      <div style={{ display: "flex", marginBottom: 40 }}>
        <Badge theme={theme}>{data.cover.edition}</Badge>
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
        <Title theme={theme}>{data.cover.title}</Title>
        <Subtitle theme={theme}>{data.cover.date}</Subtitle>
      </div>
    </Slide>
  );
}

function speakerSlide(speaker: Speaker, avatar: string, logo: string) {
  return (
    <Slide theme={theme}>
      <img
        src={logo}
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
          src={avatar}
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
          {speaker.name}
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
          {speaker.company}
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
          {speaker.description}
        </span>
      </div>
    </Slide>
  );
}

function infosSlide(data: MeetupData, logo: string, background: string) {
  return (
    <Slide theme={theme}>
      <img
        src={background}
        width={1080}
        height={1080}
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.2 }}
      />
      <img
        src={logo}
        width={80}
        height={80}
        style={{ position: "absolute", top: 60, right: 60, objectFit: "contain" }}
      />
      <div
        style={{ display: "flex", gap: 24, justifyContent: "center", flex: 1, alignItems: "center" }}
      >
        <StatBox theme={theme} value={data.infos.time} label="Accueil" />
        <StatBox theme={theme} value={String(data.infos.seats)} label="Places" />
        <StatBox theme={theme} value={data.infos.price} label="Entrée" />
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
        <span>{data.infos.address}</span>
      </div>
    </Slide>
  );
}

function backpageSlide(data: MeetupData, logo: string, background: string) {
  return (
    <Slide theme={theme} style={{ alignItems: "center", justifyContent: "center" }}>
      <img
        src={background}
        width={1080}
        height={1080}
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.2 }}
      />
      <img
        src={logo}
        width={150}
        height={150}
        style={{ marginBottom: 32, objectFit: "contain" }}
      />
      <Title theme={theme} style={{ textAlign: "center", marginBottom: 16 }}>
        On vous attend !
      </Title>
      <Subtitle theme={theme} style={{ textAlign: "center", marginBottom: 48 }}>
        {data.backpage.description}
      </Subtitle>
      <CTABox theme={theme} title="Inscription gratuite" url="meetup.com/lyonjs" />
    </Slide>
  );
}

async function main() {
  const dirArg = process.argv[2];
  if (!dirArg) {
    throw new Error("Usage: bun run scripts/generate-lyonjs-meetup.tsx <dir>");
  }

  const dataDir = isAbsolute(dirArg) ? dirArg : resolve(process.cwd(), dirArg);
  if (!existsSync(dataDir)) {
    throw new Error(`Directory not found: ${dataDir}`);
  }

  const jsonPath = resolve(dataDir, "meetup.json");
  if (!existsSync(jsonPath)) {
    throw new Error(`meetup.json not found in ${dataDir}`);
  }

  const raw = JSON.parse(await Bun.file(jsonPath).text());
  validate(raw);
  const data: MeetupData = raw;

  const [logo, coverBg, infosBg, backpageBg, ...avatars] = await Promise.all([
    loadImageAsDataUrl("lyonjs-meetup/lyonjs.png"),
    resolveImage(dataDir, data.cover.background),
    resolveImage(dataDir, data.infos.background),
    resolveImage(dataDir, data.backpage.background),
    ...data.speakers.map((s) => resolveImage(dataDir, s.avatar, "avatar")),
  ]);

  const slides = [
    coverSlide(data, logo, coverBg),
    ...data.speakers.map((s, i) => speakerSlide(s, avatars[i], logo)),
    infosSlide(data, logo, infosBg),
    backpageSlide(data, logo, backpageBg),
  ];

  const cleaned = dirArg.replace(/\/+$/, "");
  const [first, ...rest] = cleaned.split("/");
  const outDir = ["out", `meetup-${first}`, ...rest].join("/");
  const pdfPath = `${outDir}/caroussel.pdf`;

  console.log(`Generating ${pdfPath}...`);
  const pdfBytes = await renderSlidesToPdf(slides);
  await Bun.write(pdfPath, pdfBytes);
  console.log(`Saved to ${pdfPath}`);

  for (let i = 0; i < slides.length; i++) {
    const pngPath = `${outDir}/page-${i + 1}.png`;
    const pngBytes = await renderSlideToPng(slides[i]);
    await Bun.write(pngPath, pngBytes);
    console.log(`Saved to ${pngPath}`);
  }
}

await main();
