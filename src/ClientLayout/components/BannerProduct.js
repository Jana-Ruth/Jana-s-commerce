import React, { useEffect, useState } from 'react';
import image1 from '../../assest/banner/banner_kids.png';
import image2 from '../../assest/banner/banner_mens.png';
import image3 from '../../assest/banner/banner_women.png';
import image4 from '../../assest/banner/account.jpg';
import image5 from '../../assest/banner/banner-2.webp';
import image6 from '../../assest/banner/banner10.webp';
import image7 from '../../assest/banner/banner11.webp';
import image8 from '../../assest/banner/banner12.webp';

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [
    image1,
    image2,
    image3,
    image4,
  ];

  const mobileImages = [
    
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImage !== 0) {
      setCurrentImage(prev => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container mx-auto rounded">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden">
          <div className="flex justify-between w-full text-2xl">
            <button onClick={prevImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Desktop and Tablet Version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-h-full min-w-full transition-all"
              key={imageURL}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" alt={`Desktop Banner ${index}`} />
            </div>
          ))}
        </div>

        {/* Mobile Version */}
        <div className="flex h-full w-full overflow-hidden md:hidden">
          {mobileImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-h-full min-w-full transition-all"
              key={imageURL}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img
                src={imageURL}
                className="w-full h-full object-cover"
                alt={`Mobile Banner ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
