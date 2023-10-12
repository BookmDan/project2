import React from 'react';

const PlayerItem = ({ player, category }) => {
  const offensiveRating = ((player.PTS / player.minutes_played) * 100).toFixed(2);
  const defensiveRating = (player.BLK * 0.6 + player.STL * 0.4).toFixed(2);

  return (
    <div className="card">
      <div className="card-content">
        <h2>{player.player_name}</h2>
        <img src={player.image} alt={player.player_name} className="player-avatar" />
        <p>Points: {player.PTS}</p>
        <p>Offensive Rating: {offensiveRating}</p>
        <p>Defensive Rating: {defensiveRating}</p>
        <p>Assists: {player.AST}</p>
      </div>

    </div>
  );
};

export default PlayerItem;