import React, { useState } from 'react';
import PlayerCard from './PlayerCard'; 
import UpdatePlayerStat from './UpdatePlayerStat';  
import NewPlayerForm from './NewPlayerForm';  


// send props from App.js 
const PlayerList = ({ players,
  toggleDarkMode,
  isDarkMode,
  formData,
  handleChange,
  handleSubmit,
  handleAddNewPlayer}) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(false);
  
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div>
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
      <NewPlayerForm onAddNewPlayer={handleAddNewPlayer} />
    </div>
  );
};

export default PlayerList;
