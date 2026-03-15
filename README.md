# La Barberia Al Barbé - Web App

Benvenuti nella repository ufficiale del nuovo sito web per **La Barberia Al Barbé** (Omegna, VB). 
Questo progetto è una Single Page Application (SPA) moderna, progettata per offrire un'esperienza utente premium, animazioni fluide e una UI responsiva, il tutto mantenendo il codice modulare e leggero.

## 🛠 Tech Stack

Il progetto è stato sviluppato utilizzando le seguenti tecnologie moderne:

- **Framework**: React 18
- **Build Tool**: Vite
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS v3 (con mix di utility classes e configurazione tematica personalizzata)
- **Animazioni**: Framer Motion (Scroll reveals, transizioni di layout)
- **Iconografia**: Lucide React

## 🏗 Architettura e Struttura del Codice

L'applicazione segue un'architettura basata su componenti funzionali, divisa in sezioni logiche per facilitare la manutenzione e la scalabilità.

```text
src/
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx        # Navigazione sticky con menu mobile hamburger
│   │   ├── HeroCarousel.tsx  # Carosello immagini full-screen automatico
│   │   ├── About.tsx         # Sezione testuale con foto bilanciata
│   │   ├── Services.tsx      # Griglia layout per i servizi offerti (Taglio/Barba)
│   │   ├── Contact.tsx       # Info contatti, footer e Mappa Google interattiva
│   │   ├── Privacy.tsx       # Pagina Privacy Policy
│   │   └── Terms.tsx         # Pagina Termini e Condizioni
│   └── ui/
│       └── Button.tsx        # Componente bottone riutilizzabile
├── index.css                 # Import Tailwind e utility personalizzate (es. text-shadow)
├── App.tsx                   # Entry point e gestore del routing (Hash-based)
└── main.tsx                  # React root rendering
```

## ✨ Funzionalità Implementate

Durante l'ultimo ciclo di sviluppo, l'app ha subito un importante refactoring strutturale e UI/UX:

1. **Design System & Tipografia**: 
   - Transizione a un layout pulito "a blocchi" con colori tematici personalizzati (`theme-dark`, `theme-cream`, `theme-sage`).
   - Sostituzione del font di default con un font sans-serif moderno (configurato in Tailwind) per un look più editoriale ed elegante, rimuovendo il corsivo precedente.

2. **Componenti Dinamici & Animazioni**:
   - `HeroCarousel`: Carosello automatico senza indicatori visivi intrusivi, per dare massimo risalto alle foto ad alta risoluzione (senza patina opaca).
   - `Navbar`: Implementata logica "Sticky" allo scroll (sfondo scuro effetto blur) e un menu Hamburger animato per le versioni Mobile.
   - Tutti i componenti della landing page usano `framer-motion` per animazioni "scroll-reveal" (fade-in e slide-up).

3. **Layout Responsivo Avanzato**:
   - Refactoring della sezione `Contact`: Layout a due colonne su Desktop (Info a sinistra, Mappa Interattiva a destra), che collassa in una colonna singola su Mobile.
   - Refactoring della sezione `About`: Testo a sinistra e ritratto del barbiere a destra. L'immagine è stata ottimizzata con `max-width` e padding per non sovrastare la tipografia.

4. **Routing Leggero (Hash Based)**:
   - Implementato in `App.tsx` un sistema di routing basato sull'hash dell'URL (`#privacy`, `#terms`) per navigare verso pagine legali separate accedendo dal Footer. 
   - Questo approccio mantiene l'app una VERA SPA senza dipendenze pesanti come `react-router-dom`, gestendo dinamicamente lo scroll verso l'alto e permettendo alla Navbar di riportare l'utente alla Home (`#home`).

5. **CTA Globale**:
   - Pulsante "Prenota Ora" costantemente visibile e fissato nella parte bassa dello schermo (Z-index elevato), senza coprire i contenuti essenziali come il footer a fine scroll.

## 🚀 Come iniziare (Sviluppatori)

Per far girare il progetto in locale:

1. Clona la repository.
2. Assicurati di avere `Node.js` e `npm` (o `pnpm`/`yarn`) installati.
3. Installa le dipendenze:
   ```bash
   npm install
   ```
4. Avvia il server di sviluppo locale (Vite):
   ```bash
   npm run dev
   ```
5. Apri il browser all'indirizzo `http://localhost:5173`.

## 📦 Build e Deploy

Per creare una build pronta per la produzione:

```bash
npm run build
```
La cartella `dist/` conterrà gli assett minificati e ottimizzati. Il progetto è configurato e testato per essere facilmente deployato su piattaforme moderne come **Vercel**, **Netlify** o **Cloudflare Pages**.

