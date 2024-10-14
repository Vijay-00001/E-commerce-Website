import React from 'react';
import Image from 'next/image';
import Coupens from '@/public/Offers/coupen.jpg';

const Offers = () => {
   return (
      <div className="w-full min-h-[301px]">
         <Image
            src={Coupens}
            alt="Slide 1"
            width={500}
            height={500}
            className="rounded-xl"
         />
      </div>
   );
};

export default React.memo(Offers);
