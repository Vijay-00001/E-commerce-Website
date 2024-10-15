import React from 'react';
import { NavigationMenuLinks } from '@/components/Navigation/navigationMenuLinks/NavigationMenuLinks';
import CategoriesButton from '@/components/Navigation/categoriesButton/CategoriesButton';

const Navigation = () => {
   return (
      <div className="px-7 pt-5 grid grid-cols-12 align-middle my-auto">
         {/* ProductsMenu section start */}
         <div className="col-span-3 flex justify-start my-auto">
            <CategoriesButton />
         </div>
         {/* ProductsMenu section end */}

         {/* Links section start */}
         <div className="col-span-9 flex justify-end items-end">
            <NavigationMenuLinks />
         </div>
         {/* Links section end */}
      </div>
   );
};

export default React.memo(Navigation);
