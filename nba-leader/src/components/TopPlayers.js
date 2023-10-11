import React, { useState, useEffect } from 'react';
import PlayerItem from './PlayerItem'; 

const TopPlayers = ({category}) => {
  const [topPlayers, setTopPlayers] = useState([]);
  const [tatumPlayer, setTatumPlayer] = useState(null); 

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('../../db.json');
        const data = await response.json();
        const jaysonTatum = data.players.find(player => player.player_name === "Jayson Tatum");
        if (jaysonTatum) {
          setTatumPlayer(jaysonTatum);
        } else {
          console.error('Jayson Tatum not found.');
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayers();
  }, []);

  // useEffect(() => {
  //   fetch('../../db.json')
  //     .then(response => response.json())
      // .then(data => {
      //   let sortedPlayers;
      //   if (category === 'offensive') {
      //     sortedPlayers = data.players.sort((a, b) => (b.PTS / b.minutes_played) - (a.PTS / a.minutes_played));
      //   } else if (category === 'defensive') {
      //     sortedPlayers = data.players.sort((a, b) => (b.BLK / b.minutes_played) - (a.BLK / a.minutes_played));
      //   } else if (category === 'assists') {
      //     sortedPlayers = data.players.sort((a, b) => b.AST - a.AST);
      //   }

        // const sortedPlayers = data.players.sort((a, b) => (b.PTS / b.minutes_played) - (a.PTS / a.minutes_played));
  //       setTopPlayers(sortedPlayers.slice(0, 3));  // Top 3 players by offensive metric
  //     })
  //     .catch(error => console.error('Error fetching player data:', error));
  // }, [category]);

  return (
    <div>
      {/* <h2>Top 3 {category.charAt(0).toUpperCase() + category.slice(1)} Players</h2>
      <ul>
        {topPlayers.map(player => (
          <PlayerItem key={player.id} player={player} category={category} />
        ))}
      </ul> */}
      <h1>Jayson Tatum - Top Offensive Player</h1>
      {tatumPlayer && <PlayerItem player={tatumPlayer} />}
    </div>
  );
};

export default TopPlayers;
