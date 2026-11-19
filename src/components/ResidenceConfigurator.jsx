import React, { useState } from 'react';
import { CONFIGURATIONS } from '../data/projectData';
import { Maximize2, BedDouble, Bath, Car, Sparkles, Check, ArrowRight, Download, SlidersHorizontal, Table, Eye, Layers } from 'lucide-react';

export default function ResidenceConfigurator({ onOpenVisitModal, onOpenDossierModal, onOpenCalculator }) {
  const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);
  const [viewMode, setViewMode] = useState('full'); // 'full', 'unitA', 'unitB', 'schedule'
  const [activeRoomIdx, setActiveRoomIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const current = CONFIGURATIONS[selectedConfigIdx] || CONFIGURATIONS[0];
  const activeRoom = current.rooms[activeRoomIdx] || current.rooms[0];

  // Determine current active image based on viewMode
  let activeImage = current.floorPlanImage;
  let activeImageTitle = `${current.name} — Full Dual Floor Plan`;
  if (viewMode === 'unitA') {
    activeImage = current.unitAImage || current.lowerPlanImage || current.floorPlanImage;
    activeImageTitle = `${current.name} • Unit A Individual Plan`;
  } else if (viewMode === 'unitB') {
    activeImage = current.unitBImage || current.upperPlanImage || current.floorPlanImage;
    activeImageTitle = `${current.name} • ${current.id === 'duplex' ? 'Upper Level Plan' : 'Unit B Individual Plan'}`;
  } else if (viewMode === 'schedule') {
    activeImage = current.scheduleTable || current.scheduleCard || current.floorPlanImage;
    activeImageTitle = `${current.name} • Official Area Schedule & RERA Breakdown`;
  }

  return (
    <section id="residences" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Official Developer Floor Plans • Kundan Spaces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Bespoke <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Residences & Penthouses</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Authentic typical floor plans and official area schedules directly from the Kundan Arvaana architectural documentation.
          </p>
        </div>

        {/* Configuration Selector Tabs (4 types) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CONFIGURATIONS.map((cfg, idx) => {
            const isSelected = selectedConfigIdx === idx;
            return (
              <button
                key={cfg.id}
                onClick={() => {
                  setSelectedConfigIdx(idx);
                  setViewMode('full');
                  setActiveRoomIdx(0);
                }}
                className={`p-5 rounded-2xl text-left transition-all border relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-obsidian-850 border-gold-400/80 shadow-xl shadow-gold-500/10 ring-1 ring-gold-400/30'
                    : 'bg-obsidian-900/50 border-white/10 hover:border-gold-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full truncate ${
                      isSelected ? 'bg-gold-400 text-obsidian-950' : 'bg-white/10 text-champagne/70'
                    }`}>
                      {cfg.tag}
                    </span>
                    <span className="text-xs font-serif font-bold text-gold-300">
                      {cfg.priceDisplay}
                    </span>
                  </div>

                  <div className="font-serif text-base font-bold text-white mb-1">
                    {cfg.name}
                  </div>
                  <div className="text-[11px] text-champagne/70 mb-3">
                    {cfg.type}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-champagne/50 block text-[9px] uppercase">RERA Carpet</span>
                    <strong className="text-white font-mono text-[11px]">{cfg.carpetArea} sq.ft</strong>
                  </div>
                  <div>
                    <span className="text-champagne/50 block text-[9px] uppercase">Floors</span>
                    <strong className="text-gold-300 font-mono text-[11px] truncate block">{cfg.floors.split('&')[0]}</strong>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Floor Plan Box */}
        <div className="rounded-3xl bg-obsidian-900/80 border border-gold-500/20 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            
            {/* Left: Architectural Floor Plan Graphic Viewer */}
            <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-obsidian-950/50">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">
                      Official CAD Floor Plan • {current.floors}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {current.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-champagne/60 block">Private Smart Elevators</span>
                    <span className="text-xs font-semibold text-gold-300">Only 2 Homes / Floor</span>
                  </div>
                </div>

                {/* Sub-View Switcher Tabs */}
                <div className="flex flex-wrap items-center gap-2 mb-4 bg-obsidian-900/90 p-1.5 rounded-xl border border-white/10">
                  <button
                    onClick={() => setViewMode('full')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      viewMode === 'full'
                        ? 'bg-gold-400 text-obsidian-950 font-bold shadow'
                        : 'text-champagne/70 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Full Floor Plan</span>
                  </button>

                  <button
                    onClick={() => setViewMode('unitA')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      viewMode === 'unitA'
                        ? 'bg-gold-400 text-obsidian-950 font-bold shadow'
                        : 'text-champagne/70 hover:text-white'
                    }`}
                  >
                    <span>{current.id === 'duplex' ? 'Lower Level' : 'Unit A (Left)'}</span>
                  </button>

                  <button
                    onClick={() => setViewMode('unitB')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      viewMode === 'unitB'
                        ? 'bg-gold-400 text-obsidian-950 font-bold shadow'
                        : 'text-champagne/70 hover:text-white'
                    }`}
                  >
                    <span>{current.id === 'duplex' ? 'Upper Level' : 'Unit B (Right)'}</span>
                  </button>

                  {current.scheduleTable && (
                    <button
                      onClick={() => setViewMode('schedule')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                        viewMode === 'schedule'
                          ? 'bg-gold-400 text-obsidian-950 font-bold shadow'
                          : 'text-champagne/70 hover:text-white'
                      }`}
                    >
                      <Table className="w-3.5 h-3.5" />
                      <span>Area Schedule Table</span>
                    </button>
                  )}
                </div>

                {/* High-Resolution Drawing Canvas */}
                <div className="relative bg-white rounded-2xl border border-white/10 p-3 sm:p-4 aspect-[16/10] flex items-center justify-center overflow-hidden shadow-inner group">
                  <img
                    src={activeImage}
                    alt={activeImageTitle}
                    className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-102"
                    onClick={() => setIsFullscreen(true)}
                  />

                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/40 text-[10px] text-gold-300 font-mono flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3 h-3 text-gold-400" />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                {/* Unit Carpet Breakdown Table (if available) */}
                {current.units && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {current.units.map((u, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-obsidian-900/60 border border-white/5">
                        <div className="text-gold-300 font-semibold mb-1">{u.unit}</div>
                        <div className="text-champagne/70 text-[11px] space-y-0.5">
                          <div>RERA Carpet: <strong className="text-white">{u.reraCarpet}</strong></div>
                          {u.sitOut && <div>Sit-Out Balcony: <span className="text-gold-400">{u.sitOut}</span></div>}
                          <div>Total Carpet Area: <strong className="text-gold-200">{u.totalCarpet}</strong></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Configuration Overview Text */}
                <p className="text-xs text-champagne/70 mt-3 leading-relaxed">
                  {current.overview}
                </p>
              </div>

              {/* Action Buttons Under Blueprint */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <a
                  href={activeImage}
                  download
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 transition-colors flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Blueprint Image</span>
                </a>
                <button
                  onClick={onOpenDossierModal}
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-white/10 text-champagne hover:border-white/20 transition-colors flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
                  <span>Request Full RERA Dossier</span>
                </button>
              </div>
            </div>

            {/* Right: Active Room Inspection & Material Specifications */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-obsidian-900/40">
              <div>
                {/* Room Navigator Buttons */}
                <div className="text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                  Select Room to Inspect Dimensions:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-6">
                  {current.rooms.map((rm, idx) => {
                    const isActive = activeRoomIdx === idx;
                    return (
                      <button
                        key={rm.name}
                        onClick={() => setActiveRoomIdx(idx)}
                        className={`p-2 rounded-xl text-left border transition-all text-xs ${
                          isActive
                            ? 'bg-gold-500/20 border-gold-400 text-white font-medium'
                            : 'bg-obsidian-950/60 border-white/5 text-champagne/70 hover:border-gold-500/30'
                        }`}
                      >
                        <div className="font-mono text-[10px] text-gold-400 truncate">{rm.dimensions}</div>
                        <div className="truncate text-[11px] font-semibold text-white mt-0.5">{rm.name}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Room Card */}
                <div className="p-4 rounded-2xl bg-obsidian-950 border border-gold-400/30 mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase text-gold-400">Selected Room Anatomy</span>
                    <span className="text-xs font-mono font-bold text-white">{activeRoom.dimensions}</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-white mb-2">
                    {activeRoom.name}
                  </div>
                  <p className="text-xs text-champagne/80 leading-relaxed">
                    <strong className="text-gold-300 block mb-0.5">Architectural Specification:</strong>
                    {activeRoom.highlight}
                  </p>
                </div>

                {/* Key Amenities Inside Residence */}
                <div className="mb-6">
                  <div className="text-xs uppercase font-semibold text-gold-400 tracking-wider mb-2.5">
                    Finish & Engineering Specifications:
                  </div>
                  <ul className="space-y-2">
                    {current.specs.map((spec, sidx) => (
                      <li key={sidx} className="flex items-start gap-2.5 text-xs text-champagne/85">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parking & Elevation Privileges */}
                <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 text-xs text-champagne/80 space-y-1">
                  <div className="flex items-center gap-2 text-gold-300 font-semibold">
                    <Car className="w-4 h-4 text-gold-400" />
                    <span>3 Covered Reserved Car Parks with EV Charging</span>
                  </div>
                  <p className="text-[11px] text-champagne/60 pl-6">
                    Direct access via speed ramps to 3 ventilated basements with RFID boom-barrier.
                  </p>
                </div>
              </div>

              {/* Book Visit Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenVisitModal}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2"
                >
                  <span>Book Private Walkthrough for {current.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Fullscreen Blueprint Modal */}
      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[95vh] bg-obsidian-950 border border-gold-500/40 rounded-3xl p-6 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {activeImageTitle}
                </h4>
                <p className="text-xs text-gold-400">{current.floors}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeImage}
                  download
                  className="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download High-Res</span>
                </a>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="px-3 py-2 rounded-xl border border-white/10 text-champagne hover:text-white text-xs"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-white rounded-2xl min-h-[500px]">
              <img
                src={activeImage}
                alt={activeImageTitle}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
