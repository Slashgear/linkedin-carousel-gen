import { Slide, Title, Subtitle, CheckItem, colors } from "./components";

// Load images as base64 for Satori
const meetupTalk = await Bun.file("assets/meetup-talk.jpeg").arrayBuffer();
const meetupSpeakers = await Bun.file("assets/meetup-speakers.jpeg").arrayBuffer();
const logoLyonJS = await Bun.file("assets/lyonjs.png").arrayBuffer();
const meetupTalkBase64 = `data:image/jpeg;base64,${Buffer.from(meetupTalk).toString("base64")}`;
const meetupSpeakersBase64 = `data:image/jpeg;base64,${Buffer.from(meetupSpeakers).toString("base64")}`;
const logoBase64 = `data:image/png;base64,${Buffer.from(logoLyonJS).toString("base64")}`;

// Background image wrapper
function SlideWithBg({
  children,
  bgImage,
  overlay = 0.7,
}: {
  children: React.ReactNode;
  bgImage?: string;
  overlay?: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      {bgImage && (
        <img
          src={bgImage}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      {bgImage && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0,0,0,${overlay})`,
          }}
        />
      )}
      <Slide style={{ position: "relative", backgroundColor: bgImage ? "transparent" : undefined }}>
        {children}
      </Slide>
    </div>
  );
}

// Slide 1: Hook
export function VeilleSlide1() {
  return (
    <SlideWithBg bgImage={meetupTalkBase64}>
      <div style={{ display: "flex", flex: 1 }} />
      <div style={{ display: "flex", marginBottom: 40 }}>
        <img src={logoBase64} alt="LyonJS" style={{ height: 80 }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: 32,
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Title highlight="veille tech" style={{ textAlign: "left" }}>
          Ta veille tech en 5 min/jour
        </Title>
        <Subtitle style={{ textAlign: "left" }}>Un channel Discord pour rester à jour</Subtitle>
      </div>
    </SlideWithBg>
  );
}

// Slide 2: Problem
export function VeilleSlide2() {
  return (
    <Slide style={{ justifyContent: "center" }}>
      <Title style={{ marginBottom: 40 }}>Tu passes combien de temps à faire ta veille ?</Title>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: colors.textMuted,
            padding: "16px 0",
            borderBottom: `1px solid ${colors.surface}`,
          }}
        >
          Trop de sujets, pas assez de temps
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: colors.textMuted,
            padding: "16px 0",
            borderBottom: `1px solid ${colors.surface}`,
          }}
        >
          On veut des sources variées et fiables
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: colors.textMuted,
            padding: "16px 0",
            borderBottom: `1px solid ${colors.surface}`,
          }}
        >
          Les pépites sont noyées dans le bruit
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: colors.textMuted,
            padding: "16px 0",
          }}
        >
          Personne avec qui en discuter
        </div>
      </div>
    </Slide>
  );
}

// Slide 3: Solution
export function VeilleSlide3() {
  return (
    <Slide>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <img src={logoBase64} alt="LyonJS" style={{ height: 60, marginRight: 16 }} />
        <span style={{ fontSize: 24, color: colors.textMuted }}>Discord</span>
      </div>
      <Title highlight="#veille" style={{ marginBottom: 40 }}>
        Le channel #veille
      </Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CheckItem>Découvertes partagées par la communauté</CheckItem>
        <CheckItem>Articles, outils, releases, podcasts</CheckItem>
        <CheckItem>CVE et vulnérabilités des librairies</CheckItem>
        <CheckItem>Discussion et débats entre devs</CheckItem>
        <CheckItem>Francophone et sans spam</CheckItem>
      </div>
    </Slide>
  );
}

// Slide 4: Social proof
export function VeilleSlide4() {
  return (
    <SlideWithBg bgImage={meetupSpeakersBase64} overlay={0.8}>
      <div style={{ display: "flex", flex: 1 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 16,
          padding: 40,
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <span style={{ fontSize: 36, lineHeight: 1.5, marginBottom: 24 }}>
          Pas de newsletter de plus dans ta boîte mail. Juste une communauté de devs JS/TS qui
          partagent.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          marginTop: 48,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontSize: 48, fontWeight: 700, color: colors.accent }}>500+</span>
          <span style={{ fontSize: 24, color: colors.textMuted }}>Membres</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontSize: 48, fontWeight: 700, color: colors.accent }}>10+</span>
          <span style={{ fontSize: 24, color: colors.textMuted }}>Liens/semaine</span>
        </div>
      </div>
    </SlideWithBg>
  );
}

// Slide 5: CTA
export function VeilleSlide5() {
  return (
    <Slide style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", marginBottom: 32 }}>
        <img src={logoBase64} alt="LyonJS" style={{ height: 100 }} />
      </div>
      <Title style={{ textAlign: "center", marginBottom: 16 }}>Tu veux tester ?</Title>
      <Subtitle style={{ textAlign: "center" }}>Lien dans le premier commentaire</Subtitle>
    </Slide>
  );
}

export const veilleDiscordSlides = [
  <VeilleSlide1 />,
  <VeilleSlide2 />,
  <VeilleSlide3 />,
  <VeilleSlide4 />,
  <VeilleSlide5 />,
];
