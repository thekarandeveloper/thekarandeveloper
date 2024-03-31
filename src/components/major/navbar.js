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
      <navbar className="navbar-container">
        <div className="nav-brand heading">
          <HashLink to="/">Karan Kumar</HashLink>
        </div>
        <div className="nav-items" ref={navRef}>
          <HashLink className="label nav-item active" to="/">
            <div className="nav-item-icon heading">
              <AiFillHome />
            </div>
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
            <div className="nav-item-icon heading">
              <AiFillHome />
            </div>
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
            <div className="nav-item-icon heading">
              <AiFillHome />
            </div>
            <div className="nav-item-label">Services</div>
          </HashLink>

          <button className="label nav cta-btn" onClick={toggle}>
            Contact{" "}
            <span className="label cta-btn-icon">
              <IoMdCall />
            </span>
          </button>
        </div>
        {/* <a className="nav-toggle" download={true} href={resumeFilePath}>
          {" "}
          <FaSearch />
        </a> */}
      </navbar>
    </header>
  );
}

export default Navbar;
