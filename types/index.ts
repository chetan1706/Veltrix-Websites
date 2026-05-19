export interface NavLink {
  label: string;
  to: string;
  /** When true, nav renders with target="_blank" (e.g. booking page in a new tab). */
  openInNewTab?: boolean;
}

export interface Solution {
  id?: number;
  title: string;
  description: string;
  image: string;
  order?: number;
}

export interface Testimonial {
  id?: number;
  name: string;
  location: string;
  rating: number;
  avatar: string;
  feedback: string;
  order?: number;
}

export interface TeamMember {
  id?: number;
  name: string;
  role: string;
  avatar: string;
  order?: number;
}

export interface Service {
  id?: number;
  icon: string;
  title: string;
  text: string;
  bullets: string[];
  order?: number;
}

export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id?: string | number;
  slug?: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  order?: number;
  cover_image?: string;
  metrics?: PortfolioMetric[];
  sections?: { heading: string; body: string }[];
  gallery?: string[];
}

export interface PortfolioProjectDetail extends PortfolioProject {
  slug: string;
  subtitle: string;
  industry: string;
  industryLabel: string;
  duration: string;
  teamSize: string;
  technologies: string[];
  services: string[];
  contentHtml: string;
  metaDescription: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogContentBlock {
  type: "p" | "h2" | "quote" | "list" | "image";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
}

export interface BlogArticle {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  date: string;
  author?: BlogAuthor;
  image: string;
  is_featured?: boolean;
  body_md?: string;
  content?: BlogContentBlock[];
  views?: number;
}

export interface BlogComment {
  id: number;
  name: string;
  text: string;
  created_at: string;
}

export interface Social {
  icon: string;
  href: string;
}

export interface FooterData {
  brand: string;
  tagline: string;
  email: string;
  copyright: string;
  socials: Social[];
}
