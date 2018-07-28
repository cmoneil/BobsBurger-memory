import React from "react";
import "./Counter.css";

// By extending the React.Component class, Counter inherits functionality from it
const Counter = ( props ) => (
<div className="jumbotron">
  <div className="container">
  <h1 className="text-center">Bob's Burgers Memory Game</h1>
  <div className="row">
    <div className="col-6">
    <br>
    </br>
    <h2>Score: {props.score}</h2>
    <h2>High Score: {props.highScore}</h2>
    </div>
    <div className="col-6">
    <br>
    </br>
    <h3>Memory game where you click a button. Just don't click the same button twice or you lose.</h3>
    </div>
  </div>
  </div>
</div>
)

export default Counter;
