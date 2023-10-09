import React, { useState, useEffect } from 'react';

const TopAssists = () => {
  const [topAssistsPlayers, setTopAssistsPlayers] = useState([]);

  useEffect(() => {
    // Fetch player data and sort by assists
    fetch('../../db.json')
      .then(response => response.json())
      .then(data => {
        const sortedPlayers = data.players.sort((a, b) => b.AST - a.AST);
        setTopAssistsPlayers(sortedPlayers.slice(0, 3));  // Top 3 players by assists
      })
      .catch(error => console.error('Error fetching player data:', error));
  }, []);

  return (
    <div>
      <h2>Top 3 Players by Assists</h2>
      <ul>
        {topAssistsPlayers.map(player => (
          <li key={player.id}>
            <div>
              <img src={player.image} alt={player.player_name} />
            </div>
            <div>
              <h3>{player.player_name}</h3>
              <p>Team: {player.team}</p>
              <p>Assists: {player.AST}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopAssists;
