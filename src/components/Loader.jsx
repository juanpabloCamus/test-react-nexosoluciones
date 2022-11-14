import React from 'react';

import logo from '../assets/mars_logo.png';
import '../styles/PhotoCard.css';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px',
      }}
    >
      <img className="loading_logo" src={logo} alt="loading_logo" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
