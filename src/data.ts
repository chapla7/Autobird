import { HeroSlide, ServiceItem, PricingTier, FeatureCard, BrandItem, VideoItem, InsuranceCard, ReviewItem, ProductItem } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    subtitle: "PREMIUM CAR SERVICING & REPAIRS",
    headline: "Your Car Deserves Better Care.",
    highlight: "Engineered for elite performance and absolute safety.",
    ctaText: "Book Elite Service",
    ctaAction: "#book-now",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 2,
    subtitle: "MULTI-BRAND LUXURY SERVICE",
    headline: "Service Every Brand.",
    highlight: "Luxury to Economy. Backed by state-of-the-art diagnostic facilities.",
    ctaText: "Explore Our Solutions",
    ctaAction: "#services",
    image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 3,
    subtitle: "BUY & SELL USED CARS",
    headline: "Buy Smarter. Sell Faster.",
    highlight: "Porsche-level certification. Transparent transactions. Direct cash payouts.",
    ctaText: "Browse Showcase",
    ctaTextSecondary: "Value My Car",
    ctaAction: "#buy-sell",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 4,
    subtitle: "INSURANCE & CLAIMS ASSISTANCE",
    headline: "Insurance Made Easy.",
    highlight: "Direct cash-less repair paths, hassle-free policy renewals, and instant claims.",
    ctaText: "Get Free Quote",
    ctaAction: "#insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
  }
];

export const trustBarItems = [
  { value: "15,000+", label: "Cars Handled" },
  { value: "12 MONTHS", label: "Real Warranty" },
  { value: "UP TO 40%", label: "Cost Savings" },
  { value: "100%", label: "OEM Spare Parts" },
  { value: "COMPLIMENTARY", label: "Pickup & Drop" },
  { value: "24-HOUR", label: "Standard Delivery" },
  { value: "CERTIFIED", label: "Master Mechanics" },
  { value: "CASHLESS", label: "Insurance Claims" }
];

export const whyChooseUsCards: FeatureCard[] = [
  {
    id: 1,
    title: "Certified Master Technicians",
    description: "Our engineers undergo continuous certifications by premium brand standards, ensuring surgical precision for your vehicle.",
    icon: "ShieldAlert"
  },
  {
    id: 2,
    title: "Elite Diagnostic Equipment",
    description: "We utilize multi-million dollar high-fidelity scan systems to query your ECU and isolate electrical anomalies in seconds.",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "100% Transparent Billing",
    description: "Review comprehensive video walkthroughs and live digital approvals before a single wrench is turned on your machine.",
    icon: "FileText"
  },
  {
    id: 4,
    title: "12-Month Real Warranty",
    description: "Our service quality is backed by a fully-documented 12-Month / 10,000 km warranty on parts and structural labor.",
    icon: "ShieldCheck"
  },
  {
    id: 5,
    title: "Free Doorstep Pickup & Drop",
    description: "Zero disruption to your schedule. Our professional drivers securely collect, transport, and return your keys.",
    icon: "Truck"
  },
  {
    id: 6,
    title: "Genuine OEM Spare Parts Only",
    description: "We exclusively leverage official, factory-certified spare parts sourced directly from major global manufacturers.",
    icon: "Settings"
  },
  {
    id: 7,
    title: "Direct Cashless Insurance Support",
    description: "Our dedicated insurance desk handles claim submissions, visual documentation, and pre-approvals instantly.",
    icon: "Award"
  },
  {
    id: 8,
    title: "24-Hour Express Turnaround",
    description: "Get back on the road in record time. Over 85% of standard servicing tasks are finalized and delivered within 24 hours.",
    icon: "Clock"
  },
  {
    id: 9,
    title: "Multi-Brand Prestige Expertise",
    description: "Whether tuning a Porsche 911, maintaining a Range Rover, or servicing a reliable family Toyota, our bays are fully equipped.",
    icon: "Car"
  },
  {
    id: 10,
    title: "24/7 Premium Concierge Care",
    description: "Enjoy individual account managers, clear milestone updates via WhatsApp, and live service progress tracking.",
    icon: "MessageSquareText"
  }
];

