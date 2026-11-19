import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Calendar, Menu, X, ShieldCheck } from 'lucide-react';
import { toggleAmbientSound } from '../utils/audioSynth';
import { PROJECT_INFO } from '../data/projectData';

export default function Navbar({ onOpenVisitModal, onOpenDossierModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleAmbientSound((state) => setSoundActive(state));
    setSoundActive(newState);
  };

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "The Tower", href: "#tower" },
    { name: "Residences", href: "#residences" },
    { name: "Master Plan", href: "#master-plan" },
    { name: "Gallery", href: "#gallery" },
    { name: "Kundan Landmarks", href: "#kundan-heritage" },
    { name: "360° Tour", href: "#virtual-tour" },
    { name: "Amenities", href: "#amenities" },
    { name: "Connectivity", href: "#location" },
    { name: "Cost & EMI", href: "#calculator" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-obsidian-950/95 backdrop-blur-xl border-b border-gold-500/20 py-2.5 shadow-2xl shadow-black/80' 
        : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Kundan Logo & Arvaana Crest */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="h-8 sm:h-9 bg-white/95 px-2.5 py-1 rounded-lg flex items-center justify-center border border-gold-400/40 shadow-md group-hover:bg-white transition-all">
              <img
                src={PROJECT_INFO.officialLogo}
                alt="Kundan Spaces Official Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-[0.25em] text-white font-bold group-hover:text-gold-200 transition-colors">
                ARVAANA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold-400 font-semibold uppercase -mt-0.5">
                BALEWADI • PUNE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-semibold tracking-wider text-champagne/80 hover:text-gold-300 transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Ambient Soundscape Button */}
            <button
              onClick={handleSoundToggle}
              title={soundActive ? "Mute Zen Soundscape" : "Enable Zen Soundscape"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                soundActive 
                  ? 'border-gold-400/80 bg-gold-500/20 text-gold-200 shadow-md shadow-gold-500/20 animate-pulse'
                  : 'border-white/10 bg-white/5 text-champagne/70 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              {soundActive ? <Volume2 className="w-3.5 h-3.5 text-gold-300" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-sans tracking-wide">
                {soundActive ? "Zen Audio On" : "Zen Audio"}
              </span>
            </button>

            {/* Dossier Generator Button */}
            <button
              onClick={onOpenDossierModal}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border border-gold-500/50 text-gold-300 hover:bg-gold-500/10 transition-colors"
            >
              VIP Dossier
            </button>

            {/* Book Visit Primary CTA */}
            <button
              onClick={onOpenVisitModal}
              className="relative group overflow-hidden px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-obsidian-950 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Schedule VIP Visit
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-full border border-gold-500/30 text-gold-400"
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-champagne hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-obsidian-950/98 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-champagne/90 hover:text-gold-300 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossierModal();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-gold-500/40 text-gold-300 bg-gold-500/5 text-center"
            >
              Generate VIP Dossier
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gold-400 text-obsidian-950 text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule Private Viewing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
