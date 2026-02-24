import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 mesh-gradient" aria-hidden="true" />
      <div className="fixed inset-0 aurora-bg pointer-events-none" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />

        <main role="main" className="pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Cookie <span className="text-primary">Policy</span>
              </h1>

              <div className="liquid-glass-card p-8 md:p-12 space-y-8 text-foreground/90 text-sm leading-relaxed">
                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">1. Cosa sono i Cookie</h2>
                  <p>
                    I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. Vengono utilizzati per migliorare l'esperienza di navigazione e fornire funzionalità personalizzate.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">2. Tipologie di Cookie Utilizzati</h2>

                  <h3 className="text-foreground font-medium mt-4 mb-2">Cookie Tecnici (Necessari)</h3>
                  <p className="text-muted-foreground">
                    Essenziali per il funzionamento del sito. Non richiedono il consenso dell'utente e non possono essere disattivati.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Cookie di sessione per la navigazione</li>
                    <li>Cookie di preferenze (es. lingua)</li>
                  </ul>

                  <h3 className="text-foreground font-medium mt-4 mb-2">Cookie Analitici</h3>
                  <p className="text-muted-foreground">
                    Utilizzati per raccogliere informazioni aggregate sull'utilizzo del sito al fine di migliorarne le prestazioni e l'usabilità.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">3. Cookie di Terze Parti</h2>
                  <p>
                    Il sito potrebbe utilizzare servizi di terze parti che installano cookie propri. In particolare:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li><strong>Google Fonts</strong> — per il caricamento dei caratteri tipografici</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">4. Gestione dei Cookie</h2>
                  <p>
                    L'utente può gestire le preferenze sui cookie direttamente dalle impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a>
                    </li>
                    <li>
                      <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a>
                    </li>
                    <li>
                      <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a>
                    </li>
                    <li>
                      <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">5. Aggiornamenti</h2>
                  <p>
                    La presente Cookie Policy potrebbe essere aggiornata periodicamente. Invitiamo gli utenti a consultare questa pagina regolarmente per eventuali modifiche.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">6. Contatti</h2>
                  <p>
                    Per qualsiasi domanda relativa ai cookie, contattare{" "}
                    <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline">emanuele@unvrslabs.dev</a>.
                  </p>
                </section>

                <p className="text-muted-foreground text-xs pt-4 border-t border-border/20">
                  Ultimo aggiornamento: Febbraio 2026
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default CookiePolicy;
