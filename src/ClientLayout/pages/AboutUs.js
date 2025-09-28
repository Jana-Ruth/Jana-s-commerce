import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const AboutUs = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex justify-center items-center px-6 py-12">
      <div className="max-w-6xl flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
              <p className="text-gray-500 animate-pulse">Loading image...</p>
            </div>
          )}
          <img
            src="/images/aboutUs.webp"
            alt="About ShopMaster"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12">
          <h2 className="text-4xl flex gap-3 font-bold text-gray-800 mb-5 animate__animated animate__fadeIn animate__delay-1s">
            ShopMaster
            <Logo />
          </h2>
          <p className="text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-2s">
            ShopMaster is passionate about offering a wide range of high-quality products to meet your needs. Whether you're looking for cutting-edge electronics or stylish apparel for men and women, we deliver exceptional products with unparalleled customer service.
          </p>
          <p className="text-lg text-gray-600 mt-4 animate__animated animate__fadeIn animate__delay-2s">
            Your ultimate destination for electronics and fashion.
          </p>
          <p className="text-lg text-gray-700 mt-2 animate__animated animate__fadeIn animate__delay-2s">
            Thank you for choosing ShopMaster – where shopping is made easy and enjoyable.
          </p>

          {/* Toggle Button */}
          <button
          onClick={toggleDetails}
          className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg rounded-full hover:bg-subMain transition ease-out duration-300 transform hover:scale-105"
        >
          {showDetails ? "Hide Details" : "For More Contact"}
        </button>


          {/* Address Section */}
          {showDetails && (
            <ul className="mt-8 space-y-6">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 text-xl mr-4" />
                <p className="font-medium text-gray-700">Address</p>
                <span className="mx-4 text-gray-500">:</span>
                <p className="text-gray-600">Jaipur, Rajasthan, Tanzania</p>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 text-xl mr-4" />
                <p className="font-medium text-gray-700">Phone No</p>
                <span className="mx-4 text-gray-500">:</span>
                <p className="text-gray-600">+255 762-091-547</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 text-xl mr-4" />
                <p className="font-medium text-gray-700">Email</p>
                <span className="mx-4 text-gray-500">:</span>
                <p className="text-gray-600">codemarketi@gmail.com</p>
              </li>
              <li className="flex items-center">
                <p className="font-medium text-gray-700">Follow Us</p>
                <span className="mx-4 text-gray-500">:</span>
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FaFacebook className="text-xl" />
                  </Link>
                  <Link
                    to="#"
                    className="text-blue-400 hover:text-blue-600 transition"
                  >
                    <FaTwitter className="text-xl" />
                  </Link>
                  <Link
                    to="#"
                    className="text-pink-500 hover:text-pink-700 transition"
                  >
                    <FaInstagram className="text-xl" />
                  </Link>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
