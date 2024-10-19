import React from 'react';
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
   return (
      <div
         className={cn(
            'w-[60%] h-[18.5rem] max-h-max flex my-5 bg-white rounded-lg overflow-hidden shadow-box-shadow',
            className
         )}
      >
         {/* Product Image Section */}
         <div className="min-w-[221px] min-h-full relative flex justify-center items-center bg-skyDark overflow-hidden cursor-pointer">
            <Image
               src={productImage}
               alt={'Product Image'}
               width={200}
               height={200}
               className="w-full h-full transition-all duration-300 ease-in-out hover:scale-125"
            />
         </div>
         <div className="min-w-[401px] h-full max-h-max flex flex-col py-2 px-1">
            {/* Product Description */}
            <div className="w-full min-h-[51px] h-[51px] text-xl text-start text-ellipsis px-2 py-0 mt-1 overflow-hidden font-thin horizontal-line-clamp cursor-pointer">
               Lorem, ipsum dolor sit amet consec adipisicing elit. Rerum facere
               itaque accusamus Lorem, ipsum dolor sit amet consec adipisicing
               elit. Rerum facere itaque accusamus Lorem, ipsum dolor sit amet
               consec adipisicing elit. Rerum facere itaque accusamus Lorem,
               ipsum dolor sit amet consec adipisicing elit. Rerum facere itaque
               accusamus
            </div>

            {/* Star Rating Section */}
            {rating && (
               <div className="min-h-6 h-6 flex gap-3 px-[10px] py-0 mt-[6px] text-start items-end overflow-hidden">
                  <StarRating rating={rating} totalUsers={totalUsers} />
               </div>
            )}

            {/* Purchase Details */}
            <div className="w-full h-5 flex items-center px-3 py-0 mt-[2px] text-sm leading-tight text-start overflow-hidden">
               <span className="text-[13px] text-heayGray font-bold">51+</span>
               <span className="text-[13px] text-blurGray">
                  {' '}
                  bought in past month
               </span>
            </div>

            {/* Best Seller Badge (optional) */}
            {isBestSeller && (
               <div className="min-h-7 h-7 px-3 py-0 mt-[2px] text-start overflow-hidden">
                  <div className="badge flex items-center cursor-pointer">
                     #1 Best Seller
                  </div>
               </div>
            )}

            {/* Discount and Price Section */}
            <div className="min-h-5 h-5 flex align-middle items-center gap-3 px-3 py-0 mt-[2px] overflow-hidden">
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

            <div className="h-4 flex items-center gap-3 px-3 mt-1 text-start overflow-hidden">
               <div className="text-[11px] text-heayGray font-bold">
                  10% Off on Select Bank Cards
               </div>
            </div>

            {/* Festival Offer Text */}
            {festivalText && (
               <div className="h-11 flex items-center px-3 mt-[2px] text-start overflow-hidden">
                  <span className="bg-skyDark p-1 px-2 text-white text-sm font-serif rounded cursor-pointer">
                     {festivalText}
                  </span>
               </div>
            )}

            {/* Prime Badge (optional) */}
            {primeEligible && (
               <div className="h-5 flex items-center gap-1 px-3 mt-[2px] text-start bg-inherit overflow-hidden">
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

            <div className="h-3 flex items-center gap-3 px-3 mt-[2px] text-start overflow-hidden">
               <div className="text-[11px] text-heayGray font-medium">
                  Get it by <span className="font-bold">{deliveryDate}</span>
               </div>
               <div className="text-[11px] text-heayGray">
                  FREE Delivery by Market
               </div>
            </div>

            {/* Original Price and Delivery Date */}
            <div className="min-h-[14%] flex align-middle items-center px-3 mt-1 text-start overflow-hidden">
               <Button
                  variant="default"
                  className="capitalize text-lg font-bold bg-skyDark text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-box-shadow hover:bg-heayGray"
               >
                  Add to Cart
               </Button>
            </div>

            <div className="min-h-[5.5%] flex items-center gap-3 px-3 mt-1 text-start overflow-hidden">
               <div className="px-3 text-[11px] text-heayGray font-bold underline transition-all duration-300 ease-in-out cursor-pointer hover:text-skyDark">
                  +1 colors/patterns
               </div>
            </div>
         </div>
      </div>
   );
};

export default React.memo(HorizontalCardLayout);
