import { motion } from "framer-motion";
import { Zap, Factory, Briefcase, Landmark, ShoppingBag, Truck, HeartPulse, Building2, Wrench } from "lucide-react";

const sectors = [
  { icon: Zap, label: "Energia" },
  { icon: Factory, label: "Industria" },
  { icon: Briefcase, label: "Servizi" },
  { icon: Landmark, label: "Finanza" },
  { icon: ShoppingBag, label: "Commercio" },
  { icon: Truck, label: "Logistica" },
  { icon: HeartPulse, label: "Sanità" },
  { icon: Building2, label: "Pubblica Amministrazione" },
  { icon: Wrench, label: "PMI manifatturiere" },
];

const features = [
  "Progettato su misura",
  "Addestrato con dati reali del cliente",
  "Ottimizzato per i processi specifici",
  "Isolato e dedicato",
];

export const SectorsSection = () => {
  return (
    <section id="sectors" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">LLM Proprietari</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            LLM verticali. <br />
            <span className="text-muted-foreground">Per ogni settore.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ogni settore ha linguaggi, processi e logiche diverse. Per questo non usiamo modelli generalisti.
          </p>
        </motion.div>

        {/* Sector grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl mx-auto mb-16">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl liquid-glass-hover cursor-default"
            >
              <sector.icon className="w-6 h-6 text-primary" />
              <span className="text-xs text-foreground/80 font-medium text-center">{sector.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-card p-8 md:p-10 max-w-2xl mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-4">Ogni modello viene</p>
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm italic">
            Il risultato è un sistema che ragiona come l'azienda, non come un chatbot.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
