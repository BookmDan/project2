import React from 'react';

function NavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("offensive")}>Top Offensive Players</button>
      <button onClick={() => onChangePage("defensive")}>Top Defensive Players</button>
      <button onClick={() => onChangePage("assists")}>Top Assists Players</button>
    </nav>
  );
}

export default NavBar;
