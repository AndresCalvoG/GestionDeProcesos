import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ children, show }) {
  let style = "";
  show ? (style = "modal-full") : (style = "modal-hiden");
  return ReactDOM.createPortal(
    <div className={style}>{children}</div>,
    document.getElementById("modal")
  );
}

export default Modal;
