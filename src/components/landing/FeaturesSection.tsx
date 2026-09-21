import { motion } from "framer-motion";
import type { FeaturesContent } from "@/lib/landing-defaults";
import { ILLUSTRATIONS } from "./Illustrations";
import type { BentoPreset } from "./landing-data";

export function FeaturesSection({ content, titleWeight, preset }: { content: FeaturesContent; titleWeight: number; preset: BentoPreset }) {
  const bodyTones = ["bg-foreground text-background", "bg-primary/10 text-foreground", "bg-muted text-foreground", "bg-primary text-primary-foreground"] as const;
  const tagTones = ["bg-background/10 text-background/80", "bg-primary/15 text-primary", "bg-background text-foreground/70", "bg-primary-foreground/15 text-primary-foreground"] as const;
  const subTones = ["text-background/65", "text-foreground/65", "text-muted-foreground", "text-primary-foreground/80"] as const;

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <motion.div className="text-center mb-16 max-w-2xl mx-auto" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4">{content.eyebrow}</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display mb-5 text-foreground tracking-[-0.035em] leading-[1.02]" style={{ fontWeight: titleWeight }}>
            {content.title_line_1}
            <br />
            {content.title_line_2}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{content.subhead}</p>
        </motion.div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.items.slice(0, 2).map((feature, index) => {
              const Illustration = ILLUSTRATIONS[index];
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6 }}>
                  <div className={`h-full rounded-[2rem] overflow-hidden flex flex-col shadow-sm ${bodyTones[index]}`}>
                    <div className={`${preset.colors[index]} aspect-[5/3] flex items-center justify-center`}><Illustration accents={preset.accents} /></div>
                    <div className="p-7 lg:p-8">
                      <span className={`inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-4 ${tagTones[index]}`}>{feature.tag}</span>
                      <h3 className="font-display font-bold text-2xl mb-2 tracking-[-0.02em]">{feature.title}</h3>
                      <p className={`text-sm leading-relaxed ${subTones[index]}`}>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {content.items.slice(2).map((feature, rawIndex) => {
              const index = rawIndex + 2;
              const Illustration = ILLUSTRATIONS[index];
              const isWide = rawIndex === 1;
              return (
                <motion.div key={feature.title} className={isWide ? "md:col-span-3" : "md:col-span-2"} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6 }}>
                  <div className={`h-full rounded-[2rem] overflow-hidden flex ${isWide ? "flex-col sm:flex-row" : "flex-col"} shadow-sm ${bodyTones[index]}`}>
                    <div className={`${preset.colors[index]} ${isWide ? "sm:w-1/2 aspect-[5/3] sm:aspect-auto" : "aspect-[5/3]"} flex items-center justify-center relative flex-shrink-0`}><Illustration accents={preset.accents} /></div>
                    <div className="p-7 lg:p-8 flex flex-col justify-center">
                      <span className={`inline-block self-start text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-4 ${tagTones[index]}`}>{feature.tag}</span>
                      <h3 className="font-display font-bold text-2xl mb-2 tracking-[-0.02em]">{feature.title}</h3>
                      <p className={`text-sm leading-relaxed ${subTones[index]}`}>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
