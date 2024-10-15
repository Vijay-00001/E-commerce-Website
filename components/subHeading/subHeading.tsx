import React, { FC } from 'react';
import '@/components/subHeading/subHeading.css';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IoArrowForwardOutline } from 'react-icons/io5';

export interface ProductsProps {
   iconSrc: string;
   title: string;
   description: string;
   buttonText: string;
}

const SubHeading: FC<ProductsProps> = ({
   iconSrc,
   title,
   description,
   buttonText,
}) => {
   return (
      <div className="w-full py-1">
         <div className="product-card-heading">
            <div className="flex items-center">
               <Image
                  src={iconSrc}
                  alt={`${title} Icon`}
                  width={50}
                  height={50}
                  className="best-selling-icon"
               />
               <div className="flex flex-col">
                  <h2 className="product-title">{title}</h2>
                  <p className="product-description">{description}</p>
               </div>
            </div>
            <Button variant="normal" className="see-all-button">
               {buttonText}
               <IoArrowForwardOutline className="subheading-forward-icon" />
            </Button>
         </div>
      </div>
   );
};

export default React.memo(SubHeading);
