import React, { useState, useEffect  }  from 'react';
import PlayerList from './PlayerList';
import NavBar from './NavBar';
import Header from './Header';
import '../App.css';
import TopOffensivePlayers from './TopOffensivePlayers';
import TopDefensivePlayers from './TopDefensivePlayers';
import TopAssists from './TopAssists';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then(response => response.json())
      .then(data => setPlayers(data.players));
  }, []);

  function handleDarkModeClick() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {/* <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} /> */}
      {/* <TopDefense players={players} /> */}
      <NavBar onChangePage={handleChangePage} />
      {currentPage === "Offensive" && <TopOffensivePlayers />}
      {currentPage === "Defensive" && <TopDefensivePlayers />}
      {currentPage === "Assists" && <TopAssists />}
      <PlayerList />
    </div>
  );
}

export default App;

