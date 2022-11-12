import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {photos.map((p) => (
        <PhotoCard key={p.id} src={p.img_src} />
      ))}
    </div>
  );
};

export default Gallery;
