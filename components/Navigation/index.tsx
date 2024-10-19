import React from 'react';
import { NavigationMenuLinks } from '@/components/navigation/navigationMenuLinks/NavigationMenuLinks';
import CategoriesButton from '@/components/navigation/categoriesButton/CategoriesButton';

const Navigation = () => {
   return (
      <div className="relative flex justify-between items-end px-11 mt-3">
         {/* ProductsMenu section start */}
         <CategoriesButton />
         {/* ProductsMenu section end */}

         {/* Links section start */}
         <NavigationMenuLinks />
         {/* Links section end */}
      </div>
   );
};

export default React.memo(Navigation);
