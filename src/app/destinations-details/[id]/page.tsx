import DestinationDetailsMain from "@/components/destinations-details/DestinationDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import { destinatoinData } from "@/data/destination-data";

export function generateStaticParams() {
  return destinatoinData.map((destination) => ({
    id: destination.id.toString(),
  }));
}

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Destination Details">
        <Wrapper>
          <main>
            <DestinationDetailsMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default page;
