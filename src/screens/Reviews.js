import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Layout from '../Layout';
import { Button, Select } from '../components/Form';
import { MdOutlineCloudDownload } from 'react-icons/md';
import toast from 'react-hot-toast';
import SummaryApi from '../common';
import StarRate from '../components/StarRate';
import moment from 'moment';
import { FaRegCircleUser } from 'react-icons/fa6';

// Static star rating filter data
const starOptions = [
  { id: 0, name: 'Filter by Rating', value: null },
  { id: 1, name: '0 - Very Bad', value: 0 },
  { id: 2, name: '1 - Bad', value: 1 },
  { id: 3, name: '2 - Good', value: 2 },
  { id: 4, name: '3 - Very Good', value: 3 },
  { id: 5, name: '4 - Excellent', value: 4 },
  { id: 6, name: '5 - Master', value: 5 },
];

function Reviews() {
  const [allReview, setAllReview] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [products, setProducts] = useState([]);
  const [star, setStar] = useState(starOptions[0]); // Default "Filter by Rating"
  const [users, setUsers] = useState([]);

  // Fetch all products
  const fetchAllProducts = async () => {
    try {
      const response = await fetch(SummaryApi.allProduct.url, {
        method: SummaryApi.allProduct.method,
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
        console.log("reviews", data)
      } else {
        toast.error('Failed to load products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
    }
  };

  // Fetch all users
  const fetchAllUsers = async () => {
    try {
      const response = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setUsers(data.data);
      } else {
        toast.error('Failed to load users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to fetch users');
    }
  };

  // Fetch all reviews
  const fetchAllReviews = async () => {
    try {
      const response = await fetch(SummaryApi.allReview.url, {
        method: SummaryApi.allReview.method,
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        const reviewsWithDetails = data.data.map((review) => {
          const userDetails = users.find((user) => user._id === review.userId);
          const productDetails = products.find((product) => product._id === review.productId);
          return {
            ...review,
            profilePic: userDetails?.profilePic || '',
            phoneNumber: userDetails?.phoneNumber || 'N/A',
            productImage: productDetails?.productImage[0] || null,
          };
        });
        setAllReview(reviewsWithDetails);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast.error('Failed to fetch reviews');
    }
  };

  // Filter reviews by rating
  const filterReviewsByRating = (rating) => {
    if (rating === null) {
      setFilteredReviews(allReview); // Show all reviews if no filter is selected
    } else {
      const filtered = allReview.filter((review) => review.reviewValue === rating);
      setFilteredReviews(filtered);
    }
  };

  // Get product name by product ID
  const getProductName = (productId) => {
    const product = products.find((prod) => prod._id === productId);
    return product?.productName || 'Unknown Product';
  };

  // Get rating label
  const getRatingLabel = (rate) => {
    const ratingOption = starOptions.find((opt) => opt.value === rate);
    return ratingOption ? ratingOption.name.split(' - ')[1] : 'Unrated';
  };

  useEffect(() => {
    fetchAllProducts();
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (products.length > 0 && users.length > 0) {
      fetchAllReviews();
    }
  }, [products, users]);

  useEffect(() => {
    // Initially display all reviews
    setFilteredReviews(allReview);
  }, [allReview]);

  useEffect(() => {
    filterReviewsByRating(star.value);
  }, [star, allReview]);

  const thclass = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclass = "text-start text-sm py-4 px-2 whitespace-nowrap";

  return (
    <Layout>
      <h1 className="text-xl font-semibold">Reviews</h1>
      <div className="bg-white my-8 rounded-xl border-[1px] border-border p-5">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-2">
          <div className="md:col-span-5 grid lg:grid-cols-4 xs:grid-cols-2 items-center gap-2">
            <Select
              selectedPerson={star}
              setSelectedPerson={setStar}
              datas={starOptions}
            >
              <div className="w-full flex-btn text-main text-sm p-4 border bg-dry border-border font-light rounded-lg focus:border focus:border-subMain">
                {star?.name} <BiChevronDown className="text-xl" />
              </div>
            </Select>
          </div>
          <Button
            label="Export"
            Icon={MdOutlineCloudDownload}
            onClick={() => toast.error('Exporting is not available yet')}
          />
        </div>
        <div className="mt-8 w-full overflow-x-scroll">
          <table className="table-auto w-full">
            <thead className="bg-dry rounded-md overflow-hidden">
              <tr>
                <th className={thclass}>#</th>
                <th className={thclass}>User</th>
                <th className={thclass}>Product Name</th>
                <th className={thclass}>Product Image</th>
                <th className={thclass}>Rate</th>
                <th className={thclass}>Rated By</th>
                <th className={thclass}>Written on</th>
                <th className={thclass}>Comment</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((item, index) => (
                <tr key={item._id} className="border-b border-border hover:bg-greyed transitions">
                  <td className={tdclass}>{index + 1}</td>
                  <td className={tdclass}>
                    <div className="flex gap-4 items-center">
                      <span className="w-12">
                        {item.profilePic ? (
                          <img
                            src={item.profilePic}
                            alt="user"
                            className="w-12 border border-border object-cover h-12 rounded-full"
                          />
                        ) : (
                          <FaRegCircleUser className="text-gray-500 w-10 h-10" />
                        )}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium">{item.userName}</h4>
                        <p className="text-xs mt-1 text-textGray">{item.phoneNumber}</p>
                      </div>
                    </div>
                  </td>
                  <td className={tdclass}>{getProductName(item.productId)}</td>
                  <td className={tdclass}>
                    {item.productImage ? (
                      <img
                        src={item.productImage}
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td className={tdclass}>
                    <StarRate rate={item.reviewValue} />
                  </td>
                  <td className={tdclass}>{getRatingLabel(item.reviewValue)}</td>
                  <td className={tdclass}>{moment(item.createdAt).format('LL')}</td>
                  <td className={tdclass}>{item.reviewMessage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Reviews;
