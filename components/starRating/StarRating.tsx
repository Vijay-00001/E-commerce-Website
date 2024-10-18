import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface StarRatingProps {
   rating: number;
   totalUsers?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalUsers }) => {
   const totalStars = 5;
   const filledStars = Math.floor(rating);
   const remainingFraction = rating - filledStars;

   const fractionalFill = Math.round(remainingFraction * 10) * 10;

   return (
      <>
         <div className="flex">
            {/* Render full stars */}
            {Array(filledStars)
               .fill(0)
               .map((_, index) => (
                  <FontAwesomeIcon
                     icon={faStar}
                     key={index}
                     className="w-5 h-5 text-star"
                  />
               ))}

            {/* Render partial star if needed */}
            {fractionalFill > 0 && (
               <div className="relative inline-block">
                  {/* Full outlined star as the base */}
                  <FontAwesomeIcon
                     icon={faStar}
                     className="w-5 h-5 text-star"
                  />

                  {/* Partially filled star (with clip-path) */}
                  <FontAwesomeIcon
                     icon={faStar}
                     style={{
                        clipPath: `inset(0 ${100 - fractionalFill}% 0 0)`, // Clip star based on fraction
                     }}
                     className="absolute text-star top-0 left-0 w-5 h-5"
                  />
               </div>
            )}

            {/* Render remaining empty stars */}
            {Array(totalStars - filledStars - (fractionalFill > 0 ? 1 : 0))
               .fill(0)
               .map((_, index) => (
                  <FontAwesomeIcon
                     icon={faStar}
                     key={index}
                     className="w-5 h-5 text-star"
                  />
               ))}
         </div>

         {/* Rating number */}
         <span className="text-sm text-skyDark font-semibold">
            {totalUsers || rating}
         </span>
      </>
   );
};

export default React.memo(StarRating);
