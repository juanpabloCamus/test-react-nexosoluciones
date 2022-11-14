import React, { useEffect } from 'react';

const Saved = ({ saved, setSaved }) => {
  useEffect(() => {
    const currentFavs = JSON.parse(localStorage.getItem('Favorites'));
    setSaved(currentFavs);
  }, []);

  return (
    <div>
      <span>Saved search</span>
      <select>
        {saved?.map((s) => (
          <option>
            Rover: {s.rover} -- Camera: {s.camera} -- Date: {s.date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Saved;
