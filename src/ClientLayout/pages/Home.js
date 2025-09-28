
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling when navigating with #id (e.g., /collection#phones)
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Remove '#' from hash
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className='mt-20'>
      <CategoryList />
      <BannerProduct />

      <div id="phones">
        <VerticalCardProduct category={"phones"} heading={"Phones"} />
      </div>
      
      <div id="airpods">
        <VerticalCardProduct category={"airpods"} heading={"Airpods"} />
      </div>

      <div id="watches">
        <VerticalCardProduct category={"watches"} heading={"Watches"} />
      </div>

      <div id="laptops">
        <VerticalCardProduct category={"laptops"} heading={"Laptops"} />
      </div>

      <div id="headsetts">
        <VerticalCardProduct category={"headsetts"} heading={"Head-Setts"} />
      </div>

      <div id="controllers">
        <VerticalCardProduct category={"controllers"} heading={"Controllers"} />
      </div>
      
      <div id="playstations">
        <VerticalCardProduct category={"playstations"} heading={"Play Stations"} />
      </div>

      <div id="nintendos">
        <VerticalCardProduct category={"nintendos"} heading={"Nintendos"} />
      </div>

      <div id="xbox">
        <VerticalCardProduct category={"xbox"} heading={"Xbox"} />
      </div>

      <div id="videogames">
        <VerticalCardProduct category={"videogames"} heading={"Video Games"} />
      </div>

      <div id="giftcards">
        <VerticalCardProduct category={"giftcards"} heading={"Gift Cards"} />
      </div>

      <div id="consolebags">
        <VerticalCardProduct category={"consolebags"} heading={"Console Bags"} />
      </div>
      <div id="gadgets">
        <VerticalCardProduct category={"gadgets"} heading={"Gadgets"} />
      </div>
      <div id="gamingwears">
        <VerticalCardProduct category={"gamingwears"} heading={"Gaming Wears"} />
      </div>
      <div id="gamingchairs">
        <VerticalCardProduct category={"gamingchairs"} heading={"Gaming Chairs"} />
      </div>
      <div id="topdeals">
        <VerticalCardProduct category={"topdeals"} heading={"Top Deals"} />
      </div>
    </div>
  );
};

export default Home;