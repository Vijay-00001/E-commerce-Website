import React from 'react';
import SocialIcons from '../socialIcons/SocialIcons';
import FooterLinks from './footerLinks/FooterLinks';

const Footer: React.FC = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="text-center text-lg-start text-dark bg-gray-200">
         {/* Social Media Section */}
         <section className="flex justify-between p-4 text-white bg-green-500">
            <div className="mr-5">
               <span>Get connected with us on social networks:</span>
            </div>
            <SocialIcons />
         </section>

         {/* Links Section */}
         <section className="container mx-auto text-center md:text-left mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <FooterLinks />
               <div>
                  <h6 className="uppercase font-bold">Contact</h6>
                  <hr className="w-16 bg-purple-500 h-1 mb-4 mt-2" />
                  <p>
                     <i className="fas fa-home mr-2"></i> New York, NY 10012, US
                  </p>
                  <p>
                     <i className="fas fa-envelope mr-2"></i> info@example.com
                  </p>
                  <p>
                     <i className="fas fa-phone mr-2"></i> +01 234 567 88
                  </p>
                  <p>
                     <i className="fas fa-print mr-2"></i> +01 234 567 89
                  </p>
               </div>
            </div>
         </section>

         {/* Copyright Section */}
         <div className="text-center p-3 bg-black bg-opacity-20">
            © {currentYear} Copyright:
            <a
               className="text-dark hover:underline ml-1"
               href="https://mdbootstrap.com/"
            >
               MDBootstrap.com
            </a>
         </div>
      </footer>
   );
};

export default Footer;
