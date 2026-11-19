import React, { useState } from 'react';
import { 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  ChevronDown, 
  DollarSign, 
  Award,
  Layers,
  BarChart3
} from 'lucide-react';

export default function BanerBalewadiMarketSection({ onOpenVisitModal }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const marketMetrics = [
    {
      title: "5-Year Capital Appreciation",
      value: "14.2% CAGR",
      subtext: "Historical growth for prime Baner-Balewadi 4 BHK+ segment",
      badge: "Top 3 in Pune"
    },
    {
      title: "Gross Rental Yield",
      value: "4.8% – 5.4%",
      subtext: "Driven by senior leadership & CXOs from Hinjawadi IT Hub",
      badge: "High Demand"
    },
    {
      title: "Supply Scarcity",
      value: "< 4%",
      subtext: "Of Pune West launches are low-density (under 100 units)",
      badge: "Ultra-Rare"
    },
    {
      title: "Metro Catalyst",
      value: "Line 3 (400m)",
      subtext: "Balewadi High Street Metro connecting directly to Hinjawadi & Shivajinagar",
      badge: "Operational 2026"
    }
  ];

  const microMarketComparison = [
    {
      microMarket: "Balewadi (Kundan Arvaana)",
      avgPriceSqFt: "₹14,500 – ₹17,500",
      rentalDemand: "Exceptionally High (CXOs)",
      densityScore: "Ultra-Low (66 Total Units)",
      expresswayAccess: "2 Mins (Direct Bypass)",
      metroProximity: "Walking Distance (400m)",
      highlight: true
    },
    {
      microMarket: "Baner (Pancard Club Road)",
      avgPriceSqFt: "₹13,800 – ₹16,200",
      rentalDemand: "High (IT & Corporates)",
      densityScore: "Medium-High (250+ Units)",
      expresswayAccess: "8–12 Mins (Congested)",
      metroProximity: "1.5 – 2.5 km",
      highlight: false
    },
    {
      microMarket: "Aundh / Model Colony",
      avgPriceSqFt: "₹15,000 – ₹19,000",
      rentalDemand: "Moderate (End Users)",
      densityScore: "Re-development (Dense)",
      expresswayAccess: "20–25 Mins",
      metroProximity: "3 – 5 km",
      highlight: false
    },
    {
      microMarket: "Hinjawadi Phase 1",
      avgPriceSqFt: "₹7,800 – ₹9,500",
      rentalDemand: "High (Mid-Level Engineers)",
      densityScore: "Mega-Townships (1,000+ Units)",
      expresswayAccess: "15 Mins",
      metroProximity: "Immediate",
      highlight: false
    },
    {
      microMarket: "Koregaon Park (East Pune)",
      avgPriceSqFt: "₹19,000 – ₹26,000",
      rentalDemand: "High (HNIs & Expats)",
      densityScore: "Varies (Scarce Land)",
      expresswayAccess: "45–60 Mins to Expressway",
      metroProximity: "4 – 6 km",
      highlight: false
    }
  ];

  const marketFaqs = [
    {
      question: "Why is Balewadi ranked as Pune's #1 luxury real estate investment corridor?",
      answer: "Balewadi has evolved into Pune's premier Golden Triangle, flanked by Balewadi High Street's retail spine, the Mumbai-Pune Expressway (NH-48), and the Hinjawadi IT Corridor (employing 400,000+ professionals). Unlike older saturated areas like Aundh or congested zones in Baner, Balewadi offers wide 24-meter planned arterial roads, premium social infrastructure, and strict zoning, driving an average 14.2% capital appreciation CAGR."
    },
    {
      question: "How does Kundan Arvaana's low density of 66 units hedge investor capital against market volatility?",
      answer: "Standard developments in Baner and Balewadi build 300 to 600 units across multi-tower complexes, causing high tenant competition and high wear-and-tear on common amenities. Kundan Arvaana provides absolute scarcity: only 66 bespoke residences across 33 levels with 2 units per floor. This low-density boutique model commands a 25-30% premium on resale and corporate executive leasing."
    },
    {
      question: "What is the rental yield and tenant profile for 4 & 4.5 BHK residences in Balewadi?",
      answer: "Luxury 4.5 BHK residences in Balewadi achieve monthly corporate rentals of ₹1.4 Lakh to ₹2.1 Lakh, delivering gross yields between 4.8% and 5.4%. Primary tenant profiles include Senior VPs, CTOs, expatriate directors, and tech founders from Hinjawadi IT Park Phase 1-3 and Panchshil Business Park."
    },
    {
      question: "What impact will Pune Metro Line 3 have on property values around Balewadi High Street?",
      answer: "Pune Metro Line 3 (Hinjawadi to Shivajinagar) features dedicated stations at Balewadi Stadium and Balewadi High Street. Historically across Indian metropolitan markets (Mumbai, Bengaluru, Delhi NCR), properties within 500 meters of an operational transit corridor experience an immediate 18% to 24% appreciation boost upon full commissioning."
    },
    {
      question: "How does MahaRERA registration PR1260002600277 protect homebuyers at Kundan Arvaana?",
      answer: "Under MahaRERA PR1260002600277, 70% of all purchaser funds are secured in a dedicated escrow account utilized strictly for project construction and land title payments. Buyers are protected with verified carpet area disclosure, state-supervised quality audits, and guaranteed timeline compliance by Kundan Spaces."
    }
  ];

  return (
    <section id="market-intel" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-gold-500/20">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Market Intelligence & Investment Analysis</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            The Baner-Balewadi Real Estate <span className="text-gradient-gold">Powerhouse</span>
          </h2>
          
          <p className="text-champagne/70 text-sm sm:text-base leading-relaxed">
            An institutional-grade deep dive into Pune West’s premier wealth corridor. Discover why Balewadi outpaces traditional micro-markets in capital growth, low-density exclusivity, and executive rental yield.
          </p>
        </div>

        {/* 4 Key Market Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-obsidian-900/80 border border-gold-500/20 hover:border-gold-400/50 transition-all hover:-translate-y-1 group shadow-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400/90 bg-gold-500/10 px-2 py-0.5 rounded-full border border-gold-500/20">
                  {metric.badge}
                </span>
                <TrendingUp className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-gold-200 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-champagne/90 mb-1">
                {metric.title}
              </div>
              <div className="text-[11px] text-champagne/60 leading-relaxed">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Micro-Market Comparative Table */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                Pune Micro-Market Comparative Matrix
              </h3>
              <p className="text-xs text-champagne/70 mt-1">
                Comparative benchmark of prime residential nodes in Pune West & East (2026 Index).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gold-400 inline-block"></span>
              <span className="text-xs text-gold-300 font-semibold">Kundan Arvaana Position</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gold-500/20 bg-obsidian-900/60 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gold-500/20 bg-obsidian-950/80 text-gold-300 uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5 font-bold">Micro-Market</th>
                  <th className="py-4 px-5 font-bold">Capital Value (₹/sq.ft)</th>
                  <th className="py-4 px-5 font-bold">Rental Profile</th>
                  <th className="py-4 px-5 font-bold">Project Density</th>
                  <th className="py-4 px-5 font-bold">Highway Bypass</th>
                  <th className="py-4 px-5 font-bold">Metro Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-champagne/80">
                {microMarketComparison.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`transition-colors ${
                      row.highlight 
                        ? 'bg-gold-500/10 font-medium text-white hover:bg-gold-500/15' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <td className="py-3.5 px-5 flex items-center gap-2 font-semibold">
                      {row.highlight && <Award className="w-4 h-4 text-gold-400 shrink-0" />}
                      <span>{row.microMarket}</span>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-gold-200">{row.avgPriceSqFt}</td>
                    <td className="py-3.5 px-5">{row.rentalDemand}</td>
                    <td className="py-3.5 px-5">{row.densityScore}</td>
                    <td className="py-3.5 px-5">{row.expresswayAccess}</td>
                    <td className="py-3.5 px-5">{row.metroProximity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Strategic Pillars of Growth in Balewadi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-7 rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-white font-bold">
              1. The Silicon Corridor Hub
            </h4>
            <p className="text-xs text-champagne/70 leading-relaxed">
              Balewadi is situated directly on the growth axis of Hinjawadi Rajiv Gandhi Infotech Park. With over 400,000 engineers and leaders across Tech Mahindra, Infosys, Barclays, and Cognizant, executive housing demand is concentrated within Balewadi’s signal-free arterial grid.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-white font-bold">
              2. Balewadi High Street Lifestyle
            </h4>
            <p className="text-xs text-champagne/70 leading-relaxed">
              Serving as West Pune's high-street lifestyle district, Balewadi combines gourmet dining, international micro-breweries, and luxury retail just 2 minutes from Kundan Arvaana. Top educational academies (The Orchid, Vibgyor) and multispecialty healthcare (Jupiter) are within a 5-minute radius.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-white font-bold">
              3. MahaRERA PR1260002600277
            </h4>
            <p className="text-xs text-champagne/70 leading-relaxed">
              Full statutory backing with certified carpet disclosures, clear freehold titles, and 70% escrow fund segregation. Kundan Spaces brings 38+ years of Pune real estate delivery heritage with zero litigations across iconic residential landmarks.
            </p>
          </div>
        </div>

        {/* Real Estate Market FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-white font-bold">
              Frequently Asked Questions: Baner & Balewadi Real Estate
            </h3>
            <p className="text-xs text-champagne/70 mt-1">
              Key intelligence for investors, HNIs, and prospective homeowners.
            </p>
          </div>

          {marketFaqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-white/10 bg-obsidian-900/60 overflow-hidden transition-all hover:border-gold-500/30"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm text-champagne hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gold-400 font-mono text-xs">0{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gold-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-champagne/70 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 shadow-2xl max-w-4xl mx-auto">
            <div className="text-left space-y-1">
              <h4 className="font-serif text-xl text-white font-bold">
                Acquire One of Only 66 Private Residences
              </h4>
              <p className="text-xs text-champagne/70">
                Schedule a confidential consultation & explore detailed floor plans and investment schedules.
              </p>
            </div>
            <button
              onClick={onOpenVisitModal}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/25 hover:scale-105 transition-all shrink-0"
            >
              Schedule Private Viewing
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
