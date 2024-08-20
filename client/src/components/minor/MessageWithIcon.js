import React, { useRef } from "react";
import { IoOpenOutline } from "react-icons/io5";
function MessageWithIcon({ description }) {
  return (
    <div className="meeting-body w-full h-[40vh] md:h-full flex bg-highlight justify-center items-center text-center p-4 ">
      <div className="label lg:title">
        <IoOpenOutline className="large-heading w-full mb-5 lg:label" />
        {description}
      </div>
    </div>
  );
}

export default MessageWithIcon;
