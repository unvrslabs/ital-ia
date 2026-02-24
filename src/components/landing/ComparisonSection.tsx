import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Dati al sicuro in Italia", generic: false, unvrs: true },
  { feature: "Modello addestrato sui tuoi dati", generic: false, unvrs: true },
  { feature: "Nessuna dipendenza da cloud esteri", generic: false, unvrs: true },
  { feature: "Conformità GDPR e NIS2", generic: false, unvrs: true },
  { feature: "Infrastruttura dedicata", generic: false, unvrs: true },
  { feature: "Risposte specifiche per il tuo settore", generic: false, unvrs: true },
  { feature: "Proprietà completa del modello", generic: false, unvrs: true },
  { feature: "Accessibile via API e chat", generic: true, unvrs: true },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            Confronto
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI generica vs{" "}
            <span className="text-primary">UNVRS&nbsp;ITAL&nbsp;IA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Non tutti i modelli AI sono uguali. Ecco perché un LLM sovrano e&nbsp;dedicato fa la differenza.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto liquid-glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] px-6 py-4 border-b border-border/30">
            <span className="text-sm text-muted-foreground font-medium">Funzionalità</span>
            <span className="text-sm text-muted-foreground font-medium text-center">AI Generica</span>
            <span className="text-sm text-primary font-semibold text-center">UNVRS</span>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] px-6 py-4 border-b border-border/10 last:border-b-0 hover:bg-white/[0.03] transition-colors"
            >
              <span className="text-foreground/90 text-sm font-medium">
                {row.feature}
              </span>
              <div className="flex justify-center">
                {row.generic ? (
                  <Check className="w-5 h-5 text-primary" />
                ) : (
                  <X className="w-5 h-5 text-destructive/60" />
                )}
              </div>
              <div className="flex justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
