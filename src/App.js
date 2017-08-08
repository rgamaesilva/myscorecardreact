import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Holes from './components/Holes';
import AddPlayer from './components/AddPlayer';

class App extends Component {

  state = {
    arrayOfHoles: [],
    arrayOfPlayers: [],
    input: "",
    scoresTotal: {}
  }

  addHoles = (newValue) => {
    let newArrayOfHoles = [];
    for (let i=1 ; i<=newValue; i++) {
      newArrayOfHoles = newArrayOfHoles.concat(i);
    }
    this.setState({arrayOfHoles: newArrayOfHoles});
  }

  addPlayer = () => {
    const scoresArray = this.state.arrayOfHoles.map(() => 0);
    const newPlayer = {name: this.state.input, scores: scoresArray}
    const newArrayOfPlayers = this.state.arrayOfPlayers.concat(newPlayer);
    this.setState({arrayOfPlayers: newArrayOfPlayers, input: ""});
  }

  updateInput = (value) => {
    this.setState({ input: value})
  }

  decrementScore = (index, hole) => {
    if (this.state.arrayOfPlayers[index].scores[hole - 1] > 0) {
      const newScore = this.state.arrayOfPlayers[index].scores[hole - 1] - 1;
      let newArrayOfPlayers = this.state.arrayOfPlayers;
      newArrayOfPlayers[index].scores[hole - 1] = newScore;
      this.setState({arrayOfPlayers: newArrayOfPlayers})
    }

    const totalScores = this.state.arrayOfPlayers.reduce((accumulator, value) => {
      for (const score of value.scores) {
         accumulator[value.name] = (accumulator[value.name] || 0) + score;
      }
      return accumulator;
    }, {});
    this.setState({scoresTotal: totalScores});
  }

  incrementScore = (index, hole) => {
    const newScore = this.state.arrayOfPlayers[index].scores[hole - 1] + 1;
    let newArrayOfPlayers = this.state.arrayOfPlayers;
    newArrayOfPlayers[index].scores[hole - 1] = newScore;

    this.setState({arrayOfPlayers: newArrayOfPlayers})
    const totalScores = this.state.arrayOfPlayers.reduce((accumulator, value) => {
      for (const score of value.scores) {
         accumulator[value.name] = (accumulator[value.name] || 0) + score;
      }
      return accumulator;
    }, {});
    this.setState({scoresTotal: totalScores});
  }

  render() {
    return (
      <div className="scoreboard">
        <Header addHoles={this.addHoles} scoresTotal={this.state.scoresTotal} arrayOfPlayers={this.state.arrayOfPlayers}/>
        <Holes arrayOfPlayers={this.state.arrayOfPlayers} arrayOfHoles={this.state.arrayOfHoles} incrementScore={this.incrementScore} decrementScore={this.decrementScore}/>
        <AddPlayer addPlayer={this.addPlayer} updateInput={this.updateInput} inputValue={this.state.input}/>
      </div>

    );
  }
}

export default App;
