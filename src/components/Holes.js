import React from 'react';
import Hole from './Hole';

const Holes = (props) => (
  <div>
    {props.arrayOfHoles.map((hole, index) =>
      <div className="players" key={index}>
        <Hole arrayOfPlayers={props.arrayOfPlayers} hole={hole} incrementScore={props.incrementScore} decrementScore={props.decrementScore}/>
      </div>
    )}
  </div>

);

export default Holes;
