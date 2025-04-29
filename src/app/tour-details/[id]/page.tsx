"use client";
import TourDetailsMain from "@/components/tour-details/TourDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import { tourData } from "@/data/tour-data";

export function generateStaticParams() {
  return tourData.map((tour) => ({
    id: tour.id.toString(),
  }));
}

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Tour Details">
        <Wrapper>
          <main>
            <TourDetailsMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default page;
