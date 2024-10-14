import React from 'react';
import Offers from './offers/Offers';
import Products from './products/Products';

const BestSellingSection = () => {
   return (
      <div className="grid grid-cols-12 gap-3 mt-5 rounded-lg">
         <div className="col-span-3 ">
            <Offers />
         </div>
         <div className="col-span-9">
            <Products />
         </div>
      </div>
   );
};

export default React.memo(BestSellingSection);
