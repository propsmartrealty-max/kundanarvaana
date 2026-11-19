/**
 * SEO Hardened Router & URL Canonicalization for Kundan Arvaana, Balewadi, Pune
 * Eliminates all '#' hash symbols from the browser URL.
 * Implements Google-rank optimized keyword permalinks.
 */

export const SEO_ROUTES = [
  {
    slug: "overview",
    path: "",
    targetId: "hero",
    label: "Overview",
    pageTitle: "Kundan Arvaana Balewadi, Pune | 4 & 4.5 BHK Luxury Residences | MahaRERA PR1260002600277",
    metaDesc: "Kundan Arvaana Balewadi: India's 1st Ikigai-inspired luxury landmark in Balewadi, Pune West. 66 bespoke 4.5 BHK residences across 33 soaring levels."
  },
  {
    slug: "tower",
    path: "kundan-arvaana-tower-balewadi",
    targetId: "tower",
    label: "Tower",
    pageTitle: "33-Storey Landmark Tower Specifications | Kundan Arvaana Balewadi, Pune",
    metaDesc: "Explore the 33-storey architectural engineering of Kundan Arvaana in Balewadi, Pune. Only 2 residences per floor with 4 private high-speed elevators."
  },
  {
    slug: "residences",
    path: "kundan-arvaana-4bhk-residences-balewadi",
    targetId: "residences",
    label: "Residences",
    pageTitle: "4 & 4.5 BHK Luxury Floor Plans & Duplex Penthouses | Kundan Arvaana Balewadi",
    metaDesc: "Detailed floor plans for Kundan Arvaana Balewadi: Type 01, Type 02, Type 03 (2,235 - 2,269 sq.ft carpet) and 4,385 sq.ft Crown Sky Duplex penthouses."
  },
  {
    slug: "master-plan",
    path: "kundan-arvaana-master-plan-floor-plans",
    targetId: "master-plan",
    label: "Master Plan",
    pageTitle: "Official Master Site Layout & CAD Blueprints | Kundan Arvaana Balewadi",
    metaDesc: "Official ~1.1 acre master layout plan and Level 34 Sky Amenity blueprints for Kundan Arvaana by Kundan Spaces near Balewadi High Street, Pune."
  },
  {
    slug: "amenities",
    path: "kundan-arvaana-sky-amenities-balewadi",
    targetId: "amenities",
    label: "Amenities",
    pageTitle: "34th-Floor Sky Sanctum & Luxury Amenities | Kundan Arvaana Balewadi Pune",
    metaDesc: "Discover the 34th-floor rooftop infinity pool, 24-seater Dolby Atmos cinema, zen tea gardens, and executive co-working lounge at Kundan Arvaana Balewadi."
  },
  {
    slug: "market",
    path: "kundan-arvaana-baner-balewadi-real-estate-market",
    targetId: "market-intel",
    label: "Market Intel",
    pageTitle: "Baner Balewadi & Pune Luxury Real Estate Market Report 2026 | Kundan Arvaana",
    metaDesc: "In-depth market intelligence on Baner-Balewadi property values, 14.2% CAGR capital appreciation, Hinjawadi IT corridor rental yields, and luxury housing trends."
  },
  {
    slug: "gallery",
    path: "kundan-arvaana-gallery-elevation-balewadi",
    targetId: "gallery",
    label: "Gallery",
    pageTitle: "Architectural Visuals & Elevation Gallery | Kundan Arvaana Balewadi Pune",
    metaDesc: "High-resolution architectural photography, 3D elevation renders, and brochure layouts of Kundan Arvaana luxury residences in Balewadi, Pune."
  },
  {
    slug: "location",
    path: "kundan-arvaana-baner-balewadi-location",
    targetId: "location",
    label: "Location",
    pageTitle: "Prime Balewadi High Street Location & Connectivity Map | Kundan Arvaana Pune",
    metaDesc: "Strategic location of Kundan Arvaana at Sai Chowk, Balewadi High Street. 2 mins to Baner, 10 mins to Hinjawadi IT Park, and 5 mins to Mumbai-Bangalore Highway."
  },
  {
    slug: "pricing",
    path: "kundan-arvaana-price-cost-sheet-pune",
    targetId: "calculator",
    label: "Pricing",
    pageTitle: "All-Inclusive Price Sheet & EMI Calculator | Kundan Arvaana Balewadi",
    metaDesc: "Transparent pricing breakdown, stamp duty calculator, RERA payment schedules, and customized EMI estimates for 4.5 BHK homes at Kundan Arvaana Balewadi."
  },
  {
    slug: "faq",
    path: "kundan-arvaana-maharera-faq-balewadi",
    targetId: "faq",
    label: "FAQ",
    pageTitle: "MahaRERA PR1260002600277 & Buyer FAQ | Kundan Arvaana Balewadi",
    metaDesc: "Frequently asked questions regarding Kundan Arvaana MahaRERA registration PR1260002600277, possession date December 2030, car parking, and specifications."
  }
];

/**
 * Returns the base URL directory path for the current deployment environment
 * (e.g., '/kundanarvaana/' on GitHub Pages, '/' on custom domains or Cloudflare Pages).
 */
export function getBaseHref() {
  if (typeof window === 'undefined') return '/';
  const pathname = window.location.pathname;
  if (pathname.includes('/kundanarvaana/')) {
    return '/kundanarvaana/';
  }
  return '/';
}

/**
 * Builds a clean, fully-qualified SEO path without any '#' symbol.
 */
export function getCleanUrl(pathSlug) {
  const base = getBaseHref();
  if (!pathSlug) return base;
  return `${base}${pathSlug}`;
}

/**
 * Smoothly scrolls to target element and updates browser address bar with clean SEO URL without '#'.
 * Home page stays as bare domain (no extended URL).
 */
export function navigateToRoute(route, pushState = true) {
  if (typeof window === 'undefined') return;

  if (!route.path || route.slug === "overview") {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const rootUrl = getBaseHref();
    if (pushState && window.location.pathname !== rootUrl) {
      window.history.pushState({ targetId: 'hero', slug: 'overview' }, route.pageTitle, rootUrl);
    }
    if (route.pageTitle) {
      document.title = route.pageTitle;
    }
    return;
  }

  const target = document.getElementById(route.targetId);
  if (target) {
    const navbarOffset = 76;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  const cleanUrl = getCleanUrl(route.path);

  if (pushState && window.location.pathname !== cleanUrl) {
    window.history.pushState({ targetId: route.targetId, slug: route.slug }, route.pageTitle, cleanUrl);
  }

  if (route.pageTitle) {
    document.title = route.pageTitle;
  }
}

/**
 * Parses current location pathname and activates the corresponding section on initial load or popstate.
 * If user is on home page (/), remains purely as domain without any extended URL.
 */
export function handleInitialRouting() {
  if (typeof window === 'undefined') return;

  const pathname = window.location.pathname;
  const matchedRoute = SEO_ROUTES.find(r => r.path && r.path.length > 0 && pathname.includes(r.path));

  if (matchedRoute) {
    setTimeout(() => {
      navigateToRoute(matchedRoute, false);
    }, 200);
  } else if (window.location.hash) {
    // If a legacy hash exists, migrate immediately without '#'
    const rawHash = window.location.hash.replace('#', '');
    const hashRoute = SEO_ROUTES.find(r => r.targetId === rawHash || r.slug === rawHash);
    if (hashRoute) {
      setTimeout(() => {
        navigateToRoute(hashRoute, true);
      }, 200);
    }
  }
}
