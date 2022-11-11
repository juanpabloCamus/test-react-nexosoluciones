import React, { useState } from 'react';
import { rovers, cameras } from '../utils/constants';

const FilterBar = () => {
  const [date, setDate] = useState('Earth');

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Rover</label>
        <select>
          {rovers.map((r) => (
            <option>{r}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Camera</label>
        <select>
          {cameras.map((r) => (
            <option>{r}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <select
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <option value="Earth">Earth date</option>
          <option value="sun">Sun date</option>
        </select>
        {date === 'Earth' ? <input type="date" /> : <input type="number" />}
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default FilterBar;
