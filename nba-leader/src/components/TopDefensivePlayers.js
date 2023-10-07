import React, {useState, useEffect } from 'react';

const calculateDefenseScore = player => {
  return player.STL * 0.4 + player.BLK * 0.6;
};

const TopDefense = ({ players }) => {
  const [defensivePlayers, setDefensivePlayers] = useState([]);
  const [showProfiles, setShowProfiles] = useState(false);

  const handleCalculateTopDefense = () => {
    if (!players || players.length === 0) {
      console.log('No players available.');
      return;
    }

    const playersWithDefenseScores = players.map(player => ({
      ...player,
      defenseScore: calculateDefenseScore(player)
    }));

    const sortedPlayers = playersWithDefenseScores.sort(
      (a, b) => b.defenseScore - a.defenseScore
    );

    const topThreePlayers = sortedPlayers.slice(0, 3);
    console.log('Top 3 players by defense score:', topThreePlayers);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("path/to/db.json");
        const data = await response.json();
        // Calculate defensive rating for each player
        const playersWithDefensiveRating = data.players.map((player) => ({
          ...player,
          defensiveRating: player.STL * 0.4 + player.BLK * 0.6,
        }));
        // Sort players by defensive rating (descending)
        const sortedPlayers = playersWithDefensiveRating.sort(
          (a, b) => b.defensiveRating - a.defensiveRating
        );
        setDefensivePlayers(sortedPlayers.slice(0, 3)); // Take the top 3 players
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Top 3 Defensive Players</h2>
      <button onClick={handleCalculateTopDefense}>
        Calculate Top Defense Players
      </button>
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

export default TopDefense;
