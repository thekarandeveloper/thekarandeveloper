import React from "react";
import { HashLink } from "react-router-hash-link";
import NavData from "../../data/nav.json";
import * as BsReactIcons from "react-icons/bi";

function Navbar({ toggle }) {
  return (
    <header className="w-full h-[15vh] flex justify-center">
      <navbar className="navbar-container w-full h-104 flex flex-row justify-between items-center p-8 m-0 bg-dark-bg rounded-t-none text-body">
        <div className="nav-brand heading">
          <HashLink to="/">Karan Kumar</HashLink>
        </div>
        <div className="nav-items flex gap-7 justify-center items-center">
          {NavData.categories.map((data) =>
            data.data.buttons
              .filter((button) => button.name === "hamburger")
              .map((buttonItem) => (
                <div
                  className="toggleNavContainer bg-primary p-4 lg:hidden"
                  onClick={() => toggle(buttonItem.name, buttonItem.category)}
                >
                  {React.createElement(BsReactIcons[buttonItem.icon], {
                    className: "heading",
                  })}
                </div>
              ))
          )}

          <div className="hidden lg:flex justify-center items-center gap-x-8">
            {NavData.categories.map((categoryData) =>
              categoryData.data.items.map((dataItem) => (
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

            {NavData.categories.map((data) =>
              data.data.buttons
                .filter((button) => button.name === "Contact")
                .map((buttonItem) => (
                  <button
                    className="label nav cta-btn q-36 mx-5 px-4 rounded-lg bg-primary hover:bg-body hover:text-dark-bg"
                    onClick={() => toggle(buttonItem.name, buttonItem.category)}
                  >
                    {buttonItem.name}{" "}
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
