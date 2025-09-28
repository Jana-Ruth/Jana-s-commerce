import toast from "react-hot-toast"
import SummaryApi from "../common"


const addToCart = async(e,id) => {
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(SummaryApi.addToCartToProduct.url, {
        method : SummaryApi.addToCartToProduct.method,
        credentials : 'include',
        headers : {
            "content-type" : 'application/json'
        },
        body : JSON.stringify(
            {productId : id}
        )
    })

    const responseData = await response.json()

    console.log("add to cart", responseData)

    if(responseData.success) {
        toast.success(responseData.message)
    }

    if(responseData.error) {
        toast.error(responseData.message)
    }

    return responseData
}

export default addToCart