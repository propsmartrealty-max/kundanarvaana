import React, { useState } from 'react';
import { Download, Maximize2, Compass, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function MasterPlanSection({ onOpenVisitModal, onOpenDossierModal }) {
  const [activeTab, setActiveTab] = useState('master');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const plans = [
    {
      id: 'master',
      name: 'Master Site Layout Plan',
      badge: '~1.1 Acres Land Parcel',
      subtitle: 'Comprehensive Ground, Podium & Vehicular Circulation Blueprint',
      image: '/assets/masterplan/master-site-plan.svg',
      desc: 'Featuring the iconic 33-storey central tower footprint, Miyawaki micro-forest, sensory children\'s play zone, stepped amphitheater, party lawn, and dual ramps to 3 levels of secured basement parking.',
      highlights: [
        'Single Soaring Landmark Tower (33 Habitable Levels)',
        'Vehicular Drop-Off Loop with 24m Main Arterial Road Entry',
        'Direct Ramp to 3 Ventilated Basements (B1-B3)',
        'Miyawaki Forest & Japanese Zen Reflexology Pathways'
      ]
    },
    {
      id: '4bhk',
      name: '4 BHK Grand Residence (2,160 Sq.Ft)',
      badge: 'RERA Carpet: 2,160 sq.ft',
      subtitle: 'Corner Spatial Anatomy with Double-Height Living Atrium',
      image: '/assets/floorplans/floorplan-4bhk.svg',
      desc: 'Layout featuring a 28\'6" × 18\'0" living and dining pavilion with a 22-ft clear ceiling, wraparound sky sundeck, master presidential suite with walk-in boutique, 3 en-suite bedrooms, and dedicated staff suite.',
      highlights: [
        '22-Ft Double-Height Living & Dining Room',
        '24\'0" × 7\'6" Wraparound Sunset Sky Sundeck',
        'Master Suite with Freestanding Soaking Tub',
        'Independent Staff Quarters with Private Service Lift Access'
      ]
    },
    {
      id: '4_5bhk',
      name: '4.5 BHK Presidential Residence (2,269 Sq.Ft)',
      badge: 'RERA Carpet: 2,269 sq.ft',
      subtitle: 'Expanded High-Altitude Layout with Convertible 0.5 Media Lounge',
      image: '/assets/floorplans/floorplan-4-5bhk.svg',
      desc: 'High-rise residence with 31\'0" × 19\'6" double-height living room, 0.5 convertible media/boardroom suite, island show kitchen with wet scullery, and expansive 3-sided glass exposure facing Baner hills.',
      highlights: [
        'Palatial 31-Ft Double-Height Family Room',
        'Convertible 0.5 Family Media Lounge / Executive Office',
        'Gourmet Island Show Kitchen + Wet Scullery',
        '28-Ft Wraparound Dining Terrace with Baner Hill Views'
      ]
    },
    {
      id: 'duplex',
      name: 'Crown Sky Duplex Penthouse (4,385 Sq.Ft)',
      badge: 'Levels 31-33 (Only 4 Available)',
      subtitle: 'Monumental Multi-Level Penthouse with Private Sky Plunge Pool',
      image: '/assets/floorplans/floorplan-duplex.svg',
      desc: 'Two complete levels connected by an internal floating sculptural spiral staircase. Features a 30-ft high Great Hall, private outdoor sky plunge pool, wine cellar, personal yoga studio, and dual staff accommodations.',
      highlights: [
        '30-Ft Monumental Great Hall with Sculptural Staircase',
        'Private 32-Ft Infinity Sky Plunge Pool & Sun Deck',
        'Entire Upper Presidential Sanctuary Floor',
        'Climate-Controlled Wine Tasting Salon & Private Gym'
      ]
    }
  ];

  const currentPlan = plans.find((p) => p.id === activeTab) || plans[0];

  return (
    <section id="master-plan" className="py-24 bg-obsidian-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Official Architectural Documentation • CAD Blueprints
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Master Site Layout & <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">CAD Floor Plans</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Inspect the high-resolution architectural layout diagrams for the 1.1-acre enclave, 4 BHK, 4.5 BHK, and Crown Sky Duplex penthouses.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {plans.map((p) => {
            const isSelected = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-obsidian-850 border-gold-400 shadow-xl shadow-gold-500/15 ring-1 ring-gold-400/40'
                    : 'bg-obsidian-950/60 border-white/10 hover:border-gold-500/30'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-gold-400 font-mono mb-1">
                  {p.badge}
                </div>
                <div className="font-serif font-bold text-sm sm:text-base text-white">
                  {p.name.split('(')[0]}
                </div>
                <div className="text-[11px] text-champagne/60 truncate mt-0.5">
                  Click to inspect layout
                </div>
              </button>
            );
          })}
        </div>

        {/* Blueprint Viewer Box */}
        <div className="rounded-3xl bg-obsidian-950 border border-gold-500/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual SVG Display Canvas */}
            <div className="lg:col-span-8 p-6 sm:p-8 bg-obsidian-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    {currentPlan.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={currentPlan.image}
                    download
                    className="p-2 rounded-lg bg-obsidian-900 hover:bg-gold-500 hover:text-black text-champagne border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
                    title="Download vector SVG"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px] font-semibold">Download Blueprint</span>
                  </a>
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="p-2 rounded-lg bg-obsidian-900 hover:bg-white/10 text-champagne border border-white/10 transition-colors"
                    title="Fullscreen zoom"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Blueprint Vector Viewer Window */}
              <div className="relative rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center p-2 sm:p-4 aspect-[4/3]">
                <img
                  src={currentPlan.image}
                  alt={currentPlan.name}
                  className="w-full h-full object-contain cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-champagne/60">
                <span>Vector CAD Precision Drawing • MahaRERA PR1260002600277</span>
                <span className="text-gold-400 font-mono">100% Vastu Compliant Orientation</span>
              </div>
            </div>

            {/* Right Information & Specifications Rail */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-obsidian-900/40">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gold-400 mb-1">
                  Architectural Specifications
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  {currentPlan.name}
                </h3>
                <p className="text-xs text-gold-300 font-medium mb-4">
                  {currentPlan.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-champagne/75 leading-relaxed mb-6">
                  {currentPlan.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white">
                    Key Layout Features:
                  </div>
                  {currentPlan.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-champagne/85">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-champagne/80">
                  <div className="flex items-center gap-2 text-gold-300 font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Private Floor Privilege</span>
                  </div>
                  <p className="text-[11px] text-champagne/60">
                    Only 2 sprawling homes per floor. No shared walls between living rooms. 4 dedicated elevators.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={onOpenDossierModal}
                  className="w-full py-3 rounded-xl border border-gold-400/60 text-gold-300 hover:bg-gold-500/10 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Generate Customized Dossier</span>
                </button>
                <button
                  onClick={onOpenVisitModal}
                  className="w-full py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20"
                >
                  Inquire Layout Availability
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
                  {currentPlan.name}
                </h4>
                <p className="text-xs text-gold-400">{currentPlan.subtitle}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={currentPlan.image}
                  download
                  className="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download SVG</span>
                </a>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="px-3 py-2 rounded-xl border border-white/10 text-champagne hover:text-white text-xs"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-black rounded-2xl min-h-[500px]">
              <img
                src={currentPlan.image}
                alt={currentPlan.name}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
