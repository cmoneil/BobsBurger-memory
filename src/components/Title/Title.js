import React from "react";


// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const Title = props => (
  <div className="jumbotron">
    <div className="container">
      <p className="lead">Your Score: {props.score}</p>
    </div>
  </div>
);

export default Title;
