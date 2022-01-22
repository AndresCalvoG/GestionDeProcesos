import React from "react";
import { AppContext } from "../context";
import "./styles/imageUser.css";

function ImageUser(props) {
  const { User } = React.useContext(AppContext);
  return (
    <figure className="avatar" onClick={props.action}>
      <img id="photo" src={User.photoUrl} alt="avatar" />
    </figure>
  );
}

export default ImageUser;
