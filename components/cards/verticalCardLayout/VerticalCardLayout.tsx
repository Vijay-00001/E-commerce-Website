import React from 'react';
import '@/components/cards/verticalCardLayout/VerticalCardLayout.css';
import Image from 'next/image';
import ProductImage from '@/public/Products/image_2.jpg';
import StarRating from '@/components/starRating/StarRating';
import { FaCheck } from 'react-icons/fa6';

const VerticalCardLayout = () => {
   return (
      <div className="w-52 h-[28rem] bg-white rounded-lg overflow-hidden cursor-pointer shadow-box-shadow">
         <div className="w-full h-[40%] relative flex justify-center items-center bg-skyDark ">
            <Image
               src={ProductImage}
               alt={'Product Image'}
               width={200}
               height={200}
               className="w-full h-full "
            />
            <div className=""></div>
         </div>
         <div className="w-full h-[19%] overflow-hidden text-ellipsis px-2 my-1 text-lg font-serif text-start line-clamp">
            Lorem, ipsum dolor sit amet consec adipisicing elit. Rerum facere
            itaque accusamus, laboriosam assumenda enim dolorum, dolorem ducimus
            quibusdam dicta fugiat deserunt excepturi numquam, impedit beatae
            iusto quidem. Qui, repudiandae.
         </div>

         <div className="w-full h-[4%] px-2 my-1 flex gap-5 text-start items-end bg-inherit">
            <StarRating rating={4.4} totalUsers={108} />
         </div>
         <div className="w-full h-[4%] px-3 text-sm leading-tight text-start bg-inherit">
            <span className="text-[13px] text-heayGray font-bold">51+</span>
            <span className="text-[13px] text-blurGray">
               {' '}
               bought in past month
            </span>
         </div>
         <div className="w-full h-[5%] px-3 my-1 text-start bg-inherit">
            <div className="badge">#1 Best Seller</div>
         </div>
         <div className="w-full h-[5%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[5%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit flex">
            <FaCheck className="w-5 h-5 text-heayGray" />
            <span className="text-blue-400 font-bold">Prime</span>
         </div>
      </div>
   );
};

export default React.memo(VerticalCardLayout);
