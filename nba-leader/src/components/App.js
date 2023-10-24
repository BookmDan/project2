import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './PlayerList';
import NavBar from './NavBar';
import Header from './Header';
import NewPlayerForm from './NewPlayerForm';  
import '../App.css';
import TopPlayers from './TopPlayers';
import Footer from './Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    fetch('http://localhost:3000/players')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching players:', error));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const handleAddNewPlayer = (newPlayer) => {
    // Create a copy of the current players and add the new player to it.
    const updatedPlayers = [...players, newPlayer];
    // Set the updated players in the state.
    setPlayers(updatedPlayers);
  };

  return (
    <Router>
      <div>
        <Header
        />
        <NavBar/>
        <NewPlayerForm onAddNewPlayer={handleAddNewPlayer} /> 
        <Routes>
          <Route
            path="/offensive"
            element={<TopPlayers category="offensive" players={players} />}
          />
          <Route
            path="/defensive"
            element={<TopPlayers category="defensive" players={players} />}
          />
          <Route
            path="/assists"
            element={<TopPlayers category="assists" players={players}/>}
          />
          <Route
            path="/"
            element={
              <PlayerList
                players={players}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
            }
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
