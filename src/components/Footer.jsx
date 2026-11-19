import React from 'react';
import { PROJECT_INFO } from '../data/projectData';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { SEO_ROUTES, navigateToRoute, getCleanUrl } from '../utils/seoRouter';

export default function Footer({ onOpenVisitModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, routeSlug) => {
    e.preventDefault();
    const route = SEO_ROUTES.find(r => r.slug === routeSlug);
    if (route) {
      navigateToRoute(route);
    }
  };

  return (
    <footer className="bg-obsidian-950 text-champagne/70 border-t border-gold-500/20 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col with Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-9 bg-white px-2.5 py-1 rounded-lg flex items-center justify-center border border-gold-400/40 shadow-md">
                <img
                  src={PROJECT_INFO.officialLogo}
                  alt="Kundan Spaces Official Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-[0.25em] text-white font-bold">
                  ARVAANA
                </span>
                <span className="text-[9px] tracking-[0.35em] text-gold-400 font-semibold uppercase -mt-0.5">
                  BALEWADI • PUNE
                </span>
              </div>
            </div>

            <p className="text-xs text-champagne/60 leading-relaxed pr-6">
              India's premier Ikigai-inspired ultra-luxury landmark by Kundan Spaces. Only 66 bespoke residences across 33 soaring levels, offering private-floor tranquility and 270-degree western skyline horizons.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenVisitModal}
                className="px-4 py-2 rounded-full bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-[11px] uppercase tracking-wider transition-colors"
              >
                Schedule Private Viewing
              </button>
            </div>
          </div>

          {/* Quick Nav Col (Hash-Free Permalinks) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">
              The Residences
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={getCleanUrl('')} 
                  onClick={(e) => handleLinkClick(e, 'overview')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Ikigai Philosophy
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-tower-balewadi')} 
                  onClick={(e) => handleLinkClick(e, 'tower')}
                  className="hover:text-gold-300 transition-colors"
                >
                  33-Floor Tower Stack
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-master-plan-floor-plans')} 
                  onClick={(e) => handleLinkClick(e, 'master-plan')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Master Site Layout
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-4bhk-residences-balewadi')} 
                  onClick={(e) => handleLinkClick(e, 'residences')}
                  className="hover:text-gold-300 transition-colors"
                >
                  4.5 BHK Type 01 & 02
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-4bhk-residences-balewadi')} 
                  onClick={(e) => handleLinkClick(e, 'residences')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Crown Sky Duplex (4,385 sq.ft)
                </a>
              </li>
            </ul>
          </div>

          {/* Privileges & Location Col (Hash-Free Permalinks) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">
              Privileges & Access
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-gallery-elevation-balewadi')} 
                  onClick={(e) => handleLinkClick(e, 'gallery')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Official Gallery
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-sky-amenities-balewadi')} 
                  onClick={(e) => handleLinkClick(e, 'amenities')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Level 34 Sky Sanctum
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-baner-balewadi-real-estate-market')} 
                  onClick={(e) => handleLinkClick(e, 'market')}
                  className="hover:text-gold-300 transition-colors text-gold-400 font-semibold"
                >
                  Baner-Balewadi Market Intel
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-baner-balewadi-location')} 
                  onClick={(e) => handleLinkClick(e, 'location')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Balewadi High Street (2 min)
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-price-cost-sheet-pune')} 
                  onClick={(e) => handleLinkClick(e, 'pricing')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Investment & Cost Sheet
                </a>
              </li>
              <li>
                <a 
                  href={getCleanUrl('kundan-arvaana-maharera-faq-balewadi')} 
                  onClick={(e) => handleLinkClick(e, 'faq')}
                  className="hover:text-gold-300 transition-colors"
                >
                  MahaRERA PR1260002600277 FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact & RERA Credentials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">
              Official Project Desk
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Near Sai Chowk, Balewadi, Pune West, Maharashtra 411045</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/917744009295?text=Hi%20Propsmart%20Realty%2C%20I%20am%20interested%20in%20Kundan%20Arvaana%20Balewadi." 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-emerald-300 font-semibold transition-colors"
                >
                  +91 77440 09295 (WhatsApp / Direct)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a 
                  href="mailto:propsmartrealty@gmail.com" 
                  className="hover:text-gold-300 transition-colors"
                >
                  propsmartrealty@gmail.com
                </a>
              </div>
            </div>

            {/* MahaRERA Badge */}
            <div className="p-3 rounded-xl bg-obsidian-900 border border-gold-500/20 mt-4">
              <div className="flex items-center gap-2 text-gold-300 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>MahaRERA Registration</span>
              </div>
              <div className="font-mono text-xs text-white font-bold">
                {PROJECT_INFO.mahaRera}
              </div>
              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-gold-400 hover:underline flex items-center gap-1 mt-1"
              >
                <span>maharera.mahaonline.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-b border-white/5 text-[11px] text-champagne/50 leading-relaxed space-y-2">
          <p>
            <strong>Disclaimer:</strong> The contents, artistic impressions, 3D renderings, and specifications displayed herein are for informational and representation purposes only and do not constitute an offer, contract, or warranty. Kundan Arvaana is registered with MahaRERA under Registration No. <strong>{PROJECT_INFO.mahaRera}</strong>. Please visit the official MahaRERA website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-gold-400 underline">maharera.mahaonline.gov.in</a>) for complete registered project documents.
          </p>
        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Kundan Spaces. All Rights Reserved. Designed for Kundan Arvaana.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold uppercase tracking-wider text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
