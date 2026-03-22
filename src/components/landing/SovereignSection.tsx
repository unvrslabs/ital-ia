import { motion } from "framer-motion";
import { ShieldCheck, ServerCrash, Globe, Lock } from "lucide-react";

const points = [
  { icon: ServerCrash, text: "Nessuna API verso terzi" },
  { icon: Lock, text: "Nessun training su dati condivisi" },
  { icon: Globe, text: "Nessun server fuori dall'Italia" },
  { icon: ShieldCheck, text: "Proprietà totale del modello" },
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
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">LLM Sovrani</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Il tuo modello. <br className="hidden md:block" />
            <span className="text-muted-foreground">Nella tua sede.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Per chi vuole il massimo controllo: LLM proprietari addestrati sui tuoi dati, eseguiti su hardware Nvidia DGX Spark nella tua sede. Zero dipendenze&nbsp;esterne.
          </p>
        </motion.div>

        {/* Cards grid - centered on desktop, scrollable on mobile */}
        <div className="overflow-x-auto pb-0 -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-4 md:max-w-5xl md:mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl liquid-glass-hover w-[280px] md:w-auto flex-shrink-0"
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
          Per chi non accetta compromessi sulla sovranità dei dati.
        </motion.p>
      </div>
    </section>
  );
};
