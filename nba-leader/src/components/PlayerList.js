import React, { useState} from 'react';
import PlayerCard from './PlayerCard'; 
import NewPlayerForm from './NewPlayerForm';  

// send props from App.js 
const PlayerList = ({players, isDarkMode, toggleDarkMode, handleAddNewPlayer}) => {

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </nav>

      <div>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;