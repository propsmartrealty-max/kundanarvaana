import React, { useState } from 'react';
import { X, Download, Printer, Sparkles, CheckCircle2, ShieldCheck, Share2 } from 'lucide-react';
import { CONFIGURATIONS, PROJECT_INFO } from '../data/projectData';
import confetti from 'canvas-confetti';

export default function VipDossierModal({ isOpen, onClose }) {
  const [clientName, setClientName] = useState('');
  const [selectedConfigId, setSelectedConfigId] = useState('4bhk');
  const [floorPref, setFloorPref] = useState('Levels 25-30 (The Horizon)');
  const [isGenerated, setIsGenerated] = useState(false);

  if (!isOpen) return null;

  const selectedConfig = CONFIGURATIONS.find((c) => c.id === selectedConfigId) || CONFIGURATIONS[0];

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    setIsGenerated(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#CCAA4B', '#F5DE98', '#B8932C', '#FFFFFF']
      });
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-obsidian-950 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-obsidian-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 font-serif font-bold text-sm">
              氣
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Bespoke VIP Dossier Generator
              </h3>
              <p className="text-[11px] text-champagne/60">
                Personalized Architectural Specification & Cost Summary
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-champagne/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isGenerated ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                  Distinguished Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Singhania"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder-champagne/30 text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                  Preferred Residence Tier
                </label>
                <select
                  value={selectedConfigId}
                  onChange={(e) => setSelectedConfigId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400"
                >
                  {CONFIGURATIONS.map((cfg) => (
                    <option key={cfg.id} value={cfg.id} className="bg-obsidian-900 text-white">
                      {cfg.name} ({cfg.carpetArea} sq.ft RERA Carpet) — {cfg.priceDisplay}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                  Elevation / Floor Zone
                </label>
                <select
                  value={floorPref}
                  onChange={(e) => setFloorPref(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400"
                >
                  <option value="Levels 31-33 (The Sky Sanctum / Penthouses)">Levels 31-33 (Sky Duplex & Crown Penthouses)</option>
                  <option value="Levels 25-30 (The Horizon Collection)">Levels 25-30 (The Horizon Collection — Panoramic Vistas)</option>
                  <option value="Levels 15-24 (The Zenith Collection)">Levels 15-24 (The Zenith Collection — Elevated Breeze)</option>
                  <option value="Levels 2-14 (The Canopy Collection)">Levels 2-14 (The Canopy Collection — Landscaped Views)</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 text-xs text-champagne/80 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Your personalized dossier will include room dimensions, verified MahaRERA approval details ({PROJECT_INFO.mahaRera}), parking allocation certificates, and statutory cost summaries.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Official Bespoke Dossier</span>
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Printable Certificate / Dossier Sheet */}
              <div id="printable-dossier" className="p-6 rounded-2xl bg-obsidian-900 border-2 border-gold-400/40 relative overflow-hidden text-champagne shadow-2xl">
                {/* Watermark crest */}
                <div className="absolute right-4 top-4 opacity-10 font-serif text-8xl text-gold-300 pointer-events-none">
                  氣
                </div>

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gold-500/20 mb-4">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-semibold block">
                      PRIVATE RESIDENTIAL DOSSIER
                    </span>
                    <h4 className="font-serif text-xl font-bold text-white">
                      KUNDAN ARVAANA
                    </h4>
                  </div>
                  <div className="text-right text-[11px] font-mono text-champagne/70">
                    <div>MahaRERA: {PROJECT_INFO.mahaRera}</div>
                    <div className="text-gold-400">Balewadi, Pune West</div>
                  </div>
                </div>

                {/* Prepared For Client Pill */}
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 mb-4">
                  <span className="text-[10px] uppercase text-champagne/60 block">Prepared Exclusively For:</span>
                  <span className="font-serif text-lg font-bold text-white">{clientName}</span>
                </div>

                {/* Configuration Specs Summary */}
                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/5">
                    <span className="text-[10px] text-champagne/50 block">Residence Configuration</span>
                    <strong className="text-white">{selectedConfig.name}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/5">
                    <span className="text-[10px] text-champagne/50 block">Elevational Zone</span>
                    <strong className="text-gold-300">{floorPref}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/5">
                    <span className="text-[10px] text-champagne/50 block">RERA Carpet Area</span>
                    <strong className="text-white">{selectedConfig.carpetArea} sq.ft</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/5">
                    <span className="text-[10px] text-champagne/50 block">Car Parking Spaces</span>
                    <strong className="text-gold-300">3 Covered Dedicated Bays + EV</strong>
                  </div>
                </div>

                {/* Key Rooms */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-semibold text-gold-400 block mb-1">
                    Signature Spatial Blueprint:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] text-champagne/80 font-mono">
                    {selectedConfig.rooms.slice(0, 4).map((rm) => (
                      <div key={rm.name} className="truncate">
                        • {rm.name} ({rm.dimensions})
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Validation */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-champagne/50">
                  <span>Authorized by Kundan Spaces</span>
                  <span>Valid for 30 Days</span>
                </div>
              </div>

              {/* Actions row */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setIsGenerated(false)}
                  className="px-4 py-3 rounded-xl border border-white/10 text-champagne hover:text-white text-xs tracking-wider transition-colors"
                >
                  Reconfigure
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
