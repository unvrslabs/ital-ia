import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, ServerCrash, Globe, Lock, ArrowRight } from "lucide-react";
import { useRef } from "react";

const points = [
  { icon: ServerCrash, text: "Nessuna API verso terzi", detail: "Il modello gira interamente nella tua infrastruttura" },
  { icon: Lock, text: "Nessun training su dati condivisi", detail: "Addestramento esclusivo sui tuoi dati aziendali" },
  { icon: Globe, text: "Nessun server fuori dall'Italia", detail: "Hardware fisico nella tua sede, in Italia" },
  { icon: ShieldCheck, text: "Proprietà totale del modello", detail: "Il modello è tuo — per sempre" },
];

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20agli%20LLM%20sovrani%20per%20la%20mia%20azienda.%20Possiamo%20fissare%20una%20call%3F";

export const SovereignSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section id="sovereign" ref={ref} className="py-24 md:py-40 relative overflow-hidden">
      {/* Scrolling background text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="text-[12rem] md:text-[18rem] font-black text-white/[0.02] leading-none tracking-tighter">
          SOVRANO
        </span>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Asymmetric layout — text right, cards left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — staggered cards */}
          <div className="space-y-4 order-2 lg:order-1">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm cursor-default group"
                style={{ marginLeft: `${index * 16}px` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-base">{point.text}</p>
                  <p className="text-muted-foreground text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{point.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">LLM Sovrani</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
              Il tuo modello.{" "}
              <span className="text-muted-foreground">Nella tua sede.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Per chi vuole il massimo controllo: LLM proprietari addestrati sui tuoi dati, eseguiti su hardware Nvidia DGX Spark nella tua sede.
            </p>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Approfondisci
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
