import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import './style/style.css';

// import required modules
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
const ComSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay,EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                   <div  className='grid grid-cols-2 gap-6 '>
                   <img src="https://i.ibb.co/D9WQ3B6/community-1.jpg" className=' h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/ydLq6b6/community-4.jpg" className=' h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/vj7QcLh/community-3.jpg" className=' h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/FVgRV2r/community-2.png" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div  className='grid grid-cols-2 gap-6'>
                   <img src="https://i.ibb.co/ydLq6b6/community-4.jpg" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/D9WQ3B6/community-1.jpg" className='  h-[260px] w-[260px] object-cover  rounded-xl'/>
                   <img src="https://i.ibb.co/FVgRV2r/community-2.png" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/vj7QcLh/community-3.jpg" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div  className='grid grid-cols-2 gap-6'>
                   <img src="https://i.ibb.co/vj7QcLh/community-3.jpg" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/D9WQ3B6/community-1.jpg" className='  h-[260px] w-[260px] object-cover  rounded-xl'/>
                   <img src="https://i.ibb.co/ydLq6b6/community-4.jpg" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   <img src="https://i.ibb.co/FVgRV2r/community-2.png" className='  h-[260px] w-[260px] object-cover rounded-xl'/>
                   </div>
                </SwiperSlide>
               
    
            </Swiper>
        </>
    );
};

export default ComSlider;