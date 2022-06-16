import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/convention/IMG_convention (1).JPG';
import img2 from '../../assets/convention/IMG_convention (2).JPG';
import img3 from '../../assets/convention/IMG_convention (3).JPG';
import img4 from '../../assets/convention/IMG_convention (4).JPG';
import img5 from '../../assets/convention/IMG_convention (5).JPG';
import img6 from '../../assets/convention/IMG_convention (6).JPG';
import img7 from '../../assets/convention/IMG_convention (7).JPG';
import img8 from '../../assets/convention/IMG_convention (8).JPG';
import img9 from '../../assets/convention/IMG_convention (9).JPG';
import img10 from '../../assets/convention/IMG_convention (10).JPG';
import img11 from '../../assets/convention/IMG_convention (11).JPG';

const name = () => (
  <Carousel autoPlay useKeyboardArrows>
  
      <div>
        <img alt="projet disponible" src={img1} />
      </div>
      <div>
        <img alt="projet disponible" src={img2} />
      </div>
      <div>
        <img alt="projet disponible" src={img3} />
      </div>
      <div>
        <img alt="projet disponible" src={img4} />
      </div>
      <div>
        <img alt="projet disponible" src={img5} />
      </div>
      <div>
        <img alt="projet disponible" src={img6} />
      </div>
      <div>
        <img alt="projet disponible" src={img7} />
      </div>
      <div>
        <img alt="projet disponible" src={img8} />
      </div>
      <div>
        <img alt="projet disponible" src={img9} />
      </div>
      <div>
        <img alt="projet disponible" src={img10} />
      </div>
      <div>
        <img alt="projet disponible" src={img11} />
      </div>
  
  </Carousel>
);
export default name;
