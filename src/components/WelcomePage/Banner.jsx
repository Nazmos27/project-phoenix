import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='flex justify-center items-center'>
        <div>Hello</div>
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="../../../public/Photos/student1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../public/Photos/student2.avif" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../public/Photos/vecteezy_ai-generated-cartoon-cute-3d-korean-girl-wearing-a-school_25094426.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../public/Photos/vecteezy_knowledgeable-cutie-3d-cute-girl-in-professor-character-with_22484107.png" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
        <div>World</div>
    </div>
  );
}
