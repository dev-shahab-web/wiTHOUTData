import Link from 'next/link';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://www.holynepalyatra.com${item.href}` })
    }))
  };

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbStructuredData} />
      <nav aria-label="Breadcrumb" className={`breadcrumb-nav ${className}`}>
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
              {item.href && index !== items.length - 1 ? (
                <Link href={item.href} className="breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-text">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}