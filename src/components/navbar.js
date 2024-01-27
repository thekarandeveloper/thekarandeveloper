import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdFileDownload } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BiSolidFilePdf } from "react-icons/bi";
function Navbar() {
  const navRef = useRef();
  const btnRef = useRef();
  const [isClosed, setIsClosed] = useState(true);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };
  const resumeFilePath = process.env.PUBLIC_URL + '/KARAN_KUMAR_RESUME.pdf';

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

          <a
            className="label nav cta-btn"
            href={resumeFilePath}
            download={true}
          >
            Resume{" "}
            <span className="label cta-btn-icon">
              <MdFileDownload />
            </span>
          </a>
        </div>
        <a
          className="nav-toggle"
          download={true}
          href={resumeFilePath}
        >
          {" "}
          <BiSolidFilePdf />
        </a>
      </navbar>
    </header>
  );
}

export default Navbar;
