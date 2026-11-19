import React, { useState } from 'react';
import { KUNDAN_ORIGINAL_PROJECTS, KUNDAN_QUALITY_PILLARS, KUNDAN_LEADERSHIP } from '../data/projectData';
import { Building2, Award, ShieldCheck, MapPin, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function KundanPortfolioSection() {
  const [activeTab, setActiveTab] = useState('landmarks');

  return (
    <section id="kundan-heritage" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Kundan Spaces • 46+ Years of Proven Excellence
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Iconic Landmarks & <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Engineering Pedigree</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Explore authentic delivered and ongoing landmarks crafted by Kundan Spaces across Pune's prime residential corridors, engineered with uncompromising structural excellence.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('landmarks')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
              activeTab === 'landmarks'
                ? 'bg-gold-400 text-obsidian-950 border-gold-400 shadow-lg shadow-gold-500/20 scale-105'
                : 'bg-obsidian-900 border-white/10 text-champagne/70 hover:border-gold-500/30 hover:text-white'
            }`}
          >
            Delivered Pune Landmarks ({KUNDAN_ORIGINAL_PROJECTS.length})
          </button>

          <button
            onClick={() => setActiveTab('quality')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
              activeTab === 'quality'
                ? 'bg-gold-400 text-obsidian-950 border-gold-400 shadow-lg shadow-gold-500/20 scale-105'
                : 'bg-obsidian-900 border-white/10 text-champagne/70 hover:border-gold-500/30 hover:text-white'
            }`}
          >
            Construction & Interior Craftsmanship
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
              activeTab === 'leadership'
                ? 'bg-gold-400 text-obsidian-950 border-gold-400 shadow-lg shadow-gold-500/20 scale-105'
                : 'bg-obsidian-900 border-white/10 text-champagne/70 hover:border-gold-500/30 hover:text-white'
            }`}
          >
            Leadership & Visionaries
          </button>
        </div>

        {/* Tab 1: Delivered Landmarks Showcase */}
        {activeTab === 'landmarks' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {KUNDAN_ORIGINAL_PROJECTS.map((proj, idx) => (
              <div
                key={proj.name}
                className="group rounded-2xl bg-obsidian-900 border border-white/10 hover:border-gold-500/40 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/75 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {proj.status}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gold-400 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-200 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-champagne/70 mt-1">
                      {proj.type}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-champagne/60 font-medium">
                    {proj.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Quality & Construction Craftsmanship */}
        {activeTab === 'quality' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {KUNDAN_QUALITY_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group rounded-3xl bg-obsidian-900 border border-gold-500/20 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-75" />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-champagne/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Leadership Team */}
        {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {KUNDAN_LEADERSHIP.map((leader, idx) => (
              <div
                key={leader.name}
                className="group rounded-2xl bg-obsidian-900 border border-white/10 hover:border-gold-500/40 p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold-400/50 mb-4 shadow-lg group-hover:scale-105 transition-transform bg-black">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-200 transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider mb-2">
                  {leader.role}
                </div>
                <p className="text-xs text-champagne/70 leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
