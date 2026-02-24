import { motion } from "framer-motion";
import { ShieldCheck, ServerCrash, Globe, Lock } from "lucide-react";

const points = [
  { icon: ServerCrash, text: "Nessuna API verso OpenAI, Anthropic o terzi" },
  { icon: Lock, text: "Nessun training su dati condivisi" },
  { icon: Globe, text: "Nessun server fuori dall'Italia" },
  { icon: ShieldCheck, text: "Nessun rischio di fuga di dati" },
];

export const SovereignSection = () => {
  return (
    <section id="sovereign" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">AI Sovrana</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ital → ia <br className="hidden md:block" />
            <span className="text-muted-foreground">Senza Compromessi.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La maggior parte delle aziende oggi usa "AI" tramite API esterne, modelli generici e server stranieri. Noi abbiamo scelto un'altra&nbsp;strada.
          </p>
        </motion.div>

        {/* Horizontal scrolling cards */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl liquid-glass-hover w-[280px] flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/90 text-sm font-medium">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary font-semibold text-lg mt-10"
        >
          Solo AI sovrana, privata, controllabile.
        </motion.p>
      </div>
    </section>
  );
};
