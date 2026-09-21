import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { CtaContent } from "@/lib/landing-defaults";
import { CTA_CONFETTI } from "./landing-data";

export function CtaSection({ content, titleWeight }: { content: CtaContent; titleWeight: number }) {
  return (
    <section className="pt-10 lg:pt-16 pb-12 lg:pb-16 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative pt-20 lg:pt-24">
          <div className="absolute inset-x-0 top-0 z-20 flex justify-center pointer-events-none" aria-hidden="true">
            <motion.div initial={{ opacity: 0, y: 16, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, type: "spring", stiffness: 220, damping: 18 }} className="drop-shadow-[0_18px_40px_hsl(240_30%_14%_/_0.18)]">
              <svg width="130" height="158" viewBox="0 0 130 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="28" width="110" height="120" rx="16" fill="hsl(var(--card))" />
                <rect x="10" y="28" width="110" height="32" rx="16" fill="hsl(var(--primary))" />
                <rect x="10" y="44" width="110" height="16" fill="hsl(var(--primary))" />
                <rect x="38" y="14" width="10" height="28" rx="5" fill="hsl(var(--foreground))" />
                <rect x="82" y="14" width="10" height="28" rx="5" fill="hsl(var(--foreground))" />
                {[0, 1, 2, 3, 4].map((column) =>
                  [0, 1, 2, 3].map((row) => (
                    <rect key={`${column}-${row}`} x={21 + column * 19} y={72 + row * 18} width="12" height="10" rx="2.5" fill={column === 3 && row === 2 ? "hsl(var(--primary))" : "hsl(var(--border))"} />
                  )),
                )}
                <path d="M75 100L78 103L84 96" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          <div className="bg-foreground rounded-[2.5rem] relative overflow-hidden px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28 max-w-5xl mx-auto">
            <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-x-0 top-5 flex justify-center pointer-events-none" aria-hidden="true">
              {CTA_CONFETTI.map((particle, index) => (
                <motion.div key={index} className="absolute" style={{ left: `calc(50% + ${particle.x}px)`, top: particle.y }} initial={{ opacity: 0, scale: 0, x: -particle.x, y: -particle.y }} whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: particle.rot }} viewport={{ once: true }} transition={{ delay: 0.1 + index * 0.04, duration: 0.5, type: "spring", stiffness: 250, damping: 15 }}>
                  {particle.shape === "circle" && <div style={{ width: particle.size, height: particle.size, borderRadius: "50%", backgroundColor: particle.color }} />}
                  {particle.shape === "square" && <div style={{ width: particle.size, height: particle.size, borderRadius: 2, backgroundColor: particle.color }} />}
                  {particle.shape === "triangle" && <div style={{ width: 0, height: 0, borderLeft: `${particle.size / 2}px solid transparent`, borderRight: `${particle.size / 2}px solid transparent`, borderBottom: `${particle.size}px solid ${particle.color}` }} />}
                </motion.div>
              ))}
            </div>

            <div className="text-center relative z-10">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display mb-6 text-background tracking-[-0.035em] leading-[0.95]" style={{ fontWeight: titleWeight }}>
                  {content.title_line_1}
                  <br />
                  {content.title_line_2}
                </h2>
                <p className="text-background/70 text-lg lg:text-xl mb-10 max-w-lg mx-auto text-balance">{content.subhead}</p>
                <Button size="lg" className="text-base font-semibold px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/auth">{content.cta_label} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
