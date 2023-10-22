import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard'; 

const TopPlayers = ({category, players}) => {
  const [topPlayers, setTopPlayers] = useState([]);
  useEffect(() => {
    // Sort based on the relevant metric for the category
    let sortedPlayers;
    if (category === 'offensive') {
      sortedPlayers = players.filter(player => player.games >= 65);
      sortedPlayers = sortedPlayers.sort((a, b) => (b.PTS / b.minutes_played) - (a.PTS / a.minutes_played));
    } else if (category === 'defensive') {
      sortedPlayers = players.sort((a, b) => (b.BLK * 0.6 + b.STL * 0.4) - (a.BLK * 0.6 + a.STL * 0.4));
    } else if (category === 'assists') {
      sortedPlayers = players.sort((a, b) => b.AST - a.AST);
    }
    setTopPlayers(sortedPlayers.slice(0, 3));  // Top 3 players based on the metric
  }, [category, players]);

  // console.log(sortedPlayers) //empty array

  return (
    <div>
      <h2>Top 3 {category.charAt(0).toUpperCase() + category.slice(1)} Players</h2>
      <ul>
        
        {topPlayers.map((player, index) => (
          <ul key={player.id}>
            {`#${index + 1}`}
            <PlayerCard key={player.id} player={player} category={category} />
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default TopPlayers;
