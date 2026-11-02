export interface Manufacturer {
  id: string;
  name: string;
  tagline: string;
  category: 'water-conservation' | 'valves-fittings' | 'commercial-safety' | 'bathware';
  categoryLabel: string;
  description: string;
  extendedDescription: string;
  image: string;
  keyProducts: string[];
  specHighlights: { label: string; value: string }[];
  territories: string[];
  repContact: {
    name: string;
    email: string;
    phone: string;
    role: string;
  };
  website: string;
  catalogName: string;
}

export interface TerritoryZone {
  region: string;
  state: string;
  cities: string[];
  leadRep: string;
  status: string;
}

export const COMPANY_INFO = {
  name: 'Donahue-Wesco Group LLC',
  tradeName: 'WESCO STL',
  establishedNotice: 'Serving the Midwest Plumbing & Mechanical Industry',
  address: {
    street: '108 Roseacre Ln',
    city: 'Webster Groves',
    state: 'MO',
    zip: '63119',
    metro: 'St. Louis Metro Area',
  },
  contacts: {
    mainOffice: '(314) 220-1546',
    fax: '(314) 918-7690',
    primaryEmail: 'norm.halliday@wescostl.com',
  },
  leadership: [
    {
      name: 'Dan Donahue',
      title: 'Principal & Regional Sales Executive',
      email: 'dand@donahuesales.com',
      phone: '(314) 406-2443',
      territory: 'Southern Illinois & Missouri Commercial Specifications',
    },
    {
      name: 'Norm Halliday',
      title: 'Partner & St. Louis Operations Lead',
      email: 'norm.halliday@wescostl.com',
      phone: '(314) 220-1546',
      territory: 'St. Louis Metro, Wholesale Distribution & Agency Operations',
    },
  ],
  territorySummary: 'Missouri, Central & Southern Illinois, Kansas, and Iowa',
};

