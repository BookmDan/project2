import React from 'react';

function Header({ isDarkMode, toggleDarkMode, onToggleShowPlayers }) {
  return (
    <header>
      <h2>NBA 2023 Top Charts</h2>
      <button onClick={onToggleShowPlayers}>Show All Players</button>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'Light' : 'Dark'} Mode</button>
    </header>
  );
}

export default Header;
