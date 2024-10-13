import { Button } from '@/components/ui/button';
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Type to search ..."
        className="border rounded py-2 px-4 w-full outline-none border-gray-500"
      />
      <Button variant="normal" className="ml-2 w-8 h-8 aspect-square bg-transparent rounded-full absolute right-1 top-[5px]">
        <IoSearchOutline className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
};

export default React.memo(Search);
