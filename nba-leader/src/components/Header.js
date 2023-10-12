import React from 'react';

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>NBA 2023 Top Charts</h2>
      {/* <button onClick={onDarkModeClick}>
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </button> */}
    </header>
  );
}

export default Header;
