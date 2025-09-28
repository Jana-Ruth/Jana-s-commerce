import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, handleRatingChange }) => {
  return [1, 2, 3, 4, 5].map((star) => (
    <button
      onClick={handleRatingChange ? ()=> handleRatingChange(star) : null }
      className={`rounded-full p-2 transition-colors  ${
        star <= rating
          ? "text-yellow-500 hover:bg-black"
          : "text-black hover:bg-primary hover:text-primary-foreground"
      }`}
    >
      <FaStar className={`w-6 h-6 ${star<=rating ? 'fill-yellow-500' : 'fill-black'}`} />
    </button>
  ));
};

export default StarRating;
