// Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <div className="social-links">
        <a href="https://facebook.com" style={linkStyle}>Facebook</a>
        <a href="https://twitter.com" style={linkStyle}>Twitter</a>
        <a href="https://instagram.com" style={linkStyle}>Instagram</a>
      </div>
      <a href="/about" style={linkStyle}>About</a>
    </footer>
  );
}

export default Footer;
