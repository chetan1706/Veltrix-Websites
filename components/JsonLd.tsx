interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veltrix",
  url: "https://veltrixinnovation.org",
  logo: "https://veltrixinnovation.org/branding/veltrix-logo.jpg",
  description:
    "Veltrix builds AI-native software, mobile apps and automation systems for ambitious teams across the US, UK, India and Dubai.",
  email: "Info@veltrixinnovation.org",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "Info@veltrixinnovation.org",
    contactType: "sales",
  },
};
