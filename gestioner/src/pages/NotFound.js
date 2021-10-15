import React from "react";
import { AppContext } from "../context";
import "./styles/notFound.css";

function NotFound() {
  const { getDataUsers } = React.useContext(AppContext);

  (async function fetchData() {
    await getDataUsers();
  })();

  return (
    <>
      <h1 className="notFound">404 Not Found</h1>
    </>
  );
}

export default NotFound;
