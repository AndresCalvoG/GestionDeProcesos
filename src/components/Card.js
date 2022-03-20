import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import SelectOption from "../components/SelectOption";
import "./styles/card.css";

function Card(props) {
  const { updateMachinesArea, areas } = React.useContext(AppContext);
  const [area, setArea] = useState("");

  return props.type === "area" ? (
    <article className="areasContent">
      <label className="areasContent-title">
        <h1>Area:</h1>
        <SelectOption
          options={areas}
          value={area}
          action={setArea}
          actionMachines={(e) => {
            updateMachinesArea(e);
            props.show("contentCards");
          }}
          type="area"
        />
      </label>
      <div className={props.class}>{props.children}</div>
    </article>
  ) : props.type === "machine" ? (
    <article className="machineContent" onClick={props.action}>
      <h2>{props.name}</h2>
      <figure className="machine-image">
        {props.route ? (
          <Link to={props.route}>
            <img src={props.image} alt={props.name} />
          </Link>
        ) : props.link ? (
          <a href={props.link}>
            <img src={props.image} alt={props.name} />
          </a>
        ) : (
          <img src={props.image} alt={props.name} />
        )}
      </figure>
      <div className="machine-props">
        <p>Tipo: {props.tipo}</p>
        <p>Cubiculo: {props.cub}</p>
      </div>
    </article>
  ) : (
    <article className="card-body" onClick={props.action}>
      <h2>{props.name}</h2>
      <div className="body-image">
        {props.route ? (
          <Link to={props.route}>
            <img src={props.image} alt={props.name} />
          </Link>
        ) : props.link ? (
          <a href={props.link}>
            <img src={props.image} alt={props.name} />
          </a>
        ) : (
          <img src={props.image} alt={props.name} />
        )}
      </div>
    </article>
  );
}

export default Card;
