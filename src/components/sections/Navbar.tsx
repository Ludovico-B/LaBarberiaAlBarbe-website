import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-theme-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent pt-8 pb-4 pointer-events-none'
      }`}
    >
      <div className={`container mx-auto px-6 flex pointer-events-auto transition-all duration-500 ${
        isScrolled ? 'flex-row items-center justify-between' : 'flex-col items-center gap-4'
      }`}>
        {/* Logo */}
        <a href="#home" className="group z-50">
          <span className={`font-sans font-bold tracking-[0.2em] uppercase text-white group-hover:text-theme-sage transition-all duration-500 drop-shadow-md text-shadow-md ${
            isScrolled ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'
          }`}>
            Al Barbé
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className={`hidden md:flex items-center gap-8 ${isScrolled ? '' : 'justify-center'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm md:text-base font-sans font-medium uppercase tracking-widest text-white hover:text-theme-sage transition-colors text-shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden text-white hover:text-theme-sage transition-colors z-50 ${isScrolled ? 'block' : 'absolute top-8 right-6'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-theme-dark/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-6 gap-6 md:hidden shadow-xl pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-sans font-medium uppercase tracking-widest text-white hover:text-theme-sage transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
