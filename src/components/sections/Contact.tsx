import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="relative bg-theme-light pt-24 pb-32 md:pb-12">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid gap-16 md:grid-cols-2 lg:gap-24 mb-24">
          {/* Info & Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 font-sans text-6xl font-bold tracking-tight text-theme-dark">
              Vieni a Trovarci
            </h2>
            <p className="mb-10 font-sans text-xl font-light leading-relaxed text-theme-dark/80">
              Via Alberganti, 17<br />
              Omegna (VB)
            </p>

            {/* Opening Hours */}
            <div className="mb-12 flex flex-col gap-5 font-sans text-lg tracking-wide text-theme-dark/90">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme-dark/10 pb-4">
                <span className="font-bold sm:min-w-32">Martedì - Venerdì</span>
                <span className="font-light sm:text-right">8.30 - 12.00 / 14.30 - 19.00</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme-dark/10 pb-4">
                <span className="font-bold sm:min-w-32">Sabato</span>
                <span className="font-light sm:text-right">8.30 - 17.30 (Orario Continuato)</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <a href="tel:+393534559234" className="font-sans text-2xl font-medium tracking-wide text-theme-dark transition-colors hover:text-theme-sage">
                +39 353 4559234
              </a>
              <a
                href="https://www.instagram.com/labarberia_albarbe/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-theme-dark transition-all hover:text-theme-sage hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={36} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-full min-h-[400px] w-full overflow-hidden rounded-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-700 shadow-sm border border-theme-dark/5"
          >
            <iframe
              src="https://www.google.com/maps?q=Via%20Alberganti%2017%20Omegna&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione La Barberia Al Barbé"
            ></iframe>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-theme-dark/10 pt-8 text-sm font-light text-theme-dark/60 md:flex-row gap-4">
          <p>© {new Date().getFullYear()} La Barberia Al Barbé. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-theme-dark transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-theme-dark transition-colors">Termini e Condizioni</a>
          </div>
        </div>

      </div>
    </section>
  );
};
