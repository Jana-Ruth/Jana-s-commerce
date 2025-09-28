import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { Button, Input, Select, Switchi, Textarea } from '../Form';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { toast } from 'react-hot-toast';

function AddEditServiceModal({ closeModal, isOpen, datas }) {
  const [check, setCheck] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [data, setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    productImage: '',
    description: '',
    price: '',
    selling: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    if (datas?.name) {
      setCheck(datas?.status);
    }
  }, [datas]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={datas?.name ? 'Edit Product' : 'New Product'}
      width={'max-w-3xl'}
    >
      <div className="flex-colo gap-6">
        <Input
          label="Product Name"
          id="productName"
          name="productName"
          color={true}
          placeholder="Enter product name"
          value={data.productName}
          onChange={handleOnChange}
        />

        <Input
          label="Brand Name"
          id="brandName"
          name="brandName"
          color={true}
          placeholder="Enter brand name"
          value={data.brandName}
          onChange={handleOnChange}
        />

        

        <Input
          label="Price (USD)"
          type="number"
          name="price"
          color={true}
          placeholder={datas?.price ? datas.price : 0}
          value={data.price}
          onChange={handleOnChange}
        />

        {/* Description */}
        <Textarea
          label="Description"
          name="description"
          placeholder="Write description here..."
          color={true}
          rows={5}
          value={data.description}
          onChange={handleOnChange}
        />

        {/* Image upload */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-48 h-48 object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Status switch */}
        <div className="flex items-center gap-2 w-full">
          <Switchi
            label="Status"
            checked={check}
            onChange={() => setCheck(!check)}
          />
          <p className={`text-sm ${check ? 'text-subMain' : 'text-textGray'}`}>
            {check ? 'Available' : 'Out of Stock'}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <button
            onClick={closeModal}
            className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light"
          >
            {datas?.name ? 'Discard' : 'Cancel'}
          </button>
          <Button
            label="Save"
            Icon={HiOutlineCheckCircle}
            onClick={() => {
              if (!image) {
                toast.error('Please upload an image');
              } else {
                toast.success('Product saved successfully');
                // Add functionality to save the product with image here
              }
            }}
          />
        </div>
      </div>
    </Modal>
  );
}

export default AddEditServiceModal;
