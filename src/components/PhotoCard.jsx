/* eslint-disable */
import React from 'react';

import '../styles/PhotoCard.css';

const PhotoCard = ({ src, cameraName, earthDate, sunDate, rover }) => {
  const handleOpenImg = () => {
    window.open(src, '_blank');
  };

  return (
    <div onClick={handleOpenImg} className="img_container">
      <div>
        <h3>{rover}</h3>
        <h3>{cameraName}</h3>
        <span className="img_span">Earth date: {earthDate}</span>
        <span className="img_span">Sun date: {sunDate}</span>
      </div>
      <img className="img" src={src} alt="rover_image" />
    </div>
  );
};

export default PhotoCard;
