import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import CategroyWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import SummaryApi from '../../common';
import displayUSDCurrency from '../../helpers/displayCurrency';
import addToCart from '../../helpers/addToCart';
import Context from '../../context';
import StarRating from './StarRating';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

const ProductDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    video: "",
    description: "",
    price: "",
    sellingPrice: ""
  })

  const user = useSelector(state => state?.user?.user); // Get current user from Redux state

  const [showReviews, setShowReviews] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0)
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const productImageListLoading = new Array(4).fill(null)
  const [activeImage, setActiveImage] = useState("")
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0
  })
  const [zoomImage, setZoomImage] = useState(false)

  const { fetchUserAddToCart } = useContext(Context)

  const navigate = useNavigate()

  const handleRatingChange = (getRating) => {
    console.log(getRating, "rating")
    setRating(getRating)
  }

  const fetchProductDetails = async () => {
    setLoading(true)
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        productId: params?.id
      })
    })
    setLoading(false)
    const dataReponse = await response.json()

    setData(dataReponse?.data)
    setActiveImage(dataReponse?.data?.productImage[0])

  }
  // Fetch reviews for this specific product
  const fetchProductReviews = async () => {
    try {
      const response = await fetch(`${SummaryApi.allReviewProductBased.url.replace(':productId', params.id)}`, {
        method: SummaryApi.allReviewProductBased.method,
        credentials: 'include'
      });
      const result = await response.json();
      if (result.success) {
        setReviews(result.data);
      } else {
        console.error("Failed to fetch product-specific reviews:", result.message);
      }
    } catch (error) {
      console.error("Error fetching reviews for product:", error);
    }
  };


  console.log("data", data)

  useEffect(() => {
    fetchProductDetails()
    fetchProductReviews()
  }, [params])

  const handleSubmitReview = async () => {
    try {
      const response = await fetch(SummaryApi.addReview.url, {
        method: SummaryApi.addReview.method,
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          productId: params.id,
          userId: user?._id,
          userName: user?.fullName,
          reviewMessage: reviewMsg,
          reviewValue: rating
        })
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Review submitted successfully!");
        setReviewMsg("");
        setRating(0);
      } else {
        toast.error(result.message || "Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review.");
    }
  };


  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL)
  }

  const handleZoomImage = useCallback((e) => {
    setZoomImage(true)
    const { left, top, width, height } = e.target.getBoundingClientRect()
    console.log("coordinate", left, top, width, height)

    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setZoomImageCoordinate({
      x,
      y
    })
  }, [zoomImageCoordinate])

  const handleLeaveImageZoom = () => {
    setZoomImage(false)
  }


  const handleAddToCart = async (e, id) => {
    await addToCart(e, id)
    fetchUserAddToCart()
  }

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id)
    fetchUserAddToCart()
    navigate("/cart")

  }

  return (
    <div className='container mx-auto p-4 mt-4'>

      <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/***product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>

          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
            <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom} />

            {/**product zoom */}
            {
              zoomImage && (
                <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                  <div
                    className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                    style={{
                      background: `url(${activeImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `

                    }}
                  >

                  </div>
                </div>
              )
            }

          </div>

          <div className='h-full'>
            {
              loading ? (
                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                  {
                    productImageListLoading.map((el, index) => {
                      return (
                        <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage" + index}>
                        </div>
                      )
                    })
                  }
                </div>

              ) : (
                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                  {
                    data?.productImage?.map((imgURL, index) => {
                      return (
                        <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                          <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={() => handleMouseEnterProduct(imgURL)} onClick={() => handleMouseEnterProduct(imgURL)} />
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          </div>
        </div>

        {/***product details */}
        {
          loading ? (
            <div className='grid gap-1 w-full'>
              <p className='bg-slate-200 animate-pulse  h-6 lg:h-8 w-full rounded-full inline-block'></p>
              <h2 className='text-2xl lg:text-4xl font-medium h-6 lg:h-8  bg-slate-200 animate-pulse w-full'></h2>
              <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>

              <div className='text-blue-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full'>

              </div>

              <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full'>
                <p className='text-blue-600 bg-slate-200 w-full'></p>
                <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
              </div>

              <div className='flex items-center gap-3 my-2 w-full'>
                <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
              </div>

              <div className='w-full'>
                <p className='text-slate-600 font-medium my-1 h-6 lg:h-8   bg-slate-200 rounded animate-pulse w-full'></p>
                <p className=' bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full'></p>
              </div>
            </div>
          ) :
            (
              <div className='flex flex-col gap-1'>
                <p className='bg-blue-200 text-blue-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
                <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
                <p className='capitalize text-slate-400'>{data?.category}</p>
                <div className='text-yellow-500 flex items-center gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                  <p className='text-blue-600'>{displayUSDCurrency(data.sellingPrice)}</p>
                  <p className='text-slate-400 line-through'>{displayUSDCurrency(data.price)}</p>
                </div>

                <div className='flex items-center gap-3 my-2'>
                  <button className='border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] text-blue-600 font-medium hover:bg-blue-600 hover:text-white' onClick={(e) => handleBuyProduct(e, data?._id)}>Buy</button>
                  <button className='border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-blue-600 hover:text-blue-600 hover:bg-white' onClick={(e) => handleAddToCart(e, data?._id)}>Add To Cart</button>
                </div>

                <div>
                  <p className='text-slate-600 font-medium my-1'>Description : </p>
                  <p>{data?.description}</p>
                </div>
                <div className='flex gap-2'>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowReviews(prev => !prev)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      {showReviews ? "Hide Reviews" : "Show Reviews"}
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowWriteReview(prev => !prev)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                      {showWriteReview ? "Cancel" : "Write a Review"}
                    </button>
                  </div>
                </div>

                {showReviews && (
                  <div className="mt-2">
                    <h2 className="text-sm font-semibold">Reviews for {data.productName}</h2>
                    <div>
                      {reviews.length > 0 ? (
                        reviews.map((review) => (
                          <div key={review._id} className="my-4 p-4 border rounded-lg">
                            <div className="flex items-center">
                              <StarRating rating={review.reviewValue} />
                              <span className="ml-2 text-sm text-gray-500">{review.userName}</span>
                            </div>
                            <p className="mt-2 text-gray-700">{review.reviewMessage}</p>
                            <p className="text-sm text-gray-400">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">No reviews yet for this product.</p>
                      )}
                    </div>
                  </div>
                )}
                 {/* video display */}
                 <video controls width="400">
                          <source src={"https://www.youtube.com/watch?v=aQFUAllyo8w&list=PPSV"} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                {showWriteReview && (
                  <div className="mt-2">
                    <label className="block text-lg font-medium text-slate-700">Write a Review</label>
                    <StarRating rating={rating} handleRatingChange={handleRatingChange} />
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        placeholder="Write your review..."
                        className="flex-grow p-2 border rounded-md focus:ring focus:ring-blue-300"
                        name='reviewMsg'
                        value={reviewMsg}
                        onChange={(event) => setReviewMsg(event.target.value)}
                      />
                      <button
                        onClick={handleSubmitReview}
                        disabled={reviewMsg.trim() === ""}
                        className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
                      >
                        Submit
                      </button>
                     

                    </div>
                  </div>
                )}


              </div>

            )}

      </div>



      {
        data.category && (
          <CategroyWiseProductDisplay category={data?.category} heading={"Recommended Product"} />
        )
      }




    </div>
  )
}

export default ProductDetails