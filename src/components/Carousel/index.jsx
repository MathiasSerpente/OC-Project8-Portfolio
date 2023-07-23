import './style.css';
import React, { useState } from 'react';
import Previous from '../../assets/images/carousel/previous-carousel.svg';
import Next from '../../assets/images/carousel/next-carousel.svg';

function Carousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function previousImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1
    );
  }

  function nextImage() {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % props.pictures.length
    );
  }

  const [isHovered, setHovered] = useState(false);

  const hoverTrue = () => {
    setHovered(true);
  };

  const hoverFalse = () => {
    setHovered(false);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={hoverTrue}
      onMouseLeave={hoverFalse}
    >
      <img
        className="img-carousel"
        src={props.pictures[currentImageIndex]}
        alt={`${props.name}-${props.id}`}
      />
      {props.pictures.length > 1 ? (
        <div className="container-btn-carousel">
          <button
            className={`btn-previous-carousel ${isHovered ? 'hovered' : ''}`}
            onClick={previousImage}
          >
            <img className="arrow-carousel" src={Previous} alt="Précédente" />
          </button>
          <button
            className={`btn-next-carousel ${isHovered ? 'hovered' : ''}`}
            onClick={nextImage}
          >
            <img className="arrow-carousel" src={Next} alt="Suivante" />
          </button>
        </div>
      ) : null}
      {props.pictures.length > 1 ? (
        <span className={`counter ${isHovered ? 'hovered' : ''}`}>
          {`${currentImageIndex + 1}/${props.pictures.length}`}
        </span>
      ) : null}
    </div>
  );
}

export default Carousel;
