import React from 'react';

const TotalScores = function(props) {
  return(
    <div className="totalScores">
      <h3>TOTAL SCORE</h3>
      {props.arrayOfPlayers.map((player, index) => (
        <h5 key={index}>{player.name + ":"} {props.scoresTotal[player.name]}</h5>
      ))}
    </div>
  )
};

export default TotalScores;
