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

// import React, { useState } from 'react';
// import NavBar from './NavBar';
// import TopOffensivePlayers from './TopOffensivePlayers';
// import TopDefensivePlayers from './TopDefensivePlayers';
// import TopAssists from './TopAssists';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(null);

//   const handleChangePage = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <NavBar onChangePage={handleChangePage} />
//       {currentPage === "Offensive" && <TopOffensivePlayers />}
//       {currentPage === "Defensive" && <TopDefensivePlayers />}
//       {currentPage === "Assists" && <TopAssists />}
//     </div>
//   );
// };

// export default App;
