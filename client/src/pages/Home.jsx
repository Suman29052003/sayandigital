import React from 'react';
import Navbar from '../components/Navbar';
import Links from '../components/Home/Links';
import ItemsSlider from '../components/Home/ItemsSlider';
import Banner from '../components/Home/Banner';
import ShopByNeeds from '../components/Home/shopByNeeds';
import AllCategories from '../components/Home/AllCategories';
import Stationery from '../components/Home/Stationery';
import Blogs from '../components/Home/Blogs';
import WFHBanner from '../components/Home/WFHBanner';
import Info from '../components/Home/Info';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Links />
      <div className="">
        <ItemsSlider />
        <Banner />
        <ShopByNeeds />
        <AllCategories />
        <Stationery />
        <Blogs />
        <WFHBanner />
        <Info />
      </div>
      <Footer page="About Us" />
    </div>
  );
};

export default Home;
