import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
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

import 'swiper/css/keyboard';
// import required modules
import { EffectCoverflow, Keyboard, Pagination, Navigation } from 'swiper';

export default function SwiperImg() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
        // modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img10} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={img11} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
