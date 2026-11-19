import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import TowerNavigator from './components/TowerNavigator';
import ResidenceConfigurator from './components/ResidenceConfigurator';
import MasterPlanSection from './components/MasterPlanSection';
import GallerySection from './components/GallerySection';
import KundanPortfolioSection from './components/KundanPortfolioSection';
import VirtualTour360 from './components/VirtualTour360';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import LocationRadar from './components/LocationRadar';
import InvestmentCalculator from './components/InvestmentCalculator';
import FaqSection from './components/FaqSection';
import DeveloperStory from './components/DeveloperStory';
import Footer from './components/Footer';
import VipDossierModal from './components/VipDossierModal';
import SiteVisitModal from './components/SiteVisitModal';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);

  const handleOpenVisit = () => setIsVisitModalOpen(true);
  const handleCloseVisit = () => setIsVisitModalOpen(false);

  const handleOpenDossier = () => setIsDossierModalOpen(true);
  const handleCloseDossier = () => setIsDossierModalOpen(false);

  const handleExploreTower = () => {
    const el = document.getElementById('tower');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreResidences = () => {
    const el = document.getElementById('residences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-champagne selection:bg-gold-500 selection:text-black">
      {/* Clean Navigation with official Kundan Spaces Logo */}
      <Navbar
        onOpenVisitModal={handleOpenVisit}
      />

      {/* Hero Section with Official Key Render */}
      <Hero
        onOpenVisitModal={handleOpenVisit}
        onExploreTower={handleExploreTower}
        onExploreResidences={handleExploreResidences}
      />

      {/* The Ikigai Philosophy Section */}
      <Philosophy />

      {/* 33-Floor Interactive Tower Elevation Stack */}
      <TowerNavigator
        onOpenVisitModal={handleOpenVisit}
      />

      {/* Residence Blueprints & Room Inspector */}
      <ResidenceConfigurator
        onOpenVisitModal={handleOpenVisit}
        onOpenDossierModal={handleOpenDossier}
      />

      {/* Master Site Layout & Detailed CAD Floor Plans Section */}
      <MasterPlanSection
        onOpenVisitModal={handleOpenVisit}
        onOpenDossierModal={handleOpenDossier}
      />

      {/* Official Architectural Gallery with Fullscreen Lightbox */}
      <GallerySection />

      {/* Kundan Spaces Delivered Pune Landmarks, Quality Craftsmanship & Leadership */}
      <KundanPortfolioSection />

      {/* 360° Interactive Draggable Virtual Room Walkthrough */}
      <VirtualTour360 />

      {/* 30+ Resort-Style Ikigai Amenities */}
      <AmenitiesShowcase
        onOpenVisitModal={handleOpenVisit}
      />

      {/* Balewadi Location Advantage & Live Google Maps Embed */}
      <LocationRadar />

      {/* Dynamic Statutory Cost Sheet & EMI Calculator */}
      <InvestmentCalculator
        onOpenVisitModal={handleOpenVisit}
        onOpenDossierModal={handleOpenDossier}
      />

      {/* Frequently Asked Questions • MahaRERA & Location Architecture */}
      <FaqSection
        onOpenVisitModal={handleOpenVisit}
      />

      {/* 46-Year Kundan Spaces Pedigree & MahaRERA Compliance */}
      <DeveloperStory />

      {/* Footer */}
      <Footer
        onOpenVisitModal={handleOpenVisit}
        onOpenDossierModal={handleOpenDossier}
      />

      {/* Modals */}
      <VipDossierModal
        isOpen={isDossierModalOpen}
        onClose={handleCloseDossier}
      />

      <SiteVisitModal
        isOpen={isVisitModalOpen}
        onClose={handleCloseVisit}
      />
    </div>
  );
}
