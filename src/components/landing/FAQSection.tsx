import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Cos'è ITAL IA?",
    a: "ITAL IA è una piattaforma di intelligenza artificiale sovrana che addestra LLM proprietari sui dati aziendali del cliente. Il modello gira su un hardware Nvidia DGX Spark di proprietà del cliente, installato presso la sua sede. Nessun dato esce dal perimetro aziendale.",
  },
  {
    q: "In cosa si differenzia da ChatGPT o altri modelli generici?",
    a: "I modelli generici inviano i tuoi dati su server esteri e offrono risposte generiche. ITAL IA addestra un modello dedicato esclusivamente sul tuo settore e sui tuoi dati, eseguito su hardware tuo, garantendo risposte precise, sicurezza totale e conformità normativa.",
  },
  {
    q: "Quali settori supportate?",
    a: "Supportiamo oltre 9 settori: Energia, Industria, Servizi, Finanza, Commercio, Logistica, Sanità, Pubblica Amministrazione e PMI manifatturiere. Ogni modello è verticale e specializzato.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Assolutamente sì. Il cliente acquista direttamente l'hardware Nvidia DGX Spark e lo tiene nella propria sede. L'intera infrastruttura è fisicamente di proprietà dell'azienda. Nessun cloud estero, nessuna API verso terzi. Piena conformità GDPR e NIS2.",
  },
  {
    q: "Chi compra l'hardware?",
    a: "L'hardware Nvidia DGX Spark viene acquistato dal cliente e rimane di sua proprietà. Noi ci occupiamo della configurazione, dell'addestramento del modello e del supporto continuo. L'azienda ha il pieno controllo fisico e logico dell'infrastruttura.",
  },
  {
    q: "Quanto tempo serve per essere operativi?",
    a: "Dopo una consulenza iniziale, configuriamo e addestriamo il modello sui tuoi dati. Il sistema è operativo rapidamente, senza progetti IT complessi.",
  },
  {
    q: "Quanto costa?",
    a: "Il costo include l'acquisto dell'hardware DGX Spark da parte del cliente e il servizio di configurazione, addestramento e supporto da parte nostra. Offriamo una consulenza iniziale gratuita per valutare insieme le tue esigenze.",
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
            Tutto quello che devi sapere su ITAL&nbsp;IA.
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
            Non trovi la risposta? Chiedici direttamente
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
