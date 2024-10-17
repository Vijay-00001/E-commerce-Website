import React from 'react';
import BestSellingSection from '@/components/home/bestSellingSection/BestSellingSection';
import FeaturedCategories from '@/components/home/featuredCategories/FeaturedCategories';
import VerticalCardLayout from '../cards/verticalCardLayout/VerticalCardLayout';
import HorizontalCardLayout from '../cards/horizontalCardLayout/HorizontalCardLayout';

const HomeComponent = () => {
   return (
      <div className="w-full my-7">
         <BestSellingSection />
         <FeaturedCategories />
         <VerticalCardLayout />
         <HorizontalCardLayout />
      </div>
   );
};

export default React.memo(HomeComponent);
