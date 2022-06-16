import React from 'react';
import Carousels from '../components/Gallery/CarouselDispo';
// import 'react-responsive-carousel/lib/styles/carousel.css';

export default function Available() {
  return (
    <>
      <h2 className="gallery__title"> Un aperçu des projets disponibles </h2>
      <Carousels />
    </>
  );
}
