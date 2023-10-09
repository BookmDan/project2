import React from 'react';

const OffensivePlayerItem = ({ player }) => {
  return (
    <div className="offensive-player-card">
      <h2>{player.player_name}</h2>
      <img src={player.image} alt={player.player_name} className="player-avatar" />
      <p>Points: {player.PTS}</p>
      {/* Display other offensive player information as needed */}
    </div>
  );
};

export default OffensivePlayerItem;