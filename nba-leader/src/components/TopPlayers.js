import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard'; 

const TopPlayers = ({ players }) => {
  const [category, setCategory] = useState('offensive');
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    // Call the function to update topPlayers when the category or players change
    updateTopPlayers();
  }, [category, players]);

  const updateTopPlayers = () => {
    let sortedPlayers = [...players];

    if (category === 'offensive') {
      sortedPlayers = sortedPlayers.filter(player => player.games >= 60);
      sortedPlayers = sortedPlayers.sort((a, b) => (b.PTS / b.minutes_played) - (a.PTS / a.minutes_played));
    } else if (category === 'defensive') {
      sortedPlayers = sortedPlayers.sort((a, b) => (b.BLK * 0.6 + b.STL * 0.4) - (a.BLK * 0.6 + a.STL * 0.4));
    } else if (category === 'assists') {
      sortedPlayers = sortedPlayers.sort((a, b) => b.AST - a.AST);
    }

    setTopPlayers(sortedPlayers.slice(0, 3));
  };

  return (
    <div>
      <h2>Top 3 {category.charAt(0).toUpperCase() + category.slice(1)} Players</h2>
      <ul>
        {topPlayers.map((player, index) => (
          <li key={player.id}>
            {`#${index + 1}`}
            <PlayerCard key={player.id} player={player} category={category} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setCategory('offensive')}>Top Offensive</button>
        <button onClick={() => setCategory('defensive')}>Top Defensive</button>
        <button onClick={() => setCategory('assists')}>Top Assists</button>
      </div>
    </div>
  );
};

export default TopPlayers;