export const services: ServiceItem[] = [
  {
    id: "general-service",
    title: "General Service",
    shortDesc: "Complete high-precision multi-point engine check and fluid flush.",
    overview: "Keep your vehicle running like it just left the showroom. Our premium general service encompasses exhaustive computer scanning, high-fidelity synthetic oil renewal, filter swaps, and meticulous vehicle diagnostics.",
    included: [
      "OEM Synthetic Oil replacement",
      "Genuine Air & Oil filter swap",
      "Full 50-point diagnostic health report",
      "Spark plug query & cleaning",
      "All essential fluid top-ups"
    ],
    estimatedTime: "4 - 5 Hours",
    startingPrice: "₹4,999",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "paint-body",
    title: "Paint & Body Work",
    shortDesc: "Showroom-grade painting, panel beating, and elite collision restorations.",
    overview: "Bring back the factory gloss. Our climate-controlled paint booths and computerized matching systems replicate exact premium finishes, including metallic, pearlescent, and matte paintworks.",
    included: [
      "Precision computerized color matching",
      "High-grade DuPont paint formulations",
      "Dent repair and precision panel beating",
      "Full clear-coat scratch elimination",
      "Rust treatment & structural restoration"
    ],
    estimatedTime: "2 - 4 Days",
    startingPrice: "₹4,999",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "engine-repair",
    title: "Engine Diagnostics & Repair",
    shortDesc: "Surgical fault isolating and major powertrain rebuilds.",
    overview: "Address warning lights, power loss, or compression drops immediately. From turbocharger tuning to full block rebuilds, our diagnostics uncover microscopic errors before they grow costly.",
    included: [
      "Live ECU diagnostic queries",
      "Cylinder compression & pressure analysis",
      "Timing belt/chain precision installation",
      "Valvetrain and gasket repair",
      "Turbo and supercharger tuning"
    ],
    estimatedTime: "1 - 3 Days",
    startingPrice: "₹8,999",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "brake-service",
    title: "Brake Service",
    shortDesc: "Stopping power restoration and premium caliper tuning.",
    overview: "Your main defense line. We replace worn pads, turn warped brake discs, clean premium calipers, and flush moisture-heavy hydraulic fluids to restore maximum braking bite.",
    included: [
      "High-performance ceramic pad fitting",
      "Brake disc resurfacing or replacement",
      "Hydraulic lines bleeding and fluid flush",
      "ABS wheel speed sensor inspection",
      "Caliper overhaul and temperature testing"
    ],
    estimatedTime: "2 Hours",
    startingPrice: "₹1,899",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "suspension",
    title: "Suspension Work",
    shortDesc: "Silky-smooth riding dynamics with high-end dampening parts.",
    overview: "Restore precise handling and floaty cruising comfort. We replace leaking shock absorbers, squeaky rubber bushings, worn tie rods, and perform custom steering rack repairs.",
    included: [
      "Gas-charged shock absorber replacement",
      "Premium polyurethane bushing upgrades",
      "Control arm and tie rod overhaul",
      "Steering rack leak query and repair",
      "Electronic active air suspension setups"
    ],
    estimatedTime: "3 - 5 Hours",
    startingPrice: "₹5,999",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "battery",
    title: "Battery Replacement",
    shortDesc: "Instant cranking power with high-amperage branded cells.",
    overview: "Never get stranded. We run advanced impedance testing on your current unit, replace failing cells with market-leading high-CCA batteries, and protect connections against future corrosion.",
    included: [
      "Complete alternator charging test",
      "Amperage draw & battery cell query",
      "Premium brand integration (Exide, Amaron)",
      "Terminal cleaning & anti-sulfation coating",
      "Old battery recycling & Eco-credits"
    ],
    estimatedTime: "30 Mins",
    startingPrice: "₹1,999",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tyres",
    title: "Tyre Care",
    shortDesc: "High-traction tyre compounds fitted and balanced.",
    overview: "Maximize fuel mileage and cornering grip. We supply premium tyre brands, handle safe de-mounting, integrate new performance rubber, and balance them with precision weight machines.",
    included: [
      "Prestige tyre fitting (Michelin, Pirelli, Bridgestone)",
      "High-precision laser wheel balancing",
      "Valve stem replacement & leak testing",
      "Sidewall structural inspection",
      "TPMS tire sensor recalibration"
    ],
    estimatedTime: "1 Hour",
    startingPrice: "₹3,999",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "alignment",
    title: "Wheel Alignment",
    shortDesc: "Advanced 3D digital laser chassis tracking.",
    overview: "Prevent uneven tyre wear and steering drift. Our computerized 3D alignment sensors check toe, camber, and caster parameters to ensure your vehicle tracks perfectly straight.",
    included: [
      "3D digital laser alignment check",
      "Toe, Camber, and Caster parameter tuning",
      "Steering angle sensor calibration",
      "Tyre rotation for uniform tread wear",
      "Chassis & suspension safety inspection"
    ],
    estimatedTime: "1 Hour",
    startingPrice: "₹799",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ac-service",
    title: "AC Service",
    shortDesc: "Sub-zero cabin cooling and eco-friendly gas recharge.",
    overview: "Escape summer heat. We inspect compressors for micro-leaks, evacuate old moisture-heavy refrigerant, vacuum-test the system, recharge gas, and sanitize cabin air ducts.",
    included: [
      "Eco-friendly R134a/R1234yf gas recharge",
      "Compressor oil replenishment",
      "Sub-millimeter AC loop leak check",
      "Air duct foam sanitization & odor purge",
      "Cabin HEPA filter cleaning/swap"
    ],
    estimatedTime: "2 Hours",
    startingPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "detailing",
    title: "Car Detailing",
    shortDesc: "High-end multi-stage ceramic coatings and interior therapy.",
    overview: "Achieve deep mirror-like gloss and premium interior freshness. Our detailing covers multi-stage paint correction, clay bar purification, premium 9H ceramic coatings, and interior leather enrichment.",
    included: [
      "3-stage rotary compound paint correction",
      "Ceramic shield 9H nano application",
      "Deep interior steam sanitization",
      "Premium pH-neutral leather conditioning",
      "Alloy wheel ceramic protection and tyre dressing"
    ],
    estimatedTime: "1 - 2 Days",
    startingPrice: "₹5,999",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic Care",
    price: "₹4,999",
    description: "Essential preventative care for smooth city commuting.",
    features: [
      "Engine Oil flush & top-up",
      "Air filter dust extraction",
      "Oil filter cleaning",
      "Brake pad wear query",
      "Coolant & wash fluid top-up",
      "Full 15-point mechanical inspection",
      "Complimentary water wash"
    ]
  },
  {
    id: "standard",
    name: "Standard Elite",
    price: "₹6,999",
    description: "Comprehensive brand-standard maintenance for complete security.",
    features: [
      "Full Engine Oil replacement (Premium synthetic)",
      "Brand-new OEM Oil & Air filter installation",
      "Full brake caliper cleaning & rotor tuning",
      "Computerized 3D wheel balancing & alignment",
      "Comprehensive spark plug cleaning",
      "Spark plug query & gap check",
      "Full 40-point diagnostic health report",
      "Complimentary pickup & drop service",
      "Elite foam wash and interior vacuuming"
    ],
    isPopular: true
  },
  {
    id: "premium",
    name: "Ultimate Prestige",
    price: "₹9,999",
    description: "The peak of automotive care for ultra-luxury and performance vehicles.",
    features: [
      "Full engine check & system health scanning",
      "Exhaustive 100% synthetic high-temp oil swap",
      "New OEM Cabin, Fuel, Air, and Oil filters",
      "Complete four-wheel brake disc machining",
      "Premium throttle body cleaning & tuning",
      "Suspension bushing & link greasing",
      "Sub-zero AC gas check & top-up",
      "Elite multi-stage paint wax polishing",
      "Premium deep-cleaning steam detailing",
      "12-Month dedicated support hotline"
    ]
  }
];

