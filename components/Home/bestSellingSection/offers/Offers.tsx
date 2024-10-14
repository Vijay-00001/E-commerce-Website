import React from 'react';
import '@/components/Home/bestSellingSection/offers/Offers.css';
import Image from 'next/image';
import Coupens from '@/public/Offers/coupen.jpg';

const Offers = () => {
   return (
      <div className="image-container group">
         <Image
            src={Coupens}
            alt="Slide 1"
            width={500}
            height={700}
            className="coupon-image"
         />
         <div className="icon-sidebar group-hover:show-icons">
            <div className="icon-wrapper">
               <div className="icon-item">
                  <i className="fas fa-heart icon-heart"></i>
               </div>
               <div className="icon-item">
                  <i className="fas fa-search icon-zoom"></i>
               </div>
               <div className="icon-item">
                  <i className="fas fa-share icon-share"></i>
               </div>
            </div>
         </div>
      </div>
   );
};

export default React.memo(Offers);
