import React from 'react';
import Hole from './Hole';

const Holes = (props) => (
  <div>
    {props.arrayOfHoles.map((hole, index) =>
      <div className="players" key={index}>
        <Hole arrayOfPlayers={props.arrayOfPlayers} hole={hole} incrementScore={props.incrementScore} decrementScore={props.decrementScore} arrayOfHcp={props.arrayOfHcp} selectedCourse={props.selectedCourse}/>
      </div>
    )}
  </div>

);

export default Holes;
