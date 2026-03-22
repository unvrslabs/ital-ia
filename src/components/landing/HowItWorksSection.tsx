import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulenza",
    description: "Analizziamo i tuoi processi e identifichiamo dove l'AI genera il massimo impatto.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configurazione",
    description: "Costruiamo i tuoi agenti AI o addestriamo il tuo LLM proprietario sui dati aziendali.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Vai Live",
    description: "Il sistema è operativo. Tu ti concentri sulla crescita, l'AI lavora per te.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Come Funziona</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6">
            Tre passi.{" "}
            <span className="text-muted-foreground">Zero complessità.</span>
          </h2>
        </motion.div>

        {/* Horizontal cards with connecting line */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="w-[120px] h-[120px] rounded-full border border-primary/20 bg-primary/5 flex flex-col items-center justify-center mb-8 relative"
                >
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow" />
                  <span className="text-primary/40 text-xs font-bold tracking-widest relative z-10">{step.number}</span>
                  <step.icon className="w-8 h-8 text-primary relative z-10 mt-1" />
                </motion.div>

                {/* Arrow between circles — mobile only */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-2">
                    <ArrowRight className="w-5 h-5 text-primary/30 rotate-90" />
                  </div>
                )}

                <h3 className="text-foreground font-bold text-2xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
