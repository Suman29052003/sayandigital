import React from 'react';
import Links from '../components/Home/Links';
import ItemsSlider from '../components/Home/ItemsSlider';
import Banner from '../components/Home/Banner';
import ShopByNeeds from '../components/Home/shopByNeeds';
import AllCategories from '../components/Home/AllCategories';
import Blogs from '../components/Home/Blogs';
import WFHBanner from '../components/Home/WFHBanner';
import Info from '../components/Home/Info';
const Home = () => {
  return (
    <div className="bg-[#]">
      <Links />
      <div className="">
        <Banner />
        <ItemsSlider />
        <ShopByNeeds />
        <AllCategories />
      <Blogs />
        <WFHBanner />
        <Info />
      </div>

    </div>
  );
};

export default Home;
