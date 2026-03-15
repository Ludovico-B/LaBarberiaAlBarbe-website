import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <section className="bg-theme-cream pt-40 pb-24 md:py-48 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-12 font-sans text-5xl md:text-7xl font-bold tracking-tight text-theme-dark uppercase">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 font-sans text-lg md:text-xl font-light leading-relaxed text-theme-dark/80">
            <p>
              La tua privacy è importante per noi. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando visiti il nostro sito web e utilizzi i nostri servizi.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mt-12 mb-4">
              1. Informazioni che raccogliamo
            </h2>
            <p>
              Possiamo raccogliere informazioni personali che ci fornisci volontariamente, come nome, indirizzo email o numero di telefono, quando ci contatti o effettui una prenotazione.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mt-12 mb-4">
              2. Come utilizziamo le tue informazioni
            </h2>
            <p>
              Utilizziamo le informazioni che raccogliamo o riceviamo per comunicare con te, fornire e gestire i nostri servizi, e migliorare la tua esperienza con La Barberia Al Barbé.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mt-12 mb-4">
              3. Sicurezza dei dati
            </h2>
            <p>
              Adottiamo misure di sicurezza appropriate per proteggere le tue informazioni personali da accesso non autorizzato, alterazione, divulgazione o distruzione.
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
