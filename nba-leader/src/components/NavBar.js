import React from 'react';
import { Link } from 'react-router-dom';

// <button onClick={() => onChangePage("offensive")}>Top Offensive Players</button>
// <button onClick={() => onChangePage("defensive")}>Top Defensive Players</button>
// <button onClick={() => onChangePage("assists")}>Top Assists Players</button>
function NavBar() {
  return (
    <nav>
      <Link to="/offensive">Top Offensive Players</Link>
      <Link to="/defensive">Top Defensive Players</Link>
      <Link to="/assists">Top Assists Players</Link>
    </nav>
  );
}

export default NavBar;
