import React from "react";
import { Link } from "react-router-dom";
import "./machineCard.css";

function MachineCard(props) {
  return (
    <article className="machineCard-container fade">
      <h2 className="machineCard-title">{props.name}</h2>
      <figure className="machineCard-image">
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="machineCard-props">
        <p>Tipo: {props.type}</p>
        <p>Cubiculo: {props.cub}</p>
        <Link to="" className="machineCard-props-link">
          &#11013; Ver hoja de vida
        </Link>
      </div>
    </article>
  );
}

export default MachineCard;
