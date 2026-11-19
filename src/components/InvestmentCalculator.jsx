import React, { useState } from 'react';
import { CONFIGURATIONS } from '../data/projectData';
import { Calculator, IndianRupee, ShieldCheck, Download, Calendar } from 'lucide-react';

export default function InvestmentCalculator({ onOpenVisitModal, onOpenDossierModal }) {
  const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [loanTenureYears, setLoanTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const config = CONFIGURATIONS[selectedConfigIdx];
  const basePrice = config.basePrice;

  // Maharashtra Real Estate Taxes
  const stampDuty = Math.round(basePrice * 0.07); // 7% Stamp Duty in Pune
  const registration = 30000; // Flat registration fee
  const gst = Math.round(basePrice * 0.05); // 5% GST
  const infraAndMaintenance = Math.round(basePrice * 0.025); // ~2.5% infrastructure, corpus & legal

  const totalAllInclusiveCost = basePrice + stampDuty + registration + gst + infraAndMaintenance;

  // Loan computation
  const downPaymentAmount = Math.round((totalAllInclusiveCost * downPaymentPct) / 100);
  const principalLoanAmount = totalAllInclusiveCost - downPaymentAmount;

  // Monthly EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = loanTenureYears * 12;
  const emiNumerator = principalLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
  const emiDenominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
  const monthlyEMI = Math.round(emiNumerator / emiDenominator);

  const totalLoanRepayment = monthlyEMI * totalMonths;
  const totalInterestPayable = totalLoanRepayment - principalLoanAmount;

  const formatCrores = (num) => {
    return (num / 10000000).toFixed(2);
  };

  const formatINR = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="calculator" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Transparent Pricing • Smart Cost Sheet
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Investment & <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Bespoke Cost Sheet</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Configure your preferred residence, review the complete Maharashtra statutory cost breakdown, and calculate tailored EMI payment schedules.
          </p>
        </div>

        {/* Configuration Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {CONFIGURATIONS.map((cfg, idx) => {
            const isSelected = selectedConfigIdx === idx;
            return (
              <button
                key={cfg.id}
                onClick={() => setSelectedConfigIdx(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-obsidian-850 border-gold-400 text-white shadow-lg shadow-gold-500/10'
                    : 'bg-obsidian-900/40 border-white/10 text-champagne/70 hover:border-gold-500/30'
                }`}
              >
                <div className="text-xs font-mono text-gold-400 mb-0.5">{cfg.priceDisplay}</div>
                <div className="font-serif font-bold text-base text-white">{cfg.name}</div>
                <div className="text-[11px] text-champagne/60 mt-0.5">{cfg.carpetArea} sq.ft RERA Carpet</div>
              </button>
            );
          })}
        </div>

        {/* Two-Column Interactive Financial Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Complete Itemized Cost Sheet */}
          <div className="lg:col-span-6 bg-obsidian-900/80 rounded-3xl border border-gold-500/20 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="text-xs uppercase font-semibold tracking-wider text-gold-400 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Statutory Cost Estimation
                </span>
                <span className="text-[11px] text-champagne/60 font-mono">
                  MahaRERA: PR1260002600277
                </span>
              </div>

              {/* Table of cost items */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-champagne/80">Base Agreement Value ({config.name})</span>
                  <span className="font-mono font-bold text-white">{formatINR(basePrice)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-champagne/80">Maharashtra Stamp Duty (7%)</span>
                  <span className="font-mono text-gold-300">{formatINR(stampDuty)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-champagne/80">Government Registration Charges</span>
                  <span className="font-mono text-white">{formatINR(registration)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-champagne/80">GST on Under-Construction Luxury (5%)</span>
                  <span className="font-mono text-gold-300">{formatINR(gst)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-champagne/80">Infra, Corpus & Legal Documentation</span>
                  <span className="font-mono text-white">{formatINR(infraAndMaintenance)}</span>
                </div>

                {/* Total Cost Highlight */}
                <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/30 flex justify-between items-center mt-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-gold-400 block tracking-wider">
                      Total Estimated Package Cost
                    </span>
                    <span className="text-[10px] text-champagne/60">
                      All-Inclusive Package with 3 Car Parks
                    </span>
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-gold-300">
                    ₹{formatCrores(totalAllInclusiveCost)} Cr*
                  </span>
                </div>
              </div>

              <div className="mt-4 text-[10px] text-champagne/50 leading-relaxed">
                *Taxes and government duties are computed as per prevailing Maharashtra state norms. Floor rise and view-specific premiums apply to higher levels.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-3">
              <button
                onClick={onOpenDossierModal}
                className="flex-1 py-2.5 rounded-xl border border-gold-400/50 text-gold-300 hover:bg-gold-500/10 text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Official Cost Sheet</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Loan & EMI Simulator */}
          <div className="lg:col-span-6 bg-obsidian-900/80 rounded-3xl border border-gold-500/20 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs uppercase font-semibold tracking-wider text-gold-400">
                  Custom EMI & Mortgage Simulator
                </span>
                <span className="text-xs text-champagne/60 font-mono">
                  Approved by Top Banks (HDFC, SBI, ICICI)
                </span>
              </div>

              {/* Sliders Container */}
              <div className="space-y-6">
                
                {/* Down Payment Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-champagne/80 font-medium">Down Payment ({downPaymentPct}%)</span>
                    <span className="font-mono text-gold-300 font-bold">{formatINR(downPaymentAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className="w-full accent-gold-400 bg-obsidian-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-champagne/40 mt-1">
                    <span>10% (Min)</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Loan Tenure Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-champagne/80 font-medium">Loan Duration</span>
                    <span className="font-mono text-gold-300 font-bold">{loanTenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-gold-400 bg-obsidian-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-champagne/40 mt-1">
                    <span>5 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-champagne/80 font-medium">Bank Interest Rate</span>
                    <span className="font-mono text-gold-300 font-bold">{interestRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="11.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-gold-400 bg-obsidian-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-champagne/40 mt-1">
                    <span>7.5%</span>
                    <span>11.0%</span>
                  </div>
                </div>

              </div>

              {/* Monthly EMI Result Box */}
              <div className="mt-8 p-5 rounded-2xl bg-obsidian-950/90 border border-gold-400/40 text-center">
                <div className="text-[11px] uppercase font-bold tracking-widest text-gold-400 mb-1">
                  Estimated Monthly Outflow
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                  {formatINR(monthlyEMI)} <span className="text-sm font-sans font-normal text-champagne/60">/ month</span>
                </div>

                {/* Loan Breakdown Bar */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-white/10 text-left">
                  <div>
                    <span className="text-[10px] text-champagne/50 block">Principal Borrowed</span>
                    <strong className="text-white font-mono">{formatINR(principalLoanAmount)}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-champagne/50 block">Total Interest Over {loanTenureYears} Yrs</span>
                    <strong className="text-gold-300 font-mono">{formatINR(totalInterestPayable)}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={onOpenVisitModal}
                className="w-full py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Tailored Payment Plans with Concierge</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
