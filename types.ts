export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  price?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  hotline: string;
  nav: NavItem[];
}

export interface HeroData {
  badge: string;
  headlinePart1: string;
  headlinePart2: string;
  subheadline: string;
  ctaPrimary: string;
  ctaPrimaryLink: string;
  ctaSecondary: string;
  ctaSecondaryLink: string;
  polaroidText: string;
  image: string;
}

export interface ProductsData {
  badge: string;
  title: string;
  items: Product[];
  viewAllText: string;
}

export interface ServicesData {
  titlePart1: string;
  titlePart2: string;
  descriptions: string[];
  features: string[];
  cta: string;
  image: string;
}

export interface ContactData {
  title: string;
  description: string;
  addressLabel: string;
  address: string;
  hotlineLabel: string;
  hotline: string;
  hoursLabel: string;
  hours: string;
  connectTitle: string;
  mapUrl: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface FooterData {
  brand: string;
  tagline: string;
  copyright: string;
  year: string;
  links: { text: string; href: string }[];
  decorText: string;
}

export interface Assets {
  kraftTexture: string;
}

export interface SiteData {
  header: HeaderData;
  hero: HeroData;
  products: ProductsData;
  services: ServicesData;
  contact: ContactData;
  footer: FooterData;
  assets: Assets;
}