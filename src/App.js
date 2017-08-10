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
    scoresTotal: {},
    selectedCourse: "",
    arrayOfHcp: [
      {name: "sfgc", hcp: [4, 4, 4, 4, 4, 3, 5, 3, 4, 4, 4, 3, 5, 4, 4, 3, 5, 4]},
      {name: "bv", hcp: [4, 3, 5, 4, 3, 4, 4, 4, 4, 4, 5, 3, 4, 4, 3, 4, 4, 4]}
    ]
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
    let newPlayer = {name: this.state.input, scores: scoresArray};
    const handicap = parseInt(prompt(`Please enter ${newPlayer.name} handicap`), 10)
    newPlayer = {name: this.state.input, scores: scoresArray, handicap: handicap};
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

    let totalScores = this.state.arrayOfPlayers.reduce((accumulator, value) => {
      for (const score of value.scores) {
         accumulator[value.name] = (accumulator[value.name] || 0) + score;
      }
      return accumulator;
    }, {});
    this.setState({scoresTotal: totalScores});
  }

  changeCourse = (course) => {
    for (let i = 0 ; i < this.state.arrayOfHcp.length ; i++) {
      if (this.state.arrayOfHcp[i].name === course) {
        this.setState({selectedCourse: i})
      }
    }
  }

  render() {
    return (
      <div className="scoreboard">
        <Header addHoles={this.addHoles} scoresTotal={this.state.scoresTotal} arrayOfPlayers={this.state.arrayOfPlayers} selectCourse={this.state.arrayOfHcp} selectedCourse={this.state.selectedCourse} changeCourse={this.changeCourse}/>
        <Holes arrayOfPlayers={this.state.arrayOfPlayers} arrayOfHoles={this.state.arrayOfHoles} incrementScore={this.incrementScore} decrementScore={this.decrementScore} arrayOfHcp={this.state.arrayOfHcp} selectedCourse={this.state.selectedCourse}/>
        <AddPlayer addPlayer={this.addPlayer} updateInput={this.updateInput} inputValue={this.state.input}/>
      </div>

    );
  }
}

export default App;
