import React, { useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import NavbarContent from "../modal/NavbarContent";
function Navbar({ toggle }) {
  return (
    <header className="w-full h-[15vh] flex justify-center">
      <navbar className="navbar-container w-full h-104 flex flex-row justify-between items-center p-8 m-0 bg-dark-bg rounded-t-none text-body">
        <div className="nav-brand heading">
          <HashLink to="/">Karan Kumar</HashLink>
        </div>
        <div className="nav-items flex gap-7 justify-center items-center">
          <div className="toggleNavContainer bg-primary p-4 lg:hidden">
            <MdOutlineMenu className="heading" />
          </div>
          <NavbarContent subtoggle={toggle}></NavbarContent>
        </div>
      </navbar>
    </header>
  );
}

export default Navbar;
