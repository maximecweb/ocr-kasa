import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  return (
    <Link
      to={`/flat/${props.id}`}
      state={{
        apartmentId: props.id
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Card;
