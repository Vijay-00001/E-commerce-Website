import { Button } from '@/components/ui/button'
import React from 'react'
import { RxPerson } from "react-icons/rx";
import { CiShoppingBasket } from "react-icons/ci";

const AccountAndCart = () => {
  return (
    <div className='grid grid-cols-3 gap-7'>
      <div className='col-span-1'>
        <Button variant="normal" className='w-9 h-9 aspect-square rounded-full border-2 border-black text-xl p-0'>
          <RxPerson className='font-bold text-gray-700' />
        </Button>
      </div>

      <div className='col-span-2 flex '>
        <span className='mr-3 my-auto '>$ 0.00</span>
        <div className='relative'>
          <Button
            variant="normal"
            className='w-9 h-9 aspect-square rounded-full border-2 border-black text-xl p-0'
            aria-label="Shopping Basket"
          >
            <CiShoppingBasket className='h-5 w-5 text-gray-600' />
          </Button>
          <span className='w-5 h-5 bg-red-600 text-sm text-center text-white rounded-full absolute -top-2 -right-1 flex items-center justify-center'>
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AccountAndCart)