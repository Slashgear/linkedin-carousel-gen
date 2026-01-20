import { Slide, Badge, Title, Subtitle, StatBox, CheckItem, CTABox, colors } from "./components";

// Slide 1: Hook/Accroche
export function Slide1() {
  return (
    <Slide style={{ justifyContent: "flex-end" }}>
      <div style={{ display: "flex", marginBottom: 40 }}>
        <Badge>LyonJS</Badge>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: 32,
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Title highlight="VOUS">Et si c'était VOUS sur scène ?</Title>
        <Subtitle>Devenez speaker en 2026</Subtitle>
      </div>
    </Slide>
  );
}

// Slide 2: Stats & Community
export function Slide2() {
  return (
    <Slide>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Badge>LyonJS</Badge>
      </div>
      <div style={{ display: "flex", flex: 1 }} />
      <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
        <StatBox value="50+" label="Participants" />
        <StatBox value="12" label="Meetups/an" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: 32,
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Title highlight="communauté">Une communauté bienveillante et passionnée</Title>
        <Subtitle>
          Chaque mois, nous nous retrouvons pour échanger, apprendre et partager autour de
          JavaScript
        </Subtitle>
      </div>
    </Slide>
  );
}

// Slide 3: Checklist/Features
export function Slide3() {
  return (
    <Slide>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <Badge style={{ marginRight: 16 }}>LyonJS</Badge>
        <span style={{ fontSize: 24, color: colors.textMuted }}>Call for Papers</span>
      </div>
      <Title style={{ marginBottom: 40 }}>Le CFP LyonJS, c'est :</Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CheckItem highlight="Ouvert">Ouvert toute l'année</CheckItem>
        <CheckItem highlight="10 à 45 min">10 à 45 min de talk</CheckItem>
        <CheckItem highlight="Tous niveaux">Tous niveaux bienvenus</CheckItem>
        <CheckItem highlight="JS/TS">JS/TS et écosystème web</CheckItem>
        <CheckItem highlight="1 meetup">1 meetup par mois</CheckItem>
      </div>
    </Slide>
  );
}

// Slide 4: CTA
export function Slide4() {
  return (
    <Slide style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          fontSize: 120,
          color: colors.accent,
          marginBottom: 32,
        }}
      >
        JS
      </div>
      <Title style={{ textAlign: "center", marginBottom: 16 }}>
        Prêt à partager votre passion ?
      </Title>
      <Subtitle style={{ textAlign: "center", marginBottom: 48 }}>
        Soumettez votre talk dès maintenant
      </Subtitle>
      <CTABox title="Proposez votre sujet" url="conference-hall.io/lyon-js-meetup" />
    </Slide>
  );
}

export const exampleSlides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];
