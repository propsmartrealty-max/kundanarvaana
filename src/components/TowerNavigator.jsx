import React, { useState } from 'react';
import { TOWER_LEVELS } from '../data/projectData';
import { Building, Sparkles, Compass, Shield, ArrowRight, Eye, Check } from 'lucide-react';

export default function TowerNavigator({ onOpenVisitModal, onSelectConfig }) {
  const [selectedLevelIdx, setSelectedLevelIdx] = useState(0);

  const currentLevel = TOWER_LEVELS[selectedLevelIdx];

  return (
    <section id="tower" className="py-24 bg-obsidian-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            33 Soaring Levels • Interactive Tower Stack
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Navigate the <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Landmark Citadel</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Ascend 350+ feet into the Balewadi skyline. Click any tier of the tower below to inspect architectural tiers, elevated views, and residential privileges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Tower Vertical Stack */}
          <div className="lg:col-span-5 bg-obsidian-950/80 p-6 rounded-3xl border border-gold-500/20 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-400 flex items-center gap-2">
                <Building className="w-4 h-4" />
                Tower Architectural Elevation
              </span>
              <span className="text-[11px] text-champagne/60 font-mono">
                Single Iconic Tower
              </span>
            </div>

            {/* Tower Slices Stack */}
            <div className="space-y-2">
              {TOWER_LEVELS.map((tier, idx) => {
                const isSelected = selectedLevelIdx === idx;
                return (
                  <button
                    key={tier.level}
                    onClick={() => setSelectedLevelIdx(idx)}
                    className={`w-full group text-left px-4 py-3 rounded-xl transition-all border flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent border-gold-400 text-white shadow-md shadow-gold-500/10 scale-[1.02]'
                        : 'bg-obsidian-900/60 border-white/5 hover:border-gold-500/30 text-champagne/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-gold-400 ring-4 ring-gold-400/20' : 'bg-white/20'}`} />
                      <div>
                        <div className="font-serif font-semibold text-sm sm:text-base group-hover:text-gold-200 transition-colors">
                          {tier.level}
                        </div>
                        <div className="text-[11px] text-champagne/60 font-sans">
                          {tier.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-medium ${
                        isSelected 
                          ? 'bg-gold-400 text-obsidian-950 font-bold' 
                          : 'bg-white/10 text-champagne/70'
                      }`}>
                        {tier.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <div className="text-[11px] text-champagne/60">
                Total 66 Units • 2 Units Per Floor • 4 Dedicated High-Speed Elevators
              </div>
            </div>
          </div>

          {/* Right Column: Active Level Deep Dive & View Preview */}
          <div className="lg:col-span-7 bg-obsidian-950/90 rounded-3xl border border-gold-500/20 overflow-hidden shadow-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[560px]">
            <div>
              {/* Badge & Level Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentLevel.level} • {currentLevel.type}
                </div>
                <div className="text-xs text-champagne/60 font-mono">
                  {currentLevel.badge}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
                {currentLevel.name}
              </h3>
              <p className="text-champagne/80 text-sm sm:text-base leading-relaxed mb-6">
                {currentLevel.desc}
              </p>

              {/* Simulated Elevation View Window */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video mb-6 group">
                <img
                  src={
                    selectedLevelIdx === 0 
                      ? "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                      : selectedLevelIdx === 1
                      ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                      : selectedLevelIdx <= 3
                      ? "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                      : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={currentLevel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                
                {/* Simulated Overlay HUD */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white flex items-center gap-1.5 font-mono">
                  <Compass className="w-3 h-3 text-gold-400" />
                  <span>270° Panoramic View | West-East Cross Breeze</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-medium bg-black/50 px-2.5 py-1 rounded backdrop-blur-md">
                    Clear Sightline to Baner Hills & Balewadi Stadium
                  </span>
                  <span className="text-gold-300 font-mono bg-black/50 px-2 py-1 rounded backdrop-blur-md">
                    Low-E Acoustic DGU Glass
                  </span>
                </div>
              </div>

              {/* Level Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-obsidian-900 border border-white/5">
                  <div className="text-[10px] uppercase text-champagne/60 tracking-wider">Unit Density</div>
                  <div className="text-sm font-semibold text-white mt-0.5">2 Homes / Floor</div>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-900 border border-white/5">
                  <div className="text-[10px] uppercase text-champagne/60 tracking-wider">Elevator Service</div>
                  <div className="text-sm font-semibold text-white mt-0.5">4 High-Speed Lifts</div>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-900 border border-white/5 col-span-2 sm:col-span-1">
                  <div className="text-[10px] uppercase text-champagne/60 tracking-wider">Ceiling Volume</div>
                  <div className="text-sm font-semibold text-gold-300 mt-0.5">Up to 22+ Ft Clear</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="#residences"
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 tracking-wider uppercase"
              >
                <span>View Residence Floor Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenVisitModal}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20"
              >
                Inquire Specific Floor Availability
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
