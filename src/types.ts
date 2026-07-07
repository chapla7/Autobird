export interface HeroSlide {
  id: number;
  subtitle: string;
  headline: string;
  highlight: string;
  ctaText: string;
  ctaTextSecondary?: string;
  ctaAction: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  overview: string;
  included: string[];
  estimatedTime: string;
  startingPrice: string;
  image: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface BrandItem {
  name: string;
  logoUrl?: string;
  type: "car" | "bike";
}

export interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string; // fallback high quality auto video loop or cover image
  coverImage: string;
}

export interface InsuranceCard {
  id: number;
  title: string;
  description: string;
  benefit: string;
  bgGradient: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  vehicle: string;
  serviceTaken: string;
  rating: number;
  comment: string;
  photo: string;
  verified: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs: { [key: string]: string };
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}
