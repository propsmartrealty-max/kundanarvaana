import fs from 'fs';
import path from 'path';

const routes = [
  {
    path: "kundan-arvaana-tower-balewadi",
    title: "33-Storey Landmark Tower Specifications | Kundan Arvaana Balewadi, Pune",
    desc: "Explore the 33-storey architectural engineering of Kundan Arvaana in Balewadi, Pune. Only 2 residences per floor with 4 private high-speed smart elevators, acoustic DGU glass, and seismic-resistant shear wall construction.",
    keywords: "Kundan Arvaana Tower, 33 Storey Tower Balewadi, luxury tower Balewadi Pune, Kundan Spaces engineering, 4 elevators Balewadi flats, Ikigai architecture Pune",
    heading: "33-Storey Ikigai Architectural Landmark in Balewadi, Pune",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          MahaRERA: PR1260002600277 • 33 Habitable Levels
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana 33-Storey Tower Architecture & Engineering
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Rising as West Pune's most distinguished residential landmark near Balewadi High Street, Kundan Arvaana combines contemporary engineering with Japanese Ikigai spatial philosophy. Designed exclusively for 66 families across 33 soaring levels, every home enjoys 270-degree unhindered panoramic views of the Baner hills and Pune skyline.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-3">Structural & Civil Highlights</h2>
            <ul class="space-y-2.5 text-sm text-[#E8DFD3]/80">
              <li>• <strong>Structure:</strong> 3 Basements + Stilt/Podium + 33 Soaring Habitable Levels</li>
              <li>• <strong>Density:</strong> Strictly 2 bespoke residences per floor for absolute privacy</li>
              <li>• <strong>Ceiling Volume:</strong> 11.5 ft clear floor-to-ceiling height & 22+ ft double-height living pavilions</li>
              <li>• <strong>Elevators:</strong> 4 High-speed dedicated smart elevators with private biometric foyer access</li>
              <li>• <strong>Car Parking:</strong> 3 Covered car parking spaces bundled per unit with EV charging infrastructure</li>
            </ul>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-3">Façade & Acoustic Engineering</h2>
            <ul class="space-y-2.5 text-sm text-[#E8DFD3]/80">
              <li>• <strong>Acoustic Glazing:</strong> High-performance acoustic DGU (Double Glazed Unit) Low-E glass</li>
              <li>• <strong>Thermal Insulation:</strong> Optimized solar heat gain coefficient (SHGC) for cool interiors</li>
              <li>• <strong>Wind Load Design:</strong> Wind-tunnel tested structural engineering up to 135 km/h gusts</li>
              <li>• <strong>Seismic Safety:</strong> Zone-3 compliant ductile shear wall RCC structural design</li>
              <li>• <strong>Power Redundancy:</strong> 100% full DG power backup for common zones and residences</li>
            </ul>
          </div>
        </div>

        <div class="my-8 p-6 rounded-2xl bg-[#0C0F14] border border-[#B8932C]/30">
          <h2 class="text-xl font-serif font-bold text-[#F5DE98] mb-3">Official Project Desk & Viewing</h2>
          <p class="text-sm text-[#E8DFD3]/80 mb-4">
            Private architectural walkthroughs are available by prior appointment. Contact the official Kundan Arvaana desk for complete structural specifications and level layout diagrams.
          </p>
          <div class="flex flex-wrap gap-3">
            <a href="https://wa.me/917744009295?text=Hello%2C%20I%20am%20interested%20in%20Kundan%20Arvaana%20Balewadi%20tower%20specifications." class="px-5 py-2.5 rounded-full bg-[#10b981] text-black font-bold text-xs uppercase tracking-wider">WhatsApp Project Desk</a>
            <a href="https://kundanarvaana.in/kundan-arvaana-4bhk-residences-balewadi" class="px-5 py-2.5 rounded-full border border-[#B8932C] text-[#F5DE98] font-bold text-xs uppercase tracking-wider">Explore 4.5 BHK Floor Plans</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-4bhk-residences-balewadi",
    title: "4 & 4.5 BHK Luxury Floor Plans & Duplex Penthouses | Kundan Arvaana Balewadi",
    desc: "Explore detailed 4.5 BHK floor plans at Kundan Arvaana Balewadi: Type 01, Type 02, Type 03 (2,235 - 2,269 sq.ft carpet) and 4,385 sq.ft Crown Sky Duplex penthouses. Private elevator foyer and 22+ ft double-height living room.",
    keywords: "4.5 BHK Balewadi, Kundan Arvaana floor plans, 4 BHK luxury flats Balewadi Pune, 4385 sq ft duplex Pune, Kundan Spaces Balewadi floor plan, luxury penthouse Balewadi",
    heading: "4.5 BHK Ultra-Luxury Residences & Sky Duplex Penthouses in Balewadi",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          Carpet Areas: 2,235 – 4,385 SQ.FT • Only 66 Units
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana 4 & 4.5 BHK Luxury Residences & Penthouses
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Kundan Arvaana redefines ultra-luxury living in Pune West. Offering just 2 palatial residences per floor, each 4.5 BHK home is designed with an exclusive private biometric elevator vestibule, 22+ ft double-height living pavilion, and expansive viewing sundecks overlooking the scenic Baner hills.
        </p>

        <div class="space-y-6 my-8">
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-xl font-serif font-bold text-[#F5DE98] mb-2">4.5 BHK Type 01 — Elite & Grande Configurations</h2>
            <p class="text-xs text-[#B8932C] font-mono mb-3">Total Usable Carpet Area: 2,235 – 2,246 SQ.FT | Typical Levels: 2, 6, 10, 14, 18, 22, 26</p>
            <p class="text-sm text-[#E8DFD3]/80 leading-relaxed mb-4">
              Features a grand master suite with walk-in wardrobe, junior master suite, 2 luxurious family bedrooms, multipurpose flexi-den/mandir/study, and an independent staff room with private ensuite washroom.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#E8DFD3]/70 font-mono">
              <div class="p-3 bg-black/40 rounded-xl">Living Room: 28'0" × 16'6"</div>
              <div class="p-3 bg-black/40 rounded-xl">Master Suite: 18'0" × 14'0"</div>
              <div class="p-3 bg-black/40 rounded-xl">Balcony: 16'6" × 8'0"</div>
              <div class="p-3 bg-black/40 rounded-xl">Kitchen: 14'0" × 11'0"</div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-xl font-serif font-bold text-[#F5DE98] mb-2">4.5 BHK Type 02 & Type 03 — Imperial & Panoramic Series</h2>
            <p class="text-xs text-[#B8932C] font-mono mb-3">Total Usable Carpet Area: 2,258 – 2,269 SQ.FT | Typical Levels: 3, 7, 11, 15, 19, 23, 27</p>
            <p class="text-sm text-[#E8DFD3]/80 leading-relaxed mb-4">
              Engineered with 270-degree wrap-around panoramic viewing decks, expansive living-dining pavilions with 22+ ft double heights, gourmet wet-and-dry kitchen layouts, and floor-to-ceiling acoustic glass walls.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-[#B8932C]/50">
            <h2 class="text-xl font-serif font-bold text-[#F5DE98] mb-2">Crown Sky Duplex Penthouse</h2>
            <p class="text-xs text-[#B8932C] font-mono mb-3">Total Usable Carpet Area: 4,385 SQ.FT | Monumental Top Levels</p>
            <p class="text-sm text-[#E8DFD3]/80 leading-relaxed mb-4">
              An architectural masterwork spanning two full levels. Features a double-height Great Hall, internal floating architectural staircase, private rooftop sky terrace, master spa suite with Jacuzzi, and dedicated butler lounge.
            </p>
          </div>
        </div>

        <div class="my-8 p-6 rounded-2xl bg-[#0C0F14] border border-[#B8932C]/30 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="text-sm font-bold text-white mb-1">Request High-Resolution CAD Floor Plans & Blueprint Book</div>
            <div class="text-xs text-[#E8DFD3]/70">Official architectural PDF package with dimension charts and column grid details.</div>
          </div>
          <a href="https://wa.me/917744009295?text=Hello%2C%20please%20share%20the%20detailed%20CAD%20floor%20plans%20for%20Kundan%20Arvaana%20Balewadi." class="px-5 py-2.5 rounded-full bg-[#10b981] text-black font-bold text-xs uppercase tracking-wider">WhatsApp Floor Plans</a>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-price-cost-sheet-pune",
    title: "All-Inclusive Price Sheet & Cost Breakdown | Kundan Arvaana Balewadi, Pune",
    desc: "Get transparent pricing breakdown for Kundan Arvaana Balewadi. 4.5 BHK luxury homes starting ₹3.45 Cr onwards. View stamp duty, registration, GST, and RERA payment milestone schedules.",
    keywords: "Kundan Arvaana price, Kundan Arvaana cost sheet, 4.5 BHK price Balewadi, Kundan Spaces Arvaana payment plan, luxury flat cost Pune West, MahaRERA payment schedule",
    heading: "Kundan Arvaana Pricing, Payment Schedules & Cost Sheet",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          All-Inclusive Cost Analysis • MahaRERA PR1260002600277
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana Price & Investment Cost Sheet
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Kundan Arvaana provides 100% transparent pricing with clear RERA-compliant payment milestones. Benefit from inaugural launch pricing for Pune West's first Ikigai-inspired 33-storey luxury landmark.
        </p>

        <div class="overflow-x-auto my-8">
          <table class="w-full text-left text-sm border-collapse rounded-xl overflow-hidden bg-[#0C0F14] border border-white/10">
            <thead>
              <tr class="bg-[#B8932C]/20 text-[#F5DE98]">
                <th class="p-4 border-b border-white/10">Typology</th>
                <th class="p-4 border-b border-white/10">Carpet Area</th>
                <th class="p-4 border-b border-white/10">Car Parking</th>
                <th class="p-4 border-b border-white/10">Starting Price</th>
                <th class="p-4 border-b border-white/10">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10 text-[#E8DFD3]/80">
              <tr>
                <td class="p-4 font-bold text-white">4.5 BHK Type 01 (Grande)</td>
                <td class="p-4 font-mono">2,235 – 2,246 SQ.FT</td>
                <td class="p-4 font-mono">3 Covered Bays</td>
                <td class="p-4 font-bold text-[#F5DE98]">₹3.45 Cr* Onwards</td>
                <td class="p-4"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">Available</span></td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-white">4.5 BHK Type 02 (Imperial)</td>
                <td class="p-4 font-mono">2,258 – 2,269 SQ.FT</td>
                <td class="p-4 font-mono">3 Covered Bays</td>
                <td class="p-4 font-bold text-[#F5DE98]">₹3.65 Cr* Onwards</td>
                <td class="p-4"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">Available</span></td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-white">Crown Sky Duplex Penthouse</td>
                <td class="p-4 font-mono">4,385 SQ.FT</td>
                <td class="p-4 font-mono">4 Covered Bays</td>
                <td class="p-4 font-bold text-[#F5DE98]">₹6.85 Cr* Onwards</td>
                <td class="p-4"><span class="px-2 py-0.5 rounded bg-gold-500/20 text-[#F5DE98] text-xs">By Invitation</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10 my-8">
          <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-3">Statutory Costs & Payment Milestones</h2>
          <ul class="space-y-2 text-sm text-[#E8DFD3]/80">
            <li>• <strong>Stamp Duty:</strong> 7% (Government of Maharashtra)</li>
            <li>• <strong>Registration:</strong> ₹30,000 standard registration fee</li>
            <li>• <strong>GST:</strong> Applicable at 5% on under-construction real estate</li>
            <li>• <strong>Payment Plan:</strong> Construction-linked milestone plan approved by leading banking institutions (HDFC, ICICI, SBI)</li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-3">
          <a href="https://wa.me/917744009295?text=Hello%2C%20please%20send%20the%20complete%20cost%20sheet%20and%20payment%20milestones%20for%20Kundan%20Arvaana%20Balewadi." class="px-5 py-2.5 rounded-full bg-[#10b981] text-black font-bold text-xs uppercase tracking-wider">WhatsApp Official Cost Sheet</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-maharera-faq-balewadi" class="px-5 py-2.5 rounded-full border border-[#B8932C] text-[#F5DE98] font-bold text-xs uppercase tracking-wider">Review MahaRERA Details</a>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-baner-balewadi-real-estate-market",
    title: "Baner Balewadi & Pune Luxury Real Estate Market Report 2026 | Kundan Arvaana",
    desc: "Comprehensive market intelligence on Baner-Balewadi real estate: 14.2% CAGR capital appreciation, Hinjawadi IT corridor rental yields, Metro Line 3 impact, and comparative pricing analysis against Baner, Aundh, and Koregaon Park.",
    keywords: "Balewadi real estate market, Baner property investment, Pune luxury property trends, 14.2 CAGR Balewadi, Hinjawadi rental yields, Kundan Spaces market report, buy flat in Balewadi",
    heading: "Baner-Balewadi & Pune West Luxury Real Estate Market Intelligence",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          Market Intelligence 2026 • 14.2% CAGR Appreciation
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Baner-Balewadi Real Estate Growth & Investment Report
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Balewadi and Baner represent the fastest-appreciating luxury residential micro-market in Pune. Supported by the Hinjawadi IT corridor, Metro Line 3, and high-street lifestyle hubs, property values in Balewadi have demonstrated a compounding 14.2% annual appreciation over the last 3 years.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10 text-center">
            <div class="text-3xl font-serif font-bold text-[#F5DE98]">14.2%</div>
            <div class="text-xs uppercase tracking-wider text-[#E8DFD3]/70 mt-1">3-Year Capital CAGR</div>
            <p class="text-xs text-[#E8DFD3]/60 mt-2">Consistent price appreciation outperforming broader Pune averages.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10 text-center">
            <div class="text-3xl font-serif font-bold text-[#10b981]">4.2% – 4.8%</div>
            <div class="text-xs uppercase tracking-wider text-[#E8DFD3]/70 mt-1">Gross Rental Yield</div>
            <p class="text-xs text-[#E8DFD3]/60 mt-2">High demand from C-suite executives and IT leadership in Hinjawadi.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10 text-center">
            <div class="text-3xl font-serif font-bold text-[#F5DE98]">66 Units</div>
            <div class="text-xs uppercase tracking-wider text-[#E8DFD3]/70 mt-1">Limited Supply</div>
            <p class="text-xs text-[#E8DFD3]/60 mt-2">Extreme exclusivity ensures exceptional long-term capital preservation.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10 my-8">
          <h2 class="text-xl font-serif font-bold text-[#F5DE98] mb-3">Key Infrastructure Catalysts Driving Balewadi</h2>
          <ul class="space-y-3 text-sm text-[#E8DFD3]/80">
            <li>• <strong>Pune Metro Line 3 (Hinjawadi - Shivajinagar):</strong> Operational connectivity connecting Balewadi to central Pune and tech hubs in under 20 minutes.</li>
            <li>• <strong>Balewadi High Street Commercial Strip:</strong> Over 150 premier restaurants, retail boutiques, and corporate business centers within 2 minutes.</li>
            <li>• <strong>Ring Road & Highway Expansion:</strong> Instant bypass access to Mumbai-Pune Expressway, reducing Mumbai airport transit to under 2.5 hours.</li>
            <li>• <strong>Top Educational & Healthcare Hubs:</strong> Proximity to Bharati Vidyapeeth, Jupiter Hospital, Manipal Hospital, and Symbiosis institutions.</li>
          </ul>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-master-plan-floor-plans",
    title: "Official Master Site Layout & CAD Blueprints | Kundan Arvaana Balewadi",
    desc: "Explore the ~1.1 acre master layout plan and CAD blueprints for Kundan Arvaana near Balewadi High Street, Pune. 24m entry boulevard, concentric Japanese zen driveway, and 33-storey tower footprint.",
    keywords: "Kundan Arvaana master plan, Kundan Arvaana site layout, Balewadi real estate master plan, Kundan Spaces layout drawing, CAD blueprints Pune flats",
    heading: "Kundan Arvaana Master Site Layout & Engineering Blueprints",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          ~1.1 Acre Boutique Footprint • Zero Vehicular-Pedestrian Conflict
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana Master Site Plan & Layout
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Designed with Japanese Ikigai symmetry, the ~1.1 acre master plan features a monumental 24m entry boulevard, concentric vehicular circulation keeping pedestrian pathways 100% vehicle-free, and serene landscaping with cherry blossom avenues and zen rock gardens.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-2">Ground Level Features</h2>
            <ul class="space-y-2 text-sm text-[#E8DFD3]/80">
              <li>• Grand 24-meter wide entrance gateway with 24/7 security concierge</li>
              <li>• Japanese concentric vehicular driveway with drop-off pavilion</li>
              <li>• Dedicated EV-ready surface visitor parking bays</li>
              <li>• Zen reflection pond and landscaped pedestrian serenity walkways</li>
            </ul>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-2">Basement & Podium Logistics</h2>
            <ul class="space-y-2 text-sm text-[#E8DFD3]/80">
              <li>• 3 levels of secured basement parking with intelligent sensor guidance</li>
              <li>• Ramp gradient engineered for low-clearance luxury supercars and SUVs</li>
              <li>• Dedicated driver lounge and sanitation facilities</li>
              <li>• Fire tender pathway with complete 360-degree perimeter turning radius</li>
            </ul>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-sky-amenities-balewadi",
    title: "34th-Floor Sky Sanctum & Rooftop Amenities | Kundan Arvaana Balewadi Pune",
    desc: "Discover the 34th-floor rooftop infinity pool, 24-seater Dolby Atmos cinema, zen tea gardens, executive co-working lounge, and wellness pavilion at Kundan Arvaana Balewadi.",
    keywords: "rooftop infinity pool Balewadi, Kundan Arvaana sky amenities, 34th floor pool Pune, Dolby Atmos cinema apartments Pune, luxury amenities Balewadi",
    heading: "Level 34 Sky Sanctum: Rooftop Infinity Pool & Sky Amenities",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          Sky Sanctum at 100+ Meters Above Ground • Level 34
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Level 34 Sky Amenities at Kundan Arvaana
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Elevated more than 100 meters above Balewadi, Level 34 is a private sanctuary reserved exclusively for 66 resident families. Featuring a heated infinity lap pool that merges seamlessly with the horizon, sky cinema, and stargazing lounge.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-2">Heated Infinity Pool</h2>
            <p class="text-xs text-[#E8DFD3]/70">25-meter temperature-controlled rooftop infinity lap pool with sunken poolside loungers and separate kids' splash zone.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-2">Dolby Atmos Cinema</h2>
            <p class="text-xs text-[#E8DFD3]/70">Private 24-seater screening theatre equipped with 4K laser projection, Dolby Atmos spatial sound, and motorized recliner seating.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-lg font-serif font-bold text-[#F5DE98] mb-2">Zen Wellness Sanctuary</h2>
            <p class="text-xs text-[#E8DFD3]/70">Japanese open-air yoga deck, aromatherapy steam suites, meditation garden, and executive co-working lounge.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-gallery-elevation-balewadi",
    title: "Architectural Visuals & Elevation Gallery | Kundan Arvaana Balewadi Pune",
    desc: "View high-resolution architectural photography, 3D elevation renders, floor plan diagrams, and twilight views of Kundan Arvaana luxury residences in Balewadi, Pune.",
    keywords: "Kundan Arvaana photos, Kundan Arvaana gallery, elevation 3d render Balewadi, Kundan Spaces project images, luxury building photo Pune",
    heading: "Architectural Gallery & Elevation Renders | Kundan Arvaana",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          High-Resolution Visual Showcase • Kundan Spaces
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana Visual Gallery & Architecture
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Explore the design language of Kundan Arvaana. From the monolithic glass façade to the tranquil Japanese landscape courtyards, every facet has been created to celebrate timeless Ikigai luxury.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div class="p-4 rounded-2xl bg-[#0C0F14] border border-white/10">
            <img src="/assets/hero/kundan-arvaana-hero.webp" alt="Kundan Arvaana 33-Storey Elevation with Cherry Blossoms" class="w-full rounded-xl aspect-[4/3] object-cover mb-3" />
            <div class="text-sm font-bold text-white">Soaring 33-Storey Ikigai Elevation</div>
            <div class="text-xs text-[#E8DFD3]/60">Daylight perspective framed by Japanese cherry blossoms.</div>
          </div>
          <div class="p-4 rounded-2xl bg-[#0C0F14] border border-white/10">
            <img src="/assets/brochure/elevation-editorial-full.webp" alt="Kundan Arvaana Architectural Twilight View" class="w-full rounded-xl aspect-[4/3] object-cover mb-3" />
            <div class="text-sm font-bold text-white">Twilight Facade Illumination</div>
            <div class="text-xs text-[#E8DFD3]/60">Gold Ikigai crown and double-height living room illumination.</div>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-baner-balewadi-location",
    title: "Prime Balewadi High Street Location & Connectivity Map | Kundan Arvaana Pune",
    desc: "Strategic location of Kundan Arvaana near Sai Chowk, Balewadi High Street. 2 mins to Baner, 10 mins to Hinjawadi IT Park, 5 mins to Mumbai-Bangalore Highway.",
    keywords: "Kundan Arvaana location, Balewadi High Street luxury flats, near Sai Chowk Balewadi, distance to Hinjawadi IT park, flats near Baner Pune",
    heading: "Strategic Prime Location in Balewadi, Pune West",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          Address: Near Sai Chowk, Balewadi High Street, Pune 411045
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana Location & Strategic Connectivity
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Situated at the intersection of peace and convenience, Kundan Arvaana places you minutes away from West Pune's most celebrated dining, education, healthcare, and commercial centers.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-8 text-center">
          <div class="p-5 rounded-xl bg-[#0C0F14] border border-white/10">
            <div class="text-2xl font-serif font-bold text-[#F5DE98]">2 Mins</div>
            <div class="text-xs text-[#E8DFD3]/80 mt-1 font-semibold">Balewadi High Street</div>
          </div>
          <div class="p-5 rounded-xl bg-[#0C0F14] border border-white/10">
            <div class="text-2xl font-serif font-bold text-[#F5DE98]">5 Mins</div>
            <div class="text-xs text-[#E8DFD3]/80 mt-1 font-semibold">Mumbai-Bangalore Hwy</div>
          </div>
          <div class="p-5 rounded-xl bg-[#0C0F14] border border-white/10">
            <div class="text-2xl font-serif font-bold text-[#F5DE98]">10 Mins</div>
            <div class="text-xs text-[#E8DFD3]/80 mt-1 font-semibold">Hinjawadi IT Park Ph-1</div>
          </div>
          <div class="p-5 rounded-xl bg-[#0C0F14] border border-white/10">
            <div class="text-2xl font-serif font-bold text-[#F5DE98]">20 Mins</div>
            <div class="text-xs text-[#E8DFD3]/80 mt-1 font-semibold">Pune University / Aundh</div>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "kundan-arvaana-maharera-faq-balewadi",
    title: "MahaRERA PR1260002600277 & Buyer FAQ | Kundan Arvaana Balewadi",
    desc: "Frequently asked questions regarding Kundan Arvaana MahaRERA registration PR1260002600277, possession date December 2030, car parking allotment, bank approvals, and specifications.",
    keywords: "MahaRERA PR1260002600277, Kundan Arvaana RERA number, Kundan Arvaana possession date, Kundan Spaces RERA approval, Balewadi project RERA verification",
    heading: "MahaRERA PR1260002600277 Verification & Buyer FAQ",
    content: `
      <section class="max-w-4xl mx-auto py-12 px-6">
        <div class="inline-block px-3 py-1 rounded-full border border-[#B8932C]/40 text-[#B8932C] text-xs font-semibold uppercase tracking-widest mb-4">
          Official Government Verification: PR1260002600277
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif text-[#F5DE98] font-bold mb-6">
          Kundan Arvaana MahaRERA Compliance & Buyer FAQ
        </h1>
        <p class="text-base sm:text-lg text-[#E8DFD3]/90 leading-relaxed mb-8">
          Kundan Arvaana is fully registered with the Maharashtra Real Estate Regulatory Authority under registration number <strong>PR1260002600277</strong>. All legal approvals, title deeds, building plans, and environmental clearances have been verified.
        </p>

        <div class="space-y-4 my-8">
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-base font-bold text-[#F5DE98] mb-2">What is the official MahaRERA registration number?</h2>
            <p class="text-sm text-[#E8DFD3]/80">The project is registered with MahaRERA under registration number <strong>PR1260002600277</strong>, available for verification at <a href="https://maharera.mahaonline.gov.in" target="_blank" class="text-[#F5DE98] underline">maharera.mahaonline.gov.in</a>.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-base font-bold text-[#F5DE98] mb-2">What is the official completion and possession date?</h2>
            <p class="text-sm text-[#E8DFD3]/80">The registered MahaRERA completion date for Kundan Arvaana is <strong>December 2030</strong>.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-base font-bold text-[#F5DE98] mb-2">How many residences and floors are in the tower?</h2>
            <p class="text-sm text-[#E8DFD3]/80">The tower rises 33 habitable levels plus 3 basements and podium, housing strictly 66 bespoke residences with only 2 apartments per floor.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-base font-bold text-[#F5DE98] mb-2">How many car parking spaces are provided?</h2>
            <p class="text-sm text-[#E8DFD3]/80">Every 4.5 BHK residence is allotted 3 covered car parking spaces, while penthouses are allotted 4 spaces, all equipped with EV charging capability.</p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0C0F14] border border-white/10">
            <h2 class="text-base font-bold text-[#F5DE98] mb-2">Which banks have approved Kundan Arvaana for home loans?</h2>
            <p class="text-sm text-[#E8DFD3]/80">The project is pre-approved by all leading financial institutions including HDFC Bank, State Bank of India (SBI), ICICI Bank, and Axis Bank.</p>
          </div>
        </div>
      </section>
    `
  }
];

const distDir = path.resolve('dist');
const templateHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(templateHtmlPath)) {
  console.error("dist/index.html not found! Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(templateHtmlPath, 'utf-8');

routes.forEach(route => {
  let customHtml = baseHtml;
  
  // Replace Title
  customHtml = customHtml.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);
  customHtml = customHtml.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${route.title}" />`);
  customHtml = customHtml.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${route.title}" />`);
  customHtml = customHtml.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${route.title}" />`);
  
  // Replace Description
  customHtml = customHtml.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${route.desc}" />`);
  customHtml = customHtml.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${route.desc}" />`);
  customHtml = customHtml.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${route.desc}" />`);
  
  // Replace Keywords if present
  if (route.keywords) {
    customHtml = customHtml.replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${route.keywords}" />`);
  }

  // Update Canonical for Custom Domain
  const canonicalUrl = `https://kundanarvaana.in/${route.path}`;
  const wwwUrl = `https://www.kundanarvaana.in/${route.path}`;
  customHtml = customHtml.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);
  customHtml = customHtml.replace(/<link rel="alternate" hreflang="en-IN" href=".*?" \/>/s, `<link rel="alternate" hreflang="en-IN" href="${canonicalUrl}" />`);
  customHtml = customHtml.replace(/<link rel="alternate" hreflang="x-default" href=".*?" \/>/s, `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`);
  customHtml = customHtml.replace(/<link rel="alternate" hreflang="en" href=".*?" \/>/s, `<link rel="alternate" hreflang="en" href="${wwwUrl}" />`);
  customHtml = customHtml.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);

  // INJECT RICH SEMANTIC CRAWLABLE HTML INTO #root
  const renderedBody = `
    <div id="root">
      <header class="border-b border-white/10 py-4 px-6 flex items-center justify-between bg-[#07090C]">
        <a href="https://kundanarvaana.in/" class="font-serif font-bold text-[#F5DE98] text-lg tracking-wider">
          KUNDAN ARVAANA • BALEWADI
        </a>
        <nav class="hidden md:flex items-center gap-4 text-xs uppercase tracking-wider text-[#E8DFD3]/70 font-semibold">
          <a href="https://kundanarvaana.in/" class="hover:text-white">Home</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-tower-balewadi" class="hover:text-white">Tower</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-4bhk-residences-balewadi" class="hover:text-white">4.5 BHK</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-price-cost-sheet-pune" class="hover:text-white">Price</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-baner-balewadi-real-estate-market" class="hover:text-white">Market</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-sky-amenities-balewadi" class="hover:text-white">Amenities</a>
          <a href="https://kundanarvaana.in/kundan-arvaana-maharera-faq-balewadi" class="hover:text-white">FAQ</a>
        </nav>
      </header>
      <main>
        ${route.content}
      </main>
      <footer class="border-t border-white/10 py-8 px-6 text-center text-xs text-[#E8DFD3]/60 bg-[#07090C]">
        <p class="mb-2"><strong>Kundan Arvaana</strong> • Near Sai Chowk, Balewadi High Street, Pune West, Maharashtra 411045</p>
        <p class="mb-2">MahaRERA Registration Number: <strong>PR1260002600277</strong> | Project Completion: December 2030</p>
        <p>© 2026 Kundan Spaces. All Rights Reserved. WhatsApp Desk: +91 77440 09295</p>
      </footer>
    </div>`;

  customHtml = customHtml.replace(/<div id="root">[\s\S]*?<\/body>/, `${renderedBody}\n  </body>`);

  // Target directory in dist/
  const targetDistDir = path.join(distDir, route.path);
  if (!fs.existsSync(targetDistDir)) {
    fs.mkdirSync(targetDistDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDistDir, 'index.html'), customHtml, 'utf-8');

  // Target directory in root for zero-config CDNs
  const targetRootDir = path.resolve(route.path);
  if (!fs.existsSync(targetRootDir)) {
    fs.mkdirSync(targetRootDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetRootDir, 'index.html'), customHtml, 'utf-8');

  console.log(`✓ Pre-rendered static SEO route with rich content: /${route.path}`);
});

console.log("All static SEO routes successfully hardened with full semantic pre-rendering.");
