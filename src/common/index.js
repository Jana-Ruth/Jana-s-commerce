

const backendDomain = process.env.REACT_APP_BACKEND_URL 

const SummaryApi = {
    SignUp : {
        url : `https://jana-s-backend-faty.vercel.app//api/signup`,
        method : "post"
    },
    SignIn : {
        url : `https://jana-s-backend-faty.vercel.app//api/signin`,
        method : "post"
    },

    current_user : {
        url : `https://jana-s-backend-faty.vercel.app//api/user-details`,
        method : "get"
    },

    logout_user : {
        url : `https://jana-s-backend-faty.vercel.app//api/userLogout`,
        method : "get"
    },

    allUser : {
        url : `https://jana-s-backend-faty.vercel.app//api/all-user`,
        method : "get"
    },
    updateUser : {
        url : `https://jana-s-backend-faty.vercel.app//api/update-user`,
        method : "post"
    },
    searchUserInfo : {
        url : `https://jana-s-backend-faty.vercel.app//api/search-user`,
        method : "post"
    },
    updatePassword : {
        url : `https://jana-s-backend-faty.vercel.app//api/update-password`,
        method : 'put'
    },
    forgot_password : {
        url : `https://jana-s-backend-faty.vercel.app//api/forgot-password`,
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : `https://jana-s-backend-faty.vercel.app//api/verify-forgot-password-otp`,
        method : 'put'
    },
    reset_password : {
        url : `https://jana-s-backend-faty.vercel.app//api/reset-password`,
        method : "put"
    },

    deleteUser : {
        url : `https://jana-s-backend-faty.vercel.app//api/delete-user`,
        method : 'delete'
    },

    getUserById : {
        url : `https://jana-s-backend-faty.vercel.app//api/user/:userId`,
        method : "get"
    },

    uploadProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/upload-product`,
        method : "post"
    },

    allProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/get-product`,
        method : 'get'
    },

    updateProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/update-product`,
        method : 'post'
    },

    deleteProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/delete-product/`,
        method : 'delete'
    },

    categoryProduct : {
        url :  `https://jana-s-backend-faty.vercel.app//api/get-CategoryProduct`,
        method : 'get'
    },

    categoryWiseProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/category-product`,
        method : 'post'
    },

    productDetails : {
        url : `https://jana-s-backend-faty.vercel.app//api/product-details`,
        method : 'post'
    },

    addToCartToProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `https://jana-s-backend-faty.vercel.app//api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `https://jana-s-backend-faty.vercel.app//api/view-card-product`,
        method : 'get'
    },

    updateCartProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/update-cart-product`,
        method : 'post'
    },

    deleteCartProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/search`,
        method : 'get'
    },

    filterProduct : {
        url : `https://jana-s-backend-faty.vercel.app//api/filter-product`,
        method : 'post'
    },
    payment : {
        url : `https://jana-s-backend-faty.vercel.app//api/checkout`,
        method : 'post'
    },
    getOrder : {
        url : `https://jana-s-backend-faty.vercel.app//api/order-list`,
        method : 'get'
    },
    allOrder : {
        url : `https://jana-s-backend-faty.vercel.app//api/all-order`,
        method : 'get'
    },

    addAddress: {
        url: `https://jana-s-backend-faty.vercel.app//api/add-address`,
        method: 'post'
    },
    allAddress: {
        url: `https://jana-s-backend-faty.vercel.app//api/all-address`, // This fetches all addresses without needing a userId in the URL
        method: 'get'
    },
    updateAddress: {
        url: `https://jana-s-backend-faty.vercel.app//api/update-address`, // For updating a specific address
        method: 'put'
    },
    deleteAddress: {
        url: `https://jana-s-backend-faty.vercel.app//api/delete-address`, // For deleting a specific address
        method: 'delete'
    },

    addReview : {
        url : `https://jana-s-backend-faty.vercel.app//api/add-review`,
        method : 'post'
    },

    allReview : {
        url : `https://jana-s-backend-faty.vercel.app//api/all-review`,
        method : 'get'
    },
    allReviewProductBased : {
        url : `https://jana-s-backend-faty.vercel.app//api/:productId`,
        method : 'get'
    }


   
}
 

export default SummaryApi