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
  })
  // const [currentPage, setCurrentPage] = useState(null);
  
  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    fetch('http://localhost:3000/players')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching players:', error));
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
    // Handle form submission with formData
    console.log('Form submitted with data:', formData);

    // Send a POST request to add a new player
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
        setPlayers([...players, data]); // Update the players state with the new player
      })
      .catch((error) => console.error('Error adding player:', error));
  };

  // players={players}
  // fetchPlayers={fetchPlayers}

  return (
    <Router>
        <div>
        <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
        <NavBar />
        <Routes>
          <Route
            path="/offensive"
            element={
              <TopPlayers
                category="offensive"
              />
            }
          />
          <Route
            path="/defensive"
            element={
              <TopPlayers
                category="defensive"
              />
            }
          />
          <Route
            path="/assists"
            element={
              <TopPlayers
                category="assists"
              />
            }
          />
          <Route
            path="/"
            element={
              <PlayerList
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

