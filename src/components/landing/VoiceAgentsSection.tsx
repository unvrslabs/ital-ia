import { motion } from "framer-motion";
import { Phone, PhoneOff, Mic, Briefcase, ShoppingBag, Factory, Building2 } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

type VoiceAgent = {
  id: string;
  agentId: string;
  name: string;
  role: string;
  sector: string;
  icon: LucideIcon;
  photo: string;
  firstMessage: string;
  desc: string;
};

const agents: VoiceAgent[] = [
  {
    id: "marco",
    agentId: "agent_8901kmbcr15dev0shgh0cna1t0j7",
    name: "Marco",
    role: "Assistente Studio Commercialista",
    sector: "Studio Professionale",
    icon: Briefcase,
    photo: "/agents/marco.jpg",
    firstMessage: "Buongiorno, sono Marco, assistente virtuale dello studio. Come posso aiutarla oggi?",
    desc: "Scadenze fiscali, IVA, fatturazione, dichiarazioni, regime forfettario.",
  },
  {
    id: "giulia",
    agentId: "agent_2701kmbcrr8deywapg45f3wt6zdx",
    name: "Giulia",
    role: "Assistente E-commerce",
    sector: "E-commerce / Retail",
    icon: ShoppingBag,
    photo: "/agents/giulia.jpg",
    firstMessage: "Ciao! Sono Giulia, la tua assistente. Come posso aiutarti con il tuo ordine?",
    desc: "Ordini, resi, spedizioni, taglie, promozioni e pagamenti.",
  },
  {
    id: "roberto",
    agentId: "agent_6401kmbcrseffdfte0h0vvr910wq",
    name: "Roberto",
    role: "Assistente Produzione",
    sector: "Manifatturiera",
    icon: Factory,
    photo: "/agents/roberto.jpg",
    firstMessage: "Buongiorno, sono Roberto, assistente di produzione. Come posso assisterla?",
    desc: "Stato produzione, manutenzione, qualità, magazzino e fornitori.",
  },
  {
    id: "sara",
    agentId: "agent_7001kmbcrtefe2ktsth65wrpkr20",
    name: "Sara",
    role: "Assistente Creativa",
    sector: "Agenzia Marketing",
    icon: Building2,
    photo: "/agents/sara.jpg",
    firstMessage: "Ciao! Sono Sara, la tua assistente creativa. Su quale progetto posso aiutarti?",
    desc: "Campagne, social media, brief creativi, analytics e contenuti.",
  },
];

const AgentCard = ({ agent, onCall }: { agent: VoiceAgent; onCall: (agent: VoiceAgent) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 flex flex-col cursor-default"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 flex-shrink-0">
          <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="text-foreground font-bold text-lg">{agent.name}</h3>
          <p className="text-primary text-xs font-medium">{agent.sector}</p>
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-1">{agent.role}</p>
      <p className="text-muted-foreground/60 text-xs leading-relaxed mb-6">{agent.desc}</p>

      <div className="mt-auto">
        <motion.button
          onClick={() => onCall(agent)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          <Phone className="w-4 h-4" />
          Parla con {agent.name}
        </motion.button>
      </div>
    </motion.div>
  );
};

export const VoiceAgentsSection = () => {
  const [activeAgent, setActiveAgent] = useState<VoiceAgent | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const conversationRef = useRef<any>(null);

  const startCall = useCallback(async (agent: VoiceAgent) => {
    setActiveAgent(agent);
    setIsConnecting(true);

    try {
      const { Conversation } = await import("@11labs/client");

      conversationRef.current = await Conversation.startSession({
        agentId: agent.agentId,
        onConnect: () => {
          setIsConnecting(false);
        },
        onDisconnect: () => {
          setActiveAgent(null);
          setIsConnecting(false);
          conversationRef.current = null;
        },
        onError: (error: any) => {
          console.error("ElevenLabs error:", error);
          setActiveAgent(null);
          setIsConnecting(false);
          conversationRef.current = null;
        },
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setActiveAgent(null);
      setIsConnecting(false);
    }
  }, []);

  const endCall = useCallback(async () => {
    if (conversationRef.current) {
      await conversationRef.current.endSession();
      conversationRef.current = null;
    }
    setActiveAgent(null);
    setIsConnecting(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (conversationRef.current) {
        conversationRef.current.endSession();
      }
    };
  }, []);

  return (
    <section id="voice-demo" className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            LIVE DEMO
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
            Parla con i nostri
            <br />
            <span className="text-primary">Agenti&nbsp;AI.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Prova in 30 secondi cosa può fare un agente per la tua azienda.
            <br className="hidden md:block" />
            Seleziona un settore e inizia a&nbsp;parlare.
          </p>
        </motion.div>

        {/* Agent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onCall={startCall} />
          ))}
        </div>

        {/* Active call overlay */}
        {activeAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-sm w-full text-center"
            >
              {/* Photo with pulsing ring */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className={`absolute inset-0 rounded-full ${isConnecting ? "bg-primary/20" : "bg-primary/20 animate-pulse"}`} />
                <div className={`absolute inset-2 rounded-full ${isConnecting ? "bg-primary/10" : "bg-primary/10 animate-pulse"}`} style={{ animationDelay: "0.2s" }} />
                <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-primary/40">
                  <img src={activeAgent.photo} alt={activeAgent.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-foreground font-bold text-2xl mb-2">
                {isConnecting ? "Connessione in corso..." : `Stai parlando con ${activeAgent.name}`}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{activeAgent.role}</p>
              {!isConnecting && (
                <p className="text-primary/60 text-xs mb-8">Parla — {activeAgent.name} ti ascolta</p>
              )}

              <motion.button
                onClick={endCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors"
              >
                <PhoneOff className="w-5 h-5" />
                Termina chiamata
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
