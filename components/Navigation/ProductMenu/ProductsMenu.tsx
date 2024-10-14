import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMenu } from 'react-icons/io5';

const ProductsMenu = () => {
   return (
      <div className="flex flex-col relative w-full">
         <Button
            variant="normal"
            className="btn-3d"
         >
            <IoMenu className="menu-icon" />
            <span className="text-black">
               All Products
            </span>
         </Button>
         <span className="product-label">
            Total 99 Products
         </span>
      </div>
   );
};

export default React.memo(ProductsMenu);
