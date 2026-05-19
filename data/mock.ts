import { getAllPortfolioProjects } from "@/lib/portfolio";
import type {
  NavLink,
  Solution,
  Testimonial,
  FooterData,
  BlogAuthor,
  BlogArticle,
} from "@/types";

/** Paths use trailing slashes to match `next.config` `trailingSlash: true` (static export on Apache). */
export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about/" },
  { label: "Services", to: "/services/" },
  { label: "Portfolio", to: "/portfolio/" },
  { label: "Blogs", to: "/blogs/" },
  { label: "Contact", to: "/contact/", openInNewTab: true },
];

export const heroBadges = [
  { icon: "award", label: "TOP SOFTWARE DEVELOPMENT COMPANY" },
  { icon: "map-pin", label: "GLOBAL LEADERS, TOP B2B COMPANY, TOP DEVELOPERS" },
];

export const solutions: Solution[] = [
  {
    title: "Mobile App Development",
    description:
      "Veltrix, a top mobile app development agency, creates innovative, future-proof mobile solutions across various platforms. We combine cutting-edge technology with industry expertise to design apps that are functional, compatible, and ahead of the competition. Our services ensure seamless app development, empowering businesses to stay ahead in today's fast-evolving digital landscape.",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Software Development",
    description:
      "Substantiated by our drive to be a trend-setter, Veltrix, a leading software development agency, is continually achieving technology breakthroughs and empowering clients to remain at the top of their game. Software is the most transformational innovation of the last few decades and as your trusted software development agency, we help you untap its immense value in the most effective manner.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marketing Solutions",
    description:
      "At Veltrix, a leading advertising marketing agency, we create innovative marketing strategies to boost your brand's reach and engagement. Using data-driven methods, advanced digital tools, and compelling storytelling, we help businesses establish a strong market presence. As a premier marketing and advertising agency, we deliver impactful results that foster growth and success.",
    image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "GHL Services and Solutions",
    description:
      "At Veltrix, we deliver cutting-edge GoHighLevel (GHL) solutions, helping businesses automate marketing, manage CRM systems and optimize workflows. As one of the top GHL companies in UK, we proudly serve clients globally, including those seeking the best GHL service providers India and premium GHL providers Dubai. Boost your customer engagement and scale smarter with us.",
    image:
      "https://images.pexels.com/photos/5257005/pexels-photo-5257005.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const missionVision = {
  sectionTitle: "Innovative Software Solutions for Businesses",
  intro:
    "At Veltrix, we drive digital transformation by delivering the best artificial intelligence software and cutting-edge AI software solutions, tailored to empower businesses across diverse industries. Our innovative approach ensures companies stay ahead in an ever-evolving technological landscape, blending creativity, technical excellence and strategic insight to fuel long-term growth and success.",
  mission: {
    title: "Our Mission",
    text: "We are committed to delivering cutting-edge AI, software and mobile solutions that empower businesses to thrive. At Veltrix, our mission is to spark innovation, accelerate growth, and build long-lasting partnerships through creativity, technical excellence, and a relentless focus on results.",
  },
  vision: {
    title: "Our Vision",
    text: "We envision a future where technology drives innovation, efficiency, and growth. As a leading custom app development company and branding and marketing agency, we provide tailored solutions that help businesses navigate digital transformation. Our services spark innovation, build strong brands, and accelerate success in today's competitive digital landscape.",
  },
  ctaPrimary: "Start your Journey Today!",
  ctaSecondary: "Your Vision, our Expertise!",
};

export const testimonials: Testimonial[] = [
  {
    name: "John Carter",
    location: "New York",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    feedback:
      "Veltrix provided exceptional software solutions that revolutionized our operations. Highly recommend their services!",
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    feedback:
      "The innovative software solutions from Veltrix significantly improved our efficiency and productivity. Their team is knowledgeable and responsive, making collaboration seamless and enjoyable.",
  },
  {
    name: "Michael Brown",
    location: "London",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
    feedback:
      "Working with Veltrix was a game-changer for our business. Their attention to detail, technical expertise, and dedication delivered results beyond our expectations.",
  },
];

export const footerData: FooterData = {
  brand: "Veltrix",
  tagline: "Innovative software for digital transformation success.",
  email: "Info@veltrixinnovation.org",
  copyright: "\u00a9 2026 Veltrix. All rights reserved.",
  socials: [
    { icon: "instagram", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "facebook", href: "#" },
    { icon: "twitter", href: "#" },
  ],
};

export const topBannerText = "ENGINEERED FOR THE BOLD.";

export const heroImage =
  "https://images.unsplash.com/photo-1676944229887-b2def0f94185?auto=format&fit=crop&w=1600&q=80";

export const missionVisionImage =
  "https://images.pexels.com/photos/6985202/pexels-photo-6985202.jpeg?auto=compress&cs=tinysrgb&w=1600";

export const aboutPage = {
  hero: {
    eyebrow: "About Veltrix",
    title: "We engineer digital products that move markets",
    description:
      "Veltrix is a global technology studio crafting AI-native software, mobile experiences and automation systems for ambitious teams across the US, UK, India and Dubai.",
  },
  stats: [
    { value: "120+", label: "Products Shipped" },
    { value: "45+", label: "Enterprise Clients" },
    { value: "9", label: "Countries Served" },
    { value: "24/7", label: "Support Coverage" },
  ],
  values: [
    {
      icon: "rocket",
      title: "Engineered for Scale",
      text: "Every line of code we ship is built to grow with your business — from MVPs to millions of users.",
    },
    {
      icon: "shield",
      title: "Craft Over Hype",
      text: "We value durable craftsmanship over passing trends. Clean architecture, reliable systems, real outcomes.",
    },
    {
      icon: "users",
      title: "A True Partnership",
      text: "Your product team gains senior designers, engineers and strategists who care about your wins.",
    },
    {
      icon: "sparkles",
      title: "AI-Native Thinking",
      text: "We embed intelligence at the core of products — not as a feature, but as an operating principle.",
    },
  ],
  team: [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Daniel Cole",
      role: "VP of Engineering",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sofia Martins",
      role: "AI Research Lead",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
  ],
};

export const servicesPage = {
  hero: {
    eyebrow: "What We Do",
    title: "Services crafted for category-defining teams",
    description:
      "From discovery to launch and beyond — a full-stack partner for product, engineering, marketing and automation.",
  },
  items: [
    {
      icon: "smartphone",
      title: "Mobile App Development",
      text: "Native iOS, Android and cross-platform apps built with Swift, Kotlin and React Native.",
      bullets: ["iOS & Android", "React Native / Flutter", "App Store Strategy"],
    },
    {
      icon: "code",
      title: "Custom Software",
      text: "Web platforms, dashboards and SaaS products engineered for reliability and scale.",
      bullets: ["Web Platforms", "SaaS Products", "APIs & Integrations"],
    },
    {
      icon: "brain",
      title: "AI & Automation",
      text: "GPT-powered assistants, RAG pipelines, and intelligent automation that replaces busywork.",
      bullets: ["LLM Assistants", "RAG Pipelines", "Workflow Automation"],
    },
    {
      icon: "megaphone",
      title: "Marketing & Branding",
      text: "Positioning, identity, content and performance marketing — measured on pipeline, not vanity.",
      bullets: ["Brand Identity", "Performance Ads", "SEO & Content"],
    },
    {
      icon: "workflow",
      title: "GoHighLevel (GHL)",
      text: "Snapshot builds, CRM automations and multi-location rollouts for agencies and service brands.",
      bullets: ["Snapshot Builds", "CRM Automations", "White-label Support"],
    },
    {
      icon: "layout-dashboard",
      title: "Product Design (UI/UX)",
      text: "Research-backed product design that turns complex flows into effortless experiences.",
      bullets: ["Discovery & Research", "Design Systems", "Prototyping"],
    },
  ],
  process: [
    { step: "01", title: "Discover", text: "Goals, users, constraints and success metrics." },
    { step: "02", title: "Design", text: "Architecture, flows and polished product design." },
    { step: "03", title: "Build", text: "Weekly releases, continuous feedback, zero surprises." },
    { step: "04", title: "Scale", text: "Launch, iterate, grow — we stay embedded with your team." },
  ],
};

export const portfolioPage = {
  hero: {
    eyebrow: "Portfolio",
    title: "Proof of Delivery Across Products and Platforms",
    description:
      "Explore how we approach product problems, make technical decisions, and turn requirements into maintainable software that keeps improving after launch.",
  },
  categories: ["All", "Mobile", "Web", "AI", "Branding"],
  projects: getAllPortfolioProjects(),
};

const authorArjun: BlogAuthor = {
  name: "Arjun Mehta",
  role: "Founder & CEO",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
};
const authorPriya: BlogAuthor = {
  name: "Priya Sharma",
  role: "Head of Design",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
};
const authorDaniel: BlogAuthor = {
  name: "Daniel Cole",
  role: "VP of Engineering",
  avatar:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
};
const authorSofia: BlogAuthor = {
  name: "Sofia Martins",
  role: "AI Research Lead",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
};

export const blogsPage = {
  hero: {
    eyebrow: "Veltrix Journal",
    title: "Ideas on AI, product and the modern craft of software",
    description:
      "Essays, playbooks and field notes from our engineers, designers and founders.",
  },
  featured: {
    slug: "ai-native-product-playbook",
    title:
      "The AI-native product playbook: building teams, systems and culture for the next decade",
    excerpt:
      "A practical field guide for founders rebuilding their product org around intelligence — not just as a feature, but as an operating principle.",
    category: "Strategy",
    read_time: "12 min read",
    date: "Jul 02, 2026",
    author: authorArjun,
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p" as const,
        text: "Most teams still treat AI like a feature — something to sprinkle on top of a roadmap once a quarter. The teams that are compounding the fastest do the opposite.",
      },
    ],
  } satisfies Partial<BlogArticle>,
  articles: [
    {
      slug: "designing-trust-into-ai-copilots",
      title: "Designing trust into AI copilots",
      excerpt:
        "How we approach visibility, control and provenance when shipping LLM features to real users.",
      category: "Design",
      read_time: "8 min read",
      date: "Jun 24, 2026",
      author: authorPriya,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    },
    {
      slug: "mvp-to-scale-90-day-framework",
      title: "From MVP to scale: a 90-day engineering framework",
      excerpt:
        "The architecture, rituals and metrics we use to take early products from fragile to production-grade.",
      category: "Engineering",
      read_time: "10 min read",
      date: "Jun 12, 2026",
      author: authorDaniel,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      slug: "ghl-playbook-for-agencies",
      title: "The GHL playbook for scaling agencies",
      excerpt:
        "Snapshots, automations and multi-location rollouts — what actually works for modern agencies.",
      category: "Automation",
      read_time: "7 min read",
      date: "May 30, 2026",
      author: authorArjun,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80",
    },
    {
      slug: "shipping-mobile-apps-that-feel-native",
      title: "Shipping mobile apps that feel native",
      excerpt:
        "Performance, motion and the small details that separate a great app from a good one.",
      category: "Mobile",
      read_time: "6 min read",
      date: "May 14, 2026",
      author: authorPriya,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    },
    {
      slug: "brand-systems-for-b2b-saas",
      title: "Brand systems for B2B SaaS",
      excerpt:
        "A framework for building brand systems that hold up across product, marketing and sales.",
      category: "Branding",
      read_time: "5 min read",
      date: "Apr 28, 2026",
      author: authorPriya,
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
    },
    {
      slug: "instrumenting-products-for-real-learning",
      title: "Instrumenting products for real learning",
      excerpt:
        "Events, funnels and weekly reviews — how we turn product analytics into compounding insight.",
      category: "Product",
      read_time: "9 min read",
      date: "Apr 10, 2026",
      author: authorSofia,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
  ] satisfies Partial<BlogArticle>[],
};
