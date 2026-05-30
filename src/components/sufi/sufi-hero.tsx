'use client';

import { motion } from 'framer-motion';
import { heroExergue, heroSubtitle, heroDescription } from '@/lib/sufi-content';
import { ChevronDown } from 'lucide-react';

function StarPattern() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute opacity-[0.07] pointer-events-none"
      width="300"
      height="300"
    >
      {/* 8-pointed star */}
      <path
        d="M50 5 L55 40 L85 50 L55 60 L50 95 L45 60 L15 50 L45 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-gold-light"
      />
      <path
        d="M50 20 L53 42 L72 50 L53 58 L50 80 L47 58 L28 50 L47 42 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        className="text-gold-light"
      />
      {/* Concentric circles */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold-light" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold-light" />
    </svg>
  );
}

function GeometricBorder() {
  return (
    <svg viewBox="0 0 800 40" className="w-full max-w-2xl opacity-30" preserveAspectRatio="none">
      {/* Repeating geometric pattern */}
      <defs>
        <pattern id="borderPattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gold" />
          <path d="M40 20 L60 0 L80 20 L60 40 Z" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gold" />
        </pattern>
      </defs>
      <rect width="800" height="40" fill="url(#borderPattern)" />
    </svg>
  );
}

export default function SufiHero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />

      {/* Gradient overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-sufi-navy/60 via-sufi-navy/40 to-sufi-navy/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.25_0.04_60_/_0.2),_transparent_70%)]" />

      {/* Subtle SVG pattern overlay */}
      <div className="absolute inset-0">
        <StarPattern />
        <div className="absolute top-20 right-10">
          <StarPattern />
        </div>
        <div className="absolute bottom-20 left-10">
          <StarPattern />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        {/* Decorative star */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <svg viewBox="0 0 60 60" className="w-16 h-16 mx-auto text-gold gentle-glow">
            <path
              d="M30 5 L34 24 L53 30 L34 36 L30 55 L26 36 L7 30 L26 24 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-sufi-cream mb-4 font-[family-name:var(--font-playfair)] leading-tight"
        >
          Du Voile à la Présence
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg sm:text-xl text-gold-light/80 mb-8 font-[family-name:var(--font-playfair)] italic"
        >
          {heroSubtitle}
        </motion.p>

        {/* Geometric divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-10"
        >
          <GeometricBorder />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-base sm:text-lg text-sufi-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed font-[family-name:var(--font-lora)]"
        >
          {heroDescription}
        </motion.p>

        {/* Exergue quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-xl mx-auto px-8 py-6 border border-gold/20 rounded-lg bg-sufi-navy/30 backdrop-blur-sm"
        >
          <p className="text-lg sm:text-xl text-gold italic font-[family-name:var(--font-playfair)] leading-relaxed">
            « {heroExergue.text} »
          </p>
          <footer className="mt-4 text-sufi-cream/50 text-sm font-[family-name:var(--font-geist-sans)]">
            — {heroExergue.author}
            {heroExergue.source && (
              <span className="opacity-60">, {heroExergue.source}</span>
            )}
          </footer>
        </motion.blockquote>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              document.getElementById('preface')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center gap-2 text-sufi-cream/40 hover:text-gold transition-colors cursor-pointer"
            aria-label="Commencer la lecture"
          >
            <span className="text-xs font-[family-name:var(--font-geist-sans)] tracking-wider uppercase">
              Commencer la lecture
            </span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </header>
  );
}
