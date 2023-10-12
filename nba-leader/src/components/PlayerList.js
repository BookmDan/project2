import React, { useState, useEffect } from 'react';
import PlayerItem from './PlayerItem'; 
import TopPlayers from './TopPlayers'; // Import TopPlayers component

// send props from App.js 
const PlayerList = ({players, isDarkMode, toggleDarkMode}) => {
  const [showTopPlayers, setShowTopPlayers] = useState(false);

  const toggleShowTopPlayers = () => {
    setShowTopPlayers((prevShowTopPlayers) => !prevShowTopPlayers);
  };


  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <button onClick={toggleShowTopPlayers}>
          {showTopPlayers ? 'Show All Players' : 'Show Top Players'}
        </button>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </nav>

      <div>
        {showTopPlayers ? (
          <TopPlayers category="offensive" />
        ) : (
          (players.map(player => (
            <PlayerItem key={player.id} player={player} />
          ))
          ))}
      </div>
    </div>
  );
};

export default PlayerList;
