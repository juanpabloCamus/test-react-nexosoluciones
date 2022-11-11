import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        borderBottom: '1px solid grey',
      }}
    >
      <h1>Mars Photos</h1>
      <RocketLaunchIcon />
    </div>
  );
};
export default Navbar;
