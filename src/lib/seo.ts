import { SITE, type Tool } from "./catalog";

export function seoHead(tool: Tool) {
  return {
    meta: [
      { title: tool.title },
      { name: "description", content: tool.description },
      { name: "keywords", content: tool.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE.name },
      { name: "language", content: SITE.locale },
      { name: "geo.region", content: SITE.region },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "application-name", content: SITE.name },
    ],
    links: [{ rel: "canonical", href: tool.path }],
  };
}

export function homeHead() {
  const title = "Northline | Free WebP, Speech & SEO Tools in the UK";
  const description =
    "Free UK browser tools: PNG to WebP converter, speech to text, text to speech, meta tag generator, robots.txt and XML sitemap builder. Private, no uploads.";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "webp converter uk, png to webp converter in uk, speech to text uk, text to speech uk, meta tag generator uk, robots.txt generator, xml sitemap generator uk, free seo tools uk",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: SITE.name },
      { name: "geo.region", content: SITE.region },
      { name: "geo.placename", content: "United Kingdom" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  };
}

export function softwareJsonLd(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Windows, macOS, Linux, iOS, Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    description: tool.description,
    featureList: tool.steps,
    inLanguage: "en-GB",
    audience: {
      "@type": "Audience",
      geographicArea: { "@type": "Country", name: "United Kingdom" },
    },
  };
}

export function faqJsonLd(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToJsonLd(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: tool.howToTitle,
    description: tool.lead,
    step: tool.steps.map((name, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name,
      text: name,
    })),
  };
}

export function breadcrumbJsonLd(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: tool.name, item: tool.path },
    ],
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    description:
      "Free in-browser tools for the United Kingdom: image conversion, dictation, voice reading and SEO file generators.",
    inLanguage: "en-GB",
    audience: {
      "@type": "Audience",
      geographicArea: { "@type": "Country", name: "United Kingdom" },
    },
  };
}
