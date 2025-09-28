import React, { useEffect, useState } from 'react'
import SummaryApi from '../../common'
import moment from 'moment'
import displayUSDCurrency from '../../helpers/displayCurrency'

const OrderPage = () => {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false) // To handle animation trigger

    const fetchOrderDetails = async () => {
        const response = await fetch(SummaryApi.getOrder.url, {
            method: SummaryApi.getOrder.method,
            credentials: 'include'
        })
        const responseData = await response.json()
        setData(responseData.data)
        setIsLoaded(true) // Trigger animation after data is loaded
    }

    useEffect(() => {
        fetchOrderDetails()
    }, [])

    return (
        <div className="container mx-auto p-4 sm:p-6 h-screen">
            {!data[0] && (
                <p className="text-center text-gray-500">No Order available</p>
            )}

            <div className={`space-y-6  ${isLoaded ? 'opacity-100' : 'opacity-0'} sm:transition-opacity sm:duration-1000`}>
                {data.map((item, index) => (
                    <div key={item.userId + index} className="border rounded-lg shadow-md p-4 sm:p-6 bg-white">
                        <p className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
                            {moment(item.createdAt).format('LL')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 cursor-pointer">
                            <div className="space-y-4">
                                {item?.productDetails.map((product, index) => (
                                    <div
                                        key={product.productId + index}
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-100 p-4 rounded-lg"
                                    >
                                        <img
                                            src={product.image[0]}
                                            className="w-full sm:w-28 h-auto sm:h-28 object-contain rounded-md mb-4 sm:mb-0"
                                            alt={product.name}
                                        />
                                        <div className="w-full">
                                            <h3 className="font-semibold text-base sm:text-lg text-gray-800 truncate">
                                                {product.name}
                                            </h3>
                                            <div className="text-blue-500 font-medium text-lg sm:text-xl">
                                                {displayUSDCurrency(product.price)}
                                            </div>
                                            <p className="text-gray-600 text-sm">Quantity: {product.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Payment Details</h4>
                                    <p className="text-gray-600 text-sm ml-2">Method: {item.paymentDetails.payment_method_type[0]}</p>
                                    <p className="text-gray-600 text-sm ml-2">Status: {item.paymentDetails.payment_status}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Shipping Details</h4>
                                    {item.shipping_options.map((shipping, index) => (
                                        <p key={shipping.shipping_rate} className="text-gray-600 text-sm ml-2">
                                            Shipping Amount: {shipping.shipping_amount}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-right font-semibold text-base sm:text-lg text-blue-600 mt-4">
                            Total Amount: {displayUSDCurrency(item.totalAmount)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderPage
