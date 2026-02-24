import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

interface InlineCTAProps {
  text: string;
  buttonText?: string;
}

export const InlineCTA = ({ text, buttonText = "Parliamone" }: InlineCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center liquid-glass rounded-2xl p-8 md:p-10">
          <p className="text-foreground font-semibold text-lg md:text-xl mb-5">
            {text}
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
