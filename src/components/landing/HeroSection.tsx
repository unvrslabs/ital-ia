import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ParticleBackground } from "./ParticleBackground";
import { TypewriterEffect } from "./TypewriterEffect";

const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const timer = setInterval(() => {
            start += Math.ceil(value / 40);
            if (start >= value) {
              start = value;
              clearInterval(timer);
            }
            setDisplayValue(start);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const stats = [
  { value: 78, suffix: "%", label: "PMI senza AI", sub: "Delle PMI italiane non usa ancora intelligenza artificiale" },
  { value: 40, suffix: "%", label: "Riduzione costi", sub: "Risparmio medio delle aziende che adottano AI nei processi" },
  { value: 3, suffix: "x", label: "Produttività", sub: "Aumento medio della produttività con AI dedicata" },
  { value: 2026, suffix: "", label: "Obbligo NIS2", sub: "Scadenza per la conformità alla direttiva europea sulla sicurezza" },
];

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen pt-32 pb-24 md:py-24">
          {/* Left Side - Text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-[hsl(145,70%,45%)]" />
                <span className="w-2 h-2 rounded-full bg-foreground" />
                <span className="w-2 h-2 rounded-full bg-[hsl(0,65%,50%)]" />
                <span className="ml-1">Infrastruttura AI Sovrana</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-foreground">ITAL</span>{" "}
              <span className="text-primary">IA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-xl md:text-2xl text-foreground/90 mb-6"
            >
              LLM proprietari <TypewriterEffect />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground/80 max-w-lg mb-4 leading-relaxed"
            >
              Addestrati con i tuoi dati, eseguiti localmente su infrastruttura ad alte&nbsp;prestazioni.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-foreground font-medium mb-10"
            >
              Questa non è automazione. Questa è <span className="text-primary font-semibold">infrastruttura&nbsp;cognitiva</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Richiedi consulenza
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#sectors"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center gap-1 py-4"
                whileHover={{ x: 5 }}
              >
                Scopri la piattaforma →
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs text-muted-foreground">
                <span>🇮🇹</span>
                <span className="font-medium">Made in Italy</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">100% Sovrana</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="liquid-glass rounded-2xl p-5 md:p-6 text-center cursor-default"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1 tracking-tight">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-foreground font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-muted-foreground text-xs leading-tight">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-foreground/50"
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
