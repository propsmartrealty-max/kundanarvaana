import React, { useState } from 'react';
import { CONNECTIVITY, PROJECT_INFO } from '../data/projectData';
import { MapPin, Navigation, Clock, ExternalLink, Compass } from 'lucide-react';

export default function LocationRadar() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const currentCategory = CONNECTIVITY[activeCategoryIdx];

  return (
    <section id="location" className="py-24 bg-obsidian-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Prime Balewadi • West Pune Epicenter
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Unrivaled <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Strategic Connectivity</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Positioned at the vibrant intersection of Balewadi High Street, Baner's luxury corridor, and Hinjawadi's global tech corridor. Everything you desire is within single-digit minutes.
          </p>
        </div>

        {/* Location Categories Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CONNECTIVITY.map((cat, idx) => {
            const isSelected = activeCategoryIdx === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-gold-400 text-obsidian-950 border-gold-400 shadow-lg shadow-gold-500/20'
                    : 'bg-obsidian-900 border-white/10 text-champagne/70 hover:border-gold-500/30 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Connectivity Grid + Embedded Google Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Active Category Landmarks List */}
          <div className="lg:col-span-6 space-y-4">
            {currentCategory.spots.map((spot, idx) => (
              <div
                key={spot.name}
                className="p-5 rounded-2xl bg-obsidian-950/80 border border-white/10 hover:border-gold-500/30 transition-all shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                      {spot.name}
                    </h3>
                  </div>
                  <p className="text-xs text-champagne/70 max-w-md">
                    {spot.desc}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <span className="font-mono text-base font-bold text-gold-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    {spot.time}
                  </span>
                  <span className="text-[11px] text-champagne/50 font-mono">
                    {spot.distance} away
                  </span>
                </div>
              </div>
            ))}

            {/* Address Banner */}
            <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-champagne/90 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-gold-400 shrink-0" />
                <span><strong>Site Address:</strong> {PROJECT_INFO.location}</span>
              </span>
              <a
                href="https://maps.google.com/?q=Kundan+Arvaana+Balewadi+Pune"
                target="_blank"
                rel="noreferrer"
                className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1 shrink-0 ml-2"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right: Actual Embedded Google Maps from kundans.com */}
          <div className="lg:col-span-6 rounded-3xl bg-obsidian-950/90 border border-gold-500/30 overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-obsidian-900/60">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Live Satellite & Street Location
                </span>
              </div>
              <span className="text-[11px] text-gold-400 font-mono">
                Balewadi High Street Hub
              </span>
            </div>

            <div className="relative flex-1 min-h-[360px] bg-obsidian-900">
              <iframe
                title="Kundan Arvaana Balewadi Location Map"
                src={PROJECT_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter invert-[90%] hue-rotate-180 brightness-90 contrast-125"
              />
            </div>

            <div className="p-4 px-6 border-t border-white/10 bg-obsidian-900/80 flex items-center justify-between text-xs text-champagne/70">
              <span>GPS Coordinates: Balewadi, Pune West</span>
              <span className="text-gold-300 font-medium">Near Sai Chowk & Patil Nagar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
