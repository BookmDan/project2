import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './PlayerList';
import NavBar from './NavBar';
import Header from './Header';
import '../App.css';
import TopPlayers from './TopPlayers';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    player_name: '',
    PTS: '',
  });

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    fetch('http://localhost:3000/players')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching players:', error));
  };

  // const toggleShowTopPlayers = () => {
  //   setShowTopPlayers((prevShowTopPlayers) => !prevShowTopPlayers);
  // };

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  function handleDarkModeClick() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);

    fetch('http://localhost:3000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Player added:', data);
        setPlayers([...players, data]);
      })
      .catch((error) => console.error('Error adding player:', error));
  };

  return (
    <Router>
      <div>
        <Header
          isDarkMode={isDarkMode}
          onDarkModeClick={handleDarkModeClick} 
        />
        <NavBar />
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
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
