import React from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Loader />
    </>
  );
}

export default Layout;
