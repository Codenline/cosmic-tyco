import { useState } from 'react';
import "./Carousel.css"

export default function Carousel(props) {

  const [currentImage, setCurrentImage] = useState(0);

  const images = props.images

  const nextImage = () => {
    setCurrentImage(prevCurrentImage => (prevCurrentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(prevCurrentImage => (prevCurrentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="login-carousel">
      <button className="carousel-button left" onClick={prevImage}>&#10094;</button>
      <img src={images[currentImage]} alt="Carousel" className="carousel-image" />
      <button className="carousel-button right" onClick={nextImage}>&#10095;</button>
    </div>
  )
}