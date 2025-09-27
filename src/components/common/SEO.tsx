import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export function generateSEOMetadata({
  title = "HolyNepalYatra | Best Nepal Tour Packages - Top Travel Agency in Gorakhpur",
  description = "Discover the best of Nepal with HolyNepalYatra. We offer premium Nepal tour packages, religious tours, adventure trips, and customized travel experiences. Trusted by thousands for unforgettable journeys across Nepal.",
  keywords = "Nepal tour packages, Nepal travel, religious tours Nepal, adventure tours Nepal, Kathmandu tours, Pokhara tours, Nepal tourism, travel agency Gorakhpur",
  ogImage = "https://www.holynepalyatra.com/assets/images/og-image.jpg",
  ogType = "website",
  canonical,
  noindex = false
}: SEOProps): Metadata {
  const baseUrl = "https://www.holynepalyatra.com";
  
  return {
    title,
    description,
    keywords,
    authors: [{ name: "HolyNepalYatra" }],
    creator: "HolyNepalYatra",
    publisher: "HolyNepalYatra",
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical || baseUrl,
      siteName: "HolyNepalYatra",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType as any,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@holynepalyatra",
      creator: "@holynepalyatra",
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
    verification: {
      google: "your-google-site-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType, 
  canonical, 
  noindex 
}: SEOProps) {
  // This component is for client-side usage if needed
  return null;
}