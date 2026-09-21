export const BENTO_PRESETS = [
  {
    label: "Playful",
    cardBg: "bg-muted/50",
    colors: ["bg-[hsl(340,75%,95%)]", "bg-[hsl(170,60%,92%)]", "bg-[hsl(45,90%,92%)]", "bg-[hsl(250,60%,94%)]"],
    accents: { integrationCircle: "hsl(45,80%,45%)", attendeeBorder: "hsl(250,60%,80%)", analyticsBars: "hsl(170,60%,50%)", analyticsAccent: "hsl(170,60%,40%)", pageButton: "hsl(340,75%,58%)" },
  },
  {
    label: "Neutral",
    cardBg: "bg-background",
    colors: ["bg-background", "bg-background", "bg-background", "bg-background"],
    accents: { integrationCircle: "hsl(45,90%,50%)", attendeeBorder: "hsl(250,65%,65%)", analyticsBars: "hsl(170,65%,45%)", analyticsAccent: "hsl(170,65%,35%)", pageButton: "hsl(340,80%,55%)" },
  },
  {
    label: "Vivid",
    cardBg: "bg-muted/50",
    colors: ["bg-[hsl(340,75%,90%)]", "bg-[hsl(170,60%,86%)]", "bg-[hsl(45,90%,86%)]", "bg-[hsl(250,60%,90%)]"],
    accents: { integrationCircle: "hsl(45,90%,50%)", attendeeBorder: "hsl(250,65%,65%)", analyticsBars: "hsl(170,65%,45%)", analyticsAccent: "hsl(170,65%,35%)", pageButton: "hsl(340,80%,55%)" },
  },
] as const;

export type BentoPreset = (typeof BENTO_PRESETS)[number];

export const FONT_WEIGHT_OPTIONS = [
  { label: "Medium (500)", value: 500 },
  { label: "Semibold (600)", value: 600 },
  { label: "Bold (700)", value: 700 },
  { label: "Extrabold (800)", value: 800 },
] as const;

export const POPULAR_EVENTS = [
  { title: "AI hackathon", tag: "Free", date: "Sat, Mar 28", city: "San Francisco" },
  { title: "Chill code workshop", tag: "Free", date: "Thu, Apr 3", city: "London" },
  { title: "Startup weekend", tag: "$25", date: "Fri, Apr 11", city: "New York" },
  { title: "Vibe coding summit", tag: "Free", date: "Sat, Apr 19", city: "Remote" },
] as const;

export const CTA_CONFETTI = [
  { x: -110, y: 20, size: 14, color: "hsl(2 100% 70%)", shape: "circle", rot: 0 },
  { x: -72, y: 42, size: 10, color: "hsl(48 100% 62%)", shape: "square", rot: 35 },
  { x: -38, y: 12, size: 16, color: "hsl(122 48% 61%)", shape: "circle", rot: 0 },
  { x: -18, y: 48, size: 8, color: "hsl(217 90% 63%)", shape: "square", rot: -20 },
  { x: 0, y: 10, size: 12, color: "hsl(319 84% 69%)", shape: "triangle", rot: 15 },
  { x: 22, y: 46, size: 10, color: "hsl(31 100% 63%)", shape: "circle", rot: 0 },
  { x: 56, y: 14, size: 14, color: "hsl(48 100% 62%)", shape: "square", rot: 50 },
  { x: 78, y: 38, size: 8, color: "hsl(2 100% 70%)", shape: "circle", rot: 0 },
  { x: 104, y: 20, size: 12, color: "hsl(122 48% 61%)", shape: "triangle", rot: -30 },
  { x: -132, y: 54, size: 6, color: "hsl(217 90% 63%)", shape: "circle", rot: 0 },
  { x: 126, y: 48, size: 10, color: "hsl(319 84% 69%)", shape: "square", rot: 22 },
  { x: -146, y: 28, size: 8, color: "hsl(31 100% 63%)", shape: "triangle", rot: 40 },
  { x: 146, y: 24, size: 12, color: "hsl(48 100% 62%)", shape: "circle", rot: 0 },
  { x: -54, y: 58, size: 6, color: "hsl(122 48% 61%)", shape: "square", rot: -45 },
] as const;

export type CtaConfetti = (typeof CTA_CONFETTI)[number];
