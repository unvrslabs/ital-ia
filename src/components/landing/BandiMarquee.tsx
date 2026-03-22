import { motion } from "framer-motion";
import { Brain, Server, ShieldCheck, Database, Cpu, Lock, Zap, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; label: string }[] = [
  { icon: Brain, label: "LLM Proprietari" },
  { icon: Server, label: "On-Premise" },
  { icon: ShieldCheck, label: "GDPR Compliant" },
  { icon: Database, label: "Dati Sovrani" },
  { icon: Cpu, label: "DGX Spark" },
  { icon: Lock, label: "Zero Cloud Esteri" },
  { icon: Zap, label: "Agenti AI" },
  { icon: BarChart3, label: "AI Company" },
];

export const BandiMarquee = () => {
  const duplicated = [...items, ...items, ...items];

  return (
    <section className="py-8 overflow-hidden border-y border-border/20">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -50 * items.length] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          {duplicated.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/20 bg-primary/5 whitespace-nowrap"
            >
              <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-xs font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
