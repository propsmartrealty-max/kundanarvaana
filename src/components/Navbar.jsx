import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function Navbar({ onOpenVisitModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#philosophy" },
    { name: "Tower", href: "#tower" },
    { name: "Residences", href: "#residences" },
    { name: "Master Plan", href: "#master-plan" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Pricing", href: "#calculator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-obsidian-950/95 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80' 
        : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Kundan Logo & Arvaana Crest */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="h-8 sm:h-9 bg-white/95 px-2.5 py-1 rounded-lg flex items-center justify-center border border-gold-400/40 shadow-md group-hover:bg-white transition-all">
              <img
                src={PROJECT_INFO.officialLogo}
                alt="Kundan Spaces Official Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-[0.22em] text-white font-bold group-hover:text-gold-200 transition-colors">
                ARVAANA
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gold-400 font-semibold uppercase -mt-0.5">
                BALEWADI • PUNE
              </span>
            </div>
          </a>

          {/* Clean One-Line Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-medium tracking-wider text-champagne/85 hover:text-gold-300 transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenVisitModal}
              className="relative group overflow-hidden px-4.5 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-obsidian-950 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-obsidian-950" />
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-champagne hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/98 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-champagne/90 hover:text-gold-300 py-1.5 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-obsidian-950 text-center flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
            >
              <Calendar className="w-4 h-4" />
              Schedule Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
