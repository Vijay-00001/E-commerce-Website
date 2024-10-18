'use client';
import React, { useState, useEffect } from 'react';
import './experiance.css';
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Experiance = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const [scrollWidth, setScrollWidth] = useState(0);
   const [containerWidth, setContainerWidth] = useState(0);

   useEffect(() => {
      const container = document.querySelector('.scrollable-menu');

      const updateScrollInfo = () => {
         if (container) {
            setScrollPosition(container.scrollLeft);
            setScrollWidth(container.scrollWidth);
            setContainerWidth(container.clientWidth);
         }
      };

      // Attach scroll event listener
      if (container) {
         container.addEventListener('scroll', updateScrollInfo);
      }

      // Run on initial load
      updateScrollInfo();

      // Clean up event listener
      return () => {
         if (container) {
            container.removeEventListener('scroll', updateScrollInfo);
         }
      };
   }, []);

   const scrollForward = () => {
      const container = document.querySelector('.scrollable-menu');
      if (container) {
         container.scrollBy({ left: 150, behavior: 'smooth' });
      }
   };

   const scrollBack = () => {
      const container = document.querySelector('.scrollable-menu');
      if (container) {
         container.scrollBy({ left: -150, behavior: 'smooth' });
      }
   };

   return (
      <div className="relative">
         {/* Backward button */}
         {scrollPosition > 0 && (
            <FontAwesomeIcon
               icon={faAngleLeft}
               className="text-2xl text-primary back-button absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
               onClick={scrollBack}
            />
         )}

         {/* Navigation Menu List */}
         <NavigationMenu>
            <NavigationMenuList className="w-48 overflow-auto whitespace-nowrap scrollable-menu">
               {Array(10)
                  .fill('Link')
                  .map((link, index) => (
                     <NavigationMenuItem key={index}>
                        <Link href="/" legacyBehavior passHref>
                           <NavigationMenuLink
                              className={`${navigationMenuTriggerStyle()}`}
                           >
                              {link} {index + 1}
                           </NavigationMenuLink>
                        </Link>
                     </NavigationMenuItem>
                  ))}
            </NavigationMenuList>
         </NavigationMenu>

         {/* Forward button */}
         {scrollPosition + containerWidth < scrollWidth && (
            <FontAwesomeIcon
               icon={faAngleRight}
               className="text-2xl text-primary forward-button absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
               onClick={scrollForward}
            />
         )}
      </div>
   );
};

export default Experiance;
