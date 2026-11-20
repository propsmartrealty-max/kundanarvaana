import fs from 'fs';
import path from 'path';

const routes = [
  {
    path: "kundan-arvaana-tower-balewadi",
    title: "33-Storey Landmark Tower Specifications | Kundan Arvaana Balewadi, Pune",
    desc: "Explore the 33-storey architectural engineering of Kundan Arvaana in Balewadi, Pune. Only 2 residences per floor with 4 private high-speed elevators."
  },
  {
    path: "kundan-arvaana-4bhk-residences-balewadi",
    title: "4 & 4.5 BHK Luxury Floor Plans & Duplex Penthouses | Kundan Arvaana Balewadi",
    desc: "Detailed floor plans for Kundan Arvaana Balewadi: Type 01, Type 02, Type 03 (2,235 - 2,269 sq.ft carpet) and 4,385 sq.ft Crown Sky Duplex penthouses."
  },
  {
    path: "kundan-arvaana-master-plan-floor-plans",
    title: "Official Master Site Layout & CAD Blueprints | Kundan Arvaana Balewadi",
    desc: "Official ~1.1 acre master layout plan and Level 34 Sky Amenity blueprints for Kundan Arvaana by Kundan Spaces near Balewadi High Street, Pune."
  },
  {
    path: "kundan-arvaana-sky-amenities-balewadi",
    title: "34th-Floor Sky Sanctum & Luxury Amenities | Kundan Arvaana Balewadi Pune",
    desc: "Discover the 34th-floor rooftop infinity pool, 24-seater Dolby Atmos cinema, zen tea gardens, and executive co-working lounge at Kundan Arvaana Balewadi."
  },
  {
    path: "kundan-arvaana-baner-balewadi-real-estate-market",
    title: "Baner Balewadi & Pune Luxury Real Estate Market Report 2026 | Kundan Arvaana",
    desc: "In-depth market intelligence on Baner-Balewadi property values, 14.2% CAGR capital appreciation, Hinjawadi IT corridor rental yields, and luxury housing trends."
  },
  {
    path: "kundan-arvaana-gallery-elevation-balewadi",
    title: "Architectural Visuals & Elevation Gallery | Kundan Arvaana Balewadi Pune",
    desc: "High-resolution architectural photography, 3D elevation renders, and brochure layouts of Kundan Arvaana luxury residences in Balewadi, Pune."
  },
  {
    path: "kundan-arvaana-baner-balewadi-location",
    title: "Prime Balewadi High Street Location & Connectivity Map | Kundan Arvaana Pune",
    desc: "Strategic location of Kundan Arvaana at Sai Chowk, Balewadi High Street. 2 mins to Baner, 10 mins to Hinjawadi IT Park, and 5 mins to Mumbai-Bangalore Highway."
  },
  {
    path: "kundan-arvaana-price-cost-sheet-pune",
    title: "All-Inclusive Price Sheet & EMI Calculator | Kundan Arvaana Balewadi",
    desc: "Transparent pricing breakdown, stamp duty calculator, RERA payment schedules, and customized EMI estimates for 4.5 BHK homes at Kundan Arvaana Balewadi."
  },
  {
    path: "kundan-arvaana-maharera-faq-balewadi",
    title: "MahaRERA PR1260002600277 & Buyer FAQ | Kundan Arvaana Balewadi",
    desc: "Frequently asked questions regarding Kundan Arvaana MahaRERA registration PR1260002600277, possession date December 2030, car parking, and specifications."
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
  
  // Update Canonical for Custom Domain
  const canonicalUrl = `https://kundanarvaana.in/${route.path}`;
  const wwwUrl = `https://www.kundanarvaana.in/${route.path}`;
  customHtml = customHtml.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);
  customHtml = customHtml.replace(/<link rel="alternate" hreflang="en-IN" href=".*?" \/>/s, `<link rel="alternate" hreflang="en-IN" href="${canonicalUrl}" />`);
  customHtml = customHtml.replace(/<link rel="alternate" hreflang="x-default" href=".*?" \/>/s, `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`);
  customHtml = customHtml.replace(/<link rel="alternate" hreflang="en" href=".*?" \/>/s, `<link rel="alternate" hreflang="en" href="${wwwUrl}" />`);
  customHtml = customHtml.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);

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

  console.log(`✓ Generated static SEO route: /${route.path}`);
});

console.log("All static SEO routes successfully hardened.");