export const supportedBrands: BrandItem[] = [
  { name: "Toyota", type: "car" },
  { name: "Honda", type: "car" },
  { name: "Hyundai", type: "car" },
  { name: "Kia", type: "car" },
  { name: "Mahindra", type: "car" },
  { name: "Tata", type: "car" },
  { name: "BMW", type: "car" },
  { name: "Mercedes-Benz", type: "car" },
  { name: "Audi", type: "car" },
  { name: "Volkswagen", type: "car" },
  { name: "Skoda", type: "car" },
  { name: "MG Motor", type: "car" },
  { name: "Jeep", type: "car" },
  { name: "Volvo", type: "car" },
  { name: "Lexus", type: "car" },
  { name: "Porsche", type: "car" },
  { name: "Royal Enfield", type: "bike" },
  { name: "KTM", type: "bike" },
  { name: "Honda Motos", type: "bike" },
  { name: "Yamaha", type: "bike" },
  { name: "Suzuki", type: "bike" },
  { name: "BMW Motorrad", type: "bike" }
];

export const videoGallery: VideoItem[] = [
  {
    id: 1,
    title: "Precision Detailing & Ceramic Application",
    description: "Watch our paint preservation masters apply multiple layers of elite 9H ceramic shielding in clean-air booths.",
    videoUrl: "https://youtu.be/pWVwVaYAVlM?si=E22gpMRQOfOnjHHQ",
    coverImage: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Advanced Computerized ECU Mapping",
    description: "See our diagnostic leads analyze engine efficiency, turbo response, and sensor telemetry in real-time.",
    videoUrl: "https://www.youtube.com/watch?v=viW44cUfxCE",
    coverImage: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Chassis & Brake Disc Overhaul",
    description: "Witness the surgical assembly of floating compound brake rotors and gas-charged performance suspension components.",
    videoUrl: "https://www.youtube.com/watch?v=iRsV6YpLsKA",
    coverImage: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Showroom-Grade Paint Restorations",
    description: "A comprehensive look into our state-of-the-art paint booth restoring a deep metallic cherry luster to a premium sedan.",
    videoUrl: "https://www.youtube.com/watch?v=I4q3USGa7sA",
    coverImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200"
  }
];

