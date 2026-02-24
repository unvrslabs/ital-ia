import { Heart, ArrowRight, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

const siteLinks = [
  { label: "AI Sovrana", href: "#sovereign" },
  { label: "Settori", href: "#sectors" },
  { label: "Come Funziona", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border/30" role="contentinfo">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-foreground font-bold text-lg">
              ITAL <span className="text-primary">IA</span>
            </span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              AI sovrana per le PMI italiane. I tuoi dati, il tuo modello, la tua infrastruttura.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:emanuele@unvrslabs.dev" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> emanuele@unvrslabs.dev
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Inizia ora</h4>
            <p className="text-muted-foreground text-sm mb-4">Consulenza gratuita di 30 minuti, senza impegno.</p>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi consulenza
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs flex items-center gap-1.5">
            Sviluppato con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> da{" "}
            <a
              href="https://www.unvrslabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Unvrs Labs
            </a>
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-muted-foreground text-xs hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
