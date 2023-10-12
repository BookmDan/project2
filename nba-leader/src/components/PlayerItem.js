import React from 'react';

const PlayerItem = ({ player, category }) => {
  return (
    <div className="card">
      <h2>{player.player_name}</h2>
      <img src={player.image} alt={player.player_name} className="player-avatar" />
      <p>Points: {player.PTS}</p>
      <p>Offensive Rating: {((player.PTS / player.minutes_played) * 100).toFixed(2)}</p>
      <p>Defensive Rating: {(player.BLK*.6 + player.STL*.4).toFixed(2)}</p>
      <p>Assists: {player.AST}</p>

      {/* Display other offensive player information as needed */}
      {category === 'offensive' && <p>Offensive Rating: {(player.PTS / player.minutes_played) * 100}</p>}
      {category === 'defensive' && <p>Defensive Rating: {(player.BLK*.6 + player.STL*.4)}</p>}
      {category === 'assists' && <p>Assists: {player.AST}</p>}
    </div>
  );
};

export default PlayerItem;