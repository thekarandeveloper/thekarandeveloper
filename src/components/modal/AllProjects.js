import React from "react";
import ArchiveCard from "../minor/ArchiveCard";
import profilePhoto from "../../assets/media/bg.png";

function AllProjects({ toggle }) {
  return (
    <div className="modal-body-container all-items flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-8 xl:flex 2xl:gap-12">
      <ArchiveCard
        toggles={toggle}
        img={profilePhoto}
        title="Social Analyzer"
        desc="Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality."
      ></ArchiveCard>
      <ArchiveCard
        toggles={toggle}
        img={profilePhoto}
        title="Social Analyzer"
        desc="Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality."
      ></ArchiveCard>
       <ArchiveCard
        toggles={toggle}
        img={profilePhoto}
        title="Social Analyzer"
        desc="Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality."
      ></ArchiveCard>
      
    </div>
  );
}

export default AllProjects;
