import React, { useState } from "react";

import Navbar from "./Navbar";

function Layout(props) {
  const [auth, setAuth] = useState(false);

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
