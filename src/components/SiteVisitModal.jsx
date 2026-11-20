import React, { useState } from 'react';
import { X, Calendar, Clock, Car, Video, CheckCircle2, ShieldCheck, MessageSquare, PhoneCall, Loader2, Mail } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function SiteVisitModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('5:00 PM (Sunset Horizon)');
  const [experienceMode, setExperienceMode] = useState('chauffeur');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const targetWhatsApp = "917744009295";
  const targetEmail = "propsmartrealty@gmail.com";

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadPayload = {
      _subject: `New Lead: Kundan Arvaana VIP Site Visit - ${name || 'Prospective Resident'} (${phone})`,
      name: name,
      phone: phone,
      email: email || 'Not Provided',
      preferred_date: date || 'Immediate / Next Available',
      preferred_slot: timeSlot,
      visit_mode: experienceMode === 'chauffeur' ? 'Chauffeured Pickup' : experienceMode === 'virtual' ? '4K Virtual Call' : 'Direct Site Arrival',
      project: "Kundan Arvaana, Balewadi",
      developer: "Kundan Spaces",
      rera_registration: PROJECT_INFO.mahaRera,
      timestamp: new Date().toISOString()
    };

    try {
      // Direct programmatic lead transmission to propsmartrealty@gmail.com
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(leadPayload)
      });
    } catch (err) {
      console.warn("Lead email submission fallback:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const openWhatsAppConcierge = () => {
    const text = encodeURIComponent(
      `Hello, I have requested a VIP site visit for Kundan Arvaana, Balewadi (MahaRERA: ${PROJECT_INFO.mahaRera}).\n\nProject: Kundan Arvaana\nName: ${name || 'Prospective Resident'}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nPreferred Date: ${date || 'Earliest Slot'}\nSlot: ${timeSlot}\n\nPlease share the brochure, CAD layouts & confirm my VIP viewing.`
    );
    window.open(`https://wa.me/${targetWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-obsidian-950 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-obsidian-900/60">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
              KUNDAN ARVAANA • OFFICIAL SALES DESK
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Schedule Your Private VIP Viewing
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-champagne/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder-champagne/30 text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 77440 09295"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder-champagne/30 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder-champagne/30 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400"
                  >
                    <option value="10:30 AM (Morning Illumination)">10:30 AM (Morning Illumination)</option>
                    <option value="2:30 PM (Midday Cross-Breeze)">2:30 PM (Midday Cross-Breeze)</option>
                    <option value="5:00 PM (Sunset Horizon)">5:00 PM (Sunset Golden Hour)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                  Visit Format Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setExperienceMode('chauffeur')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      experienceMode === 'chauffeur'
                        ? 'bg-gold-500/20 border-gold-400 text-white'
                        : 'bg-obsidian-900 border-white/10 text-champagne/60 hover:border-gold-500/30'
                    }`}
                  >
                    <Car className="w-4 h-4 mx-auto mb-1 text-gold-400" />
                    <span className="text-[11px] block font-medium">Chauffeured</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setExperienceMode('direct')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      experienceMode === 'direct'
                        ? 'bg-gold-500/20 border-gold-400 text-white'
                        : 'bg-obsidian-900 border-white/10 text-champagne/60 hover:border-gold-500/30'
                    }`}
                  >
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-gold-400" />
                    <span className="text-[11px] block font-medium">Direct Arrival</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setExperienceMode('virtual')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      experienceMode === 'virtual'
                        ? 'bg-gold-500/20 border-gold-400 text-white'
                        : 'bg-obsidian-900 border-white/10 text-champagne/60 hover:border-gold-500/30'
                    }`}
                  >
                    <Video className="w-4 h-4 mx-auto mb-1 text-gold-400" />
                    <span className="text-[11px] block font-medium">4K Virtual</span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-obsidian-950" />
                      <span>Confirming Appointment Request...</span>
                    </>
                  ) : (
                    <span>Confirm VIP Appointment</span>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={openWhatsAppConcierge}
                  className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Assistance</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">
                VIP Reservation Received
              </h4>
              <p className="text-xs sm:text-sm text-champagne/80 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name || 'Distinguished Guest'}</strong>. Your appointment request for Kundan Arvaana has been confirmed. Our project advisory team will connect with you shortly.
              </p>
              
              <div className="p-4 rounded-xl bg-obsidian-900 border border-white/10 text-xs text-left max-w-sm mx-auto space-y-1.5 font-mono">
                <div><strong>Location:</strong> Kundan Arvaana, Balewadi</div>
                <div><strong>Slot:</strong> {timeSlot}</div>
                <div><strong>Format:</strong> {experienceMode === 'chauffeur' ? 'Chauffeured Pickup' : experienceMode === 'virtual' ? '4K Virtual Call' : 'Direct Arrival'}</div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={openWhatsAppConcierge}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 text-obsidian-950" />
                  <span>Confirm Instantly on WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl border border-white/10 text-champagne/70 hover:text-white text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
