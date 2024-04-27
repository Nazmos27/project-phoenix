import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TimelineIcon from '@mui/icons-material/Timeline';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='flex justify-center items-center px-10'>
        <div>
            <ul className='space-y-4'>
                <li className='flex gap-3 px-4 justify-start items-center h-12 text-center py-3 w-[330px] shadow-2xl rounded-lg'>
                  <img src="../../../public/Photos/bannerIcon/locationprivacy-svgrepo-com.svg" className='h-10 w-10' alt="" />Track your class-time easily</li>
                <li className='flex gap-3 px-4 justify-start items-center h-12 text-center py-3 w-[330px] shadow-2xl rounded-lg'>
                <img src="../../../public/Photos/bannerIcon/checklist-svgrepo-com.svg" className='h-10 w-10' alt="" />
Manage your daily tasks</li>
                <li className='flex gap-3 px-4 justify-start items-center h-12 text-center py-3 w-[350px] shadow-2xl rounded-lg'>
                <img src="../../../public/Photos/bannerIcon/markushiexpensemanager-svgrepo-com.svg" className='h-10 w-10' alt="" />Improve your academic performance</li>
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
        <ul className='space-y-4'>
                <li className='flex gap-3 px-4 justify-start items-center  h-12 text-center py-3 w-[330px] shadow-2xl rounded-lg'>
                <img src="../../../public/Photos/bannerIcon/simple-time-tracker-svgrepo-com.svg" className='h-10 w-10' alt="" />Get real time class update</li>
                <li className='flex gap-3 px-4 justify-start items-center h-12 text-center py-3 w-[330px] shadow-2xl rounded-lg'>
                <img src="../../../public/Photos/bannerIcon/everyday-tasks-svgrepo-com.svg" className='h-10 w-10' alt="" />
                Easy to use and manage system</li>
                <li className='flex gap-3 px-4 justify-start items-center h-12 text-center py-3 w-[330px] shadow-2xl rounded-lg'>
                <img src="../../../public/Photos/bannerIcon/trophy-cup-svgrepo-com.svg" className='h-10 w-10' alt="" />All  in one place for all your needs</li>
            </ul>
        </div>
    </div>
  );
}







                  
                  
                  
                  