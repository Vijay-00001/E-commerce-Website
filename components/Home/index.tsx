import React from 'react';
import Swiper from '@/components/Home/swiper/Swiper';
import BestSellingSection from './bestSellingSection';

const HomeComponent = () => {
   return (
      <div className="w-full">
         <Swiper />
         <BestSellingSection />
      </div>
   );
};

export default React.memo(HomeComponent);
