import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/projectData';
import { Eye, Sparkles, X, ChevronLeft, ChevronRight, Download, Maximize2 } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);

  const categories = ['All', 'Exterior Facade', 'Living & Interiors', 'Sky Sanctum & Pool', 'Wellness & Club'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (idx) => setSelectedImageIdx(idx);
  const closeLightbox = () => setSelectedImageIdx(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const currentLightboxItem = selectedImageIdx !== null ? filteredItems[selectedImageIdx] : null;

  return (
    <section id="gallery" className="py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Curated Visual Portfolio • Architectural Gallery
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Architectural <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Grandeur & Finishes</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Immerse yourself in the visual splendor of Kundan Arvaana. From soaring glass curtain facades to double-height living pavilions and rooftop infinity pools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                activeFilter === cat
                  ? 'bg-gold-400 text-obsidian-950 border-gold-400 shadow-lg shadow-gold-500/25 scale-105'
                  : 'bg-obsidian-900/60 border-white/10 text-champagne/70 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/50 bg-obsidian-900 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-champagne/90 border border-white/10">
                  {item.category}
                </span>
                {item.isOfficial && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-gold-400 text-obsidian-950 shadow-md">
                    {item.badgeText || "AI Master Render"}
                  </span>
                )}
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-200 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-champagne/70 line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gold-400 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand high-res</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentLightboxItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-obsidian-950 border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Top Bar */}
            <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-obsidian-900/70">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {currentLightboxItem.category}
                </span>
                {currentLightboxItem.isOfficial && (
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded bg-gold-400 text-black">
                    {currentLightboxItem.badgeText || "AI Master Render"}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentLightboxItem.image}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="p-2 rounded-lg text-champagne/70 hover:text-white hover:bg-white/10 transition-colors"
                  title="Open original file"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-lg text-champagne/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Lightbox Image Viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[500px]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next navigation arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black text-white transition-all backdrop-blur-md border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black text-white transition-all backdrop-blur-md border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-4 px-6 border-t border-white/10 bg-obsidian-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {currentLightboxItem.title}
                </h4>
                <p className="text-xs text-champagne/70 max-w-2xl">
                  {currentLightboxItem.desc}
                </p>
              </div>
              <div className="text-xs font-mono text-gold-400 shrink-0">
                Image {selectedImageIdx + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
