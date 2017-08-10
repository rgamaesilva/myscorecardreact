import React from 'react';
import SelectHoles from './SelectHoles';
import TotalScores from './TotalScores';
import SelectCourse from './SelectCourse';


const Header = function(props) {
  return(
    <div className="header">
      <div className="selectors">
        <SelectHoles addHoles={props.addHoles}/>
        <SelectCourse selectCourse={props.selectCourse} selectedCourse={props.selectCourse} changeCourse={props.changeCourse}/>
      </div>
      <h1>Golf Scorecard</h1>
      <TotalScores scoresTotal={props.scoresTotal} arrayOfPlayers={props.arrayOfPlayers}/>
    </div>
  )
};

export default Header;
