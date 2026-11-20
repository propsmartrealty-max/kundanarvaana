import React, { useState } from 'react';
import { Download, Maximize2, Compass, Layers, CheckCircle2, ShieldCheck, Sparkles, MapPin, Eye, MessageSquare } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function MasterPlanSection({ onOpenVisitModal, onOpenDossierModal }) {
  const [activeTab, setActiveTab] = useState('master-aerial');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const plans = [
    {
      id: 'master-aerial',
      name: 'Master Site Layout Plan (Aerial)',
      badge: 'Official ~1.1 Acre Site Plan',
      subtitle: 'Color Aerial Landscape, Circulatory Driveways & Tower Footprint',
      image: './assets/plans/master-site-plan-aerial.webp',
      desc: 'Official master layout showing the 24m road entrance, concentric Japanese zen driveway, drop-off plaza, 33 car parking bays, central tower footprint, and landscaped podium terrace.',
      highlights: [
        '24m Arterial Road Entry & Grand Secured Security Gate',
        'Concentric Japanese Zen Paving Driveway & Valet Loop',
        '33 Surface-Level Parking Bays with EV Provision',
        'Iconic 33-Storey Central Ikigai Tower Footprint',
        'Elevated Podium Landscaped Terrace & Sun Deck',
        'North Compass Alignment & Complete Vastu Compliance'
      ]
    },
    {
      id: 'amenities-34',
      name: '34th-Floor Sky Amenity Level',
      badge: 'Level 34 Blueprint',
      subtitle: 'Official Architectural Layout for Rooftop Wellness Sanctum',
      image: './assets/plans/amenities-level-34-plan.webp',
      desc: 'Supplied drawing explicitly titled "34TH FLOOR PLAN (AMENITY LEVEL)". Architectural blueprint illustrating the 25m heated sky lap pool, kids splash pool, timber pool deck, 24-seater mini theatre, executive co-working hub, indoor games, and zen green lounge.',
      highlights: [
        '25-Meter Heated Sky Infinity Lap Pool & Kids Splash Pool',
        'Cantilevered Teppanyaki Timber Pool Deck & Cabanas',
        '24-Seater Private Dolby Atmos Mini Theatre',
        'Executive Co-Working & Private Meeting Pods',
        'Indoor Games & Billiards Lounge',
        'Circular Zen Green Lounge with Japanese Bonsai Courtyard'
      ]
    },
    {
      id: 'type-01',
      name: '4.5 BHK Type 01 (Elite & Grande)',
      badge: 'Floors 2, 6, 10, 14, 18, 22, 26',
      subtitle: '2,235 & 2,246 SQ.FT Dual-Residence Floor Plan',
      image: './assets/plans/floorplan-type-01-full.webp',
      desc: 'Typical floor plan pages supplied for the 2nd, 6th, 10th, 14th, 18th, 22nd and 26th floors. Features Type 1A (2,235 sq.ft) & Type 1B (2,246 sq.ft) with double-height living pavilions, private smart elevators, and wraparound sit-outs.',
      highlights: [
        'Only 2 Grand Residences per Soaring Floor',
        'Type 1A: 2,235 sq.ft & Type 1B: 2,246 sq.ft Carpet Area',
        '24\'0" × 15\'0" Double-Height Living & Dining Pavilion',
        'Private Sky Sit-Out Balcony Facing Baner Hills',
        'Private Servant Quarters with Dedicated Service Lift Core'
      ]
    },
    {
      id: 'duplex',
      name: 'Crown Sky Duplex Penthouse (4,385 SQ.FT)',
      badge: 'Double-Height Sky Villa',
      subtitle: 'Levels 4, 8, 28 (Lower) & 5, 9, 29 (Upper)',
      image: './assets/plans/floorplan-duplex-lower.webp',
      desc: 'Supplied architectural drawing titled "4TH, 8TH, 28TH FLOOR PLAN (TYPICAL FLOOR TYPE 03)-DUPLEX OPTION". A monumental 4,385 sq.ft sky estate connected by an internal floating sculptural staircase with a 30-ft high Great Hall.',
      highlights: [
        'Monumental 4,385 Sq.Ft Spanning Two Contiguous Levels',
        '30-Ft Double-Height Great Hall with Glass Curtain Walls',
        'Private Floating Sculptural Staircase Connecting Levels',
        'Entire Upper Level Master Presidential Wing with Private Terrace',
        'Dual Domestic Staff Quarters with Independent Service Entry'
      ]
    },
    {
      id: 'editorial',
      name: 'Architectural Vision Statement',
      badge: 'Developer Editorial Spread',
      subtitle: '"This is not luxury for the world to see, it\'s for you to feel"',
      image: './assets/brochure/elevation-editorial-full.webp',
      desc: 'Official architectural presentation spread highlighting the soaring 33-level tower facade, bronze vertical louvers, expansive glass skin, and projecting balconies designed by Kundan Spaces.',
      highlights: [
        'Bronze Acoustic Louvers & Acoustic DGU Glazing',
        '270° Panoramic Unobstructed City & Western Hill Vistas',
        'Japanese Zen Wabi-Sabi Minimalism Meets Modern Luxury',
        'Iconic Landmark on the Balewadi Skyline'
      ]
    },
    {
      id: 'master-slide',
      name: 'Master Layout Presentation Slide',
      badge: 'Official Brochure Sheet',
      subtitle: 'Complete Presentation Spread with Orientation & Metrics',
      image: './assets/brochure/master-layout-full.webp',
      desc: 'Official full-page presentation slide of the master site layout from Kundan Spaces.',
      highlights: [
        'High-Resolution Master Site Documentation',
        'Ground Circulation & Vehicle Flow Architecture',
        'Pedestrian Sanctuary with Zero Vehicular Intrusion',
        'MahaRERA Registration: PR1260002600277'
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
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Official Developer Documentation • Kundan Spaces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Master Site Layout & <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Architectural Plans</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Authentic architectural layouts extracted directly from Kundan Arvaana's presentation portfolio. Enhanced for high-DPI inspection with complete spatial metrics.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {plans.map((p) => {
            const isSelected = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-obsidian-850 border-gold-400 shadow-xl shadow-gold-500/15 ring-1 ring-gold-400/40'
                    : 'bg-obsidian-950/60 border-white/10 hover:border-gold-500/30'
                }`}
              >
                <div className="text-[9px] uppercase font-bold text-gold-400 font-mono mb-1 truncate">
                  {p.badge}
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm text-white line-clamp-2">
                  {p.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Blueprint Viewer Box */}
        <div className="rounded-3xl bg-obsidian-950 border border-gold-500/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Display Canvas */}
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
                    title="Download high-resolution image"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px] font-semibold">Download High-Res</span>
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

              {/* High-Res Image Viewer Window */}
              <div className="relative rounded-2xl bg-white border border-white/10 overflow-hidden flex items-center justify-center p-2 sm:p-4 aspect-[16/10] shadow-inner group">
                <img
                  src={currentPlan.image}
                  alt={currentPlan.name}
                  className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-102"
                  onClick={() => setIsFullscreen(true)}
                />

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/40 text-[10px] text-gold-300 font-mono flex items-center gap-1.5 shadow-md">
                  <Eye className="w-3 h-3 text-gold-400" />
                  <span>Click for Fullscreen Zoom</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-champagne/60">
                <span>Official Developer Document • MahaRERA PR1260002600277</span>
                <span className="text-gold-400 font-mono">100% Vastu & Ikigai Aligned</span>
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
                    Key Spatial Details:
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
                    <span>Pure Exclusivity</span>
                  </div>
                  <p className="text-[11px] text-champagne/60">
                    Only 66 bespoke residences across 33 levels. 2 homes per floor with zero wall sharing between living spaces.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                <a
                  href="https://wa.me/917744009295?text=Hello%2C%20I%20am%20interested%20in%20Kundan%20Arvaana%20Balewadi.%20Please%20share%20the%20high-resolution%20Master%20Site%20Layout%20and%2034th%20Floor%20Amenity%20blueprints."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Plans</span>
                </a>
                <button
                  onClick={onOpenVisitModal}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20"
                >
                  Schedule Tour
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
