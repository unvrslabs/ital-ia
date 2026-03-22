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
          className="max-w-3xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-primary font-semibold mb-8 border border-primary/25 rounded-full px-4 py-1.5 mx-auto w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Solo 5 slot disponibili questo mese
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
              Pronto a trasformare
              <br />
              <span className="text-muted-foreground">il tuo business?</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              30 minuti di consulenza gratuita. Nessun impegno.
              <br className="hidden md:block" />
              Vediamo insieme come l'AI può fare la differenza per la tua&nbsp;azienda.
            </p>

            {/* Value props */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-10 text-sm">
              <span className="text-foreground/80 font-medium">Agenti AI per ogni processo</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-primary/50" />
              <span className="text-foreground/80 font-medium">LLM sovrani on-premise</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-primary/50" />
              <span className="text-primary font-semibold">AI italiana, su misura</span>
            </div>

            {/* CTA button */}
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi consulenza gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <p className="text-muted-foreground/60 text-xs mt-4">
              Risposta entro 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
