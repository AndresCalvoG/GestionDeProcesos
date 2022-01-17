import React from "react";
import { AppContext } from "../context";
import "./styles/imageUser.css";

function ImageUser(props) {
  const { user } = React.useContext(AppContext);
  return (
    <figure className="avatar" onClick={props.action}>
      <img id="photo" src={user.photoUrl} alt="avatar" />
    </figure>
  );
}

export default ImageUser;
