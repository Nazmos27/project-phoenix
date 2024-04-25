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
    <div className='flex justify-center items-center px-10'>
        <div>
            <ul className='list-disc'>
                <li>Track your class-time easily</li>
                <li>Get real time feedback on your performance</li>
                <li>Manage your daily goal</li>
            </ul>
        </div>
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
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
        <div>
            <ul className='list-disc '>
                <li>Get real time class update</li>
                <li>Easy to use and manage system</li>
                <li>All  in one place for all your needs</li>
            </ul>
        </div>
    </div>
  );
}
