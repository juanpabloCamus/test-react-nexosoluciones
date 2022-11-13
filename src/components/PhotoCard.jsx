import React from 'react';

import '../styles/PhotoCard.css';

const PhotoCard = ({ src }) => {
  return (
    <div>
      <img className="img" src={src} alt="alt" />
    </div>
  );
};

export default PhotoCard;
