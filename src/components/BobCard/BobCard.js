import React from "react";
import "./BobCard.css";

const BobCard = props => (
  <div className="col-3">
  <button className="btn grow" id={props.id} onClick={() =>props.handleClick(props.id)}>
    <div className="img-thumbnail">
      <img alt={props.name} src={props.image} />
    </div>
  </button>
  </div>
);

export default BobCard;
