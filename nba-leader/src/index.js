import React from 'react';
import ReactDOM, { createRoot }  from 'react-dom';
import App from './components/App'; // Import your main App component
import './index.css';
// import './App.css'

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App/>)