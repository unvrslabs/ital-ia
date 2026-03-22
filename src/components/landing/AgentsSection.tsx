import { motion } from "framer-motion";
import { Bot, MessageSquare, FileText, Users, Workflow, Headphones, ArrowRight } from "lucide-react";

const agents = [
  {
    icon: MessageSquare,
    title: "Vendite & Lead",
    desc: "Agenti che qualificano lead, rispondono ai clienti e gestiscono il funnel commerciale 24/7.",
  },
  {
    icon: FileText,
    title: "Amministrazione",
    desc: "Generazione documenti, fatturazione, contratti e gestione pratiche burocratiche in automatico.",
  },
  {
    icon: Headphones,
    title: "Customer Care",
    desc: "Supporto clienti intelligente che risolve problemi, apre ticket e scala solo quando serve.",
  },
  {
    icon: Users,
    title: "HR & Recruiting",
    desc: "Screening CV, scheduling colloqui, onboarding dipendenti e gestione richieste interne.",
  },
  {
    icon: Workflow,
    title: "Operazioni",
    desc: "Automazione dei workflow interni: approvazioni, report, monitoraggio KPI e alert.",
  },
  {
    icon: Bot,
    title: "Custom Agent",
    desc: "Agenti su misura per qualsiasi processo specifico della tua azienda. Se lo fai a mano, lo può fare un agente.",
  },
];

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20al%20servizio%20AI%20Company%20con%20agenti%20AI%20per%20la%20mia%20azienda.%20Possiamo%20fissare%20una%20call%3F";

export const AgentsSection = () => {
  return (
    <section id="agents" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">AI Company</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            La tua azienda, <br className="hidden md:block" />
            <span className="text-muted-foreground">potenziata da agenti AI.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ricreiamo i processi della tua azienda con agenti AI autonomi che usano i migliori modelli sul mercato — Claude, GPT, Gemini. Ogni reparto ha il suo agente, ogni processo diventa&nbsp;intelligente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="liquid-glass rounded-2xl p-6 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <agent.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base mb-2">{agent.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{agent.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto liquid-glass-card rounded-2xl p-8 text-center"
        >
          <p className="text-foreground font-semibold text-lg mb-2">
            Non sostituiamo le persone. Le liberiamo.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Gli agenti AI gestiscono il lavoro ripetitivo. Il tuo team si concentra su strategia, relazioni e crescita.
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Scopri cosa può fare un agente per te
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
