import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

import heroBeardDetail from '../../assets/hero-beard-detail.png';

const IMAGES = [
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80', // Barbershop interior
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80', // Haircut
  heroBeardDetail, // Generated Beard detail
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-theme-cream">
      {/* Carousel Images */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          alt={`Barbershop hero ${currentIndex + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* No Overlay - Full Quality Images */}



      {/* Fixed Booking Button */}
      <a 
        href="tel:+393534559234"
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
      >
        <Button size="lg" className="w-full tracking-[0.2em] px-12 py-5 text-lg shadow-2xl">
          Prenota Ora
        </Button>
      </a>
    </section>
  );
};
