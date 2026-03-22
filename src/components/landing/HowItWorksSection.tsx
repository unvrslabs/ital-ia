import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Settings, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulenza",
    description: "Analizziamo i tuoi processi e identifichiamo dove l'AI genera il massimo impatto.",
    accent: "text-green-400",
    bg: "from-green-500/10",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configurazione",
    description: "Costruiamo i tuoi agenti AI o addestriamo il tuo LLM proprietario sui dati aziendali.",
    accent: "text-blue-400",
    bg: "from-blue-500/10",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Vai Live",
    description: "Il sistema è operativo. Tu ti concentri sulla crescita, l'AI lavora per te.",
    accent: "text-primary",
    bg: "from-primary/10",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={ref} className="py-24 md:py-40 relative overflow-hidden">
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

        {/* Timeline layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary to-primary/30"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number circle */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center">
                  <span className={`text-xl font-black ${step.accent}`}>{step.number}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className={`p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${step.bg} to-transparent backdrop-blur-sm cursor-default`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="md:hidden w-10 h-10 rounded-full bg-background border border-primary/40 flex items-center justify-center">
                      <span className={`text-sm font-black ${step.accent}`}>{step.number}</span>
                    </div>
                    <step.icon className={`w-6 h-6 ${step.accent}`} />
                  </div>
                  <h3 className="text-foreground font-bold text-2xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
