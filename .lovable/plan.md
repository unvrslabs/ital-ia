

# Rendere il sito UNVRS ITAL IA piu interattivo e coinvolgente

Il sito attualmente ha buone animazioni base con Framer Motion, ma per un'azienda che vende modelli AI, LLM personalizzati e infrastruttura Nvidia DGX Spark, servono elementi piu "wow" che comunichino innovazione tecnologica.

## Miglioramenti proposti

### 1. Hero Section - Effetto typing animato e particelle
- Aggiungere un **effetto macchina da scrivere** (typewriter) sul sottotitolo che cicla tra frasi come "per la Sanita", "per la Finanza", "per l'Industria" - mostrando la versatilita dei modelli
- Aggiungere un **canvas animato con particelle/nodi connessi** come sfondo della hero, che richiama le reti neurali (usando Three.js gia installato, oppure un canvas 2D leggero)
- La glass card a destra avra **contatori animati** piu ricchi con un effetto glow pulsante

### 2. Sectors Section - Card interattive con dettagli espandibili
- Ogni settore diventa una **card cliccabile** che al click/hover mostra un breve paragrafo su come l'LLM viene usato in quel settore specifico
- Aggiungere un **effetto di selezione attiva** con bordo gradient animato sulla card selezionata
- Pannello di dettaglio che appare sotto la griglia con animazione fluida

### 3. Infrastructure Section - Visualizzazione animata del flusso dati
- Aggiungere uno **schema visivo animato** che mostra il flusso: Dati aziendali -> Training locale -> LLM dedicato -> Output, con linee animate e icone
- Effetto **"pulse"** sulle connessioni per dare l'idea di dati che fluiscono
- Card DGX Spark con specs tecniche animate (GPU, TFLOPS, RAM) con contatori

### 4. CTA Section - Form di contatto integrato
- Sostituire il semplice link mailto con un **form di contatto** interattivo (nome, email, azienda, settore, messaggio)
- Dropdown per selezionare il settore di interesse
- Feedback visivo con animazione al submit
- Integrazione con Supabase per salvare i lead

### 5. Sezione Comparazione (nuova)
- Aggiungere una **tabella comparativa animata** "AI generica vs UNVRS ITAL IA"
- Le righe appaiono con stagger animation
- Check verdi e X rosse per rendere chiaro il vantaggio

### 6. Micro-interazioni globali
- **Cursor follower** con glow che segue il mouse sulle sezioni principali
- **Parallax leggero** sugli sfondi delle sezioni durante lo scroll
- **Numeri animati** (contatori) dove ci sono statistiche

---

## Dettagli tecnici

### File da creare
- `src/components/landing/ParticleBackground.tsx` - Canvas animato con rete neurale
- `src/components/landing/TypewriterEffect.tsx` - Componente per effetto typing
- `src/components/landing/ComparisonSection.tsx` - Nuova sezione comparativa
- `src/components/landing/ContactForm.tsx` - Form di contatto
- `src/components/landing/DataFlowDiagram.tsx` - Schema animato flusso dati

### File da modificare
- `src/components/landing/HeroSection.tsx` - Integrare typewriter e particelle
- `src/components/landing/SectorsSection.tsx` - Card espandibili con dettagli settore
- `src/components/landing/InfrastructureSection.tsx` - Aggiungere diagramma e specs DGX
- `src/components/landing/CTASection.tsx` - Sostituire mailto con form
- `src/pages/Index.tsx` - Aggiungere nuova sezione comparazione
- `src/index.css` - Nuovi stili per cursor follower, parallax, animazioni

### Tecnologie utilizzate
- **Framer Motion** (gia installato) per tutte le animazioni
- **Canvas 2D** per le particelle (leggero, no dipendenze extra)
- **Supabase** (gia configurato) per salvare i contatti dal form
- **React Hook Form + Zod** (gia installati) per validazione form

