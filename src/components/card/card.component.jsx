import React from "react";
import "./card-styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
     <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monsters"
     /> 
      <h1>Monster: {props.monster.name}</h1>
      <h2 className="card__text">Email: {props.monster.email}</h2>
    </div>
  );
};
