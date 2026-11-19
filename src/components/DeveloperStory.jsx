import React from 'react';
import { DEVELOPER_STATS, PROJECT_INFO } from '../data/projectData';
import { ShieldCheck, ExternalLink, Building2, Users, Landmark, Clock, Award } from 'lucide-react';

export default function DeveloperStory() {
  return (
    <section className="py-24 bg-obsidian-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Legacy of 46+ Years • Kundan Spaces
          </div>

          {/* Official Kundan Logo Display */}
          <div className="inline-block bg-white px-5 py-2.5 rounded-xl border border-gold-400/40 shadow-xl mb-6">
            <img
              src={PROJECT_INFO.officialLogo}
              alt="Kundan Spaces Official Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Spaces Shaped for <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">What Comes Next</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            With 46+ years of steadfast commitment, Kundan Spaces has earned an untouchable reputation across Pune by delivering 6M+ sq. ft. of residential and commercial landmarks for over 6,000 discerning families.
          </p>
        </div>

        {/* 4 Grand Developer Metrics directly from kundans.com */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center">
            <Clock className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              46+
            </div>
            <div className="text-xs uppercase font-medium text-champagne/70">
              Years of Legacy
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Established Heritage</div>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center">
            <Building2 className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              6M+
            </div>
            <div className="text-xs uppercase font-medium text-champagne/70">
              Sq. Ft. Delivered
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Prime Landmarks</div>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center">
            <Users className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              6,000+
            </div>
            <div className="text-xs uppercase font-medium text-champagne/70">
              Happy Families
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">Thriving Communities</div>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center">
            <Landmark className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-1">
              100%
            </div>
            <div className="text-xs uppercase font-medium text-champagne/70">
              Delivery Track Record
            </div>
            <div className="text-[11px] text-gold-400/80 mt-1">RERA Certified Compliance</div>
          </div>
        </div>

        {/* MahaRERA Compliance Certificate Box */}
        <div className="rounded-3xl bg-obsidian-950/90 border border-gold-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                MahaRERA Registered & Verified
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Government of Maharashtra Official RERA Compliance
              </h3>

              <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed mb-6">
                Kundan Arvaana is fully registered under the Real Estate (Regulation and Development) Act. Complete project sanction approvals, environmental clearances, titles, and layout drawings are in the public record.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10">
                  <span className="text-champagne/50 block text-[10px] uppercase font-sans">MahaRERA Registration No:</span>
                  <span className="text-gold-300 text-sm font-bold">{PROJECT_INFO.mahaRera}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10">
                  <span className="text-champagne/50 block text-[10px] uppercase font-sans">Promoter / Entity:</span>
                  <span className="text-white text-sm font-bold">{PROJECT_INFO.developer}</span>
                </div>
              </div>
            </div>

            {/* QR & Verification Action Button */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-obsidian-900/60 border border-gold-500/20 text-center">
              <div className="w-28 h-28 bg-white p-2 rounded-xl mb-4 shadow-lg flex items-center justify-center">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharera.mahaonline.gov.in`}
                  alt="MahaRERA QR"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-xs font-semibold text-white mb-1">
                Scan to Verify on MahaRERA
              </div>
              <div className="text-[11px] text-champagne/60 mb-4">
                maharera.mahaonline.gov.in
              </div>

              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Verify Registration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
