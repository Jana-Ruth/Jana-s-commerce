import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import DisplayImage from '../DisplayImage';

const ViewProduct = ({ onClose, productData }) => {
    const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState("");

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90%] shadow-lg overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-700">View Product</h2>
                    <button
                        className="text-gray-600 hover:text-blue-600"
                        onClick={onClose}
                        aria-label="Close view product"
                    >
                        <CgClose size={24} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto space-y-6 max-h-[75vh]">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Product Name</p>
                        <p className="text-base text-gray-700 font-medium">{productData.productName}</p>
                    </div>
                    
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Brand Name</p>
                        <p className="text-base text-gray-700 font-medium">{productData.brandName}</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="text-base text-gray-700 font-medium">{productData.category}</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Product Images</p>
                        <div className="flex gap-2">
                            {productData.productImage && productData.productImage.length > 0 ? (
                                productData.productImage.map((imgUrl, index) => (
                                    <img
                                        key={index}
                                        src={imgUrl}
                                        alt="Product"
                                        width={80}
                                        height={80}
                                        className="rounded-md border border-gray-300 shadow-sm cursor-pointer hover:shadow-md"
                                        onClick={() => {
                                            setOpenFullScreenImage(true);
                                            setFullScreenImage(imgUrl);
                                        }}
                                    />
                                ))
                            ) : (
                                <p className="text-blue-600 text-xs">No images available</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-base text-gray-700 font-medium">${productData.price}</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Selling Price</p>
                        <p className="text-base text-gray-700 font-medium">${productData.sellingPrice}</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Description</p>
                        <p className="text-base text-gray-700">{productData.description}</p>
                    </div>
                </div>
            </div>

            {openFullScreenImage && (
                <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
            )}
        </div>
    );
};

export default ViewProduct;
