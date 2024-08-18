import React from "react";
import { HashLink } from "react-router-hash-link";
import NavData from "../../data/nav.json";
import Buttons from "../../data/buttons.json";
import * as BsReactIcons from "react-icons/bi";
import { useGlobalContext } from "../../context/GlobalDataManager";
import ContactFormContent from "../modal/ContactFormContent";
function Navbar({ toggle }) {

  const {modalData, openModal, closeModal} = useGlobalContext();

  return (
    <header className="w-full h-[15vh] flex justify-center">
      <navbar className="navbar-container w-full h-104 flex flex-row justify-between items-center p-8 m-0 bg-dark-bg rounded-t-none text-body">
        <div className="nav-brand heading">
          <HashLink to="/">Karan Kumar</HashLink>
        </div>
        <div className="nav-items flex gap-7 justify-center items-center">
          {Buttons.data.map((data) =>
            data.items
              .filter((button) => button.name === "hamBurger")
              .map((buttonItem) => (
                <div
                  className="toggleNavContainer bg-primary p-4 lg:hidden"
                  onClick={() => toggle(data, buttonItem)}
                >
                  {React.createElement(BsReactIcons[buttonItem.icon], {
                    className: "heading",
                  })}
                </div>
              ))
          )}

          <div className="hidden lg:flex justify-center items-center gap-x-8">
            {NavData.data.map((data) =>
              data.items.map((dataItem) => (
                <HashLink
                  className="nav-item label py-2 px-6"
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "auto", block: "nearest" })
                  }
                  to={`/#${dataItem.name.toLowerCase()}`}
                >
                  {dataItem.name}
                </HashLink>
              ))
            )}

            {Buttons.data.map((data) =>
              data.items
                .filter((button) => button.name === "Contact")
                .map((buttonItem) => (
                  <button
                    className="label nav cta-btn q-36 mx-5 px-4 rounded-lg bg-primary hover:bg-body hover:text-dark-bg"
                    // onClick={() => toggle(data, buttonItem)}
                    onClick={()=> openModal('Contact Now', <ContactFormContent/>, 'Submit', 'Submit', "" )}
                  >
                    {buttonItem.name}{" "} {console.log("Modal Data", modalData.content)}
                    <span className="label cta-btn-icon">
                      {React.createElement(BsReactIcons[buttonItem.icon])}
                    </span>
                  </button>
                ))
            )}
          </div>
        </div>
      </navbar>
    </header>
  );
}

export default Navbar;
