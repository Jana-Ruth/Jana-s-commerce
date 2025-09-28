

const backendDomain= process.env.REACT_APP_BACKEND_URL 

const SummaryApi = {
    SignUp : {
        url : `https://fadqus-backend.onrender.com/api/signup`,
        method : "post"
    },
    SignIn : {
        url : `https://fadqus-backend.onrender.com/api/signin`,
        method : "post"
    },

    current_user : {
        url : `https://fadqus-backend.onrender.com/api/user-details`,
        method : "get"
    },

    logout_user : {
        url : `https://fadqus-backend.onrender.com/api/userLogout`,
        method : "get"
    },

    allUser : {
        url : `https://fadqus-backend.onrender.com/api/all-user`,
        method : "get"
    },
    updateUser : {
        url : `https://fadqus-backend.onrender.com/api/update-user`,
        method : "post"
    },
    searchUserInfo : {
        url : `https://fadqus-backend.onrender.com/api/search-user`,
        method : "post"
    },
    updatePassword : {
        url : `https://fadqus-backend.onrender.com/api/update-password`,
        method : 'put'
    },
    forgot_password : {
        url : `https://fadqus-backend.onrender.com/api/forgot-password`,
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : `https://fadqus-backend.onrender.com/api/verify-forgot-password-otp`,
        method : 'put'
    },
    reset_password : {
        url : `https://fadqus-backend.onrender.com/api/reset-password`,
        method : "put"
    },

    deleteUser : {
        url : `https://fadqus-backend.onrender.com/api/delete-user`,
        method : 'delete'
    },

    getUserById : {
        url : `https://fadqus-backend.onrender.com/api/user/:userId`,
        method : "get"
    },

    uploadProduct : {
        url : `https://fadqus-backend.onrender.com/api/upload-product`,
        method : "post"
    },

    allProduct : {
        url : `https://fadqus-backend.onrender.com/api/get-product`,
        method : 'get'
    },

    updateProduct : {
        url : `https://fadqus-backend.onrender.com/api/update-product`,
        method : 'post'
    },

    deleteProduct : {
        url : `https://fadqus-backend.onrender.com/api/delete-product/`,
        method : 'delete'
    },

    categoryProduct : {
        url :  `https://fadqus-backend.onrender.com/api/get-CategoryProduct`,
        method : 'get'
    },

    categoryWiseProduct : {
        url : `https://fadqus-backend.onrender.com/api/category-product`,
        method : 'post'
    },

    productDetails : {
        url : `https://fadqus-backend.onrender.com/api/product-details`,
        method : 'post'
    },

    addToCartToProduct : {
        url : `https://fadqus-backend.onrender.com/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `https://fadqus-backend.onrender.com/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `https://fadqus-backend.onrender.com/api/view-card-product`,
        method : 'get'
    },

    updateCartProduct : {
        url : `https://fadqus-backend.onrender.com/api/update-cart-product`,
        method : 'post'
    },

    deleteCartProduct : {
        url : `https://fadqus-backend.onrender.com/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `https://fadqus-backend.onrender.com/api/search`,
        method : 'get'
    },

    filterProduct : {
        url : `https://fadqus-backend.onrender.com/api/filter-product`,
        method : 'post'
    },
    payment : {
        url : `https://fadqus-backend.onrender.com/api/checkout`,
        method : 'post'
    },
    getOrder : {
        url : `https://fadqus-backend.onrender.com/api/order-list`,
        method : 'get'
    },
    allOrder : {
        url : `https://fadqus-backend.onrender.com/api/all-order`,
        method : 'get'
    },

    addAddress: {
        url: `https://fadqus-backend.onrender.com/api/add-address`,
        method: 'post'
    },
    allAddress: {
        url: `https://fadqus-backend.onrender.com/api/all-address`, // This fetches all addresses without needing a userId in the URL
        method: 'get'
    },
    updateAddress: {
        url: `https://fadqus-backend.onrender.com/api/update-address`, // For updating a specific address
        method: 'put'
    },
    deleteAddress: {
        url: `https://fadqus-backend.onrender.com/api/delete-address`, // For deleting a specific address
        method: 'delete'
    },

    addReview : {
        url : `https://fadqus-backend.onrender.com/api/add-review`,
        method : 'post'
    },

    allReview : {
        url : `https://fadqus-backend.onrender.com/api/all-review`,
        method : 'get'
    },
    allReviewProductBased : {
        url : `https://fadqus-backend.onrender.com/api/:productId`,
        method : 'get'
    }


   
}
 

export default SummaryApi