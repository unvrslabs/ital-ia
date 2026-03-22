import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, MessageSquare, FileText, Users, Workflow, Headphones, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20al%20servizio%20AI%20Company%20con%20agenti%20AI%20per%20la%20mia%20azienda.%20Possiamo%20fissare%20una%20call%3F";

export const AgentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section id="agents" ref={sectionRef} className="py-24 md:py-40 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -left-32 bottom-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header — left aligned with big text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">AI Company</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
              La tua azienda,{" "}
              <span className="gradient-text">potenziata da Agenti&nbsp;AI.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ricreiamo i processi della tua azienda con agenti AI autonomi che usano i migliori modelli — Claude, GPT, Gemini.
            </p>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 self-start"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Scopri gli agenti
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bento grid layout — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
          {/* First card — large, spans 2 cols on lg */}
          {/* First card — large, spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="lg:col-span-2 rounded-3xl p-8 md:p-10 border border-white/10 bg-white/[0.06] backdrop-blur-sm relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <Sparkles className="w-5 h-5 text-white/20 group-hover:text-primary/60 transition-colors" />
            </div>
            <h3 className="text-foreground font-bold text-2xl mb-3">Vendite & Lead</h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">Qualifica lead, risponde ai clienti, gestisce il funnel 24/7.</p>
          </motion.div>

          {/* Second card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-sm group cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-2">Amministrazione</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Documenti, fatture, contratti e pratiche in automatico.</p>
          </motion.div>

          {/* Third card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-sm group cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
              <Headphones className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-2">Customer Care</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Supporto intelligente che risolve e scala solo quando serve.</p>
          </motion.div>

          {/* Fourth card — tall */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="lg:row-span-2 rounded-3xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-sm flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-2">HR & Recruiting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Screening CV, colloqui, onboarding e richieste interne.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">Integrato con</p>
              <p className="text-foreground/80 text-sm mt-1 font-medium">LinkedIn, Indeed, Email, CRM</p>
            </div>
          </motion.div>

          {/* Fifth card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-sm group cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
              <Workflow className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-2">Operazioni</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Approvazioni, report, KPI e alert automatizzati.</p>
          </motion.div>

          {/* Sixth card — Custom with subtle glow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-8 border border-primary/20 bg-primary/[0.06] backdrop-blur-sm relative overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(158_64%_42%/0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 animate-pulse-glow">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-2">Custom Agent</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Se lo fai a mano, lo può fare un agente. Su misura per te.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement — full width, big text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-2xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-snug">
            Non sostituiamo le persone.{" "}
            <span className="text-primary">Le liberiamo.</span>
          </p>
          <p className="text-muted-foreground text-base mt-4 max-w-lg mx-auto">
            Gli agenti gestiscono il ripetitivo. Il tuo team si concentra su strategia, relazioni e crescita.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
