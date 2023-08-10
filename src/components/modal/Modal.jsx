import React, { useEffect } from "react";
import "./modal.scss";
import { useState, useRef } from "react";
import { GrClose } from "react-icons/gr";
const Modal = (props) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
  return (
    <div id={props.id} className={`myModal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const CloseModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    props.onClose();
  };

  return (
    <div ref={contentRef} className="modal-content">
      {props.children}

      <div className="modal-content-close" onClick={CloseModal}>
        <GrClose />
      </div>
    </div>
  );
};

export default Modal;
