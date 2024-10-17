import React from 'react';
import '@/components/cards/verticalCardLayout/VerticalCardLayout.css';
import Image from 'next/image';
import ProductImage from '@/public/Products/image_2.jpg';

const VerticalCardLayout = () => {
   return (
      <div className="w-52 h-[28rem] bg-white rounded-lg overflow-hidden cursor-pointer">
         <div className="w-full h-[35%] relative flex justify-center items-center bg-skyDark ">
            <Image
               src={ProductImage}
               alt={'Product Image'}
               width={200}
               height={200}
               className="w-full h-full "
            />
            <div className=""></div>
         </div>
         <div className="w-full h-[20%] overflow-hidden text-ellipsis px-2 my-1 text-lg font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            facere itaque accusamus, laboriosam assumenda enim dolorum, dolorem
            ducimus quibusdam dicta fugiat deserunt excepturi numquam, impedit
            beatae iusto quidem. Qui, repudiandae.
         </div>
         <div className="w-full h-[5%] px-3 my-1 flex gap-5 text-start bg-inherit">
            <span className="">ratting star</span>
            <span className="">111</span>
         </div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit">
            50+ bought in past month
         </div>
         <div className="w-full h-[5%] px-3 my-1 text-start bg-inherit">
            #1 Best Seller sticker
         </div>
         <div className="w-full h-[5%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[5%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit"></div>
         <div className="w-full h-[4%] px-3 my-1 text-start bg-inherit"></div>
      </div>
   );
};

export default React.memo(VerticalCardLayout);