export const MANUFACTURERS: Manufacturer[] = [
  {
    id: 'niagara',
    name: 'Niagara Conservation',
    tagline: 'Ultra-High-Efficiency Plumbing Fixtures & Conservation Technology',
    category: 'water-conservation',
    categoryLabel: 'Water Conservation',
    description:
      'Pioneering water-efficiency technology with patented Stealth® vacuum-assist flushing (0.8 GPF), EPA WaterSense certified toilets, and low-flow systems that slash utility operating costs without compromising performance.',
    extendedDescription:
      'Niagara is the gold standard for high-performance, ultra-high-efficiency plumbing fixtures across commercial hospitality, municipal housing authorities, and luxury multi-family developments. Donahue-Wesco Group provides technical specification, sample mockups, and rebate coordination for developers and engineers throughout our territory.',
    image: '/src/assets/images/wesco_niagara_conservation_1793630509658.jpg',
    keyProducts: [
      'Stealth® 0.8 GPF Vacuum-Assist Commercial Toilets',
      'Nano Dual-Flush (0.5 / 0.8 GPF) Restroom Suites',
      'Equator & EcoLogic High-Efficiency Commercial Urinals',
      'Tamper-Proof 1.0 & 1.5 GPM Conservation Showerheads',
      'Pressure-Compensating Commercial Faucet Aerators',
    ],
    specHighlights: [
      { label: 'Flush Volume', value: '0.8 GPF (Lowest on Market)' },
      { label: 'Certifications', value: 'EPA WaterSense & LEED v4' },
      { label: 'Utility ROI', value: 'Up to 70% Water Bill Reduction' },
      { label: 'Warranty', value: '15-Year Commercial Warranty' },
    ],
    territories: ['Eastern Missouri', 'Southern & Central Illinois', 'Iowa', 'Kansas'],
    repContact: {
      name: 'Dan Donahue',
      email: 'dand@donahuesales.com',
      phone: '(314) 406-2443',
      role: 'Specification & Project Pricing',
    },
    website: 'https://niagaracorp.com',
    catalogName: 'Niagara Commercial Master Catalog 2026',
  },
  {
    id: 'legend-valve',
    name: 'Legend Valve',
    tagline: 'Precision Engineered Valves, Fittings & Hydronic Solutions',
    category: 'valves-fittings',
    categoryLabel: 'Valves & Fittings',
    description:
      'Over 9,000 plumbing, commercial, industrial, and hydronic valves and fittings. Backed by the unmatched 24-hour guarantee and an industry-leading 5-year, $25,000 downstream warranty.',
    extendedDescription:
      'From forged brass commercial ball valves and PressConnect press systems to radiant hydronics and gas distribution, Legend Valve is trusted by mechanical contractors and master plumbers for flawless quality and immediate wholesale availability.',
    image: '/src/assets/images/wesco_legend_valves_1793630509837.jpg',
    keyProducts: [
      'T-1001 & T-885 Full Port Forged Brass Ball Valves',
      'Legend PressConnect Copper & Bronze Press Fittings',
      'HyperPure PE-RT Flexible Potable Water Piping',
      'Commercial Backflow Preventers & Check Valves',
      'Hydronic Manifold & Radiant Heating Systems',
    ],
    specHighlights: [
      { label: 'Catalog SKU Depth', value: '9,000+ Precision SKUs' },
      { label: 'Product Warranty', value: '5-Year / $25,000 Downstream' },
      { label: 'Order Guarantee', value: '100% 24-Hour Shipping' },
      { label: 'Standards', value: 'ANSI/NSF 61G, Lead-Free' },
    ],
    territories: ['Missouri (Statewide)', 'Southern & Central Illinois', 'St. Louis Metro'],
    repContact: {
      name: 'Norm Halliday',
      email: 'norm.halliday@wescostl.com',
      phone: '(314) 220-1546',
      role: 'Wholesale Channel & Inventory Support',
    },
    website: 'https://legendvalve.com',
    catalogName: 'Legend Master Plumbing & Industrial Price Book',
  },
  {
    id: 'speakman',
    name: 'Speakman Company',
    tagline: 'Architectural Hospitality Fixtures & Emergency Safety Equipment',
    category: 'commercial-safety',
    categoryLabel: 'Commercial & Safety Fixtures',
    description:
      'American heritage since 1869. Renowned Anystream® luxury showerheads for five-star hospitality, architectural sensor faucets, and OSHA-compliant emergency eyewashes and deluge showers.',
    extendedDescription:
      'Speakman bridges premium design aesthetics for hotels and commercial buildings with life-critical safety equipment for laboratories, manufacturing plants, and educational facilities. Donahue-Wesco assists engineers with ANSI Z358.1 emergency fixture layout and design schedules.',
    image: '/src/assets/images/wesco_speakman_hospitality_1793630510727.jpg',
    keyProducts: [
      'Anystream® Iconic Plunge & Multi-Function Hotel Showers',
      'Commander® Heavy-Duty Commercial & Institutional Faucets',
      'Traditional & Barrier-Free Emergency Eyewash Stations',
      'Combination Deluge Shower & Safety Drench Systems',
      'Commercial Touchless Sensor & Thermostatic Mixing Valves',
    ],
    specHighlights: [
      { label: 'Heritage', value: 'Engineered in USA Since 1869' },
      { label: 'Safety Standard', value: '100% ANSI Z358.1 & OSHA Compliant' },
      { label: 'Hospitality', value: 'Specified in 4 & 5-Star Hotel Flags' },
      { label: 'Durability', value: 'Solid Cast Brass Construction' },
    ],
    territories: ['Missouri (East/St. Louis)', 'Southern Illinois', 'Central Illinois'],
    repContact: {
      name: 'Dan Donahue',
      email: 'dand@donahuesales.com',
      phone: '(314) 406-2443',
      role: 'Architectural Specs & Safety Audits',
    },
    website: 'https://speakman.com',
    catalogName: 'Speakman Architectural & Safety Spec Guide',
  },
  {
    id: 'diamond-tub',
    name: 'Diamond Tub & Showers',
    tagline: 'Hand-Crafted American Acrylic Tubs & Accessible Bathware',
    category: 'bathware',
    categoryLabel: 'Architectural Bathware',
    description:
      'Premier Midwest manufacturer of high-gloss cast acrylic bathtubs, sectional multi-piece shower systems, ADA-compliant barrier-free roll-in showers, and custom multi-family surrounds.',
    extendedDescription:
      'Diamond Tub & Showers delivers structural integrity and pristine surface aesthetics engineered specifically for new residential construction, assisted living healthcare facilities, and multi-unit renovations throughout the Heartland.',
    image: '/src/assets/images/wesco_diamond_tub_showers_1793630511050.jpg',
    keyProducts: [
      'Freestanding & Drop-In Deep Soaking Acrylic Tubs',
      'Multi-Piece Remodel Showers with Pin-Lock Installation',
      'ADA Accessible Roll-In & Low-Threshold Shower Bases',
      'Commercial Tile-Pattern Acrylic Shower Enclosures',
      'Heavy-Duty Institutional Tub-Shower Combinations',
    ],
    specHighlights: [
      { label: 'Manufacturing', value: '100% Hand-Crafted in USA' },
      { label: 'Material', value: 'Cast Acrylic with Fiberglass Reinforcement' },
      { label: 'Accessibility', value: 'ADA & Fair Housing Compliant' },
      { label: 'Installation', value: 'Easy Front-Pinned Alignment' },
    ],
    territories: ['Missouri', 'Illinois', 'Iowa', 'Kansas'],
    repContact: {
      name: 'Norm Halliday',
      email: 'norm.halliday@wescostl.com',
      phone: '(314) 220-1546',
      role: 'Project Quotations & Distributor Allocations',
    },
    website: 'https://diamondtubshowers.com',
    catalogName: 'Diamond Commercial & Residential Bath Guide',
  },
];

