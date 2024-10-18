import React from 'react';
import Logo from '@/components/header/logo/Logo';
import Location from '@/components/header/location/Location';
import Search from './search/Search';
import AccountAndCart from './account & cart/AccountAndCart';

const Header = () => {
   return (
      <div className="flex mb-3 px-3">
         <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="col-span-1 sm:col-span-2 flex justify-between items-end m-auto">
               <Logo />
            </div>

            <div className="col-span-1 sm:col-span-2 flex items-end justify-center">
               <Location />
            </div>

            <div className="col-span-1 sm:col-span-5 w-full flex items-end justify-center">
               <Search />
            </div>

            <div className="col-span-1 sm:col-span-3 flex justify-center items-end ">
               <AccountAndCart />
            </div>
         </div>
      </div>
   );
};

export default React.memo(Header);
