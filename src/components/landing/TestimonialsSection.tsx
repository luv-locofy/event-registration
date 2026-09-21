import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialsContent } from "@/lib/landing-defaults";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";

const fallbackAvatars = [avatarSarah, avatarMarcus, avatarPriya, "https://i.pravatar.cc/300?img=33", "https://i.pravatar.cc/300?img=47"];

export function TestimonialsSection({ content, titleWeight }: { content: TestimonialsContent; titleWeight: number }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-display mb-4 text-foreground tracking-[-0.02em]" style={{ fontWeight: titleWeight }}>{content.title}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {content.items.map((testimonial, index) => {
            const avatar = fallbackAvatars[index] ?? fallbackAvatars[fallbackAvatars.length - 1];
            return (
              <motion.div key={`${testimonial.name}-${index}`} className="basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -4 }}>
                <Card className="h-full border-0 shadow-sm overflow-hidden rounded-2xl">
                  <div className="h-[180px] overflow-hidden"><img src={avatar} alt={testimonial.name} className="w-full h-full object-cover object-center" /></div>
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, starIndex) => <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-5">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
