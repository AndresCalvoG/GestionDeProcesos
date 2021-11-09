import React from "react";
import ReactDOM from "react-dom";
import "./styles/modal.css";

function Modal({ children, classe }) {
  return ReactDOM.createPortal(
    <div className={classe}>{children}</div>,
    document.getElementById("modal")
  );
}

export default Modal;
