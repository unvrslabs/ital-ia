import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Il Futuro dell'AI Italiana <br className="hidden md:block" />
            <span className="text-muted-foreground">Inizia Qui.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            L'intelligenza artificiale non è una moda. È un'infrastruttura strategica&nbsp;nazionale.
          </p>

          <div className="flex flex-col items-center gap-2 mb-10 text-foreground/80 font-medium">
            <span>Costruita in Italia.</span>
            <span>Eseguita in Italia.</span>
            <span className="text-primary font-semibold">Di tua proprietà.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-card p-8 md:p-10 max-w-lg mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};
