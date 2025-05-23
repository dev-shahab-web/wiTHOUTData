import TeamDetailsMain from "@/components/team-details/TeamDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import { teamData } from "@/data/team-data";

export function generateStaticParams() {
  return teamData.map((member) => ({
    id: member.id.toString(),
  }));
}

const TeamDetailsDynamic = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Team Details">
        <Wrapper>
          <main>
            <TeamDetailsMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default TeamDetailsDynamic;
