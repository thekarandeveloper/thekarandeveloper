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
    <div className="modal-body-container hidden lg:flex justify-center items-center gap-x-8">
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
        onClick={subtoggle}
      >
        Contact{" "}
        <span className="label cta-btn-icon">
          <IoMdCall className="label" />
        </span>
      </button>
    </div>
  );
}

export default NavbarContent;
