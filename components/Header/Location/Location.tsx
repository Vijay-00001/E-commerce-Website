'use client';
import React, { useState, useCallback, useEffect } from 'react';
import '@/components/Header/Location/Location.css';
import { IoIosArrowDown } from 'react-icons/io';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTrigger,
} from '@/components/ui/dialog';
import { useGetCountriesQuery } from '@/redux/api/apiSlice';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';
import SearchBar from '@/components/search/Search';

interface CountryData {
   iso2: string;
   iso3: string;
   country: string;
   cities: string[];
}

const Location = () => {
   const [searchTerm, setSearchTerm] = useState<string>('');
   const { data: countries = [], isLoading: countriesLoading } =
      useGetCountriesQuery({ limit: 10 });
   const { register, watch } = useForm();

   const debouncedSearch = useCallback(
      debounce((value: string) => setSearchTerm(value), 300),
      []
   );

   const searchValue = watch('search');

   useEffect(() => {
      debouncedSearch(searchValue);
      return () => {
         debouncedSearch.cancel();
      };
   }, [searchValue, debouncedSearch]);

   const handleSearch = (value: string) => {
      setSearchTerm(value);
   };

   // Safely access countries data and filter based on searchTerm
   const countrySuggestions =
      countries?.data?.map((country: CountryData) => country.country) || [];

   const filteredCountries = countrySuggestions
      ? countrySuggestions.filter(
           (country: String) =>
              typeof country === 'string' &&
              country.toLowerCase().includes(searchTerm)
        )
      : [];

   return (
      <Dialog>
         <DialogTrigger className="location">
            <div className="flex flex-col justify-start items-start">
               <span className="text-[14px] text-blurGray">Your Location</span>
               <span className="selected-location">
                  {searchTerm || 'India'}
               </span>
            </div>
            <IoIosArrowDown className="drop-down-icon" />
         </DialogTrigger>

         {!countriesLoading && (
            <DialogContent>
               <DialogHeader>
                  <h3 className="dialog-title">
                     Choose Your Delivery Location
                  </h3>
                  <p className="dialog-description">
                     Enter Your Address and We will Specify the offer for your
                     area.
                  </p>
               </DialogHeader>
               <DialogDescription className="dialog-box">
                  <SearchBar
                     suggestions={
                        searchTerm ? filteredCountries : countrySuggestions
                     }
                     onSearch={handleSearch}
                     placeholder="Type to search countries..."
                     {...register('search')}
                  />
               </DialogDescription>
            </DialogContent>
         )}
      </Dialog>
   );
};

export default React.memo(Location);
