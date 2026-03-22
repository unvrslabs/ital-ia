import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "per la Sanità",
  "per la Finanza",
  "per l'Industria",
  "per la Logistica",
  "per l'Energia",
  "per il Commercio",
  "per la PA",
  "per le PMI",
  "con Agenti AI",
  "con LLM Sovrani",
  "con AI Company",
];

export const TypewriterEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[currentIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="text-primary font-semibold">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
      />
    </span>
  );
};
