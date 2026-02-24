import { motion } from "framer-motion";
import { Server, ShieldCheck, Cloud, Scale, Cpu, Database, Brain, BarChart3, ArrowRight } from "lucide-react";

const points = [
  { icon: Server, title: "I modelli girano localmente" },
  { icon: ShieldCheck, title: "I dati non escono mai dal perimetro controllato" },
  { icon: Cloud, title: "Nessuna dipendenza da cloud esteri" },
  { icon: Scale, title: "Piena conformità normativa" },
  { icon: Cpu, title: "Massime prestazioni computazionali" },
];

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
  return (
    <section id="infrastructure" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top: Two columns — text left, feature cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left — Header + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Infrastruttura On-Premise</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI Privata. <br />
              <span className="text-muted-foreground">Completamente Sovrana.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              L'intera piattaforma gira su infrastruttura dedicata ad alte prestazioni, basata su{" "}
              <span className="text-foreground font-semibold">Nvidia DGX Spark</span>.
            </p>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi consulenza
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right — Stacked feature cards */}
          <div className="space-y-3">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-2xl liquid-glass"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/90 text-sm font-medium">{point.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline cards — horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto -mx-4 px-4 mb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex md:grid md:grid-cols-4 gap-3 min-w-max md:min-w-0">
            {pipeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="liquid-glass rounded-2xl p-5 w-[200px] md:w-auto flex-shrink-0 md:flex-shrink"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm mb-1">{step.title}</p>
                <p className="text-muted-foreground text-xs leading-tight">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specs row */}
        <div className="overflow-x-auto -mx-4 px-4 mb-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex md:grid md:grid-cols-4 gap-3 min-w-max md:min-w-0">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass rounded-xl p-4 text-center w-[160px] md:w-auto flex-shrink-0 md:flex-shrink"
              >
                <p className="text-primary font-bold text-lg">{spec.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{spec.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground font-semibold text-xl max-w-lg mx-auto"
        >
          L'AI non è "connessa" alla tua azienda.{" "}
          <span className="text-primary">È dentro la tua&nbsp;azienda.</span>
        </motion.p>
      </div>
    </section>
  );
};
