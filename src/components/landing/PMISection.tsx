import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Brain, Lock, Trophy, RefreshCw, Database, Sparkles } from "lucide-react";

const wants = [
  { icon: TrendingUp, text: "Aumentare produttività" },
  { icon: DollarSign, text: "Ridurre costi operativi" },
  { icon: Brain, text: "Automatizzare decisioni" },
  { icon: Lock, text: "Proteggere dati e know-how" },
  { icon: Trophy, text: "Costruire vantaggio competitivo reale" },
];

const grows = [
  { icon: Sparkles, text: "Modelli che evolvono" },
  { icon: Database, text: "Dataset che si raffinano" },
  { icon: RefreshCw, text: "Sistemi che apprendono nel tempo" },
];

export const PMISection = () => {
  return (
    <section id="pmi" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">Progettato per Crescere</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Per le PMI italiane. <br className="hidden md:block" />
            <span className="text-muted-foreground">Progettato per crescere.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* What PMIs want */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card p-8"
          >
            <h3 className="text-sm text-muted-foreground mb-5">Le PMI italiane vogliono</h3>
            <div className="space-y-3">
              {wants.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platform grows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card p-8"
          >
            <h3 className="text-sm text-muted-foreground mb-5">La piattaforma cresce con l'azienda</h3>
            <div className="space-y-3">
              {grows.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg font-medium max-w-lg mx-auto"
        >
          Non vendiamo strumenti. <span className="text-foreground">Costruiamo sistemi intelligenti permanenti.</span>
        </motion.p>
      </div>
    </section>
  );
};
