

const backendDomain = process.env.REACT_APP_BACKEND_URL 

const SummaryApi = {
    SignUp : {
        url : `backendDomain/api/signup`,
        method : "post"
    },
    SignIn : {
        url : `backendDomain/api/signin`,
        method : "post"
    },

    current_user : {
        url : `backendDomain/api/user-details`,
        method : "get"
    },

    logout_user : {
        url : `backendDomain/api/userLogout`,
        method : "get"
    },

    allUser : {
        url : `backendDomain/api/all-user`,
        method : "get"
    },
    updateUser : {
        url : `backendDomain/api/update-user`,
        method : "post"
    },
    searchUserInfo : {
        url : `backendDomain/api/search-user`,
        method : "post"
    },
    updatePassword : {
        url : `backendDomain/api/update-password`,
        method : 'put'
    },
    forgot_password : {
        url : `backendDomain/api/forgot-password`,
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : `backendDomain/api/verify-forgot-password-otp`,
        method : 'put'
    },
    reset_password : {
        url : `backendDomain/api/reset-password`,
        method : "put"
    },

    deleteUser : {
        url : `backendDomain/api/delete-user`,
        method : 'delete'
    },

    getUserById : {
        url : `backendDomain/api/user/:userId`,
        method : "get"
    },

    uploadProduct : {
        url : `backendDomain/api/upload-product`,
        method : "post"
    },

    allProduct : {
        url : `backendDomain/api/get-product`,
        method : 'get'
    },

    updateProduct : {
        url : `backendDomain/api/update-product`,
        method : 'post'
    },

    deleteProduct : {
        url : `backendDomain/api/delete-product/`,
        method : 'delete'
    },

    categoryProduct : {
        url :  `backendDomain/api/get-CategoryProduct`,
        method : 'get'
    },

    categoryWiseProduct : {
        url : `backendDomain/api/category-product`,
        method : 'post'
    },

    productDetails : {
        url : `backendDomain/api/product-details`,
        method : 'post'
    },

    addToCartToProduct : {
        url : `backendDomain/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `backendDomain/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `backendDomain/api/view-card-product`,
        method : 'get'
    },

    updateCartProduct : {
        url : `backendDomain/api/update-cart-product`,
        method : 'post'
    },

    deleteCartProduct : {
        url : `backendDomain/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `backendDomain/api/search`,
        method : 'get'
    },

    filterProduct : {
        url : `backendDomain/api/filter-product`,
        method : 'post'
    },
    payment : {
        url : `backendDomain/api/checkout`,
        method : 'post'
    },
    getOrder : {
        url : `backendDomain/api/order-list`,
        method : 'get'
    },
    allOrder : {
        url : `backendDomain/api/all-order`,
        method : 'get'
    },

    addAddress: {
        url: `backendDomain/api/add-address`,
        method: 'post'
    },
    allAddress: {
        url: `backendDomain/api/all-address`, // This fetches all addresses without needing a userId in the URL
        method: 'get'
    },
    updateAddress: {
        url: `backendDomain/api/update-address`, // For updating a specific address
        method: 'put'
    },
    deleteAddress: {
        url: `backendDomain/api/delete-address`, // For deleting a specific address
        method: 'delete'
    },

    addReview : {
        url : `backendDomain/api/add-review`,
        method : 'post'
    },

    allReview : {
        url : `backendDomain/api/all-review`,
        method : 'get'
    },
    allReviewProductBased : {
        url : `backendDomain/api/:productId`,
        method : 'get'
    }


   
}
 

export default SummaryApi