export const insuranceBenefits: InsuranceCard[] = [
  {
    id: 1,
    title: "100% Cashless Repairs",
    description: "Instant tie-ups with leading providers including HDFC Ergo, ICICI Lombard, Bajaj Allianz, and Tata AIG.",
    benefit: "Pay ₹0 Out of Pocket",
    bgGradient: "from-slate-900 to-red-950"
  },
  {
    id: 2,
    title: "Zero Depreciation Coverage",
    description: "Secure bumper-to-bumper protection. Ensure zero deductions on expensive fiber, rubber, and glass parts.",
    benefit: "Full Parts Recovery",
    bgGradient: "from-zinc-900 to-rose-950"
  },
  {
    id: 3,
    title: "Instant Claim Processing",
    description: "Dedicated survey desks located directly inside our workshop provide visual proofing and approvals in under 4 hours.",
    benefit: "4-Hour Approvals",
    bgGradient: "from-black to-neutral-900"
  },
  {
    id: 4,
    title: "Engine Protection Cover",
    description: "Protect your powertrain against critical water ingression, oil leaks, and hydrostatic damage.",
    benefit: "Complete Block Protection",
    bgGradient: "from-neutral-950 to-red-900"
  }
];

export const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Vikram Malhotra",
    vehicle: "BMW 5 Series (530d)",
    serviceTaken: "Premium Ultimate Service & Ceramic Detailing",
    rating: 5,
    comment: "The precision is outstanding. My 5 Series drives as quiet as it did the day I drove it out of the showroom. The live WhatsApp video approvals are a total game changer for transparency.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 2,
    name: "Ananya Deshmukh",
    vehicle: "Audi Q3",
    serviceTaken: "Paint & Body Work",
    rating: 5,
    comment: "Flawless repair of a nasty door scrape. The computerized paint matching was exact, and the cashless claim process with ICICI Lombard was entirely managed by their concierge desk.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 3,
    name: "Rohan Singhal",
    vehicle: "Porsche Macan S",
    serviceTaken: "Engine Diagnostics & Performance Tuning",
    rating: 5,
    comment: "Excellent high-fidelity scan tools. They diagnosed a micro-boost leak in my turbo lines that an authorized center missed entirely. Fair pricing, extreme expertise, highly recommended.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 4,
    name: "Meera Nair",
    vehicle: "Toyota Fortuner",
    serviceTaken: "Brake Overhaul & Suspension Tuning",
    rating: 5,
    comment: "Our family SUV needed urgent suspension overhaul before a long mountain drive. They completed gas shock installs and brake disc resurfacing in one afternoon. Rock solid confidence now.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 5,
    name: "Devendra Verma",
    vehicle: "Honda City",
    serviceTaken: "General Care Service & Wheel Alignment",
    rating: 5,
    comment: "Best value in town. Saved at least 40% compared to my official dealership quote, but received complimentary pickup, genuine Bosch replacement filters, and a pristine wash.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 6,
    name: "Priyanka Sen",
    vehicle: "Mercedes GLA",
    serviceTaken: "Insurance Renewal & Claim Recovery",
    rating: 5,
    comment: "I was super anxious about reclaiming bumper damage. Their cashless liaison team cleared my files within 2 hours. Hand-delivered my GLA to my office looking absolutely spectacular.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 7,
    name: "Arjun Mehta",
    vehicle: "Skoda Octavia vRS",
    serviceTaken: "Performance Clutch & Engine Overhaul",
    rating: 5,
    comment: "A highly competent team of real petrolheads! They treat mechanical performance with absolute reverence. They sourced an original OEM Luk Clutch and mapped my ECU flawlessly.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 8,
    name: "Kabir Thapar",
    vehicle: "Range Rover Velar",
    serviceTaken: "Prestige Carbon Detailing & Leather Coating",
    rating: 5,
    comment: "Exceptional luxury standards. Scented steam cleaning, custom leather moisturizers, and a mirror finish. They matched the precision of ultra-luxury boutique detailers at a fraction of the cost.",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: 9,
    name: "Shreya Ghoshal",
    vehicle: "Hyundai Creta",
    serviceTaken: "AC Coil Replacement & Sanitization",
    rating: 5,
    comment: "The AC is freezing now! My cooling went down on a hot highway run, but they replaced the cooling coil, vacuum tested the system, and sanitized the cabin vents. Smells incredibly clean.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    verified: true
  }
];

