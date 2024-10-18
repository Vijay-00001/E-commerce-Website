import React from 'react';

const FooterLinks: React.FC = () => {
   const products = [
      'MDBootstrap',
      'MDWordPress',
      'BrandFlow',
      'Bootstrap Angular',
   ];
   const usefulLinks = [
      'Your Account',
      'Become an Affiliate',
      'Shipping Rates',
      'Help',
   ];

   return (
      <>
         {/* Company Column */}
         <div>
            <h6 className="uppercase font-bold">Company Name</h6>
            <hr className="w-16 bg-purple-500 h-1 mb-4 mt-2" />
            <p>
               Here you can use rows and columns to organize your footer
               content. Lorem ipsum dolor sit amet, consectetur adipisicing
               elit.
            </p>
         </div>

         {/* Products Column */}
         <div>
            <h6 className="uppercase font-bold">Products</h6>
            <hr className="w-16 bg-purple-500 h-1 mb-4 mt-2" />
            {products.map((product, index) => (
               <p key={index}>
                  <a href="#!" className="text-dark hover:underline">
                     {product}
                  </a>
               </p>
            ))}
         </div>

         {/* Useful Links Column */}
         <div>
            <h6 className="uppercase font-bold">Useful Links</h6>
            <hr className="w-16 bg-purple-500 h-1 mb-4 mt-2" />
            {usefulLinks.map((link, index) => (
               <p key={index}>
                  <a href="#!" className="text-dark hover:underline">
                     {link}
                  </a>
               </p>
            ))}
         </div>
      </>
   );
};

export default React.memo(FooterLinks);
