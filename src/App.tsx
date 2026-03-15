import { useState, useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { HeroCarousel } from './components/sections/HeroCarousel';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Privacy } from './components/sections/Privacy';
import { Terms } from './components/sections/Terms';

function App() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Initial path setup
    setCurrentPath(window.location.hash);

    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash);
      
      // Handle scrolling behavior 
      // Need a slight delay to allow React to mount the <main> content if switching from another page
      setTimeout(() => {
        const id = hash.replace('#', '');
        if (id && id !== 'privacy' && id !== 'terms') {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            // If ID not found, just scroll to top
            window.scrollTo(0, 0);
          }
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isPrivacyPage = currentPath === '#privacy';
  const isTermsPage = currentPath === '#terms';
  const isHomePage = !isPrivacyPage && !isTermsPage;

  return (
    <div className="min-h-screen bg-theme-cream text-theme-dark selection:bg-theme-sage selection:text-white">
      <Navbar />
      <main>
        {isHomePage && (
          <>
            <HeroCarousel />
            <About />
            <Services />
            <Contact />
          </>
        )}
        {isPrivacyPage && <Privacy />}
        {isTermsPage && <Terms />}
      </main>
    </div>
  );
}

export default App;
