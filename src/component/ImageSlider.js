import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, onClose, siteUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log("Current Image:", images[currentIndex]);

  return (
    <div className="sliders">
      <button className="close-button" onClick={onClose}>✕</button>
      <button className="left-arrows" onClick={goToPrevious}>❮</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slide-image"
        onError={(e) => {
          console.error("Failed to load image:", images[currentIndex]);
          e.target.style.display = "none"; // Hide the broken image
        }}
      />
      <button className="right-arrows" onClick={goToNext}>❯</button>
      <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="go-to-site-button">
        Go to Site
      </a>
    </div>
  );
};

export default ImageSlider;