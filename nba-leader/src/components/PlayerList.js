import React, { useState, useEffect } from 'react';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [playerImage, setPlayerImage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const URL = 'http://localhost:3000/players';

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error));
  };

  const createPlayer = () => {
    const newPlayer = {
      player_name: playerName,
      image: playerImage,
      games: 0,
      minutes_played: 0,
      AST: 0,
      STL: 0,
      BLK: 0,
      PTS: 0,
      team: '',
    };

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlayer),
    })
      .then(res => res.json())
      .then(createdPlayer => {
        setPlayers([...players, createdPlayer]);
        setPlayerName('');
        setPlayerImage('');
        setShowForm(false);
      })
      .catch(error => console.error('Error creating player:', error));
  };

  return (
    <div>
      <nav>
        <button onClick={() => setShowForm(!showForm)}>Toggle Form</button>
      </nav>
      {showForm && (
        <form onSubmit={createPlayer}>
          <input
            type="text"
            placeholder="Player Name"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Player Image URL"
            value={playerImage}
            onChange={e => setPlayerImage(e.target.value)}
          />
          <button type="submit">Create Player</button>
        </form>
      )}
      <div>
        {players.map(player => (
          <div key={player.id} className="card">
            <h2>{player.player_name}</h2>
            <img src={player.image} alt={player.player_name} className="player-avatar" />
            <p>{player.PTS} Points</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
