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
         slidesPerView={1}
         loop={true}
         autoplay={{ delay: 3000 }}
         pagination={{ clickable: true }}
         effect="fade"
         fadeEffect={{ crossFade: true }}
         modules={[Pagination, EffectCoverflow, Autoplay]}
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
