import React, { useState } from "react";
import { Button } from "../../components/Form";
import { BiPlus } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { orderData } from "../../components/Datas";
import MedicalRecodModal from "../../components/Modals/MedicalRecodModal";
import { useNavigate, useParams } from "react-router-dom";

function MedicalRecord() {
  const [isOpen, setIsOpen] = useState(false);
  const [datas, setDatas] = useState({});
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming id is passed as a URL param

  // Find the specific order by id
  const specificOrder = orderData.find((order) => order.id === parseInt(id));

  if (!specificOrder) {
    return <p>No order found with the specified ID.</p>;
  }

  return (
    <>
      {isOpen && (
        <MedicalRecodModal
          closeModal={() => {
            setIsOpen(false);
            setDatas({});
          }}
          isOpen={isOpen}
          datas={datas}
        />
      )}

      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-4">
          <h1 className="text-sm font-medium sm:block hidden">User Record</h1>
          <div className="sm:w-1/4 w-full">
            <Button
              label="New Record"
              Icon={BiPlus}
              onClick={() => {
                navigate(`/visiting/2`);
              }}
            />
          </div>
        </div>

        {/* Display the specific order */}
        <div
          key={specificOrder.id}
          className="bg-dry items-start grid grid-cols-12 gap-4 rounded-xl border-[1px] border-border p-6"
        >
          {/* Date */}
          <div className="col-span-12 md:col-span-2">
            <p className="text-xs text-textGray font-medium">{specificOrder.date}</p>
          </div>

          {/* Shipping Address */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
            <p className="text-xs text-main font-semibold">
              Shipping Address:
            </p>
            <p className="text-xs text-main font-light">
              {specificOrder.shippingAddress.name}, {specificOrder.shippingAddress.street}, {specificOrder.shippingAddress.city}, {specificOrder.shippingAddress.state} {specificOrder.shippingAddress.zip}
            </p>
       

         

          {/* Customer Review */}
         
            <p className="text-xs text-main font-semibold">
              Customer Reviews:
            </p>
            {specificOrder.customerReview.rating ? (
              <p className="text-xs text-main font-light">
                Rating: {specificOrder.customerReview.rating} stars
              </p>
            ) : (
              <p className="text-xs text-main font-light">No rating yet</p>
            )}
            {specificOrder.customerReview.comment && (
              <p className="text-xs text-main font-light">
                Comment: {specificOrder.customerReview.comment}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="col-span-12 md:col-span-2 flex-rows ml-16 w-28 gap-3">
            <button
              onClick={() => {
                setIsOpen(true);
                setDatas(specificOrder);
              }}
              className="text-sm flex-colo bg-white text-subMain border border-border rounded-md w-2/4 md:w-10 h-10"
            >
              <FiEye />
            </button>
            <button
              onClick={() => {
                toast.error("This feature is not available yet");
              }}
              className="text-sm flex-colo bg-white text-red-600 border border-border rounded-md w-2/4 md:w-10 h-10"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalRecord;
