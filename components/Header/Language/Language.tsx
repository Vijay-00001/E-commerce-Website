import { Button } from '@/components/ui/button';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Language = () => {
   return (
      <Button
         variant="normal"
         className="grid grid-cols-2 gap-2 w-[75%] h-16 border border-gray-500 rounded-lg text-black"
      >
         <div className="flex flex-col grid-cols-1">
            <span className="text-sm">
               All Language
            </span>
            <span className="text-xl">
               English
            </span>
         </div>

         <div className="grid-cols-1 flex justify-end">
            <IoIosArrowDown className="w-7 h-7 text-gray-500" />
         </div>
      </Button>
   );
};

export default React.memo(Language);
