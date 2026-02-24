import { motion, useInView } from "framer-motion";
import { Database, Cpu, Brain, BarChart3 } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Database, label: "Dati aziendali", sub: "I tuoi dati restano tuoi" },
  { icon: Cpu, label: "Training locale", sub: "Su infrastruttura DGX Spark" },
  { icon: Brain, label: "LLM dedicato", sub: "Modello proprietario verticale" },
  { icon: BarChart3, label: "Output AI", sub: "Risposte precise e sicure" },
];

// Positions for 4 nodes around a rounded rectangle path (responsive)
const nodePositions = [
  { cx: "15%", cy: "20%", labelY: -36 },   // top-left
  { cx: "85%", cy: "20%", labelY: -36 },   // top-right
  { cx: "85%", cy: "80%", labelY: 36 },    // bottom-right
  { cx: "15%", cy: "80%", labelY: 36 },    // bottom-left
];

export const DataFlowDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  // Rounded rectangle path (clockwise) matching node positions
  const pathD = "M 15,20 L 85,20 Q 95,20 95,30 L 95,70 Q 95,80 85,80 L 15,80 Q 5,80 5,70 L 5,30 Q 5,20 15,20 Z";

  return (
    <div className="max-w-4xl mx-auto mt-16" ref={containerRef}>
      {/* Circuit-style diagram */}
      <div className="relative w-full" style={{ paddingBottom: "60%" }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="pathGradient" gradientUnits="userSpaceOnUse" x1="5" y1="50" x2="95" y2="50">
              <stop offset="0%" stopColor="hsla(158,64%,42%,0.15)" />
              <stop offset="50%" stopColor="hsla(158,64%,42%,0.3)" />
              <stop offset="100%" stopColor="hsla(158,64%,42%,0.15)" />
            </linearGradient>
          </defs>

          {/* Background path */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="0.4"
            strokeLinecap="round"
          />

          {/* Animated traced path */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="hsla(158,64%,42%,0.7)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />

          {/* Animated traveling dot */}
          {isInView && (
            <motion.circle
              r="1"
              fill="hsla(158,64%,42%,1)"
              filter="url(#nodeGlow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              style={{ offsetPath: `path("${pathD}")` } as any}
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={pathD}
              />
            </motion.circle>
          )}

          {/* Nodes */}
          {steps.map((step, index) => {
            const pos = nodePositions[index];
            const cx = parseFloat(pos.cx);
            const cy = parseFloat(pos.cy);

            return (
              <g key={index}>
                {/* Pulse ring */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="5.5"
                  fill="none"
                  stroke="hsla(158,64%,42%,0.3)"
                  strokeWidth="0.3"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? {
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0, 0.4],
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />

                {/* Node background circle */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="hsla(158,64%,42%,0.08)"
                  stroke="hsla(158,64%,42%,0.4)"
                  strokeWidth="0.4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              </g>
            );
          })}
        </svg>

        {/* HTML overlay for icons and labels */}
        {steps.map((step, index) => {
          const pos = nodePositions[index];
          const isTop = index < 2;

          return (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center"
              style={{
                left: pos.cx,
                top: pos.cy,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.6 + index * 0.2, type: "spring", stiffness: 200, damping: 15 }}
            >
              <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              <div className={`absolute ${isTop ? "-top-10 md:-top-14" : "top-8 md:top-12"} text-center whitespace-nowrap`}>
                <p className="text-foreground font-semibold text-[10px] md:text-sm">{step.label}</p>
                <p className="text-muted-foreground text-[8px] md:text-xs leading-tight">{step.sub}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DGX Spark specs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
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
