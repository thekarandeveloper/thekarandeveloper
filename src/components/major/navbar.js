import { HashLink } from "react-router-hash-link";
import React, { useRef, useState } from "react";
// import { HashLink } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
function Navbar({ toggle }) {
  // Calendly Location

  const navRef = useRef();
  const btnRef = useRef();
  const [isClosed, setIsClosed] = useState(true);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };

  return (
    <header>
      <navbar className="navbar-container w-full h-104 flex flex-row justify-between items-center p-8 m-0">
        <div className="nav-brand heading">
          <HashLink to="/">Karan Kumar</HashLink>
        </div>
        <div className="nav-items flex gap-7" ref={navRef}>
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

          <button className="label nav cta-btn q-36 mx-5 px-4 rounded-lg" onClick={toggle}>
            Contact{" "}
            <span className="label cta-btn-icon">
              <IoMdCall className="label"/>
            </span>
          </button>
        </div>
        
      </navbar>
    </header>
  );
}

export default Navbar;
