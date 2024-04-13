import React, { useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import NavbarContent from "../modal/NavbarContent";

import { IoMdCall } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
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
          <div className="hidden lg:flex justify-center items-center gap-x-8">
      <HashLink className="label nav-item active" to="/">
      Home
      </HashLink>

      <HashLink
        className="nav-item label"
        smooth
        scroll={(el) =>
          el.scrollIntoView({ behavior: "auto", block: "nearest" })
        }
        to="/#project"
      >Work
      </HashLink>
      <HashLink
        className="label nav-item"
        smooth
        scroll={(el) =>
          el.scrollIntoView({ behavior: "auto", block: "center" })
        }
        to="/#services"
      >Services
      </HashLink>

      <button
        className="label nav cta-btn q-36 mx-5 px-4 rounded-lg bg-primary"
        onClick={toggle}
      >
        Contact{" "}
        <span className="label cta-btn-icon">
          <IoMdCall className="label" />
        </span>
      </button>
    </div>
        </div>
      </navbar>
    </header>
  );
}

export default Navbar;
