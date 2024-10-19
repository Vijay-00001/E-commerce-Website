import React from 'react';
import '@/components/footer/Footer.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faApple,
   faFacebookF,
   faGithub,
   faGoogle,
   faInstagram,
   faLinkedin,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
   const currentYear = new Date().getFullYear();

   const products = [
      'MDBootstrap',
      'MDWordPress',
      'BrandFlow',
      'Bootstrap Angular Bootstrap Angular Bootstrap Angular',
      'MDBootstrap',
      'MDWordPress',
      'BrandFlow',
      'Bootstrap Angular',
   ];

   const icons = [
      { href: '#', iconClass: faFacebookF },
      { href: '#', iconClass: faTwitter },
      { href: '#', iconClass: faGoogle },
      { href: '#', iconClass: faInstagram },
      { href: '#', iconClass: faLinkedin },
      { href: '#', iconClass: faGithub },
   ];

   return (
      <footer className="w-full text-center text-lg-start text-white bg-skyDark rounded-lg shadow-box-shadow">
         {/* Links Section */}
         <section className="p-7 mx-auto text-center md:text-left mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
               {/* Company Column */}
               <div>
                  <h6 className="w-full">
                     <div className="max-w-max flex flex-col font-sans px-4 pb-3 border-b-4 text-shadow-main link-title shadow-box-shadow rounded-lg">
                        <span className="pt-2 text-3xl font-bold bg-clip-text text-white text-shadow-main transition-all duration-300 ease-in-out">
                           Market
                        </span>
                        <span className="capitalize -mt-2 text-sm text-lightGray font-semibold text-shadow-sub transition-all duration-300 ease-in-out sutitle-logo">
                           A-Z Shopping
                        </span>
                     </div>
                  </h6>
                  <p className="max-h-max my-3 px-1 text-white text-ellipsis overflow-hidden line-clamp-3">
                     Here you can use rows and columns to organize your footer
                     content. Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit.
                  </p>
               </div>
               {/* Products Column */}
               <div className="mt-8">
                  <h6 className="max-w-max uppercase text-lg font-bold border-b-2 px-2 py-1 rounded-lg shadow-box-shadow">
                     Products
                  </h6>
                  <div className="w-[70%] mt-3 px-1">
                     {products.map((product, index) => (
                        <p key={index} className="inline-block ">
                           <Link
                              href="#!"
                              className="w-full text-lightGray overflow-hidden text-ellipsis line-clamp-1 transition-all duration-300 ease-in-out hover:text-shadow-neonPurple"
                           >
                              {product}
                           </Link>
                        </p>
                     ))}
                  </div>
               </div>

               {/* Products Column */}
               <div className="mt-8">
                  <h6 className="max-w-max uppercase text-lg font-bold border-b-2 px-2 py-1 rounded-lg shadow-box-shadow">
                     Products
                  </h6>
                  <div className="w-[70%] mt-3 px-1">
                     {products.map((product, index) => (
                        <p key={index} className="inline-block ">
                           <Link
                              href="#!"
                              className="w-full text-lightGray overflow-hidden text-ellipsis line-clamp-1 transition-all duration-300 ease-in-out hover:text-shadow-neonPurple"
                           >
                              {product}
                           </Link>
                        </p>
                     ))}
                  </div>
               </div>

               {/* Products Column */}
               <div className="mt-8">
                  <h6 className="max-w-max uppercase text-lg font-bold border-b-2 px-2 py-1 rounded-lg shadow-box-shadow">
                     Products
                  </h6>
                  <div className="w-[70%] mt-3 px-1">
                     {products.map((product, index) => (
                        <p key={index} className="inline-block ">
                           <Link
                              href="#!"
                              className="w-full text-lightGray overflow-hidden text-ellipsis line-clamp-1 transition-all duration-300 ease-in-out hover:text-shadow-neonPurple"
                           >
                              {product}
                           </Link>
                        </p>
                     ))}
                  </div>
               </div>

               {/* Products Column */}
               <div className="mt-8">
                  <h6 className="max-w-max uppercase text-lg font-bold border-b-2 px-2 py-1 rounded-lg shadow-box-shadow">
                     Products
                  </h6>
                  <div className="w-[70%] mt-3 px-1">
                     {products.map((product, index) => (
                        <p key={index} className="inline-block ">
                           <Link
                              href="#!"
                              className="w-full text-lightGray overflow-hidden text-ellipsis line-clamp-1 transition-all duration-300 ease-in-out hover:text-shadow-neonPurple"
                           >
                              {product}
                           </Link>
                        </p>
                     ))}
                  </div>
               </div>
               <div>
                  <h6 className="w-full mt-4">
                     <div className="max-w-max flex flex-col font-sans px-4 pb-3 border-b-4 text-shadow-main link-title shadow-box-shadow rounded-lg">
                        <span className="pt-2 text-2xl font-bold bg-clip-text text-white text-shadow-main transition-all duration-300 ease-in-out">
                           Contact
                        </span>
                     </div>
                  </h6>
                  <div className="flex flex-col mt-3">
                     <p className="w-full px-2">
                        <i className="fas fa-home mr-2"></i>New York, NY 10012,
                        US
                     </p>
                     <p className="mt-2">
                        <i className="fas fa-envelope mr-2"></i>{' '}
                        info@example.com
                     </p>
                     <p>
                        <i className="fas fa-phone mr-2"></i> +01 234 567 88
                     </p>
                     <p>
                        <i className="fas fa-print mr-2"></i> +01 234 567 89
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Social Media Section */}
         <section className="w-[93%] mx-auto flex justify-between px-10 border-t-2">
            <div className="flex flex-col align-middle justify-center items-center gap-5 px-16 text-white">
               <div className="">
                  <span>Get connected with us on social networks</span>
               </div>
               <div className="flex">
                  {icons.map((icon, index) => (
                     <Link
                        key={index}
                        href={icon.href}
                        className="text-white transition-all duration-300 ease-in-out hover:text-gray-300"
                     >
                        <FontAwesomeIcon
                           icon={icon.iconClass}
                           className="w-7 h-7 p-1 mx-3"
                        />
                     </Link>
                  ))}
               </div>
            </div>
            <div className="flex flex-col justify-center gap-5 text-white p-5">
               <div className="flex flex-col justify-start align-bottom items-center text-start">
                  <h3 className="text-xl"> Download our Market app </h3>
                  <p className="text-sm">
                     {' '}
                     Do Shopping with us. Get Best offers. All day, every day.{' '}
                  </p>
               </div>
               <div className="flex justify-center gap-5">
                  <div className="flex items-center border-b-2 rounded-lg px-4 py-2 w-56 mx-2 shadow-box-shadow cursor-pointer">
                     <Image
                        src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                        alt=""
                        width={30}
                        height={30}
                        className="w-7 md:w-8"
                     />
                     <div className="text-left ml-3">
                        <p className="text-sm text-gray-200">Download on </p>
                        <p className="text-sm md:text-base">
                           {' '}
                           Google Play Store{' '}
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center items-center border-b-2 rounded-lg px-4 py-2 w-56 mx-2 shadow-box-shadow cursor-pointer">
                     <FontAwesomeIcon
                        icon={faApple}
                        className="w-11 md:w-10 h-10 text-black"
                     />
                     <div className="text-left ml-3">
                        <p className="text-xs text-gray-200">Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="w-[93%] mx-auto flex flex-col md:flex-row md:justify-between px-3 items-center text-sm text-gray-400 border-t-2">
            <div className="text-center p-3">
               © {currentYear} Copyright:
               <a className="text-dark ml-1" href="https://marketshopping.com/">
                  Market.com
               </a>
            </div>
            <div className="order-1 md:order-2">
               <span className="px-2">About us</span>
               <span className="px-2 border-l">Contact us</span>
               <span className="px-2 border-l">Privacy Policy</span>
            </div>
         </div>

         {/* Copyright Section */}
      </footer>
   );
};

export default Footer;
