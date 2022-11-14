import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos, page }) => {
  if (photos.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          color: 'orange',
        }}
      >
        {page !== 1 ? (
          <h1>There are no more photos with these search parameters</h1>
        ) : (
          <>
            <h1>There are no photos with these search parameters</h1>
            <h2>Please try others</h2>
          </>
        )}
      </div>
    );
  }

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
