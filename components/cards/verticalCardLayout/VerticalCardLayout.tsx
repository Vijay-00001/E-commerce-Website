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
            'w-52 h-[28rem] bg-white rounded-lg overflow-hidden cursor-pointer shadow-box-shadow',
            className
         )}
      >
         {/* Product Image Section */}
         <div className="w-full h-[37%] relative flex justify-center items-center bg-skyDark overflow-hidden">
            <Image
               src={productImage}
               alt={'Product Image'}
               width={200}
               height={200}
               className="w-full h-full transition-all duration-300 ease-in-out hover:scale-125"
            />
         </div>

         {/* Product Description */}
         <div className="w-full h-[16%] overflow-hidden text-ellipsis px-2 my-1 text-md font-thin text-start line-clamp">
            Lorem, ipsum dolor sit amet consec adipisicing elit. Rerum facere
            itaque accusamus...
         </div>

         {/* Star Rating Section */}
         {rating && (
            <div className="w-full h-[4%] px-[10px] my-1 flex gap-5 text-start items-end bg-inherit">
               <StarRating rating={rating} totalUsers={totalUsers} />
            </div>
         )}

         {/* Purchase Details */}
         <div className="w-full h-[4%] px-3 text-sm leading-tight text-start bg-inherit">
            <span className="text-[13px] text-heayGray font-bold">51+</span>
            <span className="text-[13px] text-blurGray">
               {' '}
               bought in past month
            </span>
         </div>

         {/* Best Seller Badge (optional) */}
         {isBestSeller && (
            <div className="w-full h-[5%] px-3 my-[2px] text-start bg-inherit">
               <div className="badge">#1 Best Seller</div>
            </div>
         )}

         {/* Discount and Price Section */}
         <div className="flex w-full h-[5%] px-3 my-1 text-start bg-inherit">
            <span className="text-[15px] text-neoneRed font-bold">
               {discount}
            </span>
            <div className="flex items-center text-black ml-3 ">
               <span className="flex items-start">
                  <FontAwesomeIcon
                     icon={faIndianRupeeSign}
                     className="w-[10px] h-[14px] px-1 text-black"
                  />
               </span>
               <span className="h-full text-[18px] font-mono -ml-[3px] -mt-1 origanal-price">
                  {price.toFixed(2)}
               </span>
            </div>
         </div>

         {/* Festival Offer Text */}
         {festivalText && (
            <div className="w-full h-[5%] px-3 text-start bg-inherit">
               <span className="bg-skyDark text-white text-sm font-serif p-1 rounded">
                  {festivalText}
               </span>
            </div>
         )}

         {/* Original Price and Delivery Date */}
         <div className="w-full h-[4%] px-3 mt-1 mb-[2px] text-start bg-inherit">
            <div className="text-[11px] text-heayGray font-medium">
               M.R.P
               <span className="text-[12px] ml-1 font-mono line-through">
                  &#x20B9;{originalPrice.toFixed(2)}
               </span>
            </div>
         </div>

         <div className="w-full h-[7%] px-3 -mt-1 text-start bg-inherit">
            <div className="text-[11px] text-heayGray  overflow-hidden text-ellipsis line-clamp-1 font-medium">
               Get it by <span className="font-bold">{deliveryDate}</span>
            </div>
            <div className="text-[11px] text-heayGray  overflow-hidden text-ellipsis line-clamp-1">
               FREE Delivery by Market
            </div>
         </div>

         {/* Prime Badge (optional) */}
         {primeEligible && (
            <div className="w-full h-[4%] px-3 mt-0 text-start bg-inherit flex">
               <span className="h-full mt-1 mr-2">
                  <FontAwesomeIcon
                     icon={faCheck}
                     className="w-4 h-4 text-heayGray"
                  />
               </span>
               <span className="text-primeBlue font-bold text-shadow-sub prime-text">
                  Prime
               </span>
            </div>
         )}
      </div>
   );
};

export default React.memo(VerticalCardLayout);
