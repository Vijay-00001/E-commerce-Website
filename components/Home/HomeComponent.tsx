import React from 'react';
import BestSellingSection from './bestSellingSection/BestSellingSection';

const HomeComponent = () => {
   return (
      <div className="w-full px-11 py-7 min-h-min">
         <BestSellingSection />
      </div>
   );
};

export default React.memo(HomeComponent);
