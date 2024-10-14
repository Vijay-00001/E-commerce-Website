import React from 'react';
import '@/components/Navigation/Navigation.css';
import ProductsMenu from '@/components/Navigation/productMenu/ProductsMenu';
import { NavigationMenuLinks } from '@/components/Navigation/navigationMenuLinks/NavigationMenuLinks';

const Navigation = () => {
   return (
      <div className="px-7 pt-5 grid grid-cols-12 align-middle my-auto">
         {/* ProductsMenu section start */}
         <div className="col-span-2 flex justify-start my-auto">
            <ProductsMenu />
         </div>
         {/* ProductsMenu section end */}

         {/* Links section start */}
         <div className="col-span-10 flex justify-end my-auto">
            <NavigationMenuLinks />
         </div>
         {/* Links section end */}
      </div>
   );
};

export default React.memo(Navigation);
