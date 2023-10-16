import React, { useState } from 'react';

const UpdatePlayerStat = ({ playerId, onUpdateStat }) => {
  const [newStats, setNewStats] = useState({
    PTS: '',
    AST: '',
    // Add other statistics as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStats({ ...newStats, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateStat(playerId, newStats);
    // Reset the form after submission if needed
    setNewStats({
      PTS: '',
      AST: '',
      // Reset other statistics as needed
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Points (PTS):
        <input
          type="number"
          name="PTS"
          value={newStats.PTS}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Assists (AST):
        <input
          type="number"
          name="AST"
          value={newStats.AST}
          onChange={handleInputChange}
        />
      </label>
      {/* Add other input fields for additional statistics */}
      <button type="submit">Update Stats</button>
    </form>
  );
};

export default UpdatePlayerStat;
