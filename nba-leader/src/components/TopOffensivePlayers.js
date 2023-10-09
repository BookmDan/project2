import React, { useState, useEffect } from 'react';

const TopOffensivePlayers = () => {
  const [offensivePlayers, setOffensivePlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('../../db.json');
        const data = await response.json();
        const filteredPlayers = data.players.filter(
          (player) =>
            (player.PTS / player.minutes_played) * 100 > 60 && player.games >= 60
        );
        const sortedPlayers = filteredPlayers.sort(
          (a, b) => (b.PTS / b.minutes_played) * 100 - (a.PTS / a.minutes_played) * 100
        );
        setOffensivePlayers(sortedPlayers.slice(0, 3));
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Top 3 Offensive Players</h1>
      <ul>
        {offensivePlayers.map((player) => (
          <li key={player.id}>
            <img src={player.image} alt={`${player.player_name} Image`} />
            <p>{player.player_name}</p>
            <p>Offensive Rating: {(player.PTS / player.minutes_played) * 100}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopOffensivePlayers;