export const premiumProducts: ProductItem[] = [
  {
    id: "prod-oil",
    name: "Autobird Mobil 1 Advanced Full Synthetic 5W-30",
    category: "Fluids",
    price: 3499,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400",
    description: "Elite level protection for high-performance engines, reducing friction and preserving valvetrain life.",
    specs: { "Volume": "4 Liters", "Viscosity": "5W-30", "Classification": "API SP / ILSAC GF-6A", "Base Oil": "100% Synthetic" }
  },
  {
    id: "prod-brakes",
    name: "Bosch QuietCast Premium Ceramic Brake Pads",
    category: "Brakes",
    price: 2899,
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400",
    description: "Advanced ceramic friction formulation providing outstanding bite, zero black dust, and noise-free operation.",
    specs: { "Material": "Prestige Ceramic", "Dust Index": "Ultra Low", "Life Expectancy": "40,000 km", "Shim": "Pre-attached Rubber" }
  },
  {
    id: "prod-battery",
    name: "Exide Premium High-CCA Maintenance Free Battery",
    category: "Electrical",
    price: 4999,
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=400",
    description: "Exceptional power reserves, high Cold Cranking Amps (CCA) for instant starts, and extreme temperature tolerance.",
    specs: { "Voltage": "12V", "Capacity": "55 Ah", "CCA Rating": "520 A", "Warranty": "48 Months" }
  },
  {
    id: "prod-tyre",
    name: "Michelin Pilot Sport 4S High-Performance Tyre",
    category: "Tyres",
    price: 12499,
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=400",
    description: "The ultimate track-proven road tire providing phenomenal wet/dry grip, premium compound stability, and precise feedback.",
    specs: { "Width": "225 mm", "Aspect Ratio": "45%", "Rim Diameter": "17 inch", "Load Index": "94Y" }
  },
  {
    id: "prod-wax",
    name: "Meguiar's Hybrid Ceramic Liquid Wax Coating",
    category: "Detailing",
    price: 1899,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400",
    description: "Sophisticated SiO2 hybrid ceramic protection that delivers extreme water-beading and a deep, glassy wet-look luster.",
    specs: { "Volume": "473 ml", "Protection": "Up to 6 Months", "Application": "Hand or Dual Action", "Technology": "SiO2 Hybrid" }
  },
  {
    id: "prod-purifier",
    name: "AeroSpace Carbon Fiber Active HEPA Air Purifier",
    category: "Accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400",
    description: "Breathe hospital-grade clean air. Eliminates PM2.5 particles, formaldehydes, and stubborn tobacco odors.",
    specs: { "Filter Type": "Active Carbon & True HEPA", "Coverage": "95 sq ft / hour", "Noise Level": "24 dB", "Power Input": "USB-C" }
  }
];

