import React, { useEffect, useState } from 'react';
import bannerOne from '../../assest/banner/banner7.webp';
import bannerTwo from '../../assest/banner/banner13.webp';
import bannerSeven from '../../assest/banner/banner4.jpg';
import bannerEight from '../../assest/banner/banner12.webp';
import { FaAngleLeft, FaAngleRight, FaFemale } from 'react-icons/fa';
import { MdChildFriendly, MdWatch, MdUmbrella } from 'react-icons/md';
import { IoShirt } from 'react-icons/io5';
import { SiNike, SiAdidas, SiPuma, SiZara } from 'react-icons/si';
import { GiClothes } from 'react-icons/gi';

const ShoppingHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [bannerOne, bannerTwo, bannerSeven, bannerEight];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const categoriesWithIcon = [
    { id: 'men', label: 'Men', icon: IoShirt },
    { id: 'women', label: 'Women', icon: FaFemale },
    { id: 'kids', label: 'Kids', icon: MdChildFriendly },
    { id: 'accessories', label: 'Accessories', icon: MdWatch },
    { id: 'footwear', label: 'Footwear', icon: MdUmbrella },
  ];

  const brandsWithIcon = [
    { id: 'nike', label: 'Nike', icon: SiNike },
    { id: 'adidas', label: 'Adidas', icon: SiAdidas },
    { id: 'puma', label: 'Puma', icon: SiPuma },
    { id: 'levi', label: "Levi's", icon: GiClothes },
    { id: 'zara', label: 'Zara', icon: SiZara },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Carousel */}
      <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            alt={`Slide ${index + 1}`}
            className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <button
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-200 transition"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
          }
        >
          <FaAngleLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          aria-label="Next slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-200 transition"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
        >
          <FaAngleRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Categories */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold hover:text-subMain text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categoriesWithIcon.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-subMain hover:text-white transition-shadow p-4 sm:p-6 flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-primary flex items-center justify-center">
                  {React.createElement(category.icon, { className: 'w-full h-full' })}
                </div>
                <span className="font-bold text-center text-sm sm:text-base">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold hover:text-subMain text-center mb-8">
            Shop by Brand
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brandsWithIcon.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-subMain transition-shadow hover:text-white p-4 sm:p-6 flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-primary flex items-center justify-center">
                  {React.createElement(brand.icon, { className: 'w-full h-full' })}
                </div>
                <span className="font-bold text-center text-sm sm:text-base">
                  {brand.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingHome;
