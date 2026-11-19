import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Sparkles, Building2, MapPin, PhoneCall } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export const FAQS = [
  {
    q: "What is Kundan Arvaana and what makes it unique in Pune?",
    a: "Kundan Arvaana is India's first Ikigai-inspired ultra-luxury residential landmark, developed by Kundan Spaces in Balewadi, Pune West. Rising 33 habitable levels, the development is limited to only 66 exclusive 4 and 4.5 BHK residences and sky duplex penthouses, featuring 2 homes per floor, 22+ ft double-height living pavilions, and private smart elevator foyers."
  },
  {
    q: "Where is Kundan Arvaana located?",
    a: "Kundan Arvaana is situated in Balewadi, Pune West (Pin: 411045), right off the 24-meter arterial road near Sai Chowk, just 3 minutes from Balewadi High Street, 7 minutes from Jupiter Hospital Baner, and 12 minutes from the Hinjawadi IT Hub (Phase 1) and Mumbai-Bengaluru Highway."
  },
  {
    q: "What is the official MahaRERA registration number for Kundan Arvaana?",
    a: "Kundan Arvaana is officially registered under Maharashtra Real Estate Regulatory Authority (MahaRERA) with Registration Number: PR1260002600277. Complete project layout approvals, titles, and statutory filings are verifiable on the official MahaRERA portal (maharera.mahaonline.gov.in)."
  },
  {
    q: "What apartment configurations and carpet areas are offered?",
    a: "The project offers three curated typical 4.5 BHK layouts and limited-edition sky duplexes: Type 01 (Elite & Grande: 2,235 & 2,246 sq.ft total carpet area), Type 02 (Imperial & Presidential: 2,258 & 2,269 sq.ft total carpet area), Type 03 (Signature & Prive: 2,235 & 2,246 sq.ft total carpet area), and the Crown Sky Duplex Penthouses spanning 4,385 sq.ft across two levels with internal floating staircases."
  },
  {
    q: "How many residences are there per floor and what privacy features are provided?",
    a: "Kundan Arvaana offers exceptional exclusivity with only 2 residences per floor and no shared walls between living rooms. Each residence enjoys a private elevator foyer access, acoustic DGU Low-E glass facade, 270° triple-aspect views, and a dedicated domestic staff suite with independent service elevator core."
  },
  {
    q: "What are the signature amenities on the 34th-floor Sky Level?",
    a: "The 34th floor is an architectural amenity retreat featuring a 25-meter temperature-controlled sky infinity lap pool, a dedicated kids splash pool, timber pool deck with cabanas, a private 24-seater Dolby Atmos mini cinema, high-speed executive co-working pods, an indoor games lounge, and a circular Japanese zen green lounge."
  },
  {
    q: "What are the vehicle parking arrangements?",
    a: "Every residence at Kundan Arvaana comes with 3 covered reserved car parking spaces in 3 secured, ventilated basements (B1–B3) with dual-ramp entry, automated RFID boom barriers, and dedicated EV fast-charging provisions."
  },
  {
    q: "Who is the developer behind Kundan Arvaana?",
    a: "Kundan Arvaana is developed by Kundan Spaces in joint venture with Knight West Realty LLP. Kundan Spaces brings a 46+ year pedigree (founded 1980), having delivered over 6 million sq.ft of landmark residential and commercial developments across Pune (including Emirus Baner, Presidia Kondhwa, Eternia, and Kundan Praangan) serving 6,000+ happy families."
  }
];

export default function FaqSection({ onOpenVisitModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
            <span>Frequently Asked Questions • MahaRERA PR1260002600277</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Everything You Need To Know About <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Kundan Arvaana</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Essential facts, architectural specifications, location benefits, and MahaRERA statutory details for prospective homeowners and investors.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-obsidian-900 border-gold-500/40 shadow-xl shadow-gold-500/5'
                    : 'bg-obsidian-900/40 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-gold-500 text-obsidian-950 border-gold-400' : 'text-gold-400 bg-obsidian-950'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-champagne/80 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-gold-950/40 via-obsidian-900 to-obsidian-950 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-gold-400 mb-1">
              Have Further Questions?
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white">
              Connect With The Official Developer Sales Desk
            </div>
            <p className="text-xs sm:text-sm text-champagne/70 mt-1 max-w-xl">
              Get official cost breakdowns, payment plans, site visit arrangements, and customized RERA-registered documentation.
            </p>
          </div>

          <button
            onClick={onOpenVisitModal}
            className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-gold-500/20 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Connect with Concierge</span>
          </button>
        </div>

      </div>
    </section>
  );
}
