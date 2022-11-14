import React, { useEffect, useState } from 'react';

import '../styles/FilterBar.css';

import { rovers, cameras } from '../utils/constants';
import fetchFromApi from '../utils/fetchFromApi';
import favSearch from '../utils/favSearch';
import Saved from './Saved';

const FilterBar = ({ setPhotos, page, setPage, setLoading }) => {
  const [dateType, setDateType] = useState('Earth');
  const [search, setSerach] = useState({
    rover: 'Curiosity',
    camera: 'All',
    date: new Date().toISOString().slice(0, 10),
  });
  const [saved, setSaved] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    const dateForFetch = dateType === 'Earth' ? 'earth_date' : 'sol';

    let fetch;

    if (search.camera === 'All') {
      fetch = await fetchFromApi(
        search.rover,
        `${dateForFetch}=${search.date}&page=${page}`,
      );
    } else {
      fetch = await fetchFromApi(
        search.rover,
        `${dateForFetch}=${search.date}&camera=${search.camera}&page=${page}`,
      );
    }

    setPhotos(fetch);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleChange = (e) => {
    setSerach({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  return (
    <>
      <form className="filter_bar" onSubmit={handleSubmit}>
        <div className="select_container">
          <label>Rover</label>
          <select name="rover" onChange={handleChange}>
            {rovers.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="select_container">
          <label>Camera</label>
          <select name="camera" onChange={handleChange}>
            {cameras.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="select_container">
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
              id="earth_input"
              onChange={handleChange}
              type="date"
              value={search.date}
              name="date"
            />
          ) : (
            <input
              id="sun_input"
              type="number"
              name="date"
              placeholder="Ex: 1000"
              onChange={handleChange}
            />
          )}
        </div>

        <div className="select_container">
          <button className="button" type="submit">
            Search
          </button>
          <button
            onClick={() => {
              favSearch(search);
              setSaved(saved === null ? [search] : saved.concat(search));
            }}
            type="button"
            className="button"
          >
            Save Search
          </button>
        </div>
      </form>
      <Saved saved={saved} setSaved={setSaved} />
    </>
  );
};

export default FilterBar;
