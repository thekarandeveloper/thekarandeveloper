import React from "react";
import { HashLink } from "react-router-hash-link";
import { useGlobalContext } from "../../context/GlobalDataManager";

function NavbarContent() {
  const { closeModal } = useGlobalContext();

  const handleClick = (e, id) => {
    e.preventDefault();
    closeModal();

    // Use a timeout to ensure the modal closes before the scroll occurs
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Adjust the timeout if necessary
  };

  return (
    <div className="flex justify-start items-center gap-y-8 w-full flex-col h-[40vh] pb-[5vh]">
      <div
        className="label nav-item bg-light-bg w-full flex justify-center items-center py-4"
        onClick={closeModal}
      >
        Home
      </div>

      <a
        id="project"
        href="#project"
        className="nav-item label bg-light-bg w-full flex justify-center items-center py-4"
        onClick={(e) => handleClick(e, "work")}
      >
        Work
      </a>

      <a
        href="#services"
        className="label nav-item bg-light-bg w-full flex justify-center items-center py-4"
        onClick={(e) => handleClick(e, "articles")}
      >
        Articles
      </a>
    </div>
  );
}

export default NavbarContent;
