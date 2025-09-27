//@refresh

import IndexMain from "@/components/index/IndexMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import { generateSEOMetadata } from "@/components/common/SEO";

export const metadata = generateSEOMetadata({
  title: "HolyNepalYatra | Best Nepal Tour Packages - Top Travel Agency in Gorakhpur",
  description: "Discover the best of Nepal with HolyNepalYatra. We offer premium Nepal tour packages, religious tours, adventure trips, and customized travel experiences. Trusted by thousands for unforgettable journeys across Nepal.",
  keywords: "Nepal tour packages, Nepal travel, religious tours Nepal, adventure tours Nepal, Kathmandu tours, Pokhara tours, Nepal tourism, travel agency Gorakhpur, holy yatra Nepal, Nepal pilgrimage",
  canonical: "https://www.holynepalyatra.com"
});

const Home = () => {
  return (
    <>
      <MetaData pageTitle="HolyNepalYatra | Best Nepal Tour Packages">
        <Wrapper>
          <main>
            <IndexMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default Home;
