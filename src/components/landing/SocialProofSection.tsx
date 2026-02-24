import { motion } from "framer-motion";
import { ShieldCheck, Award, Flag } from "lucide-react";

const badges = [
  { icon: Award, label: "Partner Nvidia", sub: "DGX Spark" },
  { icon: ShieldCheck, label: "GDPR & NIS2", sub: "Compliant" },
  { icon: Flag, label: "Made in Italy", sub: "100% sovrana" },
];

export const SocialProofSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-primary">50+</p>
            <p className="text-muted-foreground text-sm mt-1">PMI consulte</p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-border/30" />

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 liquid-glass rounded-xl px-5 py-3"
              >
                <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-semibold leading-tight">{badge.label}</p>
                  <p className="text-muted-foreground text-xs">{badge.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
