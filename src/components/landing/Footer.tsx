import { useState } from "react";
import { Heart, ArrowRight, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

const siteLinks = [
  { label: "AI Sovrana", href: "#sovereign" },
  { label: "Settori", href: "#sectors" },
  { label: "Come Funziona", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const PrivacyContent = () => (
  <div className="space-y-6 text-foreground/90 text-sm leading-relaxed">
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">1. Titolare del Trattamento</h3>
      <p>Il titolare del trattamento dei dati è <strong>Unvrs Labs</strong>, contattabile all'indirizzo email <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline">emanuele@unvrslabs.dev</a>.</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">2. Dati Raccolti</h3>
      <p>Raccogliamo i seguenti dati personali forniti volontariamente dall'utente:</p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Nome dell'azienda</li>
        <li>Settore di appartenenza</li>
        <li>Contenuto del messaggio inviato</li>
      </ul>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">3. Finalità del Trattamento</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>Rispondere alle richieste di consulenza</li>
        <li>Fornire informazioni sui servizi offerti</li>
        <li>Gestire la comunicazione con i potenziali clienti</li>
      </ul>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">4. Base Giuridica</h3>
      <p>Il trattamento dei dati è basato sul consenso dell'utente (Art. 6, par. 1, lett. a del GDPR) e sull'esecuzione di misure precontrattuali (Art. 6, par. 1, lett. b del GDPR).</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">5. Conservazione dei Dati</h3>
      <p>I dati personali saranno conservati per il tempo strettamente necessario e comunque non oltre 24 mesi dall'ultimo contatto.</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">6. Condivisione dei Dati</h3>
      <p>I dati personali non saranno venduti, ceduti o condivisi con terze parti, ad eccezione dei fornitori di servizi tecnici necessari al funzionamento della piattaforma.</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">7. Diritti dell'Interessato</h3>
      <p>In conformità al GDPR, l'utente ha diritto di:</p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
        <li>Accedere ai propri dati personali</li>
        <li>Richiedere la rettifica o la cancellazione dei dati</li>
        <li>Opporsi al trattamento</li>
        <li>Richiedere la portabilità dei dati</li>
        <li>Revocare il consenso in qualsiasi momento</li>
      </ul>
      <p className="mt-2">Per esercitare questi diritti, contattare <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline">emanuele@unvrslabs.dev</a>.</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">8. Sicurezza</h3>
      <p>Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita o distruzione.</p>
    </section>
    <p className="text-muted-foreground text-xs pt-4 border-t border-border/20">Ultimo aggiornamento: Febbraio 2026</p>
  </div>
);

const CookieContent = () => (
  <div className="space-y-6 text-foreground/90 text-sm leading-relaxed">
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">1. Cosa sono i Cookie</h3>
      <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web.</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">2. Tipologie di Cookie Utilizzati</h3>
      <h4 className="text-foreground font-medium mt-3 mb-1">Cookie Tecnici (Necessari)</h4>
      <p className="text-muted-foreground">Essenziali per il funzionamento del sito. Non richiedono il consenso dell'utente.</p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
        <li>Cookie di sessione per la navigazione</li>
        <li>Cookie di preferenze (es. lingua)</li>
      </ul>
      <h4 className="text-foreground font-medium mt-3 mb-1">Cookie Analitici</h4>
      <p className="text-muted-foreground">Utilizzati per raccogliere informazioni aggregate sull'utilizzo del sito.</p>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">3. Cookie di Terze Parti</h3>
      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
        <li><strong>Google Fonts</strong> — per il caricamento dei caratteri tipografici</li>
      </ul>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">4. Gestione dei Cookie</h3>
      <p>L'utente può gestire le preferenze sui cookie dalle impostazioni del proprio browser:</p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
        <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
      </ul>
    </section>
    <section>
      <h3 className="text-base font-semibold text-foreground mb-2">5. Contatti</h3>
      <p>Per qualsiasi domanda, contattare <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline">emanuele@unvrslabs.dev</a>.</p>
    </section>
    <p className="text-muted-foreground text-xs pt-4 border-t border-border/20">Ultimo aggiornamento: Febbraio 2026</p>
  </div>
);

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
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-muted-foreground text-xs hover:text-primary transition-colors">
                  Privacy Policy
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] bg-background border-t border-border/30 rounded-t-2xl">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-xl font-bold text-foreground">
                    Privacy <span className="text-primary">Policy</span>
                  </SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(85vh-120px)] pr-4">
                  <PrivacyContent />
                </ScrollArea>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <button className="text-muted-foreground text-xs hover:text-primary transition-colors">
                  Cookie Policy
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] bg-background border-t border-border/30 rounded-t-2xl">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-xl font-bold text-foreground">
                    Cookie <span className="text-primary">Policy</span>
                  </SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(85vh-120px)] pr-4">
                  <CookieContent />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </footer>
  );
};
