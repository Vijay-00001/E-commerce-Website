import SubHeading from '@/components/subHeading/subHeading';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Best_Selling_Icon from '@/public/Images/best-selling-icon.png';
import MySwiper from '@/components/swiper/Swiper';

interface FeaturedCategoriesProps {}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = () => {
   return (
      <div className="w-full my-7">
         <SubHeading
            iconSrc={Best_Selling_Icon.src}
            title="Best Selling"
            description="All the best selling products in one place"
            buttonParts={[
               {
                  buttonText: 'View All',
                  buttonIcon: (
                     <FontAwesomeIcon
                        icon={faArrowRight}
                        className="subheading-forward-icon"
                     />
                  ),
               },
            ]}
         />
         <MySwiper />
      </div>
   );
};

export default React.memo(FeaturedCategories);
