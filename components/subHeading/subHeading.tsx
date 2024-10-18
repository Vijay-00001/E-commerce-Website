import React, { FC } from 'react';
import '@/components/subHeading/subHeading.css';
import { Button as UIButton } from '@/components/ui/button';
import Image from 'next/image';
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import Link from 'next/link';

export interface ButtonProps {
   buttonText: string;
   buttonIcon?: React.ReactNode;
   onClick?: () => void;
}

export interface ProductsProps {
   iconSrc: string;
   title: string;
   description: string;
   linkText?: string;
   buttonParts?: ButtonProps[] | ButtonProps;
}

const SubHeading: FC<ProductsProps> = ({
   iconSrc,
   title,
   description,
   linkText,
   buttonParts,
}) => {
   return (
      <div className="w-full py-1">
         <div className="product-card-heading">
            <div className="flex items-center">
               <Image
                  src={iconSrc}
                  alt={`${title} Icon`}
                  width={50}
                  height={50}
                  className="best-selling-icon"
               />
               <div className="flex flex-col">
                  <h2 className="product-title">{title}</h2>
                  <p className="product-description">{description}</p>
               </div>
            </div>

            <div className="flex items-center justify-between">
               {linkText && (
                  <NavigationMenu>
                     <NavigationMenuList className="subheading-menu-list">
                        <NavigationMenuItem>
                           <Link href="/" legacyBehavior passHref>
                              <NavigationMenuLink
                                 className={`${navigationMenuTriggerStyle()} subheading-menu-link`}
                              >
                                 {linkText}
                              </NavigationMenuLink>
                           </Link>
                        </NavigationMenuItem>
                     </NavigationMenuList>
                  </NavigationMenu>
               )}

               {Array.isArray(buttonParts)
                  ? buttonParts.map((button, index) => (
                       <UIButton
                          key={index}
                          variant="normal"
                          className="view-all-button"
                          onClick={button.onClick}
                       >
                          {button.buttonText}
                          {button.buttonIcon && (
                             <span>{button.buttonIcon}</span>
                          )}
                       </UIButton>
                    ))
                  : buttonParts && (
                       <UIButton
                          variant="normal"
                          className="view-all-button"
                          onClick={buttonParts.onClick}
                       >
                          {buttonParts.buttonText || 'View All'}
                          {buttonParts.buttonIcon && (
                             <span>{buttonParts.buttonIcon}</span>
                          )}
                       </UIButton>
                    )}
            </div>
         </div>
      </div>
   );
};

export default React.memo(SubHeading);
