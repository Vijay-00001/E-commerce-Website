import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FiHome } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const Links = () => {
   return (
      <div className="flex align-middle gap-5">
         <Button
            variant="normal"
            className="flex gap-2 my-auto"
         >
            <FiHome className="text-gray-500 flex align-middle my-auto" />
            <Link
               href="/"
               className="text-gray-600"
            >
               Home
            </Link>
            <IoIosArrowDown className="text-gray-500 flex align-middle my-auto" />
         </Button>

         <Button
            variant="normal"
            className="flex gap-2 my-auto"
         >
            <FiHome className="text-gray-500 flex align-middle my-auto" />
            <Link
               href="/"
               className="text-gray-600"
            >
               Mobiles
            </Link>
            <IoIosArrowDown className="text-gray-500 flex align-middle my-auto" />
         </Button>

         <Button
            variant="normal"
            className="flex gap-2 my-auto"
         >
            <FiHome className="text-gray-500 flex align-middle my-auto" />
            <Link
               href="/"
               className="text-gray-600"
            >
               Electronics
            </Link>
            <IoIosArrowDown className="text-gray-500 flex align-middle my-auto" />
         </Button>

         <Button
            variant="normal"
            className="flex gap-2 my-auto"
         >
            <FiHome className="text-gray-500 flex align-middle my-auto" />
            <Link
               href="/"
               className="text-gray-600"
            >
               Backery
            </Link>
            <IoIosArrowDown className="text-gray-500 flex align-middle my-auto" />
         </Button>

         <Button
            variant="normal"
            className="flex gap-2 my-auto"
         >
            <FiHome className="text-gray-500 flex align-middle my-auto" />
            <Link
               href="/"
               className="text-gray-600"
            >
               Grosory
            </Link>
            <IoIosArrowDown className="text-gray-500 flex align-middle my-auto" />
         </Button>

         <Button
            variant="normal"
            className="flex gap-2 my-auto"
         >
            <FiHome className="text-gray-500 flex align-middle my-auto" />
            <Link
               href="/"
               className="text-gray-600"
            >
               Contect Us
            </Link>
            <IoIosArrowDown className="text-gray-500 flex align-middle my-auto" />
         </Button>
      </div>
   );
};

export default React.memo(Links);
