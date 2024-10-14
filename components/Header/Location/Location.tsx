'use client';
import React, { useState, useCallback, useEffect } from 'react';
import '@/components/Header/Location/Location.css';
import { IoIosArrowDown } from 'react-icons/io';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogTrigger,
} from '@/components/ui/dialog';
import { useGetCountriesQuery } from '@/redux/api/apiSlice';
import { useForm } from 'react-hook-form';
import { IoSearchOutline } from 'react-icons/io5';
import { debounce } from 'lodash';

const Location = () => {
   const { data: countries, isLoading: countriesLoading } =
      useGetCountriesQuery({ limit: 10 });
   const { register, watch } = useForm();
   const [searchTerm, setSearchTerm] = useState('');

   const debouncedSearch = useCallback(
      debounce(value => setSearchTerm(value), 300),
      []
   );

   const searchValue = watch('search');

   useEffect(() => {
      debouncedSearch(searchValue);
      return () => debouncedSearch.cancel();
   }, [searchValue, debouncedSearch]);

   return (
      !countriesLoading && (
         <Dialog>
            <DialogTrigger className="location">
               <div className="flex flex-col justify-start items-start">
                  <span className="text-[14px]">Your Location</span>
                  <span className="font-bold">{'India'}</span>
               </div>
               <div className="grid-cols-1 m-0 p-0 flex justify-end">
                  <IoIosArrowDown className="w-5 h-5 text-gray-500" />
               </div>
            </DialogTrigger>
            <DialogContent>
               <div className="dialog-title">
                  <h3>Choose Your Delivery Location</h3>
               </div>
               <p className="dialog-title">
                  Enter Your Address and We will Specify the offer for your
                  area.
               </p>
               <DialogDescription className="dialog-box">
                  <div className="search-bar">
                     <IoSearchOutline className="icon" />
                     <input
                        type="text"
                        placeholder="Type to search ..."
                        className="search-input"
                        {...register('search')}
                        autoComplete="off"
                     />
                  </div>
                  <div className="country-list">
                     <ul>
                        {(searchTerm
                           ? countries?.data?.filter(
                                (item: any) =>
                                   item?.country &&
                                   item.country
                                      .toLowerCase()
                                      .includes(searchTerm.toLowerCase())
                             )
                           : countries?.data
                        ).map((item: any, index: number) => (
                           <li key={index} className={`country-item`}>
                              {item.country}
                           </li>
                        ))}
                     </ul>
                  </div>
               </DialogDescription>
            </DialogContent>
         </Dialog>
      )
   );
};

export default React.memo(Location);
