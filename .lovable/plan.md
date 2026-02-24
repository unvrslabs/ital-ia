

# Piano di Ottimizzazione Conversioni -- ITAL IA

## Obiettivo
Trasformare il sito da "informativo" a "persuasivo", guidando l'utente verso l'azione di contatto in ogni punto del percorso.

---

## 1. CTA Intermedi dopo le sezioni chiave

Aggiungere mini-CTA (bottone o banner) dopo queste sezioni:
- **SovereignSection** -- "Vuoi proteggere i tuoi dati? Parliamone"
- **ComparisonSection** -- "Scegli l'AI giusta per la tua azienda"
- **PMISection** -- "Scopri come la tua PMI puo iniziare"

Saranno bottoni semplici con link WhatsApp, coerenti con lo stile liquid-glass.

---

## 2. Bottone CTA Fisso su Mobile (Floating)

Un bottone fisso in basso a destra su mobile, sempre visibile durante lo scroll, con icona WhatsApp e animazione pulse. Scompare quando l'utente e gia nella sezione CTA finale.

---

## 3. Sezione Social Proof / Credibilita

Nuova sezione dopo BandiMarquee con:
- Numero di consulenze erogate (es. "50+ PMI consulte")
- Badge di credibilita: "Partner Nvidia", "GDPR Compliant", "Made in Italy"
- Eventuali loghi placeholder per futuri clienti

---

## 4. Urgenza nella CTA Finale

Aggiornare la CTASection con:
- Frase di urgenza: "Solo 5 slot disponibili questo mese"
- Countdown o indicatore visivo di disponibilita limitata
- Aggiungere sotto il bottone: "Risposta entro 24h"

---

## 5. Footer Completo

Espandere il footer con:
- Colonna contatti (email, WhatsApp)
- Link alle sezioni del sito
- Link legali (Privacy, Cookie)
- Ripetizione del CTA principale

---

## 6. Sezione FAQ con CTA

Aggiungere dopo le FAQ un mini-banner: "Non trovi la risposta? Chiedici direttamente" con bottone WhatsApp.

---

## Dettagli Tecnici

### File da creare:
- `src/components/landing/FloatingCTA.tsx` -- Bottone WhatsApp fisso su mobile
- `src/components/landing/SocialProofSection.tsx` -- Sezione credibilita/social proof
- `src/components/landing/InlineCTA.tsx` -- Componente CTA riutilizzabile per le sezioni intermedie

### File da modificare:
- `src/pages/Index.tsx` -- Aggiungere FloatingCTA, SocialProofSection, e InlineCTA tra le sezioni
- `src/components/landing/CTASection.tsx` -- Aggiungere urgenza e garanzia risposta
- `src/components/landing/FAQSection.tsx` -- Aggiungere CTA dopo le domande
- `src/components/landing/Footer.tsx` -- Espandere con contatti, link, e CTA
- `src/components/landing/ComparisonSection.tsx` -- Aggiungere InlineCTA dopo la tabella

### Approccio:
- Tutti i CTA puntano allo stesso link WhatsApp gia presente nel sito
- Stile coerente con il design liquid-glass esistente
- Animazioni Framer Motion leggere per non appesantire
- Il FloatingCTA usa `IntersectionObserver` per nascondersi quando la CTASection finale e visibile
- La PricingSection NON verra inclusa perche i contenuti non sono pertinenti al progetto ITAL IA
