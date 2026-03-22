import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Bot, MessageSquare, FileText, Users, Workflow, Headphones, ArrowRight,
  Building2, ShoppingBag, Briefcase, Factory,
  Calculator, Scale, Phone, Mail, FileSearch, BarChart3,
  Package, Truck, ShoppingCart, TrendingUp, Star, Image,
  Wrench, ClipboardCheck, Settings, Shield,
  PenTool, Megaphone, Globe, Code, Palette,
  UserCheck, GraduationCap, Heart,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";

type Agent = {
  icon: LucideIcon;
  name: string;
  desc: string;
};

type Department = {
  name: string;
  agents: Agent[];
};

type CompanyType = {
  id: string;
  label: string;
  icon: LucideIcon;
  ceo: string;
  departments: Department[];
};

const companies: CompanyType[] = [
  {
    id: "studio",
    label: "Studio Professionale",
    icon: Briefcase,
    ceo: "Titolare / Partner",
    departments: [
      {
        name: "Segreteria",
        agents: [
          { icon: Phone, name: "Agente Centralino", desc: "Risponde alle chiamate, smista richieste e fissa appuntamenti" },
          { icon: Mail, name: "Agente Email", desc: "Gestisce la posta in entrata, smista e risponde alle richieste standard" },
          { icon: Calendar, name: "Agente Agenda", desc: "Coordina calendari, invia promemoria e gestisce gli slot disponibili" },
        ],
      },
      {
        name: "Amministrazione",
        agents: [
          { icon: Calculator, name: "Agente Fatturazione", desc: "Emette fatture, gestisce scadenze e solleciti di pagamento" },
          { icon: FileText, name: "Agente Documentale", desc: "Archivia documenti, cerca precedenti e prepara bozze" },
          { icon: FileSearch, name: "Agente Compliance", desc: "Monitora scadenze fiscali e normative, prepara adempimenti" },
        ],
      },
      {
        name: "Clienti",
        agents: [
          { icon: MessageSquare, name: "Agente Accoglienza", desc: "Primo contatto con nuovi clienti, raccoglie info e qualifica" },
          { icon: BarChart3, name: "Agente Report", desc: "Prepara report periodici, analisi e dashboard per i clienti" },
          { icon: Headphones, name: "Agente Supporto", desc: "Risponde a domande frequenti e gestisce richieste di stato pratica" },
        ],
      },
    ],
  },
  {
    id: "manifattura",
    label: "Azienda Manifatturiera",
    icon: Factory,
    ceo: "Amministratore Delegato",
    departments: [
      {
        name: "Commerciale",
        agents: [
          { icon: MessageSquare, name: "Agente Lead", desc: "Qualifica contatti in entrata e li assegna ai commerciali" },
          { icon: FileText, name: "Agente Preventivi", desc: "Genera preventivi dai listini, personalizza offerte e follow-up" },
          { icon: Users, name: "Agente CRM", desc: "Aggiorna il CRM, traccia interazioni e segnala opportunità" },
        ],
      },
      {
        name: "Produzione",
        agents: [
          { icon: ClipboardCheck, name: "Agente Qualità", desc: "Controlla parametri di qualità, segnala anomalie e genera report" },
          { icon: Settings, name: "Agente Planning", desc: "Pianifica la produzione in base a ordini, capacità e scorte" },
          { icon: Wrench, name: "Agente Manutenzione", desc: "Monitora stato macchinari, programma manutenzioni preventive" },
        ],
      },
      {
        name: "Amministrazione",
        agents: [
          { icon: Calculator, name: "Agente Contabilità", desc: "Registra fatture, riconcilia pagamenti e prepara bilanci" },
          { icon: FileSearch, name: "Agente Acquisti", desc: "Confronta fornitori, gestisce ordini e monitora consegne" },
          { icon: Shield, name: "Agente Sicurezza", desc: "Gestisce documentazione sicurezza, scadenze e formazione" },
        ],
      },
      {
        name: "HR",
        agents: [
          { icon: UserCheck, name: "Agente Recruiting", desc: "Screening CV, primo contatto candidati e scheduling colloqui" },
          { icon: GraduationCap, name: "Agente Formazione", desc: "Organizza corsi, traccia certificazioni e piani di crescita" },
          { icon: Heart, name: "Agente Welfare", desc: "Gestisce richieste dipendenti, ferie, permessi e benefit" },
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce / Retail",
    icon: ShoppingBag,
    ceo: "Founder / CEO",
    departments: [
      {
        name: "Vendite",
        agents: [
          { icon: ShoppingCart, name: "Agente Shop", desc: "Assiste i clienti nello shopping, consiglia prodotti e gestisce il carrello" },
          { icon: TrendingUp, name: "Agente Pricing", desc: "Analizza competitor, suggerisce prezzi dinamici e gestisce promozioni" },
          { icon: Star, name: "Agente Recensioni", desc: "Monitora e risponde alle recensioni, segnala criticità" },
        ],
      },
      {
        name: "Logistica",
        agents: [
          { icon: Package, name: "Agente Inventario", desc: "Monitora scorte, prevede domanda e lancia riordini automatici" },
          { icon: Truck, name: "Agente Spedizioni", desc: "Traccia ordini, gestisce resi e comunica con i corrieri" },
          { icon: FileText, name: "Agente Resi", desc: "Processa richieste di reso, rimborsi e sostituzioni" },
        ],
      },
      {
        name: "Marketing",
        agents: [
          { icon: Mail, name: "Agente Newsletter", desc: "Crea e invia campagne email personalizzate su segmenti" },
          { icon: Image, name: "Agente Social", desc: "Pianifica contenuti, risponde ai commenti e monitora menzioni" },
          { icon: BarChart3, name: "Agente Analytics", desc: "Analizza performance, identifica trend e suggerisce ottimizzazioni" },
        ],
      },
      {
        name: "Supporto",
        agents: [
          { icon: Headphones, name: "Agente Chat", desc: "Supporto live 24/7 per ordini, prodotti e problemi tecnici" },
          { icon: Phone, name: "Agente Callback", desc: "Gestisce richieste di richiamata e follow-up post-vendita" },
          { icon: MessageSquare, name: "Agente WhatsApp", desc: "Assistenza via WhatsApp con risposte automatiche e handoff" },
        ],
      },
    ],
  },
  {
    id: "agenzia",
    label: "Agenzia / Servizi",
    icon: Building2,
    ceo: "Direttore / Founder",
    departments: [
      {
        name: "Business Dev",
        agents: [
          { icon: MessageSquare, name: "Agente Outreach", desc: "Identifica prospect, invia messaggi personalizzati e follow-up" },
          { icon: FileText, name: "Agente Proposte", desc: "Genera proposte commerciali personalizzate dal brief del cliente" },
          { icon: Users, name: "Agente Onboarding", desc: "Guida i nuovi clienti nel setup iniziale e raccoglie requisiti" },
        ],
      },
      {
        name: "Produzione",
        agents: [
          { icon: PenTool, name: "Agente Copy", desc: "Scrive testi, caption, articoli e contenuti per i clienti" },
          { icon: Palette, name: "Agente Creativo", desc: "Brief creativi, revisione asset e coordinamento designer" },
          { icon: Code, name: "Agente Tecnico", desc: "Gestisce task tecnici, deploy, monitoring e bug report" },
        ],
      },
      {
        name: "Account",
        agents: [
          { icon: Megaphone, name: "Agente Campagne", desc: "Lancia e monitora campagne, ottimizza budget e targeting" },
          { icon: BarChart3, name: "Agente Reporting", desc: "Report settimanali/mensili automatici per ogni cliente" },
          { icon: Globe, name: "Agente Social", desc: "Scheduling post, community management e analisi engagement" },
        ],
      },
      {
        name: "Operations",
        agents: [
          { icon: Calculator, name: "Agente Finance", desc: "Fatturazione clienti, tracking ore e margini per progetto" },
          { icon: Workflow, name: "Agente PM", desc: "Assegna task, monitora deadline e segnala ritardi" },
          { icon: Bot, name: "Agente Interno", desc: "Knowledge base interna, procedure e risposte al team" },
        ],
      },
    ],
  },
];

// Need to import Calendar separately since it's used
import { Calendar } from "lucide-react";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20al%20servizio%20AI%20Company%20con%20agenti%20AI%20per%20la%20mia%20azienda.%20Possiamo%20fissare%20una%20call%3F";

const AgentCard = ({ agent, delay }: { agent: Agent; delay: number }) => {
  const Icon = agent.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-default group"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-foreground font-semibold text-sm leading-tight">{agent.name}</p>
          <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{agent.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const AgentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("studio");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const activeCompany = companies.find((c) => c.id === activeTab)!;
  const totalAgents = activeCompany.departments.reduce((sum, d) => sum + d.agents.length, 0);

  return (
    <section id="agents" ref={sectionRef} className="py-24 md:py-40 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -left-32 bottom-40 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">AI Company</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
            La tua azienda,{" "}
            <span className="gradient-text">potenziata da Agenti&nbsp;AI.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Ricreiamo i processi della tua azienda con Agenti AI autonomi che usano i migliori modelli — Claude, GPT, Gemini.
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Scopri gli agenti
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60 font-medium mb-4">Seleziona il tuo settore</p>
          <div className="flex flex-wrap gap-2">
            {companies.map((company) => {
              const Icon = company.icon;
              const isActive = activeTab === company.id;
              return (
                <motion.button
                  key={company.id}
                  onClick={() => setActiveTab(company.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "border border-white/10 bg-white/[0.04] text-muted-foreground hover:text-foreground hover:bg-white/[0.08]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {company.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Organigramma */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* CEO node */}
            <div className="flex flex-col items-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="px-8 py-4 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm text-center"
              >
                <p className="text-primary font-bold text-lg">{activeCompany.ceo}</p>
                <p className="text-muted-foreground text-xs mt-1">{totalAgents} Agenti AI attivi</p>
              </motion.div>
              {/* Connector line */}
              <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-white/10" />
              {/* Horizontal connector */}
              <div className="hidden md:block w-full max-w-4xl h-px bg-white/10 relative">
                {activeCompany.departments.map((_, i) => {
                  const count = activeCompany.departments.length;
                  const left = count === 1 ? 50 : (i / (count - 1)) * 100;
                  return (
                    <div
                      key={i}
                      className="absolute top-0 w-px h-6 bg-white/10"
                      style={{ left: `${left}%` }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Departments grid */}
            <div className={`grid grid-cols-1 gap-4 ${
              activeCompany.departments.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
            }`}>
              {activeCompany.departments.map((dept, deptIndex) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: deptIndex * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
                >
                  {/* Department header */}
                  <div className="px-5 py-4 border-b border-white/8 bg-white/[0.03]">
                    <p className="text-foreground font-bold text-sm">{dept.name}</p>
                    <p className="text-muted-foreground/60 text-xs mt-0.5">{dept.agents.length} agenti</p>
                  </div>
                  {/* Agents list */}
                  <div className="p-3 space-y-2">
                    {dept.agents.map((agent, agentIndex) => (
                      <AgentCard
                        key={agent.name}
                        agent={agent}
                        delay={0.15 + deptIndex * 0.1 + agentIndex * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
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
