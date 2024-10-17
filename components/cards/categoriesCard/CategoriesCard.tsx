import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import Basket from '@/public/Images/basket.png';

interface CategoriesCardProps {
   imageSrc: StaticImageData;
   title: string;
   itemCount: number;
   className?: string;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({
   imageSrc,
   title,
   itemCount,
   className,
}) => {
   return (
      <div
         className={cn(
            'w-36 h-48 bg-white rounded-lg overflow-hidden',
            className
         )}
      >
         <div className="w-full h-[65%] flex items-center justify-center">
            <Image
               src={imageSrc || Basket}
               alt={title}
               width={500}
               height={700}
               className="w-24 h-24"
            />
         </div>
         <h3 className="text-lg text-skyDark text-center font-poppins font-bold">
            {title || 'Categories'}
         </h3>
         <h5 className="text-sm text-heayGray text-center font-poppins font-bold">
            {itemCount || '1'} items
         </h5>
      </div>
   );
};

export default React.memo(CategoriesCard);
