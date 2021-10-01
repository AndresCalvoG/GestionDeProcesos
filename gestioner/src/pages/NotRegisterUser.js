import React, { useEffect } from "react";
import { AppContext } from "../context";

import "./styles/notRegisterUser.css";

function NotRegisterUser() {
  const { getDataUsers } = React.useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      await getDataUsers();
    }
    fetchData();
  });

  return (
    <>
      <h1 className="notUser">Not Register User</h1>;
    </>
  );
}

export default NotRegisterUser;
