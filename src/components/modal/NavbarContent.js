import React, { useRef, useState } from "react";

import { HashLink } from "react-router-hash-link";
import { IoMdCall } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

function NavbarContent(subtoggle) {
   // Calendly Location

   const navRef = useRef();
   const btnRef = useRef();
   const [isClosed, setIsClosed] = useState(true);
   const showNavbar = () => {
     navRef.current.classList.toggle("responsive_nav");
     setIsClosed((prevIsClosed) => !prevIsClosed);
   };
  return (
    <div className="modal-body-container article hidden lg:flex">
  <HashLink className="label nav-item active" to="/">
           
            <div className="nav-item-label">Home</div>
          </HashLink>

          <HashLink
            className="label nav-item"
            smooth
            scroll={(el) =>
              el.scrollIntoView({ behavior: "auto", block: "nearest" })
            }
            to="/#project"
          >
           
            <div className="nav-item-label">Work</div>
          </HashLink>
          <HashLink
            className="label nav-item"
            smooth
            scroll={(el) =>
              el.scrollIntoView({ behavior: "auto", block: "center" })
            }
            to="/#services"
          >
           
            <div className="nav-item-label">Services</div>
          </HashLink>

          <button className="label nav cta-btn q-36 mx-5 px-4 rounded-lg" onClick={subtoggle}>
            Contact{" "}
            <span className="label cta-btn-icon">
              <IoMdCall className="label"/>
            </span>
          </button>
    </div>
  )
}

export default NavbarContent