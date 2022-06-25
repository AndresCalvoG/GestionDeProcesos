import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ children, show, showMenu }) {
  let style = "";
  show ? (style = "modal-full") : (style = "modal-hiden");
  showMenu && (style = "modal-small");
  return ReactDOM.createPortal(
    <div className={style}>{children}</div>,
    document.getElementById("modal")
  );
}

export default Modal;
