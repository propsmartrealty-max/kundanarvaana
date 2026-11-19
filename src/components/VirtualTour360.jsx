import React, { useState, useRef, useEffect } from 'react';
import { VIRTUAL_ROOMS } from '../data/projectData';
import { Eye, RotateCw, Play, Pause, Compass, Sparkles, Info, Maximize } from 'lucide-react';

export default function VirtualTour360() {
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const currentRoom = VIRTUAL_ROOMS[selectedRoomIdx];
  const containerRef = useRef(null);

  // Auto-rotation loop
  useEffect(() => {
    let animId;
    if (isRotating && !isDragging) {
      animId = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.15) % 360);
      }, 30);
    }
    return () => clearInterval(animId);
  }, [isRotating, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = clientX - dragStartX;
    setRotationAngle((prev) => (prev - delta * 0.25 + 360) % 360);
    setDragStartX(clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // High-resolution photography backdrops for each virtual suite
  const roomBackgrounds = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85", // Living
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85", // Pool
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85", // Master
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"  // Cinema
  ];

  return (
    <section id="virtual-tour" className="py-24 bg-obsidian-900/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">
            Interactive 360° Spatial Walkthrough
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Immersive <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Virtual Walkthrough</span>
          </h2>
          <p className="text-champagne/75 text-sm sm:text-base leading-relaxed">
            Experience the spatial magnificence of Arvaana in full 360° view. Click and drag anywhere across the canvas below to pan across living pavilions, sky pools, and master suites.
          </p>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {VIRTUAL_ROOMS.map((room, idx) => {
            const isSelected = selectedRoomIdx === idx;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setSelectedRoomIdx(idx);
                  setActiveHotspot(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
                  isSelected
                    ? 'bg-gold-400 text-obsidian-950 border-gold-400 shadow-lg shadow-gold-500/25 scale-105'
                    : 'bg-obsidian-900/60 border-white/10 text-champagne/70 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                {room.name}
              </button>
            );
          })}
        </div>

        {/* 360 Interactive Viewport Container */}
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-black aspect-[16/9] min-h-[440px] sm:min-h-[580px] cursor-grab active:cursor-grabbing select-none"
        >
          {/* Panoramic Backdrop Layer with Dynamic Offset Translation */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-[background-position] duration-75"
            style={{
              backgroundImage: `url('${roomBackgrounds[selectedRoomIdx]}')`,
              backgroundPosition: `${rotationAngle * 3}px center`,
              transform: 'scale(1.08)',
            }}
          />

          {/* Vignette & Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/40 via-transparent to-obsidian-950/40 pointer-events-none" />

          {/* Floating UI HUD Controls */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-20">
            {/* Room Info Tag */}
            <div className="pointer-events-auto bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-white max-w-sm">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentRoom.area}</span>
              </div>
              <div className="font-serif text-base font-bold text-white mt-0.5">
                {currentRoom.name}
              </div>
            </div>

            {/* Orbit / Play / Pause / Reset Control */}
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="bg-black/70 backdrop-blur-md p-2.5 rounded-full border border-white/15 text-white hover:text-gold-300 transition-colors shadow-lg"
                title={isRotating ? "Pause Auto Orbit" : "Play Auto Orbit"}
              >
                {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setRotationAngle(0)}
                className="bg-black/70 backdrop-blur-md p-2.5 rounded-full border border-white/15 text-white hover:text-gold-300 transition-colors shadow-lg"
                title="Reset View Orientation"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Dynamic Hotspots inside 360 space */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {currentRoom.hotspots.map((spot, idx) => {
              // Calculate horizontal position shifted by rotation angle
              const shiftedX = (spot.x + (rotationAngle * 0.25)) % 100;
              const isSpotActive = activeHotspot === idx;

              return (
                <div
                  key={spot.title}
                  style={{
                    left: `${shiftedX}%`,
                    top: `${spot.y}%`,
                  }}
                  className="absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
                >
                  {/* Pulsing Beacon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(isSpotActive ? null : idx);
                    }}
                    className={`relative group flex items-center justify-center p-2 rounded-full backdrop-blur-md border transition-all ${
                      isSpotActive
                        ? 'bg-gold-400 text-black border-white shadow-xl scale-125'
                        : 'bg-black/70 text-gold-300 border-gold-400/80 hover:scale-110'
                    }`}
                  >
                    <span className="absolute inset-0 rounded-full bg-gold-400/40 animate-ping pointer-events-none" />
                    <Info className="w-4 h-4 relative z-10" />
                  </button>

                  {/* Hotspot Floating Tooltip Popup */}
                  {isSpotActive && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-obsidian-950/95 backdrop-blur-xl border border-gold-400/60 p-3.5 rounded-xl text-left shadow-2xl z-30 animate-fadeIn">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gold-400 mb-1">
                        Architectural Specification
                      </div>
                      <div className="font-serif text-sm font-bold text-white mb-1">
                        {spot.title}
                      </div>
                      <p className="text-xs text-champagne/80 leading-relaxed">
                        {spot.desc}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(null);
                        }}
                        className="text-[10px] text-champagne/50 hover:text-white mt-2 block underline"
                      >
                        Dismiss
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom HUD: Drag Hint & Compass Orientation */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none z-20">
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-champagne/70 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>Drag horizontally to rotate 360° | Heading: {Math.round(rotationAngle)}°</span>
            </div>

            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-gold-300 font-medium">
              Click glowing pins to inspect materials
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
