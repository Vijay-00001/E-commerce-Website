import SubHeading from '@/components/subHeading/subHeading';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Best_Selling_Icon from '@/public/Images/best-selling-icon.png';
import MySwiper from '@/components/swiper/Swiper';

interface FeaturedCategoriesProps {}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = () => {
   return (
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
         <MySwiper />
      </div>
   );
};

export default React.memo(FeaturedCategories);
