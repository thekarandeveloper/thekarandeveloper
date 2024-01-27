import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdFileDownload } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
function Navbar() {
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
            Home
          </Link>
          <Link className="label nav-item" to="/projects">
            Projects
          </Link>
          <Link className="label nav-item" to="/">
            Experince
          </Link>

          <Link className="label nav cta-btn" to="/">
            Resume{" "}
            <span>
              <MdFileDownload />
            </span>
          </Link>
        </div>
        <div className="nav-toggle" ref={btnRef} onClick={showNavbar}>
          {" "}
          {isClosed ? <IoIosMenu /> : <IoCloseOutline />}
        </div>
      </navbar>
    </header>
  );
}

export default Navbar;
