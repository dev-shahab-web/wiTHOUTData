import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";
import GlobalWhatsAppCTA from "@/components/GlobalWhatsAppCTA";
import StructuredData from "@/components/common/StructuredData";
import WebVitals from "@/components/common/WebVitals";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import AnalyticsProvider from "@/components/common/AnalyticsProvider";

export const metadata = {
  title: "HolyNepalYatra | Best Nepal Tour Packages - Top Travel Agency in Gorakhpur",
  description: "Discover the best of Nepal with HolyNepalYatra. We offer premium Nepal tour packages, religious tours, adventure trips, and customized travel experiences. Trusted by thousands for unforgettable journeys across Nepal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" dir="ltr">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="author" content="HolyNepalYatra" />
          <meta name="keywords" content="Nepal tour packages, Nepal travel, religious tours Nepal, adventure tours Nepal, Kathmandu tours, Pokhara tours, Nepal tourism, travel agency Gorakhpur" />
          <meta property="og:site_name" content="HolyNepalYatra" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@holynepalyatra" />
          <meta name="theme-color" content="#1a73e8" />
          <meta name="msapplication-TileColor" content="#1a73e8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.holynepalyatra.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>

        <body suppressHydrationWarning={true}>
          <GoogleAnalytics />
          <StructuredData type="organization" />
          <StructuredData type="website" />
          <StructuredData type="service" />
          <WebVitals />
          <ReduxProvider>
            <AppProvider>
              <AnalyticsProvider>
                {children}
              </AnalyticsProvider>
            </AppProvider>
            <Toaster position="top-center" richColors />
            <GlobalWhatsAppCTA />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
