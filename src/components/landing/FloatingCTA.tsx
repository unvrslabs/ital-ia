import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

export const FloatingCTA = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ctaSection = document.getElementById("contact");
    if (!ctaSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(ctaSection);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30"
          aria-label="Contattaci su WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
