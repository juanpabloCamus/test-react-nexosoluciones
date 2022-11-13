import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos }) => {
  if (photos.length === 0) return <h1>There arent photos with this params</h1>;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        padding: '0px 10px',
      }}
    >
      {photos.map((p) => (
        <PhotoCard
          key={p.id}
          src={p.img_src}
          cameraName={p.camera.full_name}
          earthDate={p.earth_date}
          sunDate={p.sol}
          rover={p.rover.name}
        />
      ))}
    </div>
  );
};

export default Gallery;
