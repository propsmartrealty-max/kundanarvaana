import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Building2, Calendar, FileText } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "917744009295";

  const sendQuickMessage = (message) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const quickPrompts = [
    {
      title: "Request Floor Plans & Price Sheet",
      desc: "4.5 BHK & Sky Duplex CAD Plans",
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      msg: "Hello, I am interested in Kundan Arvaana, Balewadi. Please share the detailed floor plans, CAD layout, and all-inclusive pricing."
    },
    {
      title: "Book VIP Private Viewing",
      desc: "Chauffeured pickup or site tour",
      icon: <Calendar className="w-4 h-4 text-emerald-400" />,
      msg: "Hello, I would like to schedule a private VIP viewing for Kundan Arvaana, Balewadi. Please let me know available slots."
    },
    {
      title: "Speak with Project Advisor",
      desc: "Instant priority callback",
      icon: <Building2 className="w-4 h-4 text-emerald-400" />,
      msg: "Hello, I am interested in Kundan Arvaana, Balewadi. Please connect me with a project advisor regarding Level 34 amenities, MahaRERA PR1260002600277, and payment milestones."
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* WhatsApp Chat Popover Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-obsidian-950 border border-emerald-500/30 shadow-2xl shadow-black/90 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-950 via-emerald-900 to-obsidian-950 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-obsidian-950 animate-pulse"></span>
              </div>
              <div>
                <div className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Kundan Arvaana Desk</span>
                </div>
                <div className="text-[11px] text-emerald-300 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Official Project Desk • Online Now</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-champagne/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-obsidian-950/95">
            <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-champagne/90 leading-relaxed">
              👋 <strong>Welcome to Kundan Arvaana!</strong> How can our project advisory team assist you today with Pune West's flagship Ikigai luxury landmark?
            </div>

            {/* Quick Action Pills */}
            <div className="space-y-2">
              <div className="text-[10px] uppercase font-bold tracking-wider text-gold-400 px-1">
                Instant WhatsApp Prompts:
              </div>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendQuickMessage(prompt.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-obsidian-900 hover:bg-emerald-950/50 border border-white/5 hover:border-emerald-500/40 transition-all flex items-start gap-2.5 group"
                >
                  <div className="p-1 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 shrink-0 mt-0.5">
                    {prompt.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                      {prompt.title}
                    </div>
                    <div className="text-[10px] text-champagne/60 truncate">
                      {prompt.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Direct Send Input Bar */}
            <div className="pt-2">
              <button
                onClick={() => sendQuickMessage("Hello, I am interested in Kundan Arvaana, Balewadi. Please share project details, floor plans, and pricing.")}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 text-obsidian-950" />
                <span>Start WhatsApp Conversation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Primary Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-950/70 hover:shadow-emerald-500/40 border border-emerald-400/50 backdrop-blur-md transition-all duration-300 hover:scale-105"
        aria-label="Open WhatsApp Concierge"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full border-2 border-emerald-700 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full border-2 border-emerald-700"></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold tracking-wider uppercase leading-none">
            WhatsApp
          </span>
          <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[8px] font-semibold text-emerald-200 uppercase tracking-wider border border-emerald-400/30">
            Online
          </span>
        </div>
      </button>

    </div>
  );
}
