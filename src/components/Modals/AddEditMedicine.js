import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { Button, Input, Select, Textarea } from '../Form';
import { BiChevronDown } from 'react-icons/bi';
import { medicineData, sortsDatas } from '../Datas';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import TestPlace from '../../Testplace';

function AddEditMedicineModal({ closeModal, isOpen, orderData = {} }) {
  const [orderId, setOrderId] = useState(orderData.id || ''); // Pre-populate for edit
  const [customerName, setCustomerName] = useState(orderData.customerName || '');
  const [items, setItems] = useState(orderData.items || []); // Array for order items (replace if needed)
  const [totalPrice, setTotalPrice] = useState(orderData.totalPrice || 0);
  const [orderStatus, setOrderStatus] = useState(orderData.status || 'Processing'); // Default status
  const [selectedItemId, setSelectedItemId] = useState(0); // Initial selected item ID


  // Assuming you have orderStatuses data (replace with your actual data source)
  const orderStatuses = [
    { id: 1, name: 'Processing' },
    { id: 2, name: 'Shipped' },
    { id: 3, name: 'Delivered' },
    { id: 4, name: 'Cancelled' },
  ];

  // Update total price based on items (replace with your logic)
  useEffect(() => {
    // Update total price based on item logic (placeholder)
    setTotalPrice(items.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [items]);

  const handleSave = () => {
    // Implement logic to save the order data (replace with your API call or logic)
    console.log('Saving order...', { orderId, customerName, items, totalPrice, orderStatus });
    closeModal(); // Close modal on save attempt
  };

  return (
    <Modal closeModal={closeModal} isOpen={isOpen} title={orderData.id ? 'Edit Order' : 'New Order'}>
      <div className="flex-col gap-6">
        <div className="grid sm:grid-cols-2 gap-4 w-full mb-4">
          <Input label="Order ID" type="text" color={true} disabled={orderData.id} value={orderId} onChange={(e) => setOrderId(e.target.value)} />
          
          <Input label="Customer Name" color={true} value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </div>
        
   <div className="grid sm:grid-cols-2 gap-4 w-full mb-4">
          <Input label="Order Date" type="date" color={true} disabled value={orderData.orderDate || new Date().toISOString().slice(0, 10)} />
          <Select
            label="Order Status"
            selectedValue={orderStatus}
            setSelectedValue={setOrderStatus}
            datas={orderStatuses}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full mb-4">
          <Input label="Total Price (USD)" type="number" color={true} value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} disabled />
         
          <Select
            label="Order Status"
            selectedValue={orderStatus}
            setSelectedValue={setOrderStatus}
            datas={orderStatuses}
          />
        </div>

       

        {/* buttons */}
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <button
            onClick={closeModal}
            className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light"
          >
            {orderData.id ? 'Discard Changes' : 'Cancel'}
          </button>
          <Button label="Save" Icon={HiOutlineCheckCircle} onClick={handleSave} />
        </div>
      </div>
    </Modal>
  );
}

export default AddEditMedicineModal;
