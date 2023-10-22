import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

function Header() {  
  return (
    <header style={headerStyle}>
      <h1>NBA 2022-2023 Top Charts</h1>
    </header>
  );
}

export default Header;
