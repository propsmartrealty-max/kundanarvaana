import React, { useState } from 'react';
import { IKIGAI_PILLARS } from '../data/projectData';
import { HeartPulse, Layers, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  const [activePillar, setActivePillar] = useState(0);

  const getIcon = (name) => {
    switch(name) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-gold-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-gold-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-gold-400" />;
      case 'Users': return <Users className="w-5 h-5 text-gold-400" />;
      default: return <HeartPulse className="w-5 h-5 text-gold-400" />;
    }
  };

  const current = IKIGAI_PILLARS[activePillar];

  return (
    <section id="philosophy" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            生きがい • The Architectural Concept
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            India's First <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Ikigai-Inspired</span> Grand Residences
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Ikigai is the ancient Japanese art of discovering purpose, longevity, and everyday harmony. At Kundan Arvaana, this philosophy is sculpted into the very structural DNA of 66 private sky citadels.
          </p>
        </div>

        {/* 4 Pillars Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {IKIGAI_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`p-4 rounded-xl text-left transition-all border ${
                activePillar === idx
                  ? 'bg-obsidian-850 border-gold-400/80 shadow-lg shadow-gold-500/10'
                  : 'bg-obsidian-900/40 border-white/5 hover:border-gold-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-2xl text-gold-400 font-bold">
                  {pillar.kanji}
                </span>
                {getIcon(pillar.icon)}
              </div>
              <div className="font-serif font-semibold text-white text-base">
                {pillar.title}
              </div>
              <div className="text-[11px] text-champagne/60 truncate mt-0.5">
                {pillar.sub}
              </div>
            </button>
          ))}
        </div>

        {/* Active Pillar Detailed Feature Showcase */}
        <div className="rounded-3xl bg-obsidian-900/80 border border-gold-500/20 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            
            {/* Visual Image Side with Kanji Watermark */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <img
                src={current.bg}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-obsidian-950 via-obsidian-950/40 to-transparent" />
              
              {/* Kanji Calligraphy Stamp Overlay */}
              <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-md border border-gold-500/40 flex items-center justify-center font-serif text-3xl text-gold-300 font-bold shadow-xl">
                {current.kanji}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                  Ikigai Pillar {activePillar + 1} of 4
                </div>
                <div className="font-serif text-2xl font-bold text-white">
                  {current.title}
                </div>
              </div>
            </div>

            {/* Narrative Content Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                    {current.sub}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  Sculpted for a Lifetime of Meaningful Elevation
                </h3>
                
                <p className="text-champagne/80 text-sm sm:text-base leading-relaxed mb-8">
                  {current.desc}
                </p>

                {/* Specific Architectural Manifestations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-white/10">
                  {current.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-champagne/90 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quote Pill */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs italic text-champagne/60 font-serif">
                  "At Kundan Arvaana, architecture does not simply shelter; it rejuvenates the human spirit."
                </div>
                <div className="text-xs font-semibold text-gold-400 tracking-wider">
                  KUNDAN SPACES
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
