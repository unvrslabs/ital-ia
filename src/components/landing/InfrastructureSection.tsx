import { motion } from "framer-motion";
import { Server, ShieldCheck, Cloud, Scale, Cpu } from "lucide-react";

const points = [
  { icon: Server, text: "I modelli girano localmente" },
  { icon: ShieldCheck, text: "I dati non escono mai dal perimetro controllato" },
  { icon: Cloud, text: "Nessuna dipendenza da cloud esteri" },
  { icon: Scale, text: "Piena conformità normativa" },
  { icon: Cpu, text: "Massime prestazioni computazionali" },
];

export const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Infrastruttura On-Premise</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Privata. <br className="hidden md:block" />
            <span className="text-muted-foreground">Completamente Sovrana.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            L'intera piattaforma gira su infrastruttura dedicata ad alte prestazioni, basata su<br />
            <span className="text-foreground font-semibold">Nvidia DGX Spark</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl liquid-glass-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground/90 text-sm font-medium">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground font-semibold text-xl max-w-lg mx-auto"
        >
          L'AI non è "connessa" alla tua azienda.{" "}
          <span className="text-primary">È dentro la tua azienda.</span>
        </motion.p>
      </div>
    </section>
  );
};
