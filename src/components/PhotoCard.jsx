import React from 'react';

const PhotoCard = ({ src }) => {
  return (
    <div>
      <img style={{ maxWidth: '200px' }} src={src} alt="alt" />
    </div>
  );
};

export default PhotoCard;
