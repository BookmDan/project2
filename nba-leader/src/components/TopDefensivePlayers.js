import React, { useEffect, useState } from "react";

const TopDefensivePlayers = () => {
  const [defensivePlayers, setDefensivePlayers] = useState([]);
  const [showProfiles, setShowProfiles] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../db.json');
        const data = await response.json();

        const playersWithDefensiveRating = data.players.map((player) => ({
          ...player,
          defensiveRating: player.STL * 0.4 + player.BLK * 0.6,
        }));

        const sortedPlayers = playersWithDefensiveRating.sort(
          (a, b) => b.defensiveRating - a.defensiveRating
        );

        setDefensivePlayers(sortedPlayers.slice(0, 3));
        setShowProfiles(true);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, []);

  // const calculateTopDefensivePlayers = () => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("../../db.json");
  //       const data = await response.json();
  //       console.log(data)

  //       const playersWithDefensiveRating = data.players.map((player) => ({
  //         ...player,
  //         defensiveRating: player.STL * 0.4 + player.BLK * 0.6,
  //       }));

  //       const sortedPlayers = playersWithDefensiveRating.sort(
  //         (a, b) => b.defensiveRating - a.defensiveRating
  //       );

  //       setDefensivePlayers(sortedPlayers.slice(0, 3));
  //       setShowProfiles(true);
  //     } catch (error) {
  //       console.error("Error fetching player data:", error);
  //     }
  //   };

  //   fetchData();
  // };
  // const handleButtonClick = () => {
  //   // Update the state variable when a button is clicked
  //   setShowProfiles(true);
  // };
//   return { defensivePlayers, showProfiles };
// };

// export default useTopDefensivePlayers;

  return (
    <div>
      <h2>Top 3 Defensive Players</h2>
      {/* <button onClick={calculateTopDefensivePlayers}>
        Calculate Top Defensive Players
      </button> */}
      {showProfiles && (
        <div>
          {defensivePlayers.map((player) => (
            <div key={player.id}>
              <img src={player.image} alt={`Player ${player.id}`} />
              <span>#{player.id}</span>
              <p>{player.player_name}</p>
              <p>Defensive Rating: {player.defensiveRating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopDefensivePlayers;
