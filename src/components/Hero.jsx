import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Building2, Eye, KeyRound, Image as ImageIcon } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { SEO_ROUTES, navigateToRoute, getCleanUrl } from '../utils/seoRouter';

export default function Hero({ onOpenVisitModal, onExploreTower, onExploreResidences }) {
  const masterPlanRoute = SEO_ROUTES.find(r => r.slug === 'master-plan');
  const galleryRoute = SEO_ROUTES.find(r => r.slug === 'gallery');
  const towerRoute = SEO_ROUTES.find(r => r.slug === 'tower');

  const handleRouteClick = (e, route) => {
    e.preventDefault();
    if (route) navigateToRoute(route);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Canvas / Luxury Imagery */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('${PROJECT_INFO.officialHeroImage}')`,
          }}
        />
        {/* Multi-layered luxury gradients for obsidian-gold depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/85 to-obsidian-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,147,44,0.16)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/95 via-obsidian-950/60 to-obsidian-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        
        {/* RERA and Pedigree Trust Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md text-gold-300 text-xs font-semibold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>MahaRERA: {PROJECT_INFO.mahaRera}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-champagne/90 text-xs font-medium tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>India's 1st Ikigai-Inspired Luxury Landmark</span>
          </div>
        </div>

        {/* Hero Headline & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: Text & Action CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="text-gold-400 font-serif tracking-[0.35em] text-xs sm:text-sm uppercase mb-3 font-semibold">
              Balewadi • Pune West
            </h2>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
              KUNDAN <span className="bg-gradient-to-r from-gold-300 via-gold-200 to-amber-400 bg-clip-text text-transparent">ARVAANA</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-champagne/80 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Experience Balewadi's most coveted address. Only <strong className="text-white font-medium">66 masterfully curated residences</strong> rising across 33 soaring levels with <strong className="text-white font-medium">just 2 homes per floor</strong> and 22+ ft double-height living pavilions.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-8">
              <button
                onClick={onOpenVisitModal}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-obsidian-950 font-bold text-xs tracking-widest uppercase shadow-xl shadow-gold-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Book VIP Private Tour</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => handleRouteClick(e, towerRoute)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-gold-400/40 bg-obsidian-900/60 hover:bg-gold-500/10 text-gold-200 font-semibold text-xs tracking-wider uppercase backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4 text-gold-400" />
                <span>33-Floor Tower</span>
              </button>

              <a
                href={getCleanUrl('kundan-arvaana-master-plan-floor-plans')}
                onClick={(e) => handleRouteClick(e, masterPlanRoute)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-champagne font-semibold text-xs tracking-wider uppercase backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>Master Blueprints</span>
              </a>
            </div>
          </div>

          {/* Right: Key Architectural Visual Box */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/50 shadow-2xl bg-black aspect-square sm:aspect-[4/5] max-h-[540px] mx-auto group-hover:border-gold-300 transition-all">
              <img
                src={PROJECT_INFO.officialHeroImage}
                alt="Kundan Arvaana Architectural Landmark Elevation"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-80" />

              {/* Verified Visual Pill */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/50 text-[10px] uppercase font-bold text-gold-300 flex items-center gap-1.5 shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Ikigai Architectural Elevation</span>
              </div>

              {/* Bottom Caption inside image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="font-serif text-sm font-bold text-white">
                    33-Storey Ikigai Sky Citadel
                  </div>
                  <div className="text-[11px] text-champagne/70 font-mono">
                    Balewadi, Pune West
                  </div>
                </div>

                <a
                  href={getCleanUrl('kundan-arvaana-gallery-elevation-balewadi')}
                  onClick={(e) => handleRouteClick(e, galleryRoute)}
                  className="px-3 py-1.5 rounded-lg bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md"
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>Gallery</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Landmark Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-md text-center hover:border-gold-500/40 transition-colors">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              66
            </div>
            <div className="text-xs uppercase tracking-wider text-champagne/70 font-medium">
              Ultra-Bespoke Units
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Total Exclusivity</div>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-md text-center hover:border-gold-500/40 transition-colors">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              2 Units
            </div>
            <div className="text-xs uppercase tracking-wider text-champagne/70 font-medium">
              Per Floor Privacy
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Private Biometric Lift</div>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-md text-center hover:border-gold-500/40 transition-colors">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              33 Floors
            </div>
            <div className="text-xs uppercase tracking-wider text-champagne/70 font-medium">
              Iconic Tower
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Soaring Sky Landmark</div>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-md text-center hover:border-gold-500/40 transition-colors">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              22+ Ft
            </div>
            <div className="text-xs uppercase tracking-wider text-champagne/70 font-medium">
              Double-Height Living
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Monumental Volume</div>
          </div>
        </div>

        {/* Live Luxury Spec Ticker Banner */}
        <div className="mt-12 py-3 px-6 rounded-full bg-obsidian-900/80 border border-white/10 backdrop-blur-md max-w-4xl mx-auto flex items-center justify-between text-xs text-champagne/80 overflow-hidden">
          <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase tracking-wider text-[11px] shrink-0">
            <KeyRound className="w-3.5 h-3.5" />
            <span>Highlights:</span>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap pl-4 text-xs font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              4 & 4.5 BHK Grand Residences (2,160 - 2,269 sq.ft)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Starting ₹3.95 Cr* All-Inclusive Package
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              3 Car Parks Bundled per Residence with EV Charging
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Rooftop Infinity Sky Pool at Level 33
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
