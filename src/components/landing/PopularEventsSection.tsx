import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { PopularEventsContent } from "@/lib/landing-defaults";
import eventHackathon from "@/assets/event-hackathon-ai.jpg";
import eventChill from "@/assets/event-chill-code-workshop.jpg";
import eventStartup from "@/assets/event-startup-weekend.jpg";
import eventSummit from "@/assets/event-vibe-coding-summit.jpg";
import { POPULAR_EVENTS } from "./landing-data";

const eventImages = [eventHackathon, eventChill, eventStartup, eventSummit];

export function PopularEventsSection({ content, titleWeight }: { content: PopularEventsContent; titleWeight: number }) {
  return (
    <section className="py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-display text-foreground tracking-[-0.03em] leading-[1.05] mb-3" style={{ fontWeight: titleWeight }}>
              {content.title_line_1}
              <br />
              {content.title_line_2}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">{content.subhead}</p>
          </div>
          <Link to="/auth" className="group inline-flex items-center gap-2 text-primary font-semibold text-sm self-start md:self-end">
            {content.cta_label}
            <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_EVENTS.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[4/5]">
                  <img src={eventImages[index]} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-background/95 backdrop-blur text-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em] shadow-sm">{event.tag}</span>
                </div>
                <p className="text-[11px] text-primary font-bold uppercase tracking-[0.18em] mb-1.5">{event.date}</p>
                <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors tracking-[-0.01em]">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{event.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
