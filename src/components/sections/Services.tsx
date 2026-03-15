import { motion } from 'framer-motion';

const HAIR_SERVICES = [
  "Taglio Classico",
  "Rasatura Completa",
  "Taglio a Forbice",
  "Taglio Sfumato"
];

const BEARD_SERVICES = [
  "Rasatura Tradizionale",
  "Sagomatura della barba",
  "Rasatura Completa",
  "Trattamento barba lunga"
];

export const Services = () => {
  return (
    <section id="services" className="bg-theme-cream py-24 md:py-32 border-b border-theme-dark/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 font-sans text-6xl md:text-8xl font-bold tracking-tight text-theme-dark">
            Servizi
          </h2>
          
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-sans text-3xl font-bold uppercase tracking-wider text-theme-sage">
                Capelli
              </h3>
              <ul className="space-y-4 font-sans text-xl font-light text-theme-dark/90 text-shadow-sm">
                {HAIR_SERVICES.map((srv, idx) => (
                  <li key={idx} className="border-b border-theme-dark/5 pb-2">
                    {srv}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-sans text-3xl font-bold uppercase tracking-wider text-theme-sage">
                Barba
              </h3>
              <ul className="space-y-4 font-sans text-xl font-light text-theme-dark/90 text-shadow-sm">
                {BEARD_SERVICES.map((srv, idx) => (
                  <li key={idx} className="border-b border-theme-dark/5 pb-2">
                    {srv}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
