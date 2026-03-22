import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, DollarSign, Brain, Lock, Trophy, ArrowRight } from "lucide-react";
import { useRef } from "react";

const results = [
  { icon: TrendingUp, value: "+40%", label: "Produttività", desc: "Processi automatizzati, decisioni più veloci" },
  { icon: DollarSign, value: "-35%", label: "Costi operativi", desc: "Meno ore su task ripetitivi" },
  { icon: Brain, value: "24/7", label: "AI attiva", desc: "I tuoi agenti non dormono mai" },
  { icon: Lock, value: "100%", label: "GDPR", desc: "Conformità normativa garantita" },
  { icon: Trophy, value: "∞", label: "Scalabilità", desc: "Cresce con la tua azienda" },
];

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

export const PMISection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="pmi" ref={ref} className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Per le PMI</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
            Risultati concreti.{" "}
            <br className="hidden md:block" />
            <span className="text-muted-foreground">Non promesse.</span>
          </h2>
        </motion.div>

        {/* Horizontal scrolling stats on mobile, grid on desktop */}
        <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0 mb-16" style={{ scrollbarWidth: 'none' }}>
          <div className="flex md:grid md:grid-cols-5 gap-4 min-w-max md:min-w-0 max-w-5xl mx-auto">
            {results.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-[180px] md:w-auto flex-shrink-0 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 text-center cursor-default group md:hover:-translate-y-2 md:transition-transform md:duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-black text-primary mb-1">{item.value}</p>
                <p className="text-foreground font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-muted-foreground text-xs leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Big statement with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
            Non vendiamo strumenti.{" "}
            <span className="text-primary font-bold">Costruiamo sistemi intelligenti</span>{" "}
            che crescono con la tua azienda.
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Inizia la trasformazione
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
