'use client';

import React from 'react';
import '@/components/Home/swiper/swiper.css';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Image_1 from '@/public/Products/image_1.jpg';
import Image_2 from '@/public/Products/image_2.jpg';
import Image_3 from '@/public/Products/image_3.jpg';
import Image_4 from '@/public/Products/image_4.jpg';
import Image_5 from '@/public/Products/image_5.jpg';

const MySwiper = () => {
   return (
      <SwiperComponent
         spaceBetween={50}
         slidesPerView={1} // Show one slide at a time
         loop={true}
         autoplay={{ delay: 3000 }}
         pagination={{ clickable: true }} // Enable dots (pagination)
         effect="slide" // Enable 3D coverflow effect
         parallax={true}
         fadeEffect={{ crossFade: true }}
         coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
         }}
         modules={[Pagination, EffectCoverflow, Autoplay]} // Add required modules
         className="my-swiper"
      >
         <SwiperSlide>
            <Image
               src={Image_1}
               alt="Slide 1"
               width={500}
               height={500}
               className="slide-image"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Image
               src={Image_2}
               alt="Slide 2"
               width={500}
               height={500}
               className="slide-image"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Image
               src={Image_3}
               alt="Slide 3"
               width={500}
               height={500}
               className="slide-image"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Image
               src={Image_4}
               alt="Slide 4"
               width={500}
               height={500}
               className="slide-image"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Image
               src={Image_5}
               alt="Slide 5"
               width={500}
               height={500}
               className="slide-image"
            />
         </SwiperSlide>
      </SwiperComponent>
   );
};

export default React.memo(MySwiper);
