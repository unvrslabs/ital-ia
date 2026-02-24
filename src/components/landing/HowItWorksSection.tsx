import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulenza iniziale",
    description: "Analizziamo insieme i tuoi processi aziendali e identifichiamo dove l'AI può generare il massimo impatto. Nessun impegno.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configurazione e Training",
    description: "Addestriamo un LLM proprietario sui tuoi dati aziendali, su infrastruttura dedicata. Il modello impara il linguaggio del tuo settore.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Vai Live",
    description: "Il sistema è operativo. AI che ragiona come la tua azienda, completamente on-premise. Tu ti concentri sulla crescita.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Come Funziona</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Operativo in meno <br className="hidden md:block" />
            <span className="text-muted-foreground">di una settimana.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nessun progetto IT complesso. Nessuna migrazione.&nbsp;ITAL&nbsp;IA si adatta a&nbsp;te.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="liquid-glass-card p-6 md:p-8 flex gap-5 md:gap-8 items-start"
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <span className="text-3xl md:text-4xl font-black text-primary/30">{step.number}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-foreground font-bold text-lg md:text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
