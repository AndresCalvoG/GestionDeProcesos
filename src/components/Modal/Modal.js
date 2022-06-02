import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ children, classe }) {
  return ReactDOM.createPortal(
    <div className={classe}>{children}</div>,
    document.getElementById("modal")
  );
}

export default Modal;
