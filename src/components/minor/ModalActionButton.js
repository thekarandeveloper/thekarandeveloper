import React, { useRef } from "react";
function ModalActionButton({ name, clickAction }) {
  return (
    <button
      className="modal-button bg-primary h-12 w-full 2xl:h-[6vh] title"
      target="blank"
      onClick={clickAction}
    >
      {name}
    </button>
  );
}

export default ModalActionButton;
