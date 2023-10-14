import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isDarkMode, toggleDarkMode, onToggleShowPlayers }) {

  // <h2>NBA 2023 Top Charts</h2>
  //     <button onClick={onToggleShowPlayers}>Show All Players</button>
  //     <button onClick={toggleDarkMode}>{isDarkMode ? 'Light' : 'Dark'} Mode</button>
  
  return (
    <header>
      <h1>NBA 2022-2023 Top Charts</h1>
    </header>
  );
}

export default Header;
