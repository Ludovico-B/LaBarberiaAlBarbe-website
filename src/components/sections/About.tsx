import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="bg-theme-cream py-24 md:py-32 border-b border-theme-dark/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 font-sans text-6xl md:text-8xl font-bold tracking-tight text-theme-dark">
              About
            </h2>
            <div className="space-y-8 font-sans text-xl md:text-2xl font-light leading-relaxed text-theme-dark/90 text-shadow-sm">
              <p>
                Nel cuore di Omegna, la barberia Al Barbé è il luogo ideale per chi cerca l’eccellenza nei tagli da uomo e nella cura della barba.
              </p>
              <p>
                Unendo tradizione e modernità, offriamo servizi personalizzati che esaltano il tuo stile e valorizzano la tua immagine. Ogni taglio è un'esperienza studiata per farti sentire a tuo agio e rilassato.
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:px-12 flex justify-center"
          >
            <div className="relative aspect-[2/3] w-full max-w-md overflow-hidden rounded-sm shadow-xl">
              <img 
                src="/foto-barbiere.png" 
                alt="Filippo Giacobini, barbiere della Barberia Al Barbé di Omegna"
                width={480}
                height={720}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
