import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import ServicesContent from "./ServicesContent";
import ArticleContent from "./ArticleContent";
import ContactFormContent from "./ContactFormContent";
import AllProjects from "./AllProjects";

import { openURL } from "../../scripts/utility";
import ModalActionButton from "../minor/ModalActionButton";
import { useGlobalContext } from "../../context/GlobalDataManager";
function ModalBox({ modalOpen, modalClose, category, selectedItem }) {
  const {modalData, closeModal} = useGlobalContext();

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

  // Modal Body
  // function renderComponent(component, item) {
  //   var currentComponent = "";
  //   if (component.type === "items") {
  //     currentComponent = component.name.toLowerCase();
  //   } else if (component.type === "buttons") {
  //     currentComponent = item.component.toLowerCase();
  //   }

  //   switch (currentComponent) {
  //     case "navbar":
  //       return <NavbarContent submodalOpen={modalOpen}></NavbarContent>;
  //     case "resume":
  //       return <MiscContent />;
  //     case "contact":
  //       return <ContactFormContent />;
  //     case "project":
  //       console.log("Project render");
  //       return (
  //         <ProjectContent
  //           mockup={item?.image}
  //           overview={item?.desc}
  //           technology={item?.technology}
  //           tag1={item?.tags[0]}
  //           tag2={item?.tags[1]}
  //           tag3={item?.tags[2]}
  //           challenges={item?.challenges}
  //         />
  //       );
  //     case "all-projects":
  //       return <AllProjects toggle={renderComponent} />;
  //     case "articles":
  //       return <ArticleContent banner={item.image} content={item.content} />;
  //     default:
  //       break;
  //   }
  // }

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
        if (selectedItem?.action?.parameter?.url || selectedItem?.url) {
          openURL(selectedItem?.action?.parameter?.url || selectedItem?.url);
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
    {modalData.isOpen && (  <div ref={modalRef}>
        <div className="modal-overlay w-full h-full fixed bottom-o left-0 m-0 bg-dark-bg-200 opacity-1 z-10 rounded-none md:justify-end">
          <div
            className="blank-area h-[20vh] w-full md:h-full  fixed left-0"
            onClick={closeModal}
          ></div>
          <div className="modal-container z-10000 w-full h-fit max-h-[80vh] bg-body fixed bottom-0 rounded-t-xl lg:h-full lg:max-h-full lg:w-[50vw] md:rounded-r-none">
            <div className="modal-header w-full flex flex-col justify-center items-center gap-y-6 lg:flex-row lg:justify-between lg:items-center lg:p-4 lg:bg-dark-bg lg:text-body lg:mb-5 sticky lg:ml-5 lg:mt-5 pt-5 lg:right-5 lg:w-[93%]">
              <div className="close w-10 h-1 bg-slate-400 lg:hidden"></div>
              <div
                className="close-button heading hidden lg:block lg:order-2 hover:bg-primary cursor-pointer rounded-md"
                onClick={closeModal}
              >
                <IoClose />
              </div>
              <div className="heading text-[1.2rem] h-full pb-4 md:order-1 flex items-center lg:pb-0 md:cursor-pointer w-full justify-center border border-gray border-0 border-b-[1px] lg:border-b-0  rounded-none sticky text-center px-4">
                <span className="current">{modalData.title}</span>
              </div>
              <div className="action-button fixed left-0 right-0 bottom-0 text-body bg-body flex justify-center items-center h-25 p-5">
                <button
                  className="modal-button bg-primary h-12 w-full 2xl:h-[6vh] title  hover:bg-dark-bg"
                  target="blank"
                  onClick={renderActionButton}
                >
                  {modalData.ctaLabel}
                </button>
              </div>
            </div>
            <div className="modal-body overflow-y-auto h-fit p-7">
                {modalData.content[modalData.content.length - 1]}
            </div>
          </div>
        </div>
      </div>)}
    
    </React.Fragment>
  );
}

export default ModalBox;
