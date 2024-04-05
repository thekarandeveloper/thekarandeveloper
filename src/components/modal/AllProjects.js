import React from "react";
import ArchiveCard  from "../minor/ArchiveCard";

function AllProjects({ toggle }) {
  return (
    <div className="modal-body-container all-items">
    
     <ArchiveCard toggles={toggle}></ArchiveCard>
      
    </div>
  );
}

export default AllProjects;
