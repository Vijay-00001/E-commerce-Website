import React from 'react';
import '@/components/Header/logo/Logo.css';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/public/Images/basket.png';

const Logo = () => {
   return (
      <Link href="/" className="link-container ">
         <Image
            src={Basket}
            alt="Logo"
            width={71}
            height={71}
            className="logo"
         />
         <div className="flex-container">
            <h2 className="title">Market</h2>
            <span className="subtitle">A-Z Shopping</span>
         </div>
      </Link>
   );
};

export default React.memo(Logo);
