

import React from 'react';

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map(image => (
        <img 
          key={image.id} 
          src={image.image} 
          alt={`Image ${image.id}`} 
          onClick={() => onImageClick(image)} 
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default Gallery;