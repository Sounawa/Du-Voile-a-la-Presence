'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import { navItems } from '@/lib/sufi-content';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function SufiNav() {
  const [activeSection, setActiveSection] = useState('preface');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-card/80 backdrop-blur-xl border-r border-border z-50 overflow-y-auto">
        <div className="p-6">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-gold font-[family-name:var(--font-geist-sans)]">
              Navigation
            </h2>
            <div className="w-8 h-0.5 bg-gold mt-2" />
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors font-[family-name:var(--font-geist-sans)]"
              aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            </button>
          )}

          {/* Navigation links */}
          <nav className="space-y-1" aria-label="Navigation du traité">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`sufi-nav-link block w-full text-left text-sm py-2 transition-all duration-300 font-[family-name:var(--font-geist-sans)] ${
                  activeSection === id
                    ? 'active text-gold font-semibold bg-gold/5'
                    : 'text-muted-foreground hover:text-gold'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="ornament-divider !py-0">
            <span className="text-gold text-xs">✦</span>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2 font-[family-name:var(--font-geist-sans)]">
            Kâtib al-Qalb
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted-foreground hover:text-gold transition-colors"
            aria-label="Menu de navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="text-sm font-semibold text-sufi-teal dark:text-gold font-[family-name:var(--font-playfair)]">
            Du Voile à la Présence
          </span>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-muted-foreground hover:text-gold transition-colors"
              aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-40 bg-card/95 backdrop-blur-xl"
          >
            <div className="pt-16 px-6">
              <nav className="space-y-2" aria-label="Navigation mobile du traité">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`block w-full text-left text-lg py-3 border-b border-border/50 transition-all duration-300 font-[family-name:var(--font-playfair)] ${
                      activeSection === id
                        ? 'text-gold font-semibold'
                        : 'text-foreground/70 hover:text-gold'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
