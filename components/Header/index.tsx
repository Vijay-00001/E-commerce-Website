import React from 'react';
import '@/components/Header/Header.css';
import Logo from '@/components/Header/logo/Logo';
import Location from '@/components/Header/location/Location';
import Search from '@/components/Header/search/Search';
import AccountAndCart from '@/components/Header/account & cart/AccountAndCart';

const Header = () => {
   return (
      <div className="flex align-middle mb-3 px-3 ">
         <div className="w-full grid grid-cols-12 gap-4 align-middle ">
            <div className="col-span-12 sm:col-span-2 flex justify-start m-auto">
               <Logo />
            </div>

            <div className="col-span-12 sm:col-span-2 m-auto ">
               <Location />
            </div>

            <div className="col-span-12 sm:col-span-5 w-full m-auto ">
               <Search />
            </div>

            <div className="col-span-12 sm:col-span-3 flex justify-end my-auto ">
               <AccountAndCart />
            </div>
         </div>
      </div>
   );
};

export default React.memo(Header);
