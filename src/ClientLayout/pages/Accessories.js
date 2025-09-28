import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Accessories = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

  
      <HorizontalCardProduct category = {"consolebags"} heading={"Popular's Console Bags"}/>
      <HorizontalCardProduct category = {"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category = {"laptops"} heading={"Laptops"}/>

      <VerticalCardProduct category={"controllers"} heading={"Controllers"}/>
      <VerticalCardProduct category={"giftcards"} heading={"Gift Cards"}/>
      <VerticalCardProduct category={"airpods"} heading={"Airpods"}/>
      <VerticalCardProduct category={"nintendos"} heading={"Nintendos"}/>
      <VerticalCardProduct category={"xbox"} heading={"Xbox"}/>
      <VerticalCardProduct category={"videogames"} heading={"Video Games"}/>
    </div>
  )
}

export default Accessories