import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Il nome è obbligatorio").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  company: z.string().trim().max(200).optional(),
  sector: z.string().optional(),
  message: z.string().trim().min(1, "Il messaggio è obbligatorio").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const sectors = [
  "Energia", "Industria", "Servizi", "Finanza",
  "Commercio", "Logistica", "Sanità", "PA", "PMI", "Altro"
];

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");
    try {
      const { error } = await supabase.from("contacts").insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        sector: data.sector || null,
        message: data.message,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      setSubmitError("Errore nell'invio. Riprova o scrivi a info@unvrs.it");
    }
  };

  return (
    <div className="max-w-lg mx-auto w-full">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            >
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Messaggio inviato!</h3>
            <p className="text-muted-foreground">Ti ricontatteremo al più presto.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("name")}
                  placeholder="Nome *"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                {...register("company")}
                placeholder="Azienda"
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
              />
              <select
                {...register("sector")}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="text-muted-foreground">
                  Settore di interesse
                </option>
                {sectors.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Come possiamo aiutarti? *"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm resize-none"
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {submitError && (
              <p className="text-destructive text-sm text-center">{submitError}</p>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium w-full flex items-center justify-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Invia messaggio
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
