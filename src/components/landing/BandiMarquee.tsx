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
    <section className="py-6 overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -66 * items.length] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
      >
        {duplicated.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-primary/25 bg-primary/5 whitespace-nowrap"
          >
            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
