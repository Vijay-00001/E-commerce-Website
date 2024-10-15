import React from 'react';
import '@/components/Home/bestSellingSection/products/Product.css';
import Best_Selling_Icon from '@/public/Images/best-selling-icon.png';
import SubHeading from '@/components/subHeading/subHeading';

const Products = () => {
   return (
      <div className="w-full">
         <SubHeading
            iconSrc={Best_Selling_Icon.src}
            title="Best Selling"
            description="All the best selling products in one place"
            buttonText="View All"
         />
      </div>
   );
};

export default React.memo(Products);
