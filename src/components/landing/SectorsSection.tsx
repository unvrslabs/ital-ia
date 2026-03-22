import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Factory, Briefcase, Landmark, ShoppingBag, Truck, HeartPulse, Building2, Wrench, Crosshair, BarChart3, Settings, Lock } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";

const sectors = [
  { icon: Zap, label: "Energia", detail: "Ottimizzazione predittiva dei consumi, manutenzione preventiva degli impianti e gestione intelligente delle reti energetiche.", benefits: ["Riduzione consumi fino al 30%", "Manutenzione predittiva impianti", "Gestione smart delle reti", "Previsione domanda energetica"] },
  { icon: Factory, label: "Industria", detail: "Controllo qualità automatizzato, ottimizzazione della supply chain e pianificazione della produzione basata su dati reali.", benefits: ["Controllo qualità visivo AI", "Ottimizzazione supply chain", "Pianificazione produzione", "Riduzione scarti e sprechi"] },
  { icon: Briefcase, label: "Servizi", detail: "Automazione dei processi documentali, assistenti intelligenti per il customer care e analisi predittiva dei trend.", benefits: ["Automazione documentale", "Assistenti AI per clienti", "Analisi predittiva trend", "Ottimizzazione workflow"] },
  { icon: Landmark, label: "Finanza", detail: "Analisi del rischio in tempo reale, compliance automatizzata e rilevamento delle frodi con modelli dedicati.", benefits: ["Risk analysis real-time", "Compliance automatizzata", "Fraud detection avanzato", "Report automatizzati"] },
  { icon: ShoppingBag, label: "Commercio", detail: "Personalizzazione dell'esperienza d'acquisto, gestione intelligente dell'inventario e pricing dinamico.", benefits: ["Personalizzazione UX", "Gestione inventario smart", "Pricing dinamico AI", "Previsione trend vendite"] },
  { icon: Truck, label: "Logistica", detail: "Ottimizzazione dei percorsi, previsione della domanda e gestione automatizzata del magazzino.", benefits: ["Route optimization", "Demand forecasting", "Warehouse automation", "Tracking intelligente"] },
  { icon: HeartPulse, label: "Sanità", detail: "Supporto diagnostico, analisi di cartelle cliniche e gestione ottimizzata delle risorse ospedaliere.", benefits: ["Supporto diagnostico AI", "Analisi cartelle cliniche", "Ottimizzazione risorse", "Telemedicina avanzata"] },
  { icon: Building2, label: "Pubblica Amministrazione", detail: "Digitalizzazione dei processi burocratici, assistenti virtuali per i cittadini e analisi dei dati territoriali.", benefits: ["Digitalizzazione processi", "Assistenti virtuali", "Analisi dati territoriali", "Semplificazione burocrazia"] },
  { icon: Wrench, label: "PMI manifatturiere", detail: "Manutenzione predittiva, controllo qualità visivo e ottimizzazione dei processi produttivi su misura.", benefits: ["Manutenzione predittiva", "Quality control visivo", "Ottimizzazione processi", "Riduzione fermi macchina"] },
];

const features = [
  { text: "Progettato su misura", icon: Crosshair },
  { text: "Addestrato con dati reali del cliente", icon: BarChart3 },
  { text: "Ottimizzato per i processi specifici", icon: Settings },
  { text: "Isolato e dedicato", icon: Lock },
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
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-6">
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

        {/* Drawer for sector details */}
        <Drawer open={selectedSector !== null} onOpenChange={(open) => { if (!open) setSelectedSector(null); }}>
          <DrawerContent className="max-h-[85vh]">
            {selectedSector !== null && (() => {
              const sector = sectors[selectedSector];
              const Icon = sector.icon;
              return (
                <div className="px-6 pb-8 pt-2">
                  <DrawerHeader className="px-0">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <DrawerTitle className="text-xl font-bold text-foreground">{sector.label}</DrawerTitle>
                    </div>
                  </DrawerHeader>
                  <DrawerDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                    {sector.detail}
                  </DrawerDescription>
                  <div className="space-y-3">
                    <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">Vantaggi chiave</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sector.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 rounded-xl liquid-glass">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.a
                    href="https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium flex items-center justify-center gap-2 w-full mt-6"
                    whileTap={{ scale: 0.98 }}
                  >
                    Richiedi consulenza per {sector.label}
                  </motion.a>
                </div>
              );
            })()}
          </DrawerContent>
        </Drawer>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-center text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-6">
            Ogni modello viene
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.04, y: -3 }}
                className="liquid-glass-hover rounded-2xl p-5 text-center flex flex-col items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm leading-tight">{feature.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm italic mt-8"
          >
            Il risultato è un sistema che ragiona come l'azienda,
            <br />
            non come un&nbsp;chatbot.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
