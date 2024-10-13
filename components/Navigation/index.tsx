import React from 'react';
import '@/components/Navigation/Navigation.module.css';
import Links from '@/components/Navigation/Links/Links';
import ProductsMenu from '@/components/Navigation/ProductMenu/ProductsMenu';

const Navigation = () => {
   return (
      <div className="container">
         <div className="grid grid-cols-12 align-middle my-auto">
            {/* ProductsMenu section start */}
            <div className="col-span-2 flex justify-start my-auto">
               <ProductsMenu />
            </div>
            {/* ProductsMenu section end */}

            {/* Links section start */}
            <div className="col-span-10 flex justify-end my-auto">
               <Links />
            </div>
            {/* Links section end */}
         </div>
      </div>
   );
};

export default React.memo(Navigation);
