import React from 'react';

import marsLogo from '../assets/mars_logo.png';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid grey',
        flexDirection: 'column',
        gap: '3px',
        paddingBottom: '5px',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <img style={{ maxWidth: '50px' }} src={marsLogo} alt="mars_logo" />
        <h1 style={{ margin: '0' }}>Mars Photos</h1>
        <img style={{ maxWidth: '50px' }} src={marsLogo} alt="mars_logo" />
      </div>
      <span>Discover Mars browsing the photos taken by NASA rovers </span>
    </div>
  );
};
export default Navbar;
