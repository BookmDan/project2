import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerList from './PlayerList';
import NavBar from './NavBar';
import Header from './Header';
import '../App.css';
import TopPlayers from './TopPlayers';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [players, setPlayers] = useState([]);
  // const [currentPage, setCurrentPage] = useState(null);

  function handleDarkModeClick() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  // const handleChangePage = (page) => {
  //   setCurrentPage(page);
  // };

  // <div>
  // <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
  // <NavBar onChangePage={handleChangePage} />
  // {currentPage && <TopPlayers category={currentPage} />}
  // <PlayerList />
  
  // </div>
  // isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} 
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/offensive" render={() => <TopPlayers category="offensive" />} />
          <Route path="/defensive" render={() => <TopPlayers category="defensive" />} />
          <Route path="/assists" render={() => <TopPlayers category="assists" />} />
          <Route path="/" component={PlayerList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

