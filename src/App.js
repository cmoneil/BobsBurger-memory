import React, { Component } from "react";
import BobCard from "./components/BobCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Counter from "./components/Counter";
import bobs from "./bobs.json";
import "./App.css";


const shuffleArray = ( arr ) => bobs.sort(() => Math.random() - 0.5);

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
    score: 0,
    highScore: 0,
    clickedItem: []
  };
  handleIncrement = id => {

    //Push each clicked item into array to then check if clicked
    let clickedItemArr =this.state.clickedItem.concat(id);
    this.setState({clickedItem: clickedItemArr})
    console.log(this.state.clickedItem)
    
    let clickResult = this.state.clickedItem.includes(id)
    console.log(clickResult);
    if (clickResult === true){
      console.log("true");
      alert("Already Clicked!");
      this.setState({
        score: 0,
        clickedItem: []
    })
    }
    else{
      let newScore = this.state.score +1
    let newTopScore;
    if (newScore> this.state.highScore){ 
      newTopScore = newScore
    

    this.setState({
      highScore: newTopScore,
      score: newScore
    })}
    else{
      this.setState({
        score: newScore
      })
    };

    }
    

  
    console.log(id);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const shuffledBobs = shuffleArray(this.props.bobs);
    return (
      <Wrapper>
        <Counter
        score ={this.state.score} highScore={this.state.highScore}
        />
        <Container>
        {shuffledBobs.slice(2).map(bobs => (
          <BobCard
            handleClick={this.handleIncrement}
            id={bobs.id}
            key={bobs.id}
            image={bobs.image}
            
          />
        ))
        }
        </Container>
      </Wrapper>
    );
  }
}

export default App;
