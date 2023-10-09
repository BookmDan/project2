import React from 'react';

function NavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Offensive")}>Top Offensive Players</button>
      <button onClick={() => onChangePage("Defensive")}>Top Defensive Players</button>
      <button onClick={() => onChangePage("Assists")}>Top Assists Players</button>
    </nav>
  );
}

export default NavBar;
