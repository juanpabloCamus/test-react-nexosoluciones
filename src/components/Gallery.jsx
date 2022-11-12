import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos }) => {
  if (photos.length === 0) return <h1>There arent photos with this params</h1>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {photos.map((p) => (
        <PhotoCard key={p.id} src={p.img_src} />
      ))}
    </div>
  );
};

export default Gallery;
