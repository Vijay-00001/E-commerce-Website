import '@/components/search/Search.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';

interface SearchBarProps {
   suggestions?: string[];
   onSearch: (searchTerm: string) => void;
   placeholder?: string;
}

const SearchBar = ({
   suggestions = [],
   onSearch,
   placeholder = 'Type to search ...',
}: SearchBarProps) => {
   const { register, watch, setValue } = useForm();
   const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
   const searchTerm = watch('search', '');

   useEffect(() => {
      const handler = debounce((term: string) => {
         onSearch(term);
         filterSuggestions(term);
      }, 300);

      handler(searchTerm);
      return () => {
         handler.cancel();
      };
   }, [searchTerm, onSearch]);

   const filterSuggestions = (term: string) => {
      if (!term) {
         setFilteredSuggestions([]);
         return;
      }

      const lowerCaseTerm = term.toLowerCase();
      const filtered = suggestions.filter(suggestion =>
         suggestion.toLowerCase().includes(lowerCaseTerm)
      );

      setFilteredSuggestions(filtered);
   };

   const handleSuggestionClick = (suggestion: string) => {
      setValue('search', suggestion);
      onSearch(suggestion);
      setFilteredSuggestions([]);
   };

   return (
      <div className="w-[90%] mx-auto relative">
         <input
            type="text"
            {...register('search')}
            placeholder={placeholder}
            className="main-search-input"
         />
         <FontAwesomeIcon icon={faMagnifyingGlass} className="search-button" />
         {filteredSuggestions.length > 0 && (
            <ul className="suggestions-list">
               {filteredSuggestions.map((suggestion, index) => (
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

export default SearchBar;
