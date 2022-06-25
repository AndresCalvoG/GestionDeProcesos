import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
  return (
    <article className="card-main" onClick={props.action}>
      <h2>{props.name}</h2>
      <figure className="card-image">
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
    </article>
  );
}

export default Card;
