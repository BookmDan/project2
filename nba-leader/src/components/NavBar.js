import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/" className="nav-button">
        <button>Home</button>
      </Link>
      <Link to="/offensive" className="nav-button">
        <button>Top Offensive Players</button>
      </Link>
      <Link to="/defensive" className="nav-button">
        <button>Top Defensive Players</button>
      </Link>
      <Link to="/assists" className="nav-button">
        <button>Top Assists Players</button>
      </Link>
    </nav>
  );
}

export default NavBar;
