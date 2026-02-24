import { motion } from "framer-motion";
import { ArrowRight, Brain, Server, ShieldCheck, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
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

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen pt-32 pb-24 md:py-24">
          {/* Left Side - Text */}
          <div className="text-left">
            {/* Badge */}
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

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-foreground">ITAL</span>{" "}
              <span className="text-primary">IA</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground/80 max-w-lg mb-4 leading-relaxed"
            >
              LLM proprietari per ogni settore, addestrati con i tuoi dati, eseguiti localmente su infrastruttura ad alte prestazioni.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-foreground font-medium mb-3"
            >
              Zero cloud esteri. Zero compromessi.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg text-foreground font-medium mb-10"
            >
              Questa non è automazione. Questa è <span className="text-primary font-semibold">infrastruttura cognitiva</span>.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <motion.a
                href="#sectors"
                className="btn-premium flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Scopri la piattaforma
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#sovereign"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center gap-1 py-4"
                whileHover={{ x: 5 }}
              >
                Perché AI sovrana →
              </motion.a>
            </motion.div>

            {/* Badges */}
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

          {/* Right Side - Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <motion.div className="relative w-full max-w-md">
              <div
                className="relative rounded-[2rem] p-6 md:p-8 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.12) 0%, hsl(0 0% 100% / 0.06) 100%)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid hsl(0 0% 100% / 0.25)',
                  boxShadow: '0 32px 64px -12px hsl(220 30% 10% / 0.4), inset 0 1px 0 0 hsl(0 0% 100% / 0.15)'
                }}
              >
                {/* Glow */}
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, hsl(158 64% 50% / 0.6) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                  animate={{
                    x: [-20, 80, -20],
                    y: [-20, 40, -20],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center mb-4 relative z-10"
                >
                  <span className="text-lg font-semibold text-foreground/90">UNVRS <span className="text-primary">ITAL</span> IA</span>
                </motion.div>

                {/* Counter */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mb-8 relative z-10"
                >
                  <div className="relative inline-block">
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl"
                      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <p className="relative text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                      <AnimatedNumber value={9} suffix="+" />
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Settori coperti</p>
                </motion.div>

                {/* Info Cards */}
                <div className="space-y-3 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer group"
                    style={{
                      background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.95) 0%, hsl(0 0% 100% / 0.9) 100%)',
                      boxShadow: '0 4px 24px -4px hsl(220 30% 10% / 0.15)',
                      border: '1px solid hsl(0 0% 90% / 0.8)'
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">LLM Proprietari</p>
                      <p className="text-sm text-slate-500">Modelli <span className="text-primary font-semibold">verticali</span> per settore</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.15 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer group"
                    style={{
                      background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.95) 0%, hsl(0 0% 100% / 0.9) 100%)',
                      boxShadow: '0 4px 24px -4px hsl(220 30% 10% / 0.15)',
                      border: '1px solid hsl(0 0% 90% / 0.8)'
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">Infrastruttura On-Premise</p>
                      <p className="text-sm text-slate-500">Basata su <span className="font-semibold text-slate-900">DGX Spark</span></p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20"
                animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
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
