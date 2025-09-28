import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div className='mt-4'>
      <CategoryList/>
      <BannerProduct/>

      <VerticalCardProduct category={"women"} heading={"Women Clothes"}/>
      <VerticalCardProduct category={"men"} heading={"Men Clothes"}/>
      <VerticalCardProduct category = {"watches"} heading={"Popular's Watches"}/>
      <VerticalCardProduct category = {"earphones"} heading={"Popular's Earphones"}/>

      <VerticalCardProduct category = {"mobiles"} heading={"Mobiles"}/>

      <VerticalCardProduct category={"mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home
