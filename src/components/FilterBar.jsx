import React from 'react';
import { rovers, cameras } from '../utils/constants';

const FilterBar = () => {
  return (
    <form
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '10px',
        borderBottom: '1px solid grey',
      }}
    >
      <select>
        {rovers.map((r) => (
          <option>{r}</option>
        ))}
      </select>
      <select>
        {cameras.map((r) => (
          <option>{r}</option>
        ))}
      </select>
      <input type="date" />
      <button type="submit">Search</button>
    </form>
  );
};

export default FilterBar;
