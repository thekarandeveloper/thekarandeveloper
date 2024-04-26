import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import MiscContent from "./MiscContent";
import { MdFileDownload } from "react-icons/md";
import ProjectContent from "./ProjectContent";
import ServicesContent from "./ServicesContent";
import ArticleContent from "./ArticleContent";
import ContactFormContent from "./ContactFormContent";
import AllProjects from "./AllProjects";
import NavbarContent from "../modal/NavbarContent";
import { openURL } from "../../scripts/utility";
import ModalActionButton from "../minor/ModalActionButton";

function ModalBox({ modalOpen, modalClose, category, selectedItem }) {
  const modalRef = useRef(null);

  // For the Modal View

  useEffect(() => {
    const body = document.body;
    if (modalOpen && modalRef.current) {
      const modalOverlays = modalRef.current.querySelectorAll(".modal-overlay");
      const modalContainer =
        modalRef.current.querySelectorAll(".modal-container");
      modalOverlays.forEach((overlay) => {
        overlay.classList.add("modal-overlay-view");
        console.log(category);
        console.log(selectedItem);
      });
      setTimeout(() => {
        modalContainer.forEach((container) => {
          container.classList.add("modal-container-view");
          body.classList.add("hide-scroll");
        });
      }, 200);
    } else if (!modalOpen && modalRef.current) {
      const modalOverlays = modalRef.current.querySelectorAll(".modal-overlay");
      const modalContainer =
        modalRef.current.querySelectorAll(".modal-container");
      modalContainer.forEach((container) => {
        container.classList.remove("modal-container-view");
        body.classList.remove("hide-scroll");
      });

      setTimeout(() => {
        modalOverlays.forEach((overlay) => {
          overlay.classList.remove("modal-overlay-view");
          console.log("check");
        });
      }, 500);
    }
  }, [modalOpen]);

  // Sub Modal View

  const subModal = (category, selectedItem) => {};

  // Modal Body
  function renderComponent(component, selectedItem) {
    var currentComponent = "";

    if (component.type === "items") {
      currentComponent = category.name.toLowerCase();
    } else if (component.type === "buttons") {
      currentComponent = selectedItem.component.toLowerCase();
    }
    console.log(currentComponent);
    switch (currentComponent) {
      case "navbar":
        return <NavbarContent submodalOpen={modalOpen}></NavbarContent>;
      case "resume":
        return <MiscContent />;
      case "contact":
        console.log("It's using function");
        return <ContactFormContent />;
      case "all-projects":
        return <AllProjects toggle={renderComponent} />;
      default:
        break;
    }
  }

  // Modal Action Button
  function openURL(url) {
    window.open(url, "_blank");
  }
  function downloadURL(url, filename) {
    console.log("trying to download");
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function renderActionButton() {
    var currentComponent = "";
    if (category.type === "items") {
      currentComponent = category?.action?.type?.toLowerCase();
    } else if (category.type === "buttons") {
      currentComponent = selectedItem?.action?.type?.toLowerCase();
    }

    switch (currentComponent) {
      case "link":
        if (selectedItem?.action?.parameter?.url) {
          openURL(selectedItem?.action?.parameter?.url);
        } else {
          console.error("URL is missing or invalid");
        }
        break;
      case "download":
        if (selectedItem?.action?.parameter?.url) {
          downloadURL(
            selectedItem?.action?.parameter?.url,
            selectedItem?.action?.parameter?.fileName
          );
        }
        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <div ref={modalRef}>
        <div className="modal-overlay w-full h-full fixed bottom-o left-0 m-0 bg-dark-bg-200 opacity-1 z-10 rounded-none hidden md:justify-end">
          <div
            className="blank-area h-[20vh] w-full md:h-full  fixed left-0"
            onClick={modalClose}
          ></div>
          <div className="modal-container z-10000 w-full h-fit max-h-[80vh] bg-body fixed bottom-0 p-5 rounded-t-xl md:h-full md:max-h-full md:w-[60vw]  lg:w-[50vw] md:rounded-r-none ">
            <div className="modal-header w-full flex flex-col justify-center items-center gap-y-6 md:flex-row md:justify-between md:items-center md:p-4 md:bg-dark-bg md:text-body md:mb-5 md:sticky md:right-5 md:left-5">
              <div className="close w-20 h-1 bg-light-bg md:hidden"></div>
              <div
                className="close-button heading hidden md:block md:order-2 hover:bg-primary cursor-pointer rounded-md"
                onClick={modalClose}
              >
                <IoClose />
              </div>
              <div className="title h-full pb-8 md:order-1 flex items-center md:pb-0 md:cursor-pointer">
                <span className="current">{selectedItem.label}</span>
              </div>
              <div className="action-button fixed left-0 right-0 bottom-0 text-body bg-body flex justify-center items-center h-25 p-5">
                <button
                  className="modal-button bg-primary h-12 w-full 2xl:h-[6vh] title  hover:bg-dark-bg"
                  target="blank"
                  onClick={renderActionButton}
                >
                  {modalOpen === true ? selectedItem?.action?.name : ""}
                </button>
              </div>
            </div>
            <div className="modal-body overflow-y-auto h-[70vh] pt-7">
              {modalOpen === true
                ? renderComponent(category, selectedItem)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalBox;
