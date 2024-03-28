import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
function Navbar() {

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
          <Link to="/">Karan Kumar</Link>
        </div>
        <div className="nav-items" ref={navRef}>
          <Link className="label nav-item active" to="/">
            <div className="nav-item-icon heading">
              <AiFillHome />
            </div>
            <div className="nav-item-label">Home</div>
          </Link>
          <Link className="label nav-item" to="/">
            <div className="nav-item-icon heading">
              <AiFillHome />
            </div>
            <div className="nav-item-label">Work</div>
          </Link>
          <Link className="label nav-item" to="/">
            <div className="nav-item-icon heading">
              <AiFillHome />
            </div>
            <div className="nav-item-label">Services</div>
          </Link>

          <a
            className="label nav cta-btn"
            href="https://calendly.com/karankumarcv/30min"
           target="blank">
            Contact{" "}
            <span className="label cta-btn-icon">
            <IoMdCall />
            </span>
          </a>
        
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
