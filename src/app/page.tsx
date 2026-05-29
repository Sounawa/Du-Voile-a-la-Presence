'use client';

import ReadingProgress from '@/components/sufi/reading-progress';
import SufiNav from '@/components/sufi/sufi-nav';
import SufiHero from '@/components/sufi/sufi-hero';
import SufiFooter from '@/components/sufi/sufi-footer';
import Section from '@/components/sufi/section';
import {
  PrefaceContent,
  Partie1Content,
  Partie2Content,
  Partie3Content,
  Partie4Content,
  Partie5Content,
  Partie6Content,
  ConclusionContent,
  AnthologieContent,
} from '@/lib/sufi-content';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Reading progress bar */}
      <ReadingProgress />

      {/* Navigation */}
      <SufiNav />

      {/* Main content */}
      <main className="flex-1 lg:ml-64">
        {/* Hero Section */}
        <SufiHero />

        {/* Decorative top gradient for content */}
        <div className="relative">
          {/* Subtle diamond pattern background */}
          <div className="pattern-overlay" />

          {/* ═══════════════════════════════════════════ */}
          {/* PRÉFACE */}
          {/* ═══════════════════════════════════════════ */}
          <Section
            id="preface"
            title="Préface"
            subtitle="Un mot avant le chemin"
            className="relative"
          >
            <PrefaceContent />
          </Section>

          {/* ═══════════════════════════════════════════ */}
          {/* PARTIE I */}
          {/* ═══════════════════════════════════════════ */}
          <div className="bg-card/50 py-2">
            <Section
              id="partie-1"
              title="Le cœur et ses voiles"
              number="Première partie"
              subtitle="Le miroir, ses taches et la promesse du dévoilement"
            >
              <Partie1Content />
            </Section>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* PARTIE II */}
          {/* ═══════════════════════════════════════════ */}
          <Section
            id="partie-2"
            title="La pédagogie divine : Jamâl et Jalâl"
            number="Deuxième partie"
            subtitle="Beauté et Majesté — les deux mains du Bien-Aimé"
          >
            <Partie2Content />
          </Section>

          {/* ═══════════════════════════════════════════ */}
          {/* PARTIE III */}
          {/* ═══════════════════════════════════════════ */}
          <div className="bg-card/50 py-2">
            <Section
              id="partie-3"
              title="L'alchimie nocturne"
              number="Troisième partie"
              subtitle="Quand le nafs emprisonne — la vallée de la nuit obscure"
            >
              <Partie3Content />
            </Section>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* PARTIE IV */}
          {/* ═══════════════════════════════════════════ */}
          <Section
            id="partie-4"
            title="La transmutation"
            number="Quatrième partie"
            subtitle="De la blessure à la Présence — l'alchimie du cœur"
          >
            <Partie4Content />
          </Section>

          {/* ═══════════════════════════════════════════ */}
          {/* PARTIE V */}
          {/* ═══════════════════════════════════════════ */}
          <div className="bg-card/50 py-2">
            <Section
              id="partie-5"
              title="Le cœur brisé, sanctuaire de l'Amour"
              number="Cinquième partie"
              subtitle="Rûmî, Hallâj, Rabî'a — la fissure comme grâce"
            >
              <Partie5Content />
            </Section>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* PARTIE VI */}
          {/* ═══════════════════════════════════════════ */}
          <Section
            id="partie-6"
            title="La guérison comme retour à l'Unité"
            number="Sixième partie"
            subtitle="Fanâ', Baqâ' et le Tawhîd comme guérison ultime"
          >
            <Partie6Content />
          </Section>

          {/* ═══════════════════════════════════════════ */}
          {/* CONCLUSION */}
          {/* ═══════════════════════════════════════════ */}
          <div className="bg-card/50 py-2">
            <Section
              id="conclusion"
              title="De la fissure à la Source"
              number="Conclusion"
              subtitle="Le voyage ne s'achève pas — il se transforme"
            >
              <ConclusionContent />
            </Section>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* ANTHOLOGIE */}
          {/* ═══════════════════════════════════════════ */}
          <Section
            id="anthologie"
            title="Anthologie commentée"
            subtitle="Voix des maîtres — Rûmî, Ibn 'Arabî, Hallâj, 'Attâr, Rabî'a..."
          >
            <AnthologieContent />
          </Section>
        </div>
      </main>

      {/* Footer */}
      <SufiFooter />
    </div>
  );
}
