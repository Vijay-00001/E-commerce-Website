import React from 'react';
import '@/components/Navigation/Navigation.css';
import ProductsMenu from '@/components/Navigation/ProductMenu/ProductsMenu';
import { NavigationMenuLinks } from '@/components/Navigation/NavigationMenuLinks/NavigationMenuLinks';

const Navigation = () => {
   return (
      <div className="grid grid-cols-12 align-middle my-auto">
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
