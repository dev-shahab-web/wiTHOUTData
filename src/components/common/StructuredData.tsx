import Script from 'next/script';

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'breadcrumb' | 'service' | 'tour';
  data?: any;
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://www.holynepalyatra.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "HolyNepalYatra",
          "description": "Best Nepal Tour Packages - Top Travel Agency in Gorakhpur offering premium Nepal tours, religious tours, adventure trips, and customized travel experiences.",
          "url": baseUrl,
          "logo": `${baseUrl}/assets/images/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "customer service",
            "availableLanguage": ["Hindi", "English", "Nepali"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gorakhpur",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "India"
          },
          "sameAs": [
            "https://www.facebook.com/holynepalyatra",
            "https://www.instagram.com/holynepalyatra",
            "https://www.twitter.com/holynepalyatra"
          ]
        };
        
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HolyNepalYatra",
          "url": baseUrl,
          "description": "Discover the best of Nepal with HolyNepalYatra. We offer premium Nepal tour packages, religious tours, adventure trips, and customized travel experiences.",
          "publisher": {
            "@type": "Organization",
            "name": "HolyNepalYatra"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        };
        
      case 'breadcrumb':
        return data;
        
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Travel Agency",
          "provider": {
            "@type": "Organization",
            "name": "HolyNepalYatra"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "description": "Professional Nepal tour packages including religious tours, adventure trips, cultural experiences, and customized travel itineraries."
        };
        
      case 'tour':
        return data;
        
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}