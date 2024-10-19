import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import '@/components/Navigation/NavigationMenuLinks/NavigationMenuLinks.css';

const components = [
   {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
         'A modal dialog that interrupts the user with important content and expects a response.',
   },
   {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
         'For sighted users to preview content available behind a link.',
   },
   {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
         'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
   },
   {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
   },
   {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
         'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
   },
   {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
         'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
   },
];

const ListItem = React.forwardRef<
   React.ElementRef<'a'>,
   React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={cn(
                  'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  className
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   );
});

export function NavigationMenuLinks() {
   return (
      <NavigationMenu>
         <NavigationMenuList className="navigation-menu-list">
            <NavigationMenuItem>
               <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                     className={`${navigationMenuTriggerStyle()} navigation-menu-link`}
                  >
                     Home
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger className="navigation-menu-link">
                  Man
               </NavigationMenuTrigger>
               <NavigationMenuContent className="rounded-lg shadow-lg">
                  {' '}
                  {/* Background color and margin here */}
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                     {components.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                           className="navigation-menu-link"
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger className="navigation-menu-link">
                  Woman
               </NavigationMenuTrigger>
               <NavigationMenuContent className="bg-gray-100 rounded-lg shadow-lg">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                     {components.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                           className="navigation-menu-link"
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger className="navigation-menu-link">
                  Beauty
               </NavigationMenuTrigger>
               <NavigationMenuContent className="bg-gray-100 rounded-lg shadow-lg">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                     {components.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                           className="navigation-menu-link"
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger className="navigation-menu-link">
                  Watches
               </NavigationMenuTrigger>
               <NavigationMenuContent className="bg-gray-100 rounded-lg shadow-lg">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                     {components.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                           className="navigation-menu-link"
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger className="navigation-menu-link">
                  Gifts
               </NavigationMenuTrigger>
               <NavigationMenuContent className="bg-gray-100 rounded-lg shadow-lg">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                     {components.map(component => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                           className="navigation-menu-link"
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                     className={`${navigationMenuTriggerStyle()} navigation-menu-link`}
                  >
                     Blogs
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                     className={`${navigationMenuTriggerStyle()} navigation-menu-link`}
                  >
                     Contact us
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   );
}

export default React.memo(NavigationMenuLinks);
