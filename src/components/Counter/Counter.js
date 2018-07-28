import React from "react";


// By extending the React.Component class, Counter inherits functionality from it
const Counter = ( props ) => (
<div className="jumbotron">
  <div className="container">
    <h2>Score: {props.score}</h2>
    <h2>High Score: {props.highScore}</h2>
  </div>
</div>
)


  // The render method returns the JSX that should be rendered
//   render() {
//     return (
        
//         <Counter
//           count={this.state.count}
//           handleIncrement={this.handleIncrement}
//         />
//     );
//   }
// }

export default Counter;
