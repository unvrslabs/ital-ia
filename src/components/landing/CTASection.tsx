import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_URL = "https://wa.me/34625976744?text=Ciao%20Emanuele%2C%0Asono%20interessato%20a%20una%20consulenza%20sulla%20transizione%20delle%20PMI%20verso%20l%27intelligenza%20artificiale.%20Possiamo%20fissare%20una%20call%20nei%20prossimi%20giorni%3F";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Pronto a trasformare <br className="hidden md:block" />
            <span className="text-muted-foreground">il tuo business?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            30 minuti di consulenza gratuita. Nessun impegno. Vediamo insieme come agenti AI e modelli sovrani possono fare la differenza per la tua&nbsp;azienda.
          </p>

          <div className="flex flex-col items-center gap-2 mb-10 text-foreground/80 font-medium">
            <span>Agenti AI per ogni processo.</span>
            <span>LLM sovrani per chi vuole il controllo totale.</span>
            <span className="text-primary font-semibold">AI italiana, su misura per te.</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold mb-10 liquid-glass rounded-full px-5 py-2 mx-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Solo 5 slot disponibili questo mese
          </div>

          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium flex items-center gap-3 text-lg mx-auto w-fit"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi consulenza gratuita
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="text-muted-foreground text-sm mt-4">
            ⚡ Risposta entro 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};
