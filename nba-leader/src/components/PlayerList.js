import React, { useState } from 'react';
import PlayerItem from './PlayerItem'; 
import UpdatePlayerStat from './UpdatePlayerStat';  

// send props from App.js 
const PlayerList = ({ players,
  toggleDarkMode,
  isDarkMode,
  formData,
  handleChange,
  handleSubmit,
  handleUpdateStat,}) => {
  const [showTopPlayers, setShowTopPlayers] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(false);

  // const toggleShowTopPlayers = () => {
  //   setShowTopPlayers((prevShowTopPlayers) => !prevShowTopPlayers);
  // };

  // <button onClick={toggleShowTopPlayers}>
  //         {showTopPlayers ? 'Show All Players' : 'Show Top Players'}
  //       </button>

  // {selectedPlayerId ? (
  //   <TopPlayers category="offensive" />
  // ) : (
  //   (players.map(player => (
  //     <PlayerItem key={player.id} player={player} />
  //   ))
  //   ))}
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div>
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <PlayerItem player={player} />

            {/* Button to update player stat */}
            <button onClick={() => setSelectedPlayerId(player.id)}>
              Update Player Stat
            </button>

            {/* Conditionally render the update form */}
            {selectedPlayerId === player.id && (
              <UpdatePlayerStat
                playerId={player.id}
                onUpdateStat={(playerId, newStats) =>
                  handleUpdateStat(playerId, newStats)
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
