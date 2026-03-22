import { motion, useScroll, useTransform } from "framer-motion";
import { Server, ShieldCheck, Cloud, Scale, Cpu, Database, Brain, BarChart3, ArrowRight } from "lucide-react";
import { useRef } from "react";

const pipeline = [
  { icon: Database, title: "Dati aziendali", sub: "I tuoi dati restano tuoi" },
  { icon: Cpu, title: "Training locale", sub: "Su infrastruttura DGX Spark" },
  { icon: Brain, title: "LLM dedicato", sub: "Modello proprietario verticale" },
  { icon: BarChart3, title: "Output AI", sub: "Risposte precise e sicure" },
];

const specs = [
  { label: "GPU", value: "Blackwell" },
  { label: "VRAM", value: "128 GB" },
  { label: "Prestazioni", value: "1000 TOPS" },
  { label: "Formato", value: "Desktop" },
];

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

export const InfrastructureSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section id="infrastructure" ref={ref} className="py-24 md:py-40 relative overflow-hidden">
      {/* Scrolling background text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/3 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="text-[10rem] md:text-[16rem] font-black text-white/[0.015] leading-none tracking-tighter">
          DGX SPARK
        </span>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Infrastruttura</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
            AI Privata.{" "}
            <span className="text-muted-foreground">Completamente Sovrana.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Il cliente acquista l'hardware{" "}
            <span className="text-foreground font-semibold">Nvidia DGX Spark</span>{" "}
            e lo tiene nella propria sede. Noi configuriamo, addestriamo e supportiamo.
          </p>
        </motion.div>

        {/* Pipeline — horizontal flow with arrows */}
        <div className="overflow-x-auto -mx-4 px-4 mb-16" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center gap-2 md:gap-4 min-w-max md:min-w-0 max-w-5xl mx-auto">
            {pipeline.map((step, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="w-[160px] md:w-auto md:flex-1 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 md:p-6 text-center cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold text-sm mb-1">{step.title}</p>
                  <p className="text-muted-foreground text-xs">{step.sub}</p>
                </motion.div>
                {index < pipeline.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary/40 flex-shrink-0" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Specs — inline badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full border border-primary/20 bg-primary/5 cursor-default"
            >
              <span className="text-muted-foreground text-sm">{spec.label}: </span>
              <span className="text-primary font-bold text-sm">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-foreground max-w-xl mx-auto">
            L'AI non è "connessa" alla tua azienda.{" "}
            <span className="text-primary">È dentro la tua azienda.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
