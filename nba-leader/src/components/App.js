import React, { useState, useEffect  }  from 'react';
import PlayerList from './PlayerList';
import NavBar from './NavBar';
import Header from './Header';
import '../App.css';
import TopPlayers from './TopPlayers';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  function handleDarkModeClick() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <NavBar onChangePage={handleChangePage} />
      {currentPage && <TopPlayers category={currentPage} />}
      <PlayerList />
      
    </div>
  );
}

export default App;

