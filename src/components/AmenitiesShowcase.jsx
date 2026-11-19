import React, { useState } from 'react';
import { AMENITIES } from '../data/projectData';
import { Waves, Sparkles, Flame, Flower2, Droplets, Film, Dumbbell, Trees, Briefcase, Trophy, Thermometer, Building2, Leaf, Baby, Coffee, Shield, Car, CheckCircle, Maximize2, Download, Eye } from 'lucide-react';

export default function AmenitiesShowcase({ onOpenVisitModal }) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [isBlueprintZoomed, setIsBlueprintZoomed] = useState(false);

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Resort-Style Living • 30+ Curated Privileges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Ikigai Sanctuaries</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Thoughtfully layered across three realms: soaring sky leisure atop the 34th level, social and athletic vibrancy on the podium, and therapeutic earth gardens at ground arrival.
          </p>
        </div>

        {/* Featured 34th-Floor Amenity Blueprint Showcase */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-obsidian-900/80 border border-gold-500/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Blueprint Image */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-[10px] uppercase font-bold text-gold-300">
                  <span>Official Architectural Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="./assets/plans/amenities-level-34-plan.webp"
                    download
                    className="p-1.5 rounded-lg bg-obsidian-950 text-champagne/80 hover:text-white border border-white/10 text-xs flex items-center gap-1"
                    title="Download CAD Plan"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">Download</span>
                  </a>
                  <button
                    onClick={() => setIsBlueprintZoomed(true)}
                    className="p-1.5 rounded-lg bg-obsidian-950 text-champagne/80 hover:text-white border border-white/10 text-xs"
                    title="Zoom"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div 
                className="relative bg-white rounded-2xl border border-white/15 p-3 overflow-hidden shadow-inner cursor-zoom-in group aspect-[16/9] flex items-center justify-center"
                onClick={() => setIsBlueprintZoomed(true)}
              >
                <img
                  src="./assets/plans/amenities-level-34-plan.webp"
                  alt="34th-Floor Plan (Amenity Level) — Kundan Arvaana"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-gold-300 font-mono border border-gold-400/40 flex items-center gap-1">
                  <Eye className="w-3 h-3 text-gold-400" />
                  <span>Click to Inspect 34th Floor</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Highlights */}
            <div className="lg:col-span-5">
              <div className="text-xs uppercase font-bold tracking-widest text-gold-400 mb-1">
                Sky-Sanctum Architecture
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                34th-Floor Amenity Level
              </h3>
              <p className="text-xs text-champagne/70 leading-relaxed mb-4">
                The supplied architectural blueprint explicitly titled <strong className="text-white">"34TH FLOOR PLAN (AMENITY LEVEL)"</strong> demonstrates an extraordinary sky deck combining wellness, cinema, co-working, and nature high above Pune:
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs">
                <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5">
                  <strong className="text-gold-300 block mb-0.5">Main Infinity Pool</strong>
                  <span className="text-[11px] text-champagne/70">25m heated sky lap pool</span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5">
                  <strong className="text-gold-300 block mb-0.5">Kids Splash Pool</strong>
                  <span className="text-[11px] text-champagne/70">Shallow wading water deck</span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5">
                  <strong className="text-gold-300 block mb-0.5">Mini Theatre</strong>
                  <span className="text-[11px] text-champagne/70">24-seat private cinema</span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5">
                  <strong className="text-gold-300 block mb-0.5">Co-Working Space</strong>
                  <span className="text-[11px] text-champagne/70">High-speed executive pods</span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5">
                  <strong className="text-gold-300 block mb-0.5">Indoor Games</strong>
                  <span className="text-[11px] text-champagne/70">Pool table & table tennis</span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5">
                  <strong className="text-gold-300 block mb-0.5">Green Lounge</strong>
                  <span className="text-[11px] text-champagne/70">Circular Japanese garden</span>
                </div>
              </div>

              <button
                onClick={() => setIsBlueprintZoomed(true)}
                className="w-full py-2.5 rounded-xl border border-gold-400/50 text-gold-300 hover:bg-gold-500/10 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full-Resolution Blueprint</span>
              </button>
            </div>

          </div>
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

      {/* Fullscreen Blueprint Modal */}
      {isBlueprintZoomed && (
        <div
          onClick={() => setIsBlueprintZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[95vh] bg-obsidian-950 border border-gold-500/40 rounded-3xl p-6 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  34th-Floor Plan (Amenity Level) Blueprint
                </h4>
                <p className="text-xs text-gold-400">Main Pool, Kids Pool, Mini Theatre, Co-Working, Games, Green Lounge</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="./assets/plans/amenities-level-34-plan.webp"
                  download
                  className="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download High-Res</span>
                </a>
                <button
                  onClick={() => setIsBlueprintZoomed(false)}
                  className="px-3 py-2 rounded-xl border border-white/10 text-champagne hover:text-white text-xs"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-white rounded-2xl min-h-[500px]">
              <img
                src="./assets/plans/amenities-level-34-plan.webp"
                alt="34th Floor Plan"
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
