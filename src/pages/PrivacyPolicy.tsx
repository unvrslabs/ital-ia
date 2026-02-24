import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
                Privacy <span className="text-primary">Policy</span>
              </h1>

              <div className="liquid-glass-card p-8 md:p-12 space-y-8 text-foreground/90 text-sm leading-relaxed">
                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">1. Titolare del Trattamento</h2>
                  <p>
                    Il titolare del trattamento dei dati è <strong>Unvrs Labs</strong>, contattabile all'indirizzo email{" "}
                    <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline">emanuele@unvrslabs.dev</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">2. Dati Raccolti</h2>
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
                  <h2 className="text-lg font-semibold text-foreground mb-3">3. Finalità del Trattamento</h2>
                  <p>I dati personali sono trattati per le seguenti finalità:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Rispondere alle richieste di consulenza</li>
                    <li>Fornire informazioni sui servizi offerti</li>
                    <li>Gestire la comunicazione con i potenziali clienti</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">4. Base Giuridica</h2>
                  <p>
                    Il trattamento dei dati è basato sul consenso dell'utente (Art. 6, par. 1, lett. a del GDPR) e sull'esecuzione di misure precontrattuali (Art. 6, par. 1, lett. b del GDPR).
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">5. Conservazione dei Dati</h2>
                  <p>
                    I dati personali saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti e comunque non oltre 24 mesi dall'ultimo contatto.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">6. Condivisione dei Dati</h2>
                  <p>
                    I dati personali non saranno venduti, ceduti o condivisi con terze parti, ad eccezione dei fornitori di servizi tecnici necessari al funzionamento della piattaforma, che agiscono come responsabili del trattamento.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">7. Diritti dell'Interessato</h2>
                  <p>In conformità al GDPR, l'utente ha diritto di:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Accedere ai propri dati personali</li>
                    <li>Richiedere la rettifica o la cancellazione dei dati</li>
                    <li>Opporsi al trattamento</li>
                    <li>Richiedere la portabilità dei dati</li>
                    <li>Revocare il consenso in qualsiasi momento</li>
                  </ul>
                  <p className="mt-2">
                    Per esercitare questi diritti, contattare{" "}
                    <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline">emanuele@unvrslabs.dev</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">8. Sicurezza</h2>
                  <p>
                    Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita o distruzione.
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

export default PrivacyPolicy;
