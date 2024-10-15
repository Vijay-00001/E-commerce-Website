import React from 'react';
import '@/components/Header/Account & Cart/AccountAndCart.css';
import { RxPerson } from 'react-icons/rx';
import { CiShoppingBasket } from 'react-icons/ci';

const AccountAndCart = () => {
   return (
      <div className="grid grid-cols-3 gap-7">
         <div className="col-span-1 flex justify-center">
            <RxPerson className="account-icon" />
         </div>

         <div className="col-span-2 flex items-center">
            <span className="price my-auto">$ 9.00</span>
            <div className="relative flex items-center">
               <CiShoppingBasket className="account-icon" />
               <span className="item-count">0</span>
            </div>
         </div>
      </div>
   );
};

export default React.memo(AccountAndCart);
