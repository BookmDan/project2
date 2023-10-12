import React, { useState, useEffect } from 'react';
import PlayerItem from './PlayerItem'; 
import TopPlayers from './TopPlayers'; // Import TopPlayers component

// send props from App.js 
const PlayerList = ({players, isDarkMode, toggleDarkMode}) => {
  const [showTopPlayers, setShowTopPlayers] = useState(false);

  const toggleShowTopPlayers = () => {
    setShowTopPlayers((prevShowTopPlayers) => !prevShowTopPlayers);
  };
  // const [players, setPlayers] = useState([]);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const URL = 'http://localhost:3000/players';

  // useEffect(() => {
  //   fetchPlayers();
  // }, []);

  // const fetchPlayers = () => {
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(data => setPlayers(data))
  //     .catch(error => console.error('Error fetching players:', error));
  // };

  // const toggleShowTopPlayers = () => {
  //   setShowTopPlayers(prevShowTopPlayers => !prevShowTopPlayers);
  // };

  // const toggleDarkMode = () => {
  //   setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  // };

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
          // Render top players
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
