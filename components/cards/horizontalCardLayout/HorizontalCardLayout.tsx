'use client';

import React, { useLayoutEffect, useState } from 'react';
import '@/components/cards/horizontalCardLayout/HorizontalCardLayout.css';
import Image from 'next/image';
import ProductImage from '@/public/Products/image_2.jpg';
import StarRating from '@/components/starRating/StarRating';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';

export interface HorizontalCardLayoutProps {
   productImage?: string;
   rating?: number;
   totalUsers?: number;
   isBestSeller?: boolean;
   discount?: string;
   price?: number;
   originalPrice?: number;
   festivalText?: string;
   deliveryDate?: string;
   primeEligible?: boolean;
   className?: string; // Allows for additional classes
}

const HorizontalCardLayout = ({
   productImage = ProductImage.src,
   rating = 4.4,
   totalUsers = 108,
   isBestSeller = true,
   discount = '-50%',
   price = 500,
   originalPrice = 1000,
   festivalText = 'Great Indian Festival',
   deliveryDate = 'Thursday, October 24',
   primeEligible = true,
   className,
}: HorizontalCardLayoutProps) => {
   const [secondDivHeight, setSecondDivHeight] = useState<number>(0);

   // Function to calculate and set the height of the second div dynamically
   const calculateHeight = () => {
      const secondDiv = document.querySelector('#secondDiv') as HTMLElement;
      if (secondDiv) {
         const newHeight = secondDiv.offsetHeight;
         setSecondDivHeight(newHeight);
      }
   };

   // Use layout effect to calculate the height after the component renders
   useLayoutEffect(() => {
      calculateHeight();

      // Add resize listener
      window.addEventListener('resize', calculateHeight);

      // Cleanup on unmount
      return () => {
         window.removeEventListener('resize', calculateHeight);
      };
   }, []);

   return (
      <div
         className={cn(
            'min-h-76 max-h-max flex bg-white rounded-lg overflow-hidden shadow-box-shadow',
            className
         )}
      >
         {/* Product Image Section */}
         <div
            style={{
               height: secondDivHeight ? `${secondDivHeight}px` : 'auto',
            }}
            className="relative min-w-56 flex justify-center items-center bg-skyDark cursor-pointer overflow-hidden"
         >
            <Image
               src={productImage}
               alt={'Product Image'}
               width={200}
               height={200}
               className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-125"
            />
         </div>
         <div
            id="secondDiv"
            className="min-w-[401px] min-h-72 max-h-max flex flex-col py-2 px-1"
         >
            {/* Product Description */}
            <div className="w-full text-xl text-start text-ellipsis px-2 py-0 mt-1 font-thin horizontal-line-clamp transition-all duration-300 ease-in-out cursor-pointer hover:text-heayGray">
               Lorem, ipsum dolor sit amet consec adipisicing elit. Rerum facere
               itaque accusamus Lorem, ipsum dolor sit amet consec adipisicing
               elit. Rerum facere itaque accusamus Lorem, ipsum dolor sit amet
               consec adipisicing elit. Rerum facere itaque accusamus Lorem,
               ipsum dolor sit amet consec adipisicing elit. Rerum facere itaque
               accusamus
            </div>

            {/* Star Rating Section */}
            {rating && (
               <div className="flex gap-3 px-[10px] py-0 mt-[6px] text-start items-end">
                  <StarRating rating={rating} totalUsers={totalUsers} />
               </div>
            )}

            {/* Purchase Details */}
            <div className="w-full h-5 flex items-center px-3 py-0 mt-[2px] text-sm leading-tight text-start">
               <span className="text-[13px] text-heayGray font-bold">51+</span>
               <span className="text-[13px] text-blurGray">
                  {' '}
                  bought in past month
               </span>
            </div>

            {/* Best Seller Badge (optional) */}
            {isBestSeller && (
               <div className="px-3 py-0 mt-[2px] text-start">
                  <div className="badge flex items-center cursor-pointer">
                     #1 Best Seller
                  </div>
               </div>
            )}

            {/* Discount and Price Section */}
            <div className="flex align-middle items-center gap-3 px-3 py-0 mt-[2px]">
               <span className="text-xl text-danger font-roboto product-discount cursor-pointer">
                  {discount}
               </span>
               <div className="flex">
                  <span className="flex items-center">
                     <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        className="w-4 h-4"
                     />
                  </span>
                  <span className="text-xl font-roboto origanal-price">
                     {price.toFixed(2)}
                  </span>
               </div>
               {/* Original Price and Delivery Date */}
               <div className="h-full flex items-end gap-1 text-[11px] text-heayGray line-through">
                  M.R.P
                  <span className="">&#x20B9; {originalPrice.toFixed(2)}</span>
               </div>
            </div>

            <div className="flex items-center gap-3 px-3 mt-1 text-start">
               <div className="text-[11px] text-heayGray font-bold">
                  10% Off on Select Bank Cards
               </div>
            </div>

            {/* Festival Offer Text */}
            {festivalText && (
               <div className="flex items-center px-3 mt-[2px] text-start">
                  <span className="bg-skyDark p-1 px-2 text-white text-sm font-serif rounded cursor-pointer">
                     {festivalText}
                  </span>
               </div>
            )}

            {/* Prime Badge (optional) */}
            {primeEligible && (
               <div className="flex items-center gap-1 px-3 mt-[2px] text-start bg-inherit">
                  <span className="h-full flex items-center">
                     <FontAwesomeIcon
                        icon={faCheck}
                        className="w-4 h-4 text-heayGray text-shadow-main"
                     />
                  </span>
                  <span className="text-primeBlue text-lg font-bold text-shadow-main prime-text">
                     Prime
                  </span>
               </div>
            )}

            <div className="flex items-center gap-3 px-3 mt-[2px] text-start">
               <div className="text-[11px] text-heayGray font-medium">
                  Get it by <span className="font-bold">{deliveryDate}</span>
               </div>
               <div className="text-[11px] text-heayGray">
                  FREE Delivery by Market
               </div>
            </div>

            {/* Original Price and Delivery Date */}
            <div className="flex align-middle items-center px-3 mt-1 text-start">
               <Button
                  variant="default"
                  className="capitalize text-lg font-bold bg-skyDark text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-box-shadow hover:bg-heayGray"
               >
                  Add to Cart
               </Button>
            </div>

            <div className="flex items-center gap-3 px-3 mt-1 text-start">
               <div className="px-3 text-[11px] text-heayGray font-bold underline transition-all duration-300 ease-in-out cursor-pointer hover:text-skyDark">
                  +1 colors/patterns
               </div>
            </div>
         </div>
      </div>
   );
};

export default React.memo(HorizontalCardLayout);
