import React from "react";
import ReactDOM from "react-dom";
import "./styles/modal.css";

function Modal({ children, id }) {
  return ReactDOM.createPortal(
    <div className="hidenModal" id={id}>
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
