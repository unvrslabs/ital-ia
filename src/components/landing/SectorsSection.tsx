import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Factory, Briefcase, Landmark, ShoppingBag, Truck, HeartPulse, Building2, Wrench } from "lucide-react";

const sectors = [
  { icon: Zap, label: "Energia", detail: "Ottimizzazione predittiva dei consumi, manutenzione preventiva degli impianti e gestione intelligente delle reti&nbsp;energetiche." },
  { icon: Factory, label: "Industria", detail: "Controllo qualità automatizzato, ottimizzazione della supply chain e pianificazione della produzione basata su dati&nbsp;reali." },
  { icon: Briefcase, label: "Servizi", detail: "Automazione dei processi documentali, assistenti intelligenti per il customer care e analisi predittiva dei&nbsp;trend." },
  { icon: Landmark, label: "Finanza", detail: "Analisi del rischio in tempo reale, compliance automatizzata e rilevamento delle frodi con modelli&nbsp;dedicati." },
  { icon: ShoppingBag, label: "Commercio", detail: "Personalizzazione dell'esperienza d'acquisto, gestione intelligente dell'inventario e pricing&nbsp;dinamico." },
  { icon: Truck, label: "Logistica", detail: "Ottimizzazione dei percorsi, previsione della domanda e gestione automatizzata del&nbsp;magazzino." },
  { icon: HeartPulse, label: "Sanità", detail: "Supporto diagnostico, analisi di cartelle cliniche e gestione ottimizzata delle risorse&nbsp;ospedaliere." },
  { icon: Building2, label: "Pubblica Amministrazione", detail: "Digitalizzazione dei processi burocratici, assistenti virtuali per i cittadini e analisi dei dati&nbsp;territoriali." },
  { icon: Wrench, label: "PMI manifatturiere", detail: "Manutenzione predittiva, controllo qualità visivo e ottimizzazione dei processi produttivi su&nbsp;misura." },
];

const features = [
  "Progettato su misura",
  "Addestrato con dati reali del cliente",
  "Ottimizzato per i processi specifici",
  "Isolato e dedicato",
];

export const SectorsSection = () => {
  const [selectedSector, setSelectedSector] = useState<number | null>(null);

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
            Ogni settore ha linguaggi, processi e logiche diverse. Per questo non usiamo modelli&nbsp;generalisti.
          </p>
        </motion.div>

        {/* Sector grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl mx-auto mb-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => setSelectedSector(selectedSector === index ? null : index)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedSector === index
                  ? "liquid-glass border-primary/40 shadow-[0_0_20px_hsla(158,64%,42%,0.15)]"
                  : "liquid-glass-hover"
              }`}
              style={selectedSector === index ? {
                border: '1px solid hsla(158, 64%, 42%, 0.4)',
              } : undefined}
            >
              <sector.icon className={`w-6 h-6 transition-colors ${selectedSector === index ? "text-primary" : "text-primary/70"}`} />
              <span className="text-xs text-foreground/80 font-medium text-center">{sector.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selectedSector !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mx-auto mb-10 overflow-hidden"
            >
              <div className="liquid-glass-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  {(() => {
                    const Icon = sectors[selectedSector].icon;
                    return <Icon className="w-5 h-5 text-primary" />;
                  })()}
                  <h3 className="text-foreground font-semibold text-lg">{sectors[selectedSector].label}</h3>
                </div>
                <p
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sectors[selectedSector].detail }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
            Il risultato è un sistema che ragiona come l'azienda, non come un&nbsp;chatbot.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
