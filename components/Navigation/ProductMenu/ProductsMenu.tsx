import { Button } from '@/components/ui/button';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';

const ProductsMenu = () => {
   return (
      <div className="flex flex-col relative w-full ">
         <Button
            variant="normal"
            className="border rounded-full text-lg px-5 pt-7 pb-9 gap-3"
         >
            <IoIosMenu className="w-5 h-5 text-black font-bold" />
            <span className="text-black">
               All Products
            </span>
         </Button>
         <span className="border bg-white absolute px-3 py-1 rounded-full -bottom-4 left-8">
            Total 99 Products
         </span>
      </div>
   );
};

export default React.memo(ProductsMenu);
