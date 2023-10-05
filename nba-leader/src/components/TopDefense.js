import React from 'react';

const calculateDefenseScore = player => {
  return player.STL * 0.4 + player.BLK * 0.6;
};

const TopDefense = ({ players }) => {
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

  return (
    <div>
      <button onClick={handleCalculateTopDefense}>
        Calculate Top Defense Players
      </button>
    </div>
  );
};

export default TopDefense;
