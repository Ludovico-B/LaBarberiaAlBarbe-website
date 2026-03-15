import { motion } from 'framer-motion';

export const Terms = () => {
  return (
    <section className="bg-theme-cream pt-40 pb-24 md:py-48 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-12 font-sans text-5xl md:text-7xl font-bold tracking-tight text-theme-dark uppercase">
            Termini e Condizioni
          </h1>
          
          <div className="space-y-8 font-sans text-lg md:text-xl font-light leading-relaxed text-theme-dark/80">
            <p>
              Benvenuto a La Barberia Al Barbé. Navigando e utilizzando il nostro sito web, accetti di rispettare e di essere vincolato dai seguenti Termini e Condizioni d'uso.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mt-12 mb-4">
              1. Utilizzo del Sito
            </h2>
            <p>
              Il contenuto delle pagine di questo sito web è a solo scopo informativo generale. È soggetto a modifiche senza preavviso. Utilizzando eventuali informazioni o materiali presenti in questo sito web, lo fai interamente a tuo rischio.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mt-12 mb-4">
              2. Prenotazioni e Appuntamenti
            </h2>
            <p>
              Le prenotazioni effettuate tramite il sito o altri canali sono soggette a disponibilità. Ti preghiamo di avvisare con almeno 24 ore di anticipo in caso di cancellazione o ritardo per permetterci di riorganizzare al meglio l'agenda.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mt-12 mb-4">
              3. Limitazione di Responsabilità
            </h2>
            <p>
              La Barberia Al Barbé non si assume alcuna responsabilità per danni diretti o indiretti derivanti dall'utilizzo del sito web o per l'impossibilità di accedervi.
            </p>

            <p className="mt-12 text-sm">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
