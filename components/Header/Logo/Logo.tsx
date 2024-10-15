import React from 'react';
import '@/components/Header/logo/Logo.css';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/public/Images/basket.png';

const Logo = () => {
   return (
      <Link href="/" className="link-container ">
         <div className="flex-container">
            <Image
               src={Basket}
               alt="Logo"
               width={71}
               height={71}
               className="logo"
            />
            <h2 className="title">Market</h2>
         </div>
         <span className="subtitle">A-Z Shopping Market</span>
      </Link>
   );
};

export default React.memo(Logo);
