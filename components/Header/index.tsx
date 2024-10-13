import React from 'react';
import '@/components/Header/Header.module.css';
import Logo from '@/components/Header/Logo/Logo';
import Language from '@/components/Header/Language/Language';
import Search from '@/components/Header/Search/Search';
import AccountAndCart from '@/components/Header/Account & Cart/AccountAndCart';

const Header = () => {
   return (
      <div className="container my-3 py-1 flex align-middle">
         <div className="w-full grid grid-cols-12 align-middle">
            {/* Logo section start */}
            <div className="col-span-2 flex justify-start my-auto">
               <Logo />
            </div>
            {/* Logo section end */}

            {/* Language section start */}
            <div className="col-span-2 my-auto">
               <Language />
            </div>
            {/* Language section start */}

            {/* Search section start */}
            <div className="col-span-6 my-auto">
               <Search />
            </div>
            {/* Search section start */}

            {/* Account & Cart section start */}
            <div className="col-span-2 flex justify-end my-auto">
               <AccountAndCart />
            </div>
            {/* Account & Cart section start */}
         </div>
      </div>
   );
};

export default React.memo(Header);
