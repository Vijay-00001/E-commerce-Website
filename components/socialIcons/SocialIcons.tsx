import Link from 'next/link';
import React from 'react';

const SocialIcons: React.FC = () => {
   const icons = [
      { href: '#', iconClass: 'fab fa-facebook-f' },
      { href: '#', iconClass: 'fab fa-twitter' },
      { href: '#', iconClass: 'fab fa-google' },
      { href: '#', iconClass: 'fab fa-instagram' },
      { href: '#', iconClass: 'fab fa-linkedin' },
      { href: '#', iconClass: 'fab fa-github' },
   ];

   return (
      <div>
         {icons.map((icon, index) => (
            <Link
               key={index}
               href={icon.href}
               className="text-white mr-4 hover:text-gray-300"
            >
               <i className={icon.iconClass}></i>
            </Link>
         ))}
      </div>
   );
};

export default React.memo(SocialIcons);
