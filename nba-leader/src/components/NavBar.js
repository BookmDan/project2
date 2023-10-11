import React from 'react';
import { Link } from 'react-router-dom';

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
