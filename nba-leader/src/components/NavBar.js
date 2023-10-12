import React from 'react';
import { Link } from 'react-router-dom';



      // <Link to="/offensive">Top Offensive Players</Link>
      // <Link to="/defensive">Top Defensive Players</Link>
      // <Link to="/assists">Top Assists Players</Link>
function NavBar({onChangePage}) {
  return (
    <nav>
      <button onClick={() => onChangePage("offensive")}>Top Offensive Players</button>
      <button onClick={() => onChangePage("defensive")}>Top Defensive Players</button>
      <button onClick={() => onChangePage("assists")}>Top Assists Players</button>
    </nav>
  );
}

export default NavBar;
