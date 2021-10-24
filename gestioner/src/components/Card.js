import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <article className="main-container--card" onClick={props.action}>
        <h2>{props.name}</h2>
        <div className="main-container--image">
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
    </>
  );
}

export default Card;
