import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Pronto a trasformare <br className="hidden md:block" />
            <span className="text-muted-foreground">il tuo business?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            30 minuti di consulenza gratuita. Nessun impegno. Vediamo insieme come l'AI sovrana può fare la differenza per la tua&nbsp;azienda.
          </p>

          <div className="flex flex-col items-center gap-2 mb-10 text-foreground/80 font-medium">
            <span>Costruita in Italia.</span>
            <span>Eseguita in Italia.</span>
            <span className="text-primary font-semibold">Di tua proprietà.</span>
          </div>

          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-3 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi consulenza gratuita
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
