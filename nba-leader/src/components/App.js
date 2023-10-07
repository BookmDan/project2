import React, { useState, useEffect  }  from 'react';
import PlayerList from './PlayerList';
import Header from './Header';
import '../App.css';
import TopDefense from './TopDefensivePlayers';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then(response => response.json())
      .then(data => setPlayers(data.players));
  }, []);

  function handleDarkModeClick() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <TopDefense players={players} />
      <PlayerList />
    </div>
  );
}

export default App;
