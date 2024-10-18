import React from 'react';
import '@/components/Header/Account & Cart/AccountAndCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const AccountAndCart = () => {
   return (
      <div className="grid grid-cols-3 gap-7">
         <div className="col-span-1 flex justify-center">
            <FontAwesomeIcon icon={faUser} className="account-icon" />
         </div>

         <div className="col-span-2 flex items-center">
            <span className="price my-auto">$ 9.00</span>
            <div className="relative flex items-center">
               <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="account-icon"
               />
               <span className="item-count">0</span>
            </div>
         </div>
      </div>
   );
};

export default React.memo(AccountAndCart);
