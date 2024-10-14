'use client';

import React from 'react';
import '@/components/Header/Search/Search.css';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [suggestions, setSuggestions] = useState<string[]>([]);

   const handleChange = (e: any) => {
      const value = e.target.value;
      setSearchTerm(value);

      // Example suggestions; in a real app, you could fetch suggestions based on the input
      const exampleSuggestions = [
         'Apple',
         'Banana',
         'Cherry',
         'Date',
         'Elderberry',
         'Fig',
         'Grape',
      ];
      setSuggestions(
         value
            ? exampleSuggestions.filter(s =>
                 s.toLowerCase().includes(value.toLowerCase())
              )
            : []
      );
   };

   const handleSuggestionClick = (suggestion: string) => {
      setSearchTerm(suggestion);
      setSuggestions([]);
   };

   return (
      <div className="w-[90%] mx-auto relative">
         <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Type to search ..."
            className="main-search-input"
         />
         <IoSearchOutline className="h-5 w-5 search-button" />
         {suggestions.length > 0 && (
            <ul className="suggestions-list">
               {suggestions.map((suggestion, index) => (
                  <li
                     key={index}
                     onClick={() => handleSuggestionClick(suggestion)}
                     className="suggestion-item"
                  >
                     {suggestion}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default React.memo(Search);
