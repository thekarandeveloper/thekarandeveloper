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
    <div className="flex justify-center items-center gap-y-8 w-full flex-col h-full pb-[15vh]">
      <HashLink className="label nav-item bg-light-bg w-full flex justify-center items-center py-4" to="/">
      Home
      </HashLink>

      <HashLink
        className="nav-item label bg-light-bg w-full flex justify-center items-center py-4"
        smooth
        scroll={(el) =>
          el.scrollIntoView({ behavior: "auto", block: "nearest" })
        }
        to="/#project"
      >Work
      </HashLink>
      <HashLink
        className="label nav-item bg-light-bg w-full flex justify-center items-center py-4"
        smooth
        scroll={(el) =>
          el.scrollIntoView({ behavior: "auto", block: "center" })
        }
        to="/#services"
      >Services
      </HashLink>

     
    </div>
  );
}

export default NavbarContent;
