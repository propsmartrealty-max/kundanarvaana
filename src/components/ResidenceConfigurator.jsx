import React, { useState } from 'react';
import { CONFIGURATIONS } from '../data/projectData';
import { Maximize2, BedDouble, Bath, Car, Sparkles, Check, ArrowRight, Download, SlidersHorizontal } from 'lucide-react';

export default function ResidenceConfigurator({ onOpenVisitModal, onOpenDossierModal, onOpenCalculator }) {
  const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);
  const [activeRoomIdx, setActiveRoomIdx] = useState(0);

  const current = CONFIGURATIONS[selectedConfigIdx];
  const activeRoom = current.rooms[activeRoomIdx] || current.rooms[0];

  return (
    <section id="residences" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Bespoke Residences • Architectural Blueprints
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Grand <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Residences & Penthouses</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Crafted with zero wastage, expansive 3-sided light apertures, and soaring vertical heights. Select a configuration below to explore room dimensions and architectural specifications.
          </p>
        </div>

        {/* Configuration Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {CONFIGURATIONS.map((cfg, idx) => {
            const isSelected = selectedConfigIdx === idx;
            return (
              <button
                key={cfg.id}
                onClick={() => {
                  setSelectedConfigIdx(idx);
                  setActiveRoomIdx(0);
                }}
                className={`p-6 rounded-2xl text-left transition-all border relative overflow-hidden ${
                  isSelected
                    ? 'bg-obsidian-850 border-gold-400/80 shadow-xl shadow-gold-500/10 ring-1 ring-gold-400/30'
                    : 'bg-obsidian-900/50 border-white/10 hover:border-gold-500/30'
                }`}
              >
                {/* Tag pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                    isSelected ? 'bg-gold-400 text-obsidian-950' : 'bg-white/10 text-champagne/70'
                  }`}>
                    {cfg.tag}
                  </span>
                  <span className="text-xs font-serif font-bold text-gold-300">
                    {cfg.priceDisplay}
                  </span>
                </div>

                <div className="font-serif text-xl font-bold text-white mb-1">
                  {cfg.name}
                </div>
                <div className="text-xs text-champagne/70 mb-4">
                  {cfg.type}
                </div>

                {/* Key specs row */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-champagne/50 block text-[10px] uppercase">RERA Carpet</span>
                    <strong className="text-white font-mono">{cfg.carpetArea} sq.ft</strong>
                  </div>
                  <div>
                    <span className="text-champagne/50 block text-[10px] uppercase">Usable Space</span>
                    <strong className="text-gold-300 font-mono">{cfg.usableArea} sq.ft</strong>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Floor Plan & Room Inspector Box */}
        <div className="rounded-3xl bg-obsidian-900/80 border border-gold-500/20 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            
            {/* Left: Architectural Floor Plan Graphic Simulator */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-obsidian-950/50">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                      Architectural Layout Map
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {current.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-champagne/60 block">Private Foyer Access</span>
                    <span className="text-xs font-semibold text-gold-300">2 Residences / Floor</span>
                  </div>
                </div>

                {/* Interactive Schematic Diagram with Clickable Zones */}
                <div className="relative bg-obsidian-900/90 rounded-2xl border border-white/10 p-6 aspect-[4/3] flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Subtle Grid Watermark */}
                  <div className="absolute inset-0 bg-[radial-gradient(#b8932c_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
                  
                  {/* Floor Plan Compass & Dimensions Header */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-champagne/60 font-mono">
                    <span className="flex items-center gap-1.5 text-gold-400">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Total Usable: {current.usableArea} sq.ft (Deck: {current.balconyArea} sq.ft)
                    </span>
                    <span className="border border-white/20 px-2 py-0.5 rounded">N ↑ (Vastu Compliant)</span>
                  </div>

                  {/* Interactive Room Hotspot Grid Visual */}
                  <div className="relative z-10 my-4 grid grid-cols-3 gap-2.5">
                    {current.rooms.slice(0, 6).map((rm, idx) => {
                      const isActive = activeRoomIdx === idx;
                      return (
                        <button
                          key={rm.name}
                          onClick={() => setActiveRoomIdx(idx)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isActive
                              ? 'bg-gold-500/25 border-gold-400 text-white shadow-lg shadow-gold-500/20 ring-1 ring-gold-400'
                              : 'bg-obsidian-850/80 border-white/10 hover:border-gold-500/40 text-champagne/80'
                          }`}
                        >
                          <div className="text-[10px] font-mono text-gold-400/90 uppercase truncate">
                            {rm.dimensions}
                          </div>
                          <div className="font-serif text-xs font-semibold text-white mt-1 line-clamp-1">
                            {rm.name}
                          </div>
                          <div className="text-[10px] text-champagne/60 truncate mt-0.5">
                            Click to inspect
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Additional Rooms bar */}
                  <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {current.rooms.slice(6).map((rm, idx) => {
                      const trueIdx = idx + 6;
                      const isActive = activeRoomIdx === trueIdx;
                      return (
                        <button
                          key={rm.name}
                          onClick={() => setActiveRoomIdx(trueIdx)}
                          className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                            isActive
                              ? 'bg-gold-500/25 border-gold-400 text-gold-200'
                              : 'bg-white/5 border-white/10 text-champagne/70 hover:border-gold-500/30'
                          }`}
                        >
                          {rm.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Configuration Overview Text */}
                <p className="text-xs sm:text-sm text-champagne/70 mt-4 leading-relaxed">
                  {current.overview}
                </p>
              </div>

              {/* Action Buttons Under Blueprint */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenDossierModal}
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 transition-colors flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Floor Plan PDF
                </button>
                <a
                  href="#calculator"
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-white/10 text-champagne hover:border-white/20 transition-colors flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
                  Calculate Cost & EMI
                </a>
              </div>
            </div>

            {/* Right: Active Room Inspection & Material Specifications */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-obsidian-900/40">
              <div>
                {/* Active Room Header */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 text-xs font-medium uppercase mb-3">
                  Inspecting: {activeRoom.name}
                </div>

                <div className="font-serif text-2xl font-bold text-white mb-2">
                  {activeRoom.dimensions}
                </div>
                
                <p className="text-xs sm:text-sm text-champagne/80 mb-6 bg-obsidian-950/70 p-3.5 rounded-xl border border-white/5">
                  <strong className="text-gold-300 block mb-1">Architectural Highlight:</strong>
                  {activeRoom.highlight}
                </p>

                {/* Key Amenities Inside Residence */}
                <div className="mb-6">
                  <div className="text-xs uppercase font-semibold text-gold-400 tracking-wider mb-3">
                    Premium Material Specifications:
                  </div>
                  <ul className="space-y-2.5">
                    {current.specs.map((spec, sidx) => (
                      <li key={sidx} className="flex items-start gap-2.5 text-xs text-champagne/85">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parking & Elevation Privileges */}
                <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 text-xs text-champagne/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-gold-300 font-semibold">
                    <Car className="w-4 h-4 text-gold-400" />
                    <span>3 Reserved Covered Parking Spaces</span>
                  </div>
                  <p className="text-[11px] text-champagne/60 pl-6">
                    Equipped with dedicated high-speed EV charging infrastructure and RFID boom-barrier clearance.
                  </p>
                </div>
              </div>

              {/* Book Visit Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenVisitModal}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2"
                >
                  <span>Schedule Private Viewing of this Layout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
