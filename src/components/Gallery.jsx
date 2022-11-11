import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos }) => {
  return (
    <div>
      {photos.map((p) => (
        <PhotoCard key={p.id} src={p.img_src} />
      ))}
    </div>
  );
};

export default Gallery;
