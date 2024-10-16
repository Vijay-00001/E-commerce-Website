import React from 'react';
import '@/components/Home/bestSellingSection/products/Product.css';
import Best_Selling_Icon from '@/public/Images/best-selling-icon.png';
import SubHeading from '@/components/subHeading/subHeading';
import { IoArrowForwardOutline } from 'react-icons/io5';

const Products = () => {
   return (
      <div className="w-full">
         <SubHeading
            iconSrc={Best_Selling_Icon.src}
            title="Best Selling"
            description="All the best selling products in one place"
            buttonParts={[
               {
                  buttonText: 'View All',
                  buttonIcon: (
                     <IoArrowForwardOutline className="subheading-forward-icon" />
                  ),
               },
            ]}
         />
         <div className="flex gap-8 justify-center">
            <div className="products-card">
               <img
                  className="card__background"
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                  width="1920"
                  height="2193"
               />
               <div className="card__content | flow">
                  <div className="card__content--container | flow">
                     <h2 className="card__title">Colombia</h2>
                     <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum in labore laudantium deserunt fugiat
                        numquam.
                     </p>
                  </div>
                  <button className="card__button">Read more</button>
               </div>
            </div>
            <div className="products-card">
               <img
                  className="card__background"
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                  width="1920"
                  height="2193"
               />
               <div className="card__content | flow">
                  <div className="card__content--container | flow">
                     <h2 className="card__title">Colombia</h2>
                     <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum in labore laudantium deserunt fugiat
                        numquam.
                     </p>
                  </div>
                  <button className="card__button">Read more</button>
               </div>
            </div>
            <div className="products-card">
               <img
                  className="card__background"
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                  width="1920"
                  height="2193"
               />
               <div className="card__content | flow">
                  <div className="card__content--container | flow">
                     <h2 className="card__title">Colombia</h2>
                     <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum in labore laudantium deserunt fugiat
                        numquam.
                     </p>
                  </div>
                  <button className="card__button">Read more</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default React.memo(Products);
