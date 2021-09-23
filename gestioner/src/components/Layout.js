import React from "react";
import { AppContext } from "../context";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
