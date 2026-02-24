import { motion } from "framer-motion";
import { Database, Cpu, Brain, BarChart3 } from "lucide-react";

const steps = [
  { icon: Database, label: "Dati aziendali", sub: "I tuoi dati restano tuoi" },
  { icon: Cpu, label: "Training locale", sub: "Su infrastruttura DGX Spark" },
  { icon: Brain, label: "LLM dedicato", sub: "Modello proprietario verticale" },
  { icon: BarChart3, label: "Output AI", sub: "Risposte precise e sicure" },
];

export const DataFlowDiagram = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center flex-1"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-3"
                animate={{
                  boxShadow: [
                    "0 0 0 0 hsla(158,64%,42%,0)",
                    "0 0 20px 4px hsla(158,64%,42%,0.2)",
                    "0 0 0 0 hsla(158,64%,42%,0)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
              >
                <step.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <p className="text-foreground font-semibold text-sm mb-1">{step.label}</p>
              <p className="text-muted-foreground text-xs leading-tight max-w-[140px]">{step.sub}</p>
            </motion.div>

            {/* Connector arrow */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1 }}
                className="hidden md:flex items-center mx-1"
              >
                <motion.div
                  className="w-8 h-[2px] bg-gradient-to-r from-primary/60 to-primary/20"
                  animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                />
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-primary/60" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* DGX Spark specs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { label: "GPU", value: "Blackwell" },
          { label: "VRAM", value: "128 GB" },
          { label: "Prestazioni", value: "1000 TOPS" },
          { label: "Formato", value: "Desktop" },
        ].map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="liquid-glass rounded-xl p-4 text-center"
          >
            <p className="text-primary font-bold text-lg">{spec.value}</p>
            <p className="text-muted-foreground text-xs mt-1">{spec.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
