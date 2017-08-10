import React from 'react';

const Hole = (props) => (
  <div>
    {props.arrayOfPlayers.map((player, index) => (
      <div className="player" key={index}>
        <div className="player-name">
          {player.name}
        </div>
        <div className="holes">
          <div className="player-holes">
            {"HOLE: "}{props.hole}
            {"-hcp- "}{props.arrayOfHcp[props.selectedCourse].hcp[props.hole -1]}
          </div>
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement" onClick={() => props.decrementScore(index, props.hole)}> - </button>
            <div className="counter-score">{player.scores[props.hole -1]}</div>
            <button className="counter-action increment" onClick={() => props.incrementScore(index, props.hole)}> + </button>
          </div>
        </div>
      </div>
    ))}
  </div>

);

export default Hole;