export const CORE_CAPABILITIES = [
  {
    number: '01',
    title: 'Architectural & Engineering Specification',
    summary:
      'We work directly with mechanical engineering firms, architectural specifiers, and plumbing consultants to integrate code-compliant, WaterSense, and ADA specifications into project schedules.',
    highlights: ['CSI 3-Part MasterFormat Specs', 'LEED Water Efficiency Calculation Support', 'Lunch & Learn AIA/ASPE Accredited Training'],
  },
  {
    number: '02',
    title: 'Wholesale Distributor Partnership & Stocking',
    summary:
      'We cultivate deep inventory alignment with plumbing and industrial wholesale branches throughout Missouri, Illinois, Kansas, and Iowa, ensuring regional contractors have immediate access to product.',
    highlights: ['Stocking Inventory Optimization', 'Factory Rebate & Buying Program Management', 'Counter Displays & Contractor Merchandising'],
  },
  {
    number: '03',
    title: 'Contractor Jobsite Support & Takeoffs',
    summary:
      'When commercial projects break ground, Donahue-Wesco provides hands-on plan takeoffs, valve schedules, fixture mockups, and on-site troubleshooting to keep installation on time.',
    highlights: ['Pre-Bid Plan & Spec Takeoffs', 'Value Engineering Alternative Audits', 'Jobsite Verification & Submittal Preparation'],
  },
  {
    number: '04',
    title: 'Factory-Direct Warranty & Technical Escalation',
    summary:
      'As direct manufacturer liaisons, we eliminate corporate bureaucracy. When technical questions or warranty claims arise, our local team handles resolution immediately.',
    highlights: ['Direct St. Louis Based Phone Access', 'Field Inspection & Factory RGA Handling', 'Safety Eyewash Compliance Verifications'],
  },
];

export const SECTORS = [
  {
    id: 'commercial',
    title: 'Commercial Office & Institutional',
    description: 'High-traffic corporate campuses, municipal buildings, and state institutions requiring durable, low-consumption fixtures and industrial-grade valve controls.',
    recommendedBrands: ['Niagara Conservation', 'Legend Valve', 'Speakman'],
    kpi: 'Up to 70% water consumption reduction in commercial towers',
  },
  {
    id: 'healthcare',
    title: 'Healthcare, Labs & Life Sciences',
    description: 'Hospitals, biotech research laboratories, and medical centers demanding ANSI Z358.1 emergency eye washes, sanitary faucets, and backflow protection.',
    recommendedBrands: ['Speakman Company', 'Legend Valve'],
    kpi: '100% OSHA & ANSI Z358.1 emergency compliance certified',
  },
  {
    id: 'multifamily',
    title: 'Multi-Family Residential & Mixed-Use',
    description: 'Apartment complexes, student housing, and condominium towers balancing tenant luxury aesthetics with volume durability and unit-level water conservation.',
    recommendedBrands: ['Niagara Conservation', 'Diamond Tub & Showers'],
    kpi: 'Proven savings across thousands of Midwest apartment units',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Luxury Hotels',
    description: 'Four-star and boutique hotels seeking world-class guest shower pressure with sustainable flow rates and designer architectural finishes.',
    recommendedBrands: ['Speakman Company', 'Diamond Tub & Showers'],
    kpi: 'Specified by leading international hotel brands',
  },
];

export const TERRITORIES: TerritoryZone[] = [
  {
    region: 'Eastern Missouri & St. Louis Metro',
    state: 'MO',
    cities: ['St. Louis City & County', 'St. Charles', 'Jefferson County', 'Cape Girardeau'],
    leadRep: 'Norm Halliday & Dan Donahue',
    status: 'Full Line Representation & Technical Field Service',
  },
  {
    region: 'Central & Southern Illinois',
    state: 'IL',
    cities: ['Metro East', 'Springfield', 'Peoria', 'Champaign-Urbana', 'Carbondale'],
    leadRep: 'Dan Donahue',
    status: 'Direct Specifier & Wholesale Rep Services',
  },
  {
    region: 'Western Missouri & Kansas',
    state: 'MO / KS',
    cities: ['Kansas City Metro', 'Columbia', 'Jefferson City', 'Topeka', 'Wichita'],
    leadRep: 'Donahue-Wesco Regional Desk',
    status: 'Project Specification & Wholesale Distribution',
  },
  {
    region: 'Iowa Territory',
    state: 'IA',
    cities: ['Des Moines', 'Cedar Rapids', 'Davenport / Quad Cities', 'Iowa City'],
    leadRep: 'Donahue-Wesco Midwest Network',
    status: 'Select Product Representation & Spec Support',
  },
];
