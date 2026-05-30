'use client';

import { useEffect, useState } from 'react';
import { footerQuotes } from '@/lib/sufi-content';
import { motion, AnimatePresence } from 'framer-motion';

export default function SufiFooter() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % footerQuotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-card border-t border-border mt-auto">
      {/* Rotating quote section */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center min-h-[200px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-gold italic text-lg font-[family-name:var(--font-playfair)] leading-relaxed">
              « {footerQuotes[currentQuote].text} »
            </p>
            <p className="mt-3 text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
              — {footerQuotes[currentQuote].author}
              {footerQuotes[currentQuote].source && (
                <span className="opacity-60">, {footerQuotes[currentQuote].source}</span>
              )}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex gap-2 mb-8">
          {footerQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuote(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentQuote ? 'bg-gold w-6' : 'bg-gold/20 hover:bg-gold/40'
              }`}
              aria-label={`Citation ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <div className="border-t border-border/50 px-6 py-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-[family-name:var(--font-geist-sans)]">
            <span className="text-gold">✦</span> Du Voile à la Présence — Œuvre de méditation inspirée par la tradition soufie
          </p>
          <p className="text-xs text-muted-foreground font-[family-name:var(--font-geist-sans)]">
            Rédigé par <span className="text-gold">Kâtib al-Qalb</span>
          </p>
        </div>
      </div>

      {/* Bottom decorative pattern */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </footer>
  );
}
