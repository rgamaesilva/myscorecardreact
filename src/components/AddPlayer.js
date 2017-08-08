import React from 'react';

const AddPlayer = (props) => (
  <div className="add-player-form">
    <div className="form">
      <input value={props.inputValue} onChange={(event) => props.updateInput(event.target.value)}/>
      <button onClick={(e) => props.addPlayer(e)}>ADD PLAYER</button>
    </div>
  </div>
);

export default AddPlayer;
