import React, { useState } from 'react';

import { rovers, cameras } from '../utils/constants';
import fetchFromApi from '../utils/fetchFromApi';

const FilterBar = ({ setPhotos }) => {
  const [dateType, setDateType] = useState('Earth');

  const [search, setSerach] = useState({
    rover: 'Curiosity',
    camera: 'All',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    setSerach({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateForFetch = dateType === 'Earth' ? 'earth_date' : 'sol';

    let fetch;

    if (search.camera === 'All') {
      fetch = await fetchFromApi(
        search.rover,
        `${dateForFetch}=${search.date}&page=1`,
      );
    } else {
      fetch = await fetchFromApi(
        search.rover,
        `${dateForFetch}=${search.date}&camera=${search.camera}&page=1`,
      );
    }

    setPhotos(fetch);
  };

  return (
    <form
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '10px',
        borderBottom: '1px solid grey',
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Rover</label>
        <select name="rover" onChange={handleChange}>
          {rovers.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Camera</label>
        <select name="camera" onChange={handleChange}>
          {cameras.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <select
          onChange={(e) => {
            setDateType(e.target.value);
          }}
        >
          <option value="Earth">Earth date</option>
          <option value="sun">Sun date</option>
        </select>
        {dateType === 'Earth' ? (
          <input
            onChange={handleChange}
            type="date"
            value={search.date}
            name="date"
          />
        ) : (
          <input type="number" name="date" onChange={handleChange} />
        )}
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default FilterBar;
