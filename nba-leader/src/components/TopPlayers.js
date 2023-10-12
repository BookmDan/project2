import React, { useState, useEffect } from 'react';
import PlayerItem from './PlayerItem'; 

const TopPlayers = ({category}) => {
  const [topPlayers, setTopPlayers] = useState([]);

  // send props down from App.js 
  useEffect(() => {
    fetch('../../db.json') // not getting to file, making get request to localhost 
      // will change filter / sort functionality 
      .then(response => response.json())
      .then(data => {
        // Sort based on the relevant metric for the category
        let sortedPlayers;
        if (category === 'offensive') {
          sortedPlayers = data.players.filter(player => player.games >= 65);
          sortedPlayers = sortedPlayers.sort((a, b) => (b.PTS / b.minutes_played) - (a.PTS / a.minutes_played));
        } else if (category === 'defensive') {
          sortedPlayers = data.players.sort((a, b) => (b.BLK * 0.6 + b.STL * 0.4) - (a.BLK * 0.6 + a.STL * 0.4));
        } else if (category === 'assists') {
          sortedPlayers = data.players.sort((a, b) => b.AST - a.AST);
        }
        //
        setTopPlayers(sortedPlayers.slice(0, 3));  // Top 3 players based on the metric
      })
      .catch(error => console.error('Error fetching player data:', error));
  }, []);

  console.log(topPlayers) //empty array

  return (
    <div>
      <h2>Top 3 {category.charAt(0).toUpperCase() + category.slice(1)} Players</h2>
      <ul>
        
        {topPlayers.map(player => (
          <PlayerItem key={player.id} player={player} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default TopPlayers;
