import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import WebsiteLogo from '@/public/Images/logo.png'

const Logo = () => {
  return (
    <div className=''>
      <Link href='/'>
        <Image src={WebsiteLogo} alt="Logo" width={145} height={100} />
        <span className='text-gray-700'>A-Z Shopping Store</span>
      </Link>
    </div>
  )
}

export default React.memo(Logo);