import React from 'react';
import '@/components/Header/Header.css';
import Logo from '@/components/Header/Logo/Logo';
import Location from '@/components/Header/Location/Location';
import Search from '@/components/Header/Search/Search';
import AccountAndCart from '@/components/Header/Account & Cart/AccountAndCart';

const Header = () => {
   return (
      <div className="flex align-middle mb-3 px-3 ">
         <div className="w-full grid grid-cols-12 gap-4 align-middle ">
            <div className="col-span-12 sm:col-span-2 flex justify-start my-auto ">
               <Logo />
            </div>

            <div className="col-span-12 sm:col-span-2 m-auto ">
               <Location />
            </div>

            <div className="col-span-12 sm:col-span-6 my-auto ">
               <Search />
            </div>

            <div className="col-span-12 sm:col-span-2 flex justify-end my-auto ">
               <AccountAndCart />
            </div>
         </div>
      </div>
   );
};

export default React.memo(Header);
