import React from 'react';
import '@/components/cards/verticalCardLayout/VerticalCardLayout.css';
import Image from 'next/image';
import ProductImage from '@/public/Products/image_2.jpg';
import StarRating from '@/components/starRating/StarRating';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

type VerticalCardLayoutProps = {
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
};

const VerticalCardLayout: React.FC<VerticalCardLayoutProps> = ({
   productImage = ProductImage,
   rating = 4.4,
   totalUsers = 108,
   isBestSeller = true,
   discount = '-70%',
   price = 500,
   originalPrice = 1000,
   festivalText = 'Great Indian Festival',
   deliveryDate = 'Thursday, October 24',
   primeEligible = true,
   className,
}) => {
   return (
      <div
         className={cn(
            'min-w-56 w-56 bg-white rounded-lg overflow-hidden shadow-box-shadow',
            className
         )}
      >
         {/* Product Image Section */}
         <div className="relative h-52 flex justify-center items-center bg-skyDark overflow-hidden">
            <Image
               src={productImage}
               alt={'Product Image'}
               width={200}
               height={200}
               className="w-full h-full transition-all duration-300 ease-in-out cursor-pointer hover:scale-125"
            />
         </div>

         {/* Product Description */}
         <div className="px-2 mt-1 text-md text-start font-thin overflow-hidden text-ellipsis line-clamp transition-all duration-300 ease-in-out cursor-pointer hover:text-heayGray">
            Lorem, ipsum dolor sit amet consec adipisicing elit. Rerum facere
            itaque accusamus ipsum dolor sit amet consec adipisicing elit. Rerum
            facere itaque accusamus.
         </div>

         {/* Star Rating Section */}
         {rating && (
            <div className="px-[10px] mt-1 flex gap-5 text-start items-end bg-inherit">
               <StarRating rating={rating} totalUsers={totalUsers} />
            </div>
         )}

         {/* Purchase Details */}
         <div className="px-3 text-sm text-start leading-tight bg-inherit">
            <span className="text-[13px] text-heayGray font-bold">51+</span>
            <span className="text-[13px] text-blurGray">
               {' '}
               bought in past month
            </span>
         </div>

         {/* Best Seller Badge (optional) */}
         {isBestSeller && (
            <div className="px-3 mt-[2px] text-start bg-inherit">
               <div className="badge">#1 Best Seller</div>
            </div>
         )}

         {/* Discount and Price Section */}
         <div className="flex align-middle items-center gap-3 px-3 py-0 mt-[2px] overflow-hidden">
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
         </div>

         {/* Festival Offer Text */}
         {festivalText && (
            <div className="px-3 text-start bg-inherit">
               <span className="bg-skyDark text-white text-sm font-serif p-1 rounded cursor-pointer">
                  {festivalText}
               </span>
            </div>
         )}

         {/* Original Price and Delivery Date */}
         <div className="px-3 mt-1 text-start bg-inherit">
            <div className="text-[11px] text-heayGray font-medium">
               M.R.P
               <span className="text-[12px] ml-1 font-mono line-through">
                  &#x20B9;{originalPrice.toFixed(2)}
               </span>
            </div>
         </div>

         <div className="px-3 text-start bg-inherit">
            <div className="text-[11px] text-heayGray  overflow-hidden text-ellipsis line-clamp-1 font-medium">
               Get it by <span className="font-bold">{deliveryDate}</span>
            </div>
            <div className="text-[11px] text-heayGray  overflow-hidden text-ellipsis line-clamp-1">
               FREE Delivery by Market
            </div>
         </div>

         {/* Prime Badge (optional) */}
         {primeEligible && (
            <div className="flex items-center gap-1 px-3 text-start bg-inherit overflow-hidden">
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
      </div>
   );
};

export default React.memo(VerticalCardLayout);
