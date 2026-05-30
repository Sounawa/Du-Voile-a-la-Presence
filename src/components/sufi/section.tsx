'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  number?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

function OrnamentDivider() {
  return (
    <div className="ornament-divider my-8">
      <svg viewBox="0 0 40 40" className="w-6 h-6 text-gold gentle-glow">
        <path
          d="M20 5 L23 17 L35 20 L23 23 L20 35 L17 23 L5 20 L17 17 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default function Section({ id, title, number, subtitle, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 sm:py-20 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          {number && (
            <span className="text-gold/60 text-sm font-[family-name:var(--font-geist-sans)] tracking-widest uppercase mb-2 block">
              {number}
            </span>
          )}
          <h2
            id={`${id}-title`}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-sufi-teal dark:text-gold font-[family-name:var(--font-playfair)] mb-3"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground italic text-lg font-[family-name:var(--font-lora)]">
              {subtitle}
            </p>
          )}
          {/* Gold underline */}
          <div className="flex items-center justify-center mt-4 gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gold">
              <path
                d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z"
                fill="currentColor"
              />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {children}
        </motion.div>

        {/* Bottom ornament */}
        <OrnamentDivider />
      </div>
    </section>
  );
}
