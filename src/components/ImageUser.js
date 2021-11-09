import React from "react";
import { AppContext } from "../context";

function ImageUser(props) {
  const { photoUrl } = React.useContext(AppContext);

  return (
    <figure className="avatar" onClick={props.action}>
      <img id="photo" src={photoUrl} alt="avatar" />
    </figure>
  );
}

export default ImageUser;
