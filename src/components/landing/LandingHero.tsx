import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import eventChill from "@/assets/event-chill-code-workshop.jpg";
import eventJam from "@/assets/event-late-night-jam.jpg";
import eventStartup from "@/assets/event-startup-weekend.jpg";
import eventSummit from "@/assets/event-vibe-coding-summit.jpg";
import { ConfettiLayer } from "./ConfettiLayer";
import type { HeroContent } from "@/lib/landing-defaults";

type LandingHeroProps = {
  hero: HeroContent;
  titleWeight: number;
  confettiSize: number;
  confettiOpacity: number;
  confettiCount: number;
  confettiSpread: number;
};

const heroCards = [
  { image: eventChill, alt: "Chill code workshop", label: "Workshop", position: "left-[-100px] lg:left-[-40px] top-[20px]", rotation: "rotate-[6deg]", enter: { x: -80, y: -60 }, delay: 0.2 },
  { image: eventJam, alt: "Late night jam", label: "Social", position: "left-[-120px] lg:left-[-60px] bottom-[20px]", rotation: "rotate-[-5deg]", enter: { x: -80, y: 60 }, delay: 0.35 },
  { image: eventStartup, alt: "Startup weekend", label: "Hackathon", position: "right-[-100px] lg:right-[-40px] top-[20px]", rotation: "rotate-[-6deg]", enter: { x: 80, y: -60 }, delay: 0.25 },
  { image: eventSummit, alt: "Vibe coding summit", label: "Conference", position: "right-[-120px] lg:right-[-60px] bottom-[20px]", rotation: "rotate-[5deg]", enter: { x: 80, y: 60 }, delay: 0.4 },
] as const;

export function LandingHero({ hero, titleWeight, confettiSize, confettiOpacity, confettiCount, confettiSpread }: LandingHeroProps) {
  const rotatingWords = hero.rotating_words;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!rotatingWords.length) return;
    setWordIndex(0);
    const interval = setInterval(() => {
      setWordIndex((previous) => (previous + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="mx-auto h-[720px] w-[120%] -translate-x-[10%] bg-[radial-gradient(ellipse_at_50%_0%,hsl(340_75%_92%/_0.85)_0%,hsl(340_75%_96%/_0.4)_35%,transparent_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="relative min-h-[620px] flex items-center justify-center">
          <ConfettiLayer size={confettiSize} opacity={confettiOpacity} count={confettiCount} spread={confettiSpread} />
          {heroCards.map((card) => (
            <motion.div
              key={card.alt}
              className={`hidden md:block absolute ${card.position} w-[200px] lg:w-[260px]`}
              initial={{ opacity: 0, scale: 0.3, ...card.enter }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: card.delay }}
            >
              <div className={`rounded-2xl overflow-hidden shadow-lg ${card.rotation}`}>
                <img src={card.image} alt={card.alt} className="w-full h-[150px] object-cover" />
                <div className="bg-card px-3 py-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{card.label}</span>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="text-center max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Logo size="lg" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-7 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              {hero.badge}
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] 2xl:text-[80px] font-display tracking-[-0.035em] leading-[0.95] text-foreground mb-7" style={{ fontWeight: titleWeight }}>
              {hero.headline_prefix}{" "}
              <span className="inline-grid justify-items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="text-primary italic text-center col-start-1 row-start-1"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible h-0 overflow-hidden col-start-1 row-start-1" aria-hidden="true">
                  {rotatingWords.reduce((longest, word) => (longest.length >= word.length ? longest : word), "")}
                </span>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">{hero.subhead}</p>
            <Button size="lg" className="text-base font-semibold px-9 h-14 shadow-xl shadow-foreground/10" asChild>
              <Link to="/auth">{hero.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
