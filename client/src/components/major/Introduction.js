import React from "react";
import * as BsReactIcons from "react-icons/bi";
import IntroData from "../../data/intro.json";
import ProfileData from "../../data/profile.json";
import Buttons from "../../data/buttons.json";
import { useGlobalContext } from "../../context/GlobalDataManager";
import MiscContent from "../modal/MiscContent";
function Introduction() {
  const {openModal} = useGlobalContext()
  return (
    <section className="home h-[90vh] md:h-[70vh]">
      <div className="image-container w-full bg-light-bg h-full flex justify-center items-center overflow-hidden  pt-12  pb-0 p-0 md:order-2">
        {ProfileData.data.map((data) =>
          data.items.map((item) => (
            <div
              className="w-full p-0 h-full flex justify-center items-center overflow-hidden bg-top bg-no-repeat bg-contain md:bg-cover lg:bg-contain"
              style={{ backgroundImage: `url(${item.body.image})` }}
            ></div>
          ))
        )}
      </div>
      {IntroData.data.map((data) =>
        data.items.map((item) => (
          <div className="w-full h-full bg-primary flex flex-col justify-center items-center p-5 pt-10  pb-10 gap-y-9 text-body md:justify-end md:items-start xl:p-8 2xl:pb-16">
            <div className="large-heading ">{item.name}</div>
            <div className="label flex text-center md:text-left">
              {item.body.desc}
            </div>

            {Buttons.data.map((data) =>
              data.items
                .filter((button) => button.name.toLowerCase() === "resume")
                .map((buttonItem) => (
                  <button
                    className="title border-body border-2 hover:bg-body hover:text-dark-bg"
                    onClick={() => openModal("Resume",<MiscContent/>, "Download", "link", "../../assets/KARAN_KUMAR_RESUME.pdf" )}
                  >
                    {buttonItem.name}{" "}
                    <span className="heading cta-btn-icon">
                      {React.createElement(BsReactIcons[buttonItem.icon])}
                    </span>
                  </button>
                ))
            )}
          </div>
        ))
      )}
    </section>
  );
}

export default Introduction;