export const faqs = [
  {
    question: "Where is the nearest Autobird Garage workshop from my location?",
    answer: "We operate fully-equipped high-end master workshops strategically placed across the region. To make this absolutely stress-free for you, we provide a 100% Free Doorstep Pickup & Drop service — our certified drivers collect your car, bring it to our closest service bay, and deliver it back to your garage."
  },
  {
    question: "Will my manufacturer warranty get void if I service with you?",
    answer: "Absolutely not. We adhere strictly to the exact service standards, specifications, and checklists outlined by your car manufacturer. We exclusively use 100% authentic OEM spare parts and fluids, which legally protects your vehicle warranty under global automotive regulations."
  },
  {
    question: "How are you able to offer 40% cost savings compared to authorized dealers?",
    answer: "Authorized multi-story dealerships bear astronomical real-estate rents, franchise royalties, and heavy corporate overheads that they build directly into your labor costs. At Autobird Garage, we run optimized boutique facilities, purchase spare parts directly in bulk from top OEM manufacturers, and pass 100% of these supply chain efficiencies straight to our customers."
  },
  {
    question: "Do you offer cashless claims with my insurance provider?",
    answer: "Yes, we are official cashless partners with major national and multinational insurance providers, including HDFC Ergo, ICICI Lombard, Bajaj Allianz, Tata AIG, National Insurance, Oriental, and others. Our in-house insurance liaison desk handles the surveyors, documentation, and instant claims approval directly."
  },
  {
    question: "What does your 12-month service warranty cover?",
    answer: "Our written warranty covers any failure or malfunction on replacement OEM spare parts and our mechanical workmanship for a period of 12 Months or 10,000 km (whichever occurs first). If any issue arises, we collect your car, replace the item, and return it without charging a single penny."
  },
  {
    question: "How long does a standard full service package take?",
    answer: "A standard comprehensive or premium elite service package takes approximately 4 to 5 hours. This includes complete computer diagnostic scanning, fluid changes, brake query, tyre rotation, filter replacements, and a thorough premium washing session."
  },
  {
    question: "Can I sell my used car through Autobird Garage? How fast is the payout?",
    answer: "Yes, our certified Sell Used Cars team purchases high-quality pre-owned vehicles. We run a fast 150-point inspection at your doorstep, provide an transparent market valuation on the spot, and complete the paper transfer and 100% direct bank wire transfer within 60 minutes."
  },
  {
    question: "What is your working procedure on multi-brand vehicles?",
    answer: "Each premium bay is managed by master technicians who specialize in distinct automotive segments (e.g., German luxury cars, Japanese engines, European powertrains). We utilize segment-specific OBD scanners and ECU diagnostic tools customized for Audi, BMW, Toyota, Porsche, Honda, and others."
  },
  {
    question: "Do you supply original body paint and how accurate is it?",
    answer: "Yes, our climate-controlled paint booths leverage ultra-modern computerized spectrophotometer sensors. We read your vehicle's factory paint code plate and formulate the exact paint density, metallic flake spread, and clear coat depth to guarantee a flawless 100% visual match."
  },
  {
    question: "How do I secure a pickup slot and schedule a booking?",
    answer: "You can book in under 60 seconds! Scroll to our service booking forms, enter your parameters, and submit. The details are compiled into an instant premium WhatsApp request. Our customer concierge will immediately ping you with confirmation, driver details, and scheduling windows."
  }
];
