import React from 'react';
import SelectHoles from './SelectHoles';
import TotalScores from './TotalScores';


const Header = function(props) {
  return(
    <div className="header">
      <SelectHoles addHoles={props.addHoles}/>
      <h1>Golf Scorecard</h1>
      <TotalScores scoresTotal={props.scoresTotal} arrayOfPlayers={props.arrayOfPlayers}/>
    </div>
  )
};

export default Header;
