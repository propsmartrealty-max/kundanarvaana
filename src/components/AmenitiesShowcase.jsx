import React, { useState } from 'react';
import { AMENITIES } from '../data/projectData';
import { Waves, Sparkles, Flame, Flower2, Droplets, Film, Dumbbell, Trees, Briefcase, Trophy, Thermometer, Building2, Leaf, Baby, Coffee, Shield, Car, CheckCircle } from 'lucide-react';

export default function AmenitiesShowcase({ onOpenVisitModal }) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const getIcon = (name) => {
    switch (name) {
      case 'Waves': return <Waves className="w-5 h-5 text-gold-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-gold-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-gold-400" />;
      case 'Flower2': return <Flower2 className="w-5 h-5 text-gold-400" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-gold-400" />;
      case 'Film': return <Film className="w-5 h-5 text-gold-400" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-gold-400" />;
      case 'Trees': return <Trees className="w-5 h-5 text-gold-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-gold-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-gold-400" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-gold-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-gold-400" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-gold-400" />;
      case 'Baby': return <Baby className="w-5 h-5 text-gold-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-gold-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-gold-400" />;
      case 'Car': return <Car className="w-5 h-5 text-gold-400" />;
      default: return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  const currentCategory = AMENITIES[activeCategoryIdx];

  return (
    <section id="amenities" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Resort-Style Living • 30+ Curated Privileges
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Ikigai Sanctuaries</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Thoughtfully layered across three realms: soaring sky leisure atop Level 33, social and athletic vibrancy on the podium, and therapeutic earth gardens at ground arrival.
          </p>
        </div>

        {/* 3 Realm Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {AMENITIES.map((cat, idx) => {
            const isSelected = activeCategoryIdx === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-500/20 to-gold-500/10 border-gold-400 text-white shadow-lg shadow-gold-500/15'
                    : 'bg-obsidian-900/60 border-white/10 text-champagne/70 hover:border-gold-500/30 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Amenities Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((item, idx) => (
            <div
              key={item.name}
              className="group p-6 rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-gold-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-champagne/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-champagne/50">
                <span className="font-mono text-gold-400/80">Exclusive to 66 Residents</span>
                <span className="group-hover:text-gold-300 transition-colors">Learn More →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-gold-950/40 via-obsidian-900 to-obsidian-950 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-gold-400 mb-1">
              Private Concierge Management
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white">
              Experience the Ikigai Lifestyle First-Hand
            </div>
            <p className="text-xs sm:text-sm text-champagne/70 mt-1 max-w-xl">
              Arrange an exclusive private presentation and sample the serene acoustic atmosphere, panoramic views, and Japanese stone landscaping.
            </p>
          </div>

          <button
            onClick={onOpenVisitModal}
            className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-gold-500/20"
          >
            Request Private Walkthrough
          </button>
        </div>

      </div>
    </section>
  );
}
