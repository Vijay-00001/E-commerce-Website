'use client';

import React, { useCallback, useMemo, useState } from 'react';
import SearchBar from '@/components/search/Search';
import { Button } from '@/components/ui/button';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchProps {
   suggestions?: string[];
}

const Search: React.FC<SearchProps> = ({ suggestions = [] }) => {
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

   const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
         const value = e.target.value;
         setSearchTerm(value);

         setFilteredSuggestions(
            value
               ? suggestions.filter(s =>
                    s.toLowerCase().includes(value.toLowerCase())
                 )
               : []
         );
      },
      [suggestions]
   );

   const handleSuggestionClick = useCallback((suggestion: string) => {
      setSearchTerm(suggestion);
      setFilteredSuggestions([]);
   }, []);

   const handleSearch = useCallback((query: string) => {
      console.log('Searching for:', query);
   }, []);

   const searchBarProps = useMemo(
      () => ({
         suggestions: filteredSuggestions,
         onSearch: handleSearch,
         placeholder: 'Search for items...',
      }),
      [filteredSuggestions, handleSearch]
   );

   return <SearchBar {...searchBarProps} />;
};

export default React.memo(Search);
