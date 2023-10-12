import React from 'react';
import { Link } from 'react-router-dom';

    //  <button onClick={() => onChangePage("offensive")}>Top Offensive Players</button>
    //  <button onClick={() => onChangePage("defensive")}>Top Defensive Players</button>
    //  <button onClick={() => onChangePage("assists")}>Top Assists Players</button> 

function NavBar({onChangePage}) {
  return (
    <nav>
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
