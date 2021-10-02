import React from "react";
import ReactDOM from "react-dom";
import "./styles/modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="hiden" id="menu">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
