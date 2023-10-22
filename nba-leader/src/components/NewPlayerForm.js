import React, { useState } from "react";

function NewPlayerForm({ onAddNewPlayer }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [games, setGames] = useState("");
  const [minutesPlayed, setMinutesPlayed] = useState("");
  const [assists, setAssists] = useState("");
  const [steals, setSteals] = useState("");
  const [blocks, setBlocks] = useState("");
  const [points, setPoints] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlayer = {
      "player_name": name,
      "image": image,
      "games": games,
      "minutes_played": minutesPlayed,
      "AST": assists,
      "STL": steals,
      "BLK": blocks,
      "PTS": points,
      "team": "YOUR_TEAM", // Replace with the appropriate team value.
    };

    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    })
      .then((response) => response.json())
      .then((newPlayer) => {
        onAddNewPlayer(newPlayer);
      });

    // Clear the form fields
    setName("");
    setImage("");
    setGames("");
    setMinutesPlayed("");
    setAssists("");
    setSteals("");
    setBlocks("");
    setPoints("");
  }

  return (
    <div className="new-player-form">
      <h2>New Player</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Player name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="games"
          placeholder="Games"
          value={games}
          onChange={(e) => setGames(parseInt(e.target.value))}
        />
        <input
          type="number"
          name="minutesPlayed"
          placeholder="Minutes Played"
          value={minutesPlayed}
          onChange={(e) => setMinutesPlayed(parseInt(e.target.value))}
        />
        <input
          type="number"
          name="assists"
          placeholder="Assists"
          value={assists}
          onChange={(e) => setAssists(parseInt(e.target.value))}
        />
        <input
          type="number"
          name="steals"
          placeholder="Steals"
          value={steals}
          onChange={(e) => setSteals(parseInt(e.target.value))}
        />
        <input
          type="number"
          name="blocks"
          placeholder="Blocks"
          value={blocks}
          onChange={(e) => setBlocks(parseInt(e.target.value))}
        />
        <input
          type="number"
          name="points"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value))}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
