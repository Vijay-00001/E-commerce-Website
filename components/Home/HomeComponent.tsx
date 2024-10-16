import React from 'react';
import BestSellingSection from '@/components/Home/bestSellingSection/BestSellingSection';
import FeaturedCategories from '@/components/Home/featuredCategories/FeaturedCategories';

const HomeComponent = () => {
   return (
      <div className="w-full px-11 py-7 min-h-min">
         <BestSellingSection />
         <FeaturedCategories />
      </div>
   );
};

export default React.memo(HomeComponent);
