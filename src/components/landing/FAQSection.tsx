import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Cos'è Go Ital IA?",
    a: "Go Ital IA offre due servizi di intelligenza artificiale per le PMI italiane: agenti AI che automatizzano i processi aziendali usando modelli come Claude e GPT, e LLM sovrani proprietari che girano su hardware Nvidia DGX Spark nella sede del cliente.",
  },
  {
    q: "Cosa sono gli agenti AI?",
    a: "Sono assistenti digitali autonomi che gestiscono processi specifici della tua azienda: vendite, customer care, amministrazione, HR e molto altro. Usano i migliori modelli disponibili (Claude, GPT, Gemini) e si integrano con i tuoi sistemi esistenti.",
  },
  {
    q: "Che differenza c'è tra agenti AI e LLM sovrani?",
    a: "Gli agenti AI usano modelli cloud di terze parti (Claude, GPT) per automatizzare i processi aziendali — sono veloci da attivare e ideali per chi vuole risultati immediati. Gli LLM sovrani sono modelli proprietari addestrati sui tuoi dati e installati su hardware tuo — per chi vuole il massimo controllo e sovranità sui dati.",
  },
  {
    q: "Quali settori supportate?",
    a: "Supportiamo oltre 9 settori: Energia, Industria, Servizi, Finanza, Commercio, Logistica, Sanità, Pubblica Amministrazione e PMI manifatturiere. Ogni soluzione è verticale e personalizzata.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Sì. Con gli agenti AI, utilizziamo modelli conformi GDPR con data processing agreement europei. Con gli LLM sovrani, l'hardware è fisicamente di proprietà dell'azienda e i dati non escono mai dal perimetro aziendale. In entrambi i casi, piena conformità normativa.",
  },
  {
    q: "Quanto tempo serve per essere operativi?",
    a: "Gli agenti AI possono essere operativi in pochi giorni. Per gli LLM sovrani, dopo la consulenza iniziale, configuriamo e addestriamo il modello — il sistema è operativo rapidamente senza progetti IT complessi.",
  },
  {
    q: "Quanto costa?",
    a: "Per gli agenti AI, offriamo piani basati sull'utilizzo. Per gli LLM sovrani, il costo include l'hardware DGX Spark e il servizio di configurazione e supporto. In entrambi i casi, la consulenza iniziale è gratuita.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Domande <span className="text-muted-foreground">Frequenti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tutto quello che devi sapere su Go Ital&nbsp;IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="liquid-glass rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 text-center liquid-glass rounded-2xl p-8"
        >
          <p className="text-foreground font-semibold text-lg mb-4">
            Non trovi la risposta?
            <br />
            Chiedici direttamente
          </p>
          <motion.a
            href="https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Scrivici su WhatsApp
            <MessageCircle className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
