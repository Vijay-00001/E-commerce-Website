import React from 'react';
import '@/components/Home/bestSellingSection/BestSellingSection.css';
import Image from 'next/image';
import Best_Selling_Icon from '@/public/Images/best-selling-icon.png';
import SubHeading from '@/components/subHeading/subHeading';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Coupens from '@/public/Offers/coupen.jpg';

const BestSellingSection = () => {
   return (
      <div className="flex w-full gap-3 rounded-lg">
         <div className="w-[22%] image-container">
            <Image
               src={Coupens}
               alt="Slide 1"
               width={500}
               height={700}
               className="coupon-image"
            />
            <Image
               src={Coupens}
               alt="Slide 1"
               width={500}
               height={700}
               className="coupon-image"
            />
         </div>
         <div className="w-[78%]">
            <div className="w-full">
               <SubHeading
                  iconSrc={Best_Selling_Icon.src}
                  title="Best Selling"
                  description="All the best selling products in one place"
                  buttonParts={[
                     {
                        buttonText: 'View All',
                        buttonIcon: (
                           <IoArrowForwardOutline className="subheading-forward-icon" />
                        ),
                     },
                  ]}
               />
            </div>
         </div>
      </div>
   );
};

export default React.memo(BestSellingSection);
