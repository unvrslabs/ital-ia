import { motion, useInView } from "framer-motion";
import { Database, Cpu, Brain, BarChart3 } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Database, label: "Dati aziendali", sub: "I tuoi dati restano tuoi" },
  { icon: Cpu, label: "Training locale", sub: "Su infrastruttura DGX Spark" },
  { icon: Brain, label: "LLM dedicato", sub: "Modello proprietario verticale" },
  { icon: BarChart3, label: "Output AI", sub: "Risposte precise e sicure" },
];

export const DataFlowDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="max-w-4xl mx-auto mt-16" ref={containerRef}>
      {/* Mobile: Vertical animated timeline */}
      <div className="md:hidden relative">
        {/* Animated vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-[2px]">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-primary via-primary/60 to-primary/20 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Animated glow dot traveling down */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_4px_hsla(158,64%,42%,0.5)]"
            initial={{ top: "0%" }}
            animate={isInView ? { top: ["0%", "100%"] } : { top: "0%" }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3 + index * 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 pl-[3.25rem]"
            >
              {/* Node circle on the line */}
              <motion.div
                className="absolute left-[1.125rem] w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4 + index * 0.3, type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
              </motion.div>

              {/* Card */}
              <div className="flex-1 liquid-glass rounded-2xl p-5 flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0"
                  animate={isInView ? {
                    boxShadow: [
                      "0 0 0 0 hsla(158,64%,42%,0)",
                      "0 0 16px 3px hsla(158,64%,42%,0.2)",
                      "0 0 0 0 hsla(158,64%,42%,0)",
                    ],
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{step.label}</p>
                  <p className="text-muted-foreground text-xs leading-tight">{step.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal with animated SVG path */}
      <div className="hidden md:block relative">
        {/* SVG animated connecting path */}
        <svg
          className="absolute top-8 left-0 w-full h-4 pointer-events-none"
          viewBox="0 0 800 16"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 100 8 L 700 8"
            fill="none"
            stroke="hsla(158,64%,42%,0.3)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.path
            d="M 100 8 L 700 8"
            fill="none"
            stroke="hsla(158,64%,42%,1)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
          {/* Traveling glow */}
          <motion.circle
            r="4"
            fill="hsla(158,64%,42%,0.8)"
            filter="url(#glow)"
            initial={{ cx: 100, cy: 8 }}
            animate={isInView ? { cx: [100, 700] } : { cx: 100 }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <div className="grid grid-cols-4 gap-0 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-3"
                animate={isInView ? {
                  boxShadow: [
                    "0 0 0 0 hsla(158,64%,42%,0)",
                    "0 0 20px 4px hsla(158,64%,42%,0.2)",
                    "0 0 0 0 hsla(158,64%,42%,0)",
                  ],
                } : {}}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
              >
                <step.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <p className="text-foreground font-semibold text-sm mb-1">{step.label}</p>
              <p className="text-muted-foreground text-xs leading-tight max-w-[140px]">{step.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DGX Spark specs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { label: "GPU", value: "Blackwell" },
          { label: "VRAM", value: "128 GB" },
          { label: "Prestazioni", value: "1000 TOPS" },
          { label: "Formato", value: "Desktop" },
        ].map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="liquid-glass rounded-xl p-4 text-center"
          >
            <p className="text-primary font-bold text-lg">{spec.value}</p>
            <p className="text-muted-foreground text-xs mt-1">{spec.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
