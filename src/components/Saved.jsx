import React, { useEffect } from 'react';

import '../styles/FilterBar.css';

const Saved = ({ saved, setSaved, setSerach, setDateType }) => {
  useEffect(() => {
    const currentFavs = JSON.parse(localStorage.getItem('Favorites'));
    setSaved(currentFavs);
  }, []);

  const handleSearchFav = async (e) => {
    if (e.target.value === 'none') return;
    const search = JSON.parse(e.target.value);

    search.date.includes('-') ? setDateType('Earth') : setDateType('Sun');

    setSerach(search);
  };

  if (saved === null) return null;

  return (
    <div style={{ marginBottom: '20px' }} className="select_container">
      <span>Saved Searches</span>
      <select onChange={handleSearchFav}>
        <option value="none">---</option>
        {saved?.map((s) => (
          <option value={JSON.stringify(s)} key={s.date}>
            Rover: {s.rover} -- Camera: {s.camera} -- Date: {s.date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Saved;
