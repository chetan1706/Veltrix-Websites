import type { PortfolioProjectDetail } from "@/types";

/** Portfolio case studies sourced from Veltrix innovation portfolio data. */
export const portfolioProjects: PortfolioProjectDetail[] = 
[
  {
    "slug": "learnai-adaptive-platform",
    "title": "LearnAI — Adaptive Learning Platform",
    "subtitle": "AI-powered adaptive LMS that adjusts content difficulty per student in real-time — adopted by 500 schools with a 35% test score improvement.",
    "category": "AI",
    "tag": "EdTech · Python + TensorFlow",
    "image": "/portfolio/learnai-adaptive-platform.svg",
    "industry": "education",
    "industryLabel": "EdTech",
    "duration": "10 months",
    "teamSize": "5 engineers",
    "technologies": [
      "Python",
      "TensorFlow",
      "React",
      "Node.js",
      "PostgreSQL",
      "AI/ML",
      "Adaptive Algorithms",
      "REST APIs"
    ],
    "services": [
      "AI Integration",
      "Full-Stack Development",
      "Machine Learning",
      "EdTech Engineering"
    ],
    "metrics": [
      {
        "label": "Adaptation",
        "value": "Real-time per student"
      },
      {
        "label": "Recognition",
        "value": "EdTech Digest Top 10"
      },
      {
        "label": "Schools Adopted",
        "value": "500"
      },
      {
        "label": "Test Score Improvement",
        "value": "35%"
      }
    ],
    "contentHtml": "<h2>The Challenge</h2><p>Traditional LMS platforms treat all students the same. Our client wanted a platform that adapts to each student's learning pace and style — moving faster for high performers and providing more support for those who struggle, automatically and at scale.</p><h2>Our Solution</h2><p>We built an AI-powered adaptive learning engine that personalises the learning experience for every student:</p><ul><li><strong>Adaptive Engine:</strong> Python and TensorFlow model that analyses student performance patterns and adjusts content difficulty, format, and sequencing in real time</li><li><strong>Performance Analytics:</strong> Student-level and school-level dashboards tracking mastery by topic, time-on-task, quiz performance, and improvement trends</li><li><strong>Content Recommendation:</strong> AI-driven next-lesson recommendations based on demonstrated gaps, learning velocity, and curriculum targets</li><li><strong>Teacher Dashboard:</strong> Class-wide visibility into individual student progress, flagging students at risk before they fall behind</li><li><strong>Multi-School Architecture:</strong> Tenant-aware deployment supporting 500+ school instances with independent data isolation and curriculum configuration</li></ul><h2>Technical Approach</h2><p>The platform was built with Python and TensorFlow for the AI layer, a React frontend for both student and teacher interfaces, and Node.js APIs connecting the frontend to the learning engine. The adaptive model was trained on anonymised student interaction data and retrained periodically as usage patterns evolved.</p><h2>Results</h2><p>35% improvement in student test scores. 500 schools adopted the platform. Featured in EdTech Digest's Top 10 Innovations of the year.</p>",
    "metaDescription": "Case study: AI adaptive learning platform with TensorFlow, Python, and React. 35% score improvement. 500 schools. EdTech Digest Top 10."
  },
  {
    "slug": "shopforge-multi-vendor-marketplace",
    "title": "ShopForge — Multi-Vendor Marketplace",
    "subtitle": "Multi-vendor fashion marketplace with 5,000+ vendors onboarded, $2M GMV in Q1, and a 4.8/5 app store rating.",
    "category": "Web",
    "tag": "E-commerce · Next.js + React",
    "image": "/portfolio/shopforge-multi-vendor-marketplace.svg",
    "industry": "e-commerce",
    "industryLabel": "E-commerce",
    "duration": "9 months",
    "teamSize": "7 engineers",
    "technologies": [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Stripe Connect",
      "AWS"
    ],
    "services": [
      "Full-Stack Development",
      "Marketplace Engineering",
      "Payment Integrations",
      "Search Engineering"
    ],
    "metrics": [
      {
        "label": "Q1 Gmv",
        "value": "$2M"
      },
      {
        "label": "App Store Rating",
        "value": "4.8/5"
      },
      {
        "label": "Onboarding Period",
        "value": "6 months"
      },
      {
        "label": "Vendors Onboarded",
        "value": "5,000+"
      }
    ],
    "contentHtml": "<h2>The Challenge</h2><p>Our client wanted to build the 'Amazon of fashion' in Southeast Asia — a marketplace that could onboard thousands of vendors while providing a seamless buyer experience with reliable payment splitting and powerful product search.</p><h2>Our Solution</h2><p>We built a multi-tenant marketplace engineered for scale from day one:</p><ul><li><strong>SSR-Optimised Frontend:</strong> Next.js with server-side rendering for fast page loads, SEO performance, and consistent buyer experience across mobile and web</li><li><strong>Vendor Portal:</strong> Full-featured self-service portal for vendors to manage listings, track orders, view payouts, and handle returns independently</li><li><strong>Payment Splitting:</strong> Stripe Connect integration for automatic revenue splitting across vendors on multi-item orders, with configurable platform fees</li><li><strong>Product Search:</strong> Elasticsearch-powered search with faceted filtering by category, vendor, price, size, and availability — supporting 5,000+ vendor catalogues</li><li><strong>Buyer Experience:</strong> Unified cart, wishlist, order tracking, and review system across all vendors with a single checkout</li></ul><h2>Technical Approach</h2><p>The platform was built with Next.js for the buyer-facing storefront, a Node.js backend for platform logic, and PostgreSQL as the primary database. Redis handled session management and search caching. Elasticsearch powered product discovery at scale. Stripe Connect managed all multi-party payment flows with automated payout scheduling for vendors.</p><h2>Results</h2><p>5,000+ vendors onboarded in 6 months. $2M GMV in the first quarter. 4.8/5 app store rating across iOS and Android.</p>",
    "metaDescription": "Case study: multi-vendor fashion marketplace with Next.js, Stripe Connect, Elasticsearch, 5,000+ vendors, and $2M Q1 GMV."
  },
  {
    "slug": "mediconnect-telemedicine-platform",
    "title": "MediConnect — Telemedicine Platform",
    "subtitle": "HIPAA-compliant telemedicine platform scaling across 200+ clinics with encrypted video, EHR integration, and zero compliance violations.",
    "category": "Web",
    "tag": "Healthtech · WebRTC + Node.js",
    "image": "/portfolio/mediconnect-telemedicine-platform.svg",
    "industry": "healthcare",
    "industryLabel": "Healthtech",
    "duration": "8 months",
    "teamSize": "5 engineers",
    "technologies": [
      "WebRTC",
      "Node.js",
      "React",
      "PostgreSQL",
      "AWS",
      "HIPAA Compliance",
      "EHR Integration",
      "Encryption"
    ],
    "services": [
      "Full-Stack Development",
      "Healthcare Technology",
      "HIPAA Compliance",
      "Video Engineering"
    ],
    "metrics": [
      {
        "label": "Onboarding",
        "value": "3 months"
      },
      {
        "label": "Clinics Onboarded",
        "value": "200+"
      },
      {
        "label": "Patient Satisfaction",
        "value": "98%"
      },
      {
        "label": "Compliance Violations",
        "value": "0"
      }
    ],
    "contentHtml": "<h2>The Challenge</h2><p>A healthcare network needed a HIPAA-compliant telemedicine platform that could scale across 200 clinics while maintaining strict data privacy standards. Their existing video infrastructure had no audit trail, no EHR integration, and couldn't meet compliance requirements as they grew.</p><h2>Our Solution</h2><p>We built a HIPAA-compliant telemedicine platform from the ground up:</p><ul><li><strong>Encrypted Video:</strong> End-to-end encrypted video consultations using WebRTC with automatic session recording and audit logging</li><li><strong>EHR Integration:</strong> Bidirectional sync with clinic EHR systems for real-time access to patient records during calls</li><li><strong>Compliance Automation:</strong> Automated audit logging for every session, data access event, and prescription — reducing compliance overhead significantly</li><li><strong>Multi-Clinic Architecture:</strong> Tenant-aware platform supporting 200+ clinic instances with isolated data, custom branding, and role-based access per clinic</li><li><strong>Appointment Scheduling:</strong> Integrated booking flows with automated reminders, cancellation handling, and calendar sync</li></ul><h2>Technical Approach</h2><p>The platform was built with Node.js on the backend and React for the patient and clinician interfaces. WebRTC handled encrypted peer-to-peer video with fallback to TURN servers for challenging network conditions. All data was encrypted at rest and in transit, with access controls mapped to HIPAA's minimum necessary standard.</p><h2>Results</h2><p>200+ clinics onboarded within 3 months. 98% patient satisfaction score. Zero compliance violations in the first year of operation.</p>",
    "metaDescription": "Case study: HIPAA-compliant telemedicine platform with encrypted video, EHR integration, and zero violations across 200+ clinics."
  },
  {
    "slug": "ai-knowledge-assistant-rag-product",
    "title": "AI Knowledge Assistant and RAG Product",
    "subtitle": "AI-integrated product with retrieval-augmented generation and guided user workflows.",
    "category": "AI",
    "tag": "Media · AI Integration + RAG",
    "image": "/portfolio/ai-knowledge-assistant-rag-product.svg",
    "industry": "media",
    "industryLabel": "Media",
    "duration": "Product engagement",
    "teamSize": "AI/full-stack support",
    "technologies": [
      "AI Integration",
      "RAG",
      "Vector Search",
      "Node.js",
      "React",
      "APIs"
    ],
    "services": [
      "AI Integration",
      "RAG Development",
      "Full-Stack Development"
    ],
    "metrics": [
      {
        "label": "Ux",
        "value": "Guided Onboarding"
      },
      {
        "label": "Ai Type",
        "value": "RAG + Vector Search"
      },
      {
        "label": "Outcome",
        "value": "Context-aware Answers"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation built an AI-powered knowledge assistant using retrieval-augmented generation (RAG) to help users navigate complex product information, receive context-aware answers, and complete guided onboarding workflows efficiently.</p><h2>Challenge</h2><p>Users faced significant friction during onboarding due to dense documentation and a lack of real-time, context-specific guidance. The business needed a scalable AI solution that could replace static FAQs and reduce manual support load for common user queries.</p><h2>Architecture &amp; Scope</h2><p>The product was built as a conversational AI layer on top of structured product knowledge:</p><ul><li><strong>RAG Pipeline:</strong> Document ingestion, chunking, embedding, and vector storage for retrieval</li><li><strong>Query Processing:</strong> User queries matched to relevant knowledge chunks using vector similarity search</li><li><strong>Response Generation:</strong> Context-enriched prompts sent to the LLM for accurate, grounded answers</li><li><strong>Onboarding Flows:</strong> Guided multi-step journeys powered by AI-driven decision logic</li><li><strong>Backend APIs:</strong> Node.js services connecting the frontend to the AI pipeline</li></ul><h2>Technical Approach</h2><p>The AI layer was built using vector search for retrieval, with a React frontend for the user-facing interface. The backend handled document embeddings, vector similarity queries, and prompt assembly before LLM inference. Responses were grounded in product-specific content to minimize hallucination and maintain accuracy at scale.</p><h2>Impact</h2><p>The assistant significantly reduced friction in the user onboarding journey, providing instant contextual answers without requiring support team intervention. The RAG approach ensured responses were consistently accurate, grounded in real product data, and adapted to the specific context of each user query.</p>",
    "metaDescription": "AI product case study covering RAG workflows, contextual assistance, guided user journeys, and full-stack implementation."
  },
  {
    "slug": "fintrack-real-time-trading-platform",
    "title": "FinTrack — Real-Time Trading Platform",
    "subtitle": "Institutional-grade retail trading platform with sub-100ms order execution serving 50,000+ daily traders.",
    "category": "Web",
    "tag": "Fintech · Go + React",
    "image": "/portfolio/fintrack-real-time-trading-platform.svg",
    "industry": "fintech",
    "industryLabel": "Fintech",
    "duration": "12 months",
    "teamSize": "6 engineers",
    "technologies": [
      "Go",
      "React",
      "ScyllaDB",
      "WebSockets",
      "Microservices",
      "Node.js",
      "Redis",
      "PostgreSQL"
    ],
    "services": [
      "Full-Stack Development",
      "Backend Development",
      "System Architecture"
    ],
    "metrics": [
      {
        "label": "Data Latency",
        "value": "Real-time"
      },
      {
        "label": "Order Execution",
        "value": "<100ms"
      },
      {
        "label": "Platform Uptime",
        "value": "99.99%"
      },
      {
        "label": "Daily Active Traders",
        "value": "50,000+"
      }
    ],
    "contentHtml": "<h2>The Challenge</h2><p>Our client needed a retail trading platform that could compete with institutional tools — real-time data feeds, complex charting, and reliable order execution at scale. Existing retail platforms couldn't meet the latency and reliability demands their trading volume required.</p><h2>Our Solution</h2><p>We built a microservices architecture purpose-built for high-throughput trading:</p><ul><li><strong>Order Matching Engine:</strong> Built in Go for sub-100ms execution with concurrent processing across trading pairs</li><li><strong>Trading UI:</strong> React-based interface with real-time candlestick charts, order book depth, and portfolio tracking</li><li><strong>Time-Series Storage:</strong> ScyllaDB for high-throughput market data writes and reads at scale</li><li><strong>Real-Time Data Feeds:</strong> WebSocket-driven price streaming with low-latency delivery to all connected clients</li><li><strong>Risk Controls:</strong> Order validation, position limits, and circuit breakers built into the matching engine</li></ul><h2>Technical Approach</h2><p>The platform was designed around a microservices model where each component — market data ingestion, order routing, matching, settlement, and UI delivery — scaled independently. Go handled the performance-critical matching layer, while Node.js managed ancillary services. Redis served as the high-speed cache for orderbook state, and ScyllaDB handled the sustained write load of time-series market data without degradation.</p><h2>Results</h2><p>The platform now serves 50,000+ daily active traders with 99.99% uptime and sub-100ms order execution latency — metrics that previously only institutional platforms could achieve at this price point.</p>",
    "metaDescription": "Case study: institutional-grade retail trading platform built with Go, React, and ScyllaDB. Sub-100ms execution. 50,000+ daily traders."
  },
  {
    "slug": "survey-analytics-ai-recommendation-platform",
    "title": "Survey, Analytics, and AI Recommendation Platform",
    "subtitle": "Enterprise survey platform with reporting, feedback analysis, and AI-generated recommendations.",
    "category": "AI",
    "tag": "Media · ASP.NET + .NET",
    "image": "/portfolio/survey-analytics-ai-recommendation-platform.svg",
    "industry": "media",
    "industryLabel": "Media",
    "duration": "Multi-phase product development",
    "teamSize": "Full-stack product support",
    "technologies": [
      "ASP.NET",
      ".NET",
      "Angular",
      "AI Integration",
      "Reporting",
      "Analytics"
    ],
    "services": [
      "Full-Stack Development",
      "AI Integration",
      "Analytics Dashboards"
    ],
    "metrics": [
      {
        "label": "Stack",
        "value": ".NET + Angular"
      },
      {
        "label": "Ai Feature",
        "value": "Recommendations Engine"
      },
      {
        "label": "Evaluation Types",
        "value": "5+"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation contributed to an enterprise survey and analytics platform that helps organizations collect structured feedback, evaluate performance, and generate AI-powered improvement recommendations.</p><h2>Challenge</h2><p>Organizations lacked a structured way to turn employee and client feedback into actionable insights. Existing tools were too generic or lacked intelligent analysis — leaving data unused after collection and forcing manual interpretation by HR and leadership teams.</p><h2>Architecture &amp; Scope</h2><p>The platform covered the full survey lifecycle:</p><ul><li><strong>Survey Creation:</strong> Multi-type evaluation forms including My360-style assessments</li><li><strong>Feedback Workflows:</strong> Employee and client feedback with configurable distribution and response tracking</li><li><strong>Analytics Dashboards:</strong> Response aggregation, visual reporting, and trend analysis across teams</li><li><strong>AI Recommendations:</strong> Automated analysis of results to surface actionable business improvement areas</li></ul><h2>Technical Approach</h2><p>The application was built using ASP.NET and .NET for the backend, with Angular powering the frontend dashboards. AI integration analyzed survey response patterns to generate structured business improvement suggestions. Reporting supported both individual-level and organizational-level insights with configurable export options.</p><h2>Impact</h2><p>The platform enabled organizations to move from raw feedback collection to structured, AI-assisted decision-making — reducing manual analysis effort and creating a repeatable, scalable process for identifying performance gaps and improvement opportunities.</p>",
    "metaDescription": "Enterprise survey analytics platform with .NET, Angular, reports, feedback analysis, and AI-generated recommendations."
  },
  {
    "slug": "service-marketplace-grooming-providers",
    "title": "Service Marketplace for Grooming Providers",
    "subtitle": "Marketplace with customer-facing UI, admin operations, and vendor management workflows.",
    "category": "Web",
    "tag": "Retail · NestJS + Node.js",
    "image": "/portfolio/service-marketplace-grooming-providers.svg",
    "industry": "retail",
    "industryLabel": "Retail",
    "duration": "Ongoing milestones",
    "teamSize": "Full-stack delivery",
    "technologies": [
      "NestJS",
      "Node.js",
      "React",
      "PostgreSQL",
      "REST APIs"
    ],
    "services": [
      "Full-Stack Development",
      "Backend Development",
      "Frontend Development"
    ],
    "metrics": [
      {
        "label": "Backend",
        "value": "NestJS + PostgreSQL"
      },
      {
        "label": "Delivery",
        "value": "Milestone-based"
      },
      {
        "label": "Panels Delivered",
        "value": "3"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation delivered a full-stack service marketplace for a grooming business, enabling customers to discover and book grooming services while vendors manage listings and administrators oversee operations.</p><h2>Challenge</h2><p>The business needed a unified platform serving three distinct user personas — customers booking services, vendors managing offerings, and administrators maintaining platform health — all without operational overlap or conflicting access.</p><h2>Architecture &amp; Scope</h2><p>We designed and built three separate panels sharing a common NestJS backend:</p><ul><li><strong>Customer Panel:</strong> Service discovery, booking flows, and purchase journeys</li><li><strong>Vendor Panel:</strong> Listing management, order handling, and revenue tracking</li><li><strong>Admin Panel:</strong> Platform oversight, vendor approval, and operational controls</li></ul><h2>Technical Approach</h2><p>The backend was built using NestJS with PostgreSQL for relational data integrity. The React frontend delivered smooth, component-driven user interfaces. REST APIs handled communication across panels, with role-based authentication separating access levels cleanly.</p><h2>Impact</h2><p>The platform gave the business a production-ready marketplace with clear separation of concerns across user roles, structured vendor workflows, and a customer-facing booking experience ready for market launch.</p>",
    "metaDescription": "Marketplace platform case study covering customer UI, admin panel, vendor panel, and NestJS backend delivery."
  },
  {
    "slug": "event-management-booking-platform",
    "title": "Event Management and Booking Platform",
    "subtitle": "Event platform backend with payment flows, service integrations, and booking operations.",
    "category": "Web",
    "tag": "Media · Node.js + Payment APIs",
    "image": "/portfolio/event-management-booking-platform.svg",
    "industry": "media",
    "industryLabel": "Media",
    "duration": "Project-based engagement",
    "teamSize": "Backend/API support",
    "technologies": [
      "Node.js",
      "Payment APIs",
      "REST APIs",
      "PostgreSQL",
      "Integrations"
    ],
    "services": [
      "Backend Development",
      "Payment Integrations",
      "API Development"
    ],
    "metrics": [
      {
        "label": "Domain",
        "value": "Event + Booking"
      },
      {
        "label": "Backend",
        "value": "Node.js APIs"
      },
      {
        "label": "Integration",
        "value": "Payment Flows"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation contributed to an event management and booking platform used to support event operations, payment flows, and service integrations.</p><h2>The Challenge</h2><p>The platform needed reliable backend infrastructure to handle concurrent bookings, payment processing, and third-party service integrations without creating bottlenecks during peak event periods.</p><h2>Our Solution</h2><p>We designed and built the backend services that powered the platform's core operations:</p><ul><li><strong>Booking Engine:</strong> Concurrency-safe booking workflows with inventory reservation, confirmation flows, and cancellation handling</li><li><strong>Payment Services:</strong> Integrated payment gateway APIs with automated refund workflows, partial payment support, and reconciliation reporting</li><li><strong>Integration Layer:</strong> Clean API interfaces connecting third-party event services, venue systems, and communication providers</li><li><strong>Admin APIs:</strong> Structured backend APIs for event management, capacity controls, and operational oversight</li></ul><h2>Impact</h2><p>The platform supported smoother event workflows by strengthening backend operations and payment/integration reliability — enabling higher booking throughput with fewer operational failures.</p>",
    "metaDescription": "Event management and booking case study covering backend services, payment flows, booking engine, and third-party integrations."
  },
  {
    "slug": "developer-staff-augmentation-product-engineering",
    "title": "Developer Staff Augmentation for Product Engineering",
    "subtitle": "Dedicated developer support for feature delivery, API development, bug fixing, and product maintenance.",
    "category": "Web",
    "tag": "SaaS · React + Node.js",
    "image": "/portfolio/developer-staff-augmentation-product-engineering.svg",
    "industry": "saas",
    "industryLabel": "SaaS",
    "duration": "6+ months",
    "teamSize": "Full-stack Developer",
    "technologies": [
      "React",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "PostgreSQL",
      "GitHub"
    ],
    "services": [
      "Staff Augmentation",
      "Full-Stack Development",
      "Backend Development"
    ],
    "metrics": [
      {
        "label": "Role",
        "value": "Full-stack Developer"
      },
      {
        "label": "Stack",
        "value": "React + Node.js + TypeScript"
      },
      {
        "label": "Duration",
        "value": "6+ Months"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation supplied developer capacity to a product engineering team that needed reliable execution support without slowing down internal priorities.</p><h2>Scope</h2><p>The work included frontend tasks, backend API development, bug fixing, code reviews, integration support, documentation, and coordination with the client's internal team.</p><h2>Impact</h2><p>The engagement helped reduce backlog pressure, accelerate feature delivery, and maintain product quality while the client scaled engineering capacity.</p>",
    "metaDescription": "Developer staff augmentation case study covering feature delivery, API development, bug fixing, and product engineering support."
  },
  {
    "slug": "qa-staff-augmentation-web-mobile-testing",
    "title": "QA Staff Augmentation for Web and Mobile Testing",
    "subtitle": "Dedicated QA support for regression testing, test planning, release validation, and quality gates.",
    "category": "Mobile",
    "tag": "Media · Manual QA + Regression Testing",
    "image": "/portfolio/qa-staff-augmentation-web-mobile-testing.svg",
    "industry": "media",
    "industryLabel": "Media",
    "duration": "Ongoing support",
    "teamSize": "QA Engineer",
    "technologies": [
      "Manual QA",
      "Regression Testing",
      "Test Cases",
      "Browser Testing",
      "Mobile Testing",
      "Bug Tracking"
    ],
    "services": [
      "Staff Augmentation",
      "QA Testing",
      "Product Support"
    ],
    "metrics": [
      {
        "label": "Role",
        "value": "QA Engineer"
      },
      {
        "label": "Method",
        "value": "Manual + Regression"
      },
      {
        "label": "Coverage",
        "value": "Web + Mobile"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation provided QA support for a product team that needed stronger release validation across web and mobile workflows.</p><h2>Scope</h2><p>The QA work covered test case preparation, regression testing, exploratory testing, bug reporting, release checks, cross-browser validation, mobile workflow testing, and coordination with developers.</p><h2>Impact</h2><p>The engagement improved release confidence, reduced missed defects, and gave the team a clearer quality process before production deployments.</p>",
    "metaDescription": "QA staff augmentation case study covering regression testing, test planning, release validation, and web/mobile quality assurance."
  },
  {
    "slug": "project-manager-staff-augmentation-saas-delivery",
    "title": "Project Manager Staff Augmentation for SaaS Delivery",
    "subtitle": "Dedicated project management support for sprint planning, stakeholder coordination, and delivery tracking.",
    "category": "Web",
    "tag": "SaaS · Agile Delivery + Sprint Planning",
    "image": "/portfolio/project-manager-staff-augmentation-saas-delivery.svg",
    "industry": "saas",
    "industryLabel": "SaaS",
    "duration": "3+ months",
    "teamSize": "Project Manager",
    "technologies": [
      "Agile Delivery",
      "Sprint Planning",
      "Jira",
      "Requirement Management",
      "Release Coordination"
    ],
    "services": [
      "Staff Augmentation",
      "Project Management",
      "Product Delivery"
    ],
    "metrics": [
      {
        "label": "Role",
        "value": "Project Manager"
      },
      {
        "label": "Scope",
        "value": "Sprint + Stakeholder"
      },
      {
        "label": "Methodology",
        "value": "Agile + Jira"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation supported a SaaS product team with an experienced project manager to improve delivery planning and communication.</p><h2>Scope</h2><p>The engagement included sprint planning, backlog coordination, requirement clarification, stakeholder updates, release tracking, risk management, and cross-functional coordination between design, engineering, and QA.</p><h2>Impact</h2><p>The team gained clearer priorities, better delivery visibility, and a more predictable release rhythm without hiring a full-time internal project manager immediately.</p>",
    "metaDescription": "Staff augmentation case study for project management support, sprint planning, stakeholder coordination, and SaaS delivery tracking."
  },
  {
    "slug": "gohighlevel-crm-marketing-automation-setup",
    "title": "GoHighLevel CRM and Marketing Automation Setup",
    "subtitle": "GHL implementation for lead capture, pipeline automation, campaigns, and client follow-up workflows.",
    "category": "Branding",
    "tag": "Media · GoHighLevel + CRM Workflows",
    "image": "/portfolio/gohighlevel-crm-marketing-automation-setup.svg",
    "industry": "media",
    "industryLabel": "Media",
    "duration": "Automation setup",
    "teamSize": "CRM/automation specialist",
    "technologies": [
      "GoHighLevel",
      "CRM Workflows",
      "Email Automation",
      "SMS Automation",
      "Funnels",
      "Webhooks"
    ],
    "services": [
      "CRM Automation",
      "Marketing Automation",
      "Tech Consulting"
    ],
    "metrics": [
      {
        "label": "Pipeline",
        "value": "Sales Funnels"
      },
      {
        "label": "Platform",
        "value": "GoHighLevel CRM"
      },
      {
        "label": "Automation",
        "value": "Email + SMS Workflows"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation supported a GoHighLevel implementation for a service business that needed better lead capture, pipeline visibility, and automated client follow-up.</p><h2>Scope</h2><p>The work included CRM pipeline configuration, forms and funnel setup, automated email/SMS workflows, appointment flow support, tagging, segmentation, and operational handoff.</p><h2>Impact</h2><p>The setup helped the business respond faster to leads, reduce manual follow-up work, and maintain a clearer view of prospect stages inside the sales pipeline.</p>",
    "metaDescription": "GoHighLevel CRM and marketing automation case study covering lead capture, pipeline setup, funnels, and automated follow-up workflows."
  },
  {
    "slug": "property-search-listing-saas-platform",
    "title": "Property Search and Listing SaaS Platform",
    "subtitle": "Multi-tenant property search and listing platform with scalable backend architecture.",
    "category": "Web",
    "tag": "Real Estate · Node.js + React",
    "image": "/portfolio/property-search-listing-saas-platform.svg",
    "industry": "real estate",
    "industryLabel": "Real Estate",
    "duration": "Project-based engagement",
    "teamSize": "Architecture/backend support",
    "technologies": [
      "Node.js",
      "React",
      "PostgreSQL",
      "Multi-tenant Architecture",
      "APIs"
    ],
    "services": [
      "SaaS Development",
      "Backend Development",
      "Architecture Consulting"
    ],
    "metrics": [
      {
        "label": "Stack",
        "value": "Node.js + PostgreSQL"
      },
      {
        "label": "Domain",
        "value": "Property Search"
      },
      {
        "label": "Architecture",
        "value": "Multi-tenant SaaS"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation worked on a property search and listing application designed for multi-tenant usage and scalable backend operations.</p><h2>Scope</h2><p>The engagement focused on structured backend design, tenant-aware workflows, listing management, search-related product flows, and maintainable architecture.</p><h2>Impact</h2><p>The platform created a stronger foundation for property data management, search experiences, and SaaS-style scaling across users or organizations.</p>",
    "metaDescription": "PropTech SaaS case study for a multi-tenant property search and listing application with scalable backend architecture."
  },
  {
    "slug": "cargo-tracking-trading-operations-application",
    "title": "Cargo Tracking and Trading Operations Application",
    "subtitle": "Data-intensive cargo application for real-time tracking and trading workflows.",
    "category": "Web",
    "tag": "Logistics · Python + Node.js",
    "image": "/portfolio/cargo-tracking-trading-operations-application.svg",
    "industry": "logistics",
    "industryLabel": "Logistics",
    "duration": "Project-based engagement",
    "teamSize": "Backend/frontend support",
    "technologies": [
      "Python",
      "Node.js",
      "React",
      "Real-time Data",
      "APIs"
    ],
    "services": [
      "Backend Development",
      "Frontend Development",
      "Data Engineering"
    ],
    "metrics": [
      {
        "label": "Api",
        "value": "Real-time"
      },
      {
        "label": "Stack",
        "value": "Python + React"
      },
      {
        "label": "Data Type",
        "value": "Real-time Cargo Tracking"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation contributed to a cargo-focused application built around real-time tracking data, operational visibility, and trading-related workflows.</p><h2>Scope</h2><p>The work involved backend services, data processing flows, React interfaces, and API support for real-time cargo information.</p><h2>Impact</h2><p>The platform improved visibility into cargo operations and supported data-heavy workflows that required reliable processing and clear user interfaces.</p>",
    "metaDescription": "Data-intensive cargo tracking and trading operations case study using Python, Node.js, and React."
  },
  {
    "slug": "ecommerce-operations-application",
    "title": "E-Commerce Operations Application",
    "subtitle": "Commerce platform with product, order, and operational workflows.",
    "category": "Web",
    "tag": "E-commerce · Node.js + Python",
    "image": "/portfolio/ecommerce-operations-application.svg",
    "industry": "e-commerce",
    "industryLabel": "E-commerce",
    "duration": "Project-based engagement",
    "teamSize": "Full-stack support",
    "technologies": [
      "Node.js",
      "Python",
      "React",
      "REST APIs"
    ],
    "services": [
      "Full-Stack Development",
      "Backend Development",
      "Frontend Development"
    ],
    "metrics": [
      {
        "label": "Type",
        "value": "Full-stack"
      },
      {
        "label": "Stack",
        "value": "Node.js + React + Python"
      },
      {
        "label": "Domain",
        "value": "E-commerce Operations"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation supported an e-commerce application with modern frontend and backend workflows for managing commerce operations.</p><h2>Scope</h2><p>The work included React-based user experience, Node.js services, Python-supported workflows, and integrations needed to support catalog, order, and operational processes.</p><h2>Impact</h2><p>The platform helped improve the structure and maintainability of commerce workflows while supporting scalable product and order operations.</p>",
    "metaDescription": "E-commerce case study covering React frontend, Node.js backend, Python workflows, and commerce operations."
  },
  {
    "slug": "ride-dispatch-mobility-operations-platform",
    "title": "Ride Dispatch and Mobility Operations Platform",
    "subtitle": "Backend APIs and real-time operational workflows for ride dispatch and payment services.",
    "category": "Web",
    "tag": "Logistics · Node.js + Angular",
    "image": "/portfolio/ride-dispatch-mobility-operations-platform.svg",
    "industry": "logistics",
    "industryLabel": "Logistics",
    "duration": "Project-based engagement",
    "teamSize": "Backend/API support",
    "technologies": [
      "Node.js",
      "Angular",
      "REST APIs",
      "Real-time Workflows",
      "Payment Services"
    ],
    "services": [
      "Backend Development",
      "API Development",
      "Payment Integrations"
    ],
    "metrics": [
      {
        "label": "Api",
        "value": "Payment Services"
      },
      {
        "label": "Backend",
        "value": "Node.js + Angular"
      },
      {
        "label": "Core Feature",
        "value": "Real-time Dispatch"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation contributed to a ride dispatch platform serving operational workflows around rides, dispatching, backend communication, and payments.</p><h2>Scope</h2><p>The work covered backend API development, real-time workflow support, payment-related services, and coordination with an Angular-based interface.</p><h2>Impact</h2><p>The engagement supported reliable ride operations by improving backend service behavior and operational workflow handling.</p>",
    "metaDescription": "Backend API and real-time workflow case study for a ride dispatch and mobility operations platform."
  },
  {
    "slug": "job-advertising-applicant-tracking-platform",
    "title": "Job Advertising and Applicant Tracking Platform",
    "subtitle": "Job portal and ad management platform for posting, tracking, and managing job advertisements.",
    "category": "Web",
    "tag": "Media · Strapi + Node.js",
    "image": "/portfolio/job-advertising-applicant-tracking-platform.svg",
    "industry": "media",
    "industryLabel": "Media",
    "duration": "Long-term collaboration",
    "teamSize": "Backend/CMS support",
    "technologies": [
      "Strapi",
      "Node.js",
      "JavaScript",
      "PostgreSQL",
      "REST APIs"
    ],
    "services": [
      "Full-Stack Development",
      "Backend Development",
      "CMS & Content Platforms"
    ],
    "metrics": [
      {
        "label": "Db",
        "value": "PostgreSQL"
      },
      {
        "label": "Tech Stack",
        "value": "Strapi + Node.js"
      },
      {
        "label": "Modules Delivered",
        "value": "3"
      }
    ],
    "contentHtml": "<h2>Overview</h2><p>Veltrix innovation supported development on a job portal platform designed to manage job advertisements, publish listings, and track activity around job ads.</p><h2>Scope</h2><p>The work focused on structured backend workflows, content management, job ad visibility, and practical admin tooling for managing postings.</p><h2>Impact</h2><p>The platform helped streamline job ad placement and gave stakeholders better visibility into job listing activity and management workflows.</p>",
    "metaDescription": "Case study for a job portal and job advertising management platform built with backend and CMS workflows."
  }
]
;

export const portfolioSlugs = portfolioProjects.map((p) => p.slug);
