

const backendDomain = process.env.REACT_APP_BACKEND_URL 

const SummaryApi = {
    SignUp : {
        url : `http://localhost:5000/api/signup`,
        method : "post"
    },
    SignIn : {
        url : `http://localhost:5000/api/signin`,
        method : "post"
    },

    current_user : {
        url : `http://localhost:5000/api/user-details`,
        method : "get"
    },

    logout_user : {
        url : `http://localhost:5000/api/userLogout`,
        method : "get"
    },

    allUser : {
        url : `http://localhost:5000/api/all-user`,
        method : "get"
    },
    updateUser : {
        url : `http://localhost:5000/api/update-user`,
        method : "post"
    },
    searchUserInfo : {
        url : `http://localhost:5000/api/search-user`,
        method : "post"
    },
    updatePassword : {
        url : `http://localhost:5000/api/update-password`,
        method : 'put'
    },
    forgot_password : {
        url : `http://localhost:5000/api/forgot-password`,
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : `http://localhost:5000/api/verify-forgot-password-otp`,
        method : 'put'
    },
    reset_password : {
        url : `http://localhost:5000/api/reset-password`,
        method : "put"
    },

    deleteUser : {
        url : `http://localhost:5000/api/delete-user`,
        method : 'delete'
    },

    getUserById : {
        url : `http://localhost:5000/api/user/:userId`,
        method : "get"
    },

    uploadProduct : {
        url : `http://localhost:5000/api/upload-product`,
        method : "post"
    },

    allProduct : {
        url : `http://localhost:5000/api/get-product`,
        method : 'get'
    },

    updateProduct : {
        url : `http://localhost:5000/api/update-product`,
        method : 'post'
    },

    deleteProduct : {
        url : `http://localhost:5000/api/delete-product/`,
        method : 'delete'
    },

    categoryProduct : {
        url :  `http://localhost:5000/api/get-CategoryProduct`,
        method : 'get'
    },

    categoryWiseProduct : {
        url : `http://localhost:5000/api/category-product`,
        method : 'post'
    },

    productDetails : {
        url : `http://localhost:5000/api/product-details`,
        method : 'post'
    },

    addToCartToProduct : {
        url : `http://localhost:5000/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `http://localhost:5000/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `http://localhost:5000/api/view-card-product`,
        method : 'get'
    },

    updateCartProduct : {
        url : `http://localhost:5000/api/update-cart-product`,
        method : 'post'
    },

    deleteCartProduct : {
        url : `http://localhost:5000/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `http://localhost:5000/api/search`,
        method : 'get'
    },

    filterProduct : {
        url : `http://localhost:5000/api/filter-product`,
        method : 'post'
    },
    payment : {
        url : `http://localhost:5000/api/checkout`,
        method : 'post'
    },
    getOrder : {
        url : `http://localhost:5000/api/order-list`,
        method : 'get'
    },
    allOrder : {
        url : `http://localhost:5000/api/all-order`,
        method : 'get'
    },

    addAddress: {
        url: `http://localhost:5000/api/add-address`,
        method: 'post'
    },
    allAddress: {
        url: `http://localhost:5000/api/all-address`, // This fetches all addresses without needing a userId in the URL
        method: 'get'
    },
    updateAddress: {
        url: `http://localhost:5000/api/update-address`, // For updating a specific address
        method: 'put'
    },
    deleteAddress: {
        url: `http://localhost:5000/api/delete-address`, // For deleting a specific address
        method: 'delete'
    },

    addReview : {
        url : `http://localhost:5000/api/add-review`,
        method : 'post'
    },

    allReview : {
        url : `http://localhost:5000/api/all-review`,
        method : 'get'
    },
    allReviewProductBased : {
        url : `http://localhost:5000/api/:productId`,
        method : 'get'
    }


   
}
 

export default SummaryApi