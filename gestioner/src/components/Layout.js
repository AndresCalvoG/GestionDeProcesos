import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar logged={props.auth} userLogged={props.user} />
      {props.children}
    </>
  );
}

export default Layout;
