import React from "react";
import ArchiveCard from "../minor/ArchiveCard";
import profilePhoto from "../../assets/media/bg.png";
import projectData from "../../data/project.json";

function AllProjects({ toggle }) {
  return (
    <div className="modal-body-container all-items flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-8 xl:flex 2xl:gap-12">
      {projectData.data.map((data) =>
        data.items
          .map((item) => (
            <ArchiveCard
              toggles={() => toggle(data, item)}
              img={item.image}
              title={item.title}
              desc={item.desc}
            ></ArchiveCard>
          ))
      )}
    </div>
  );
}

export default AllProjects;
