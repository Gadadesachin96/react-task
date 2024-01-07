import React from 'react';
import Navbar from '../navbar/Navbar';
import HomeBanner from '../homeBanner/HomeBanner';
import Doctor from '../doctor/Doctor';
import Clinics from '../clinics/Clinics';
import Slider from '../slider/Slider';
import BookDoc from '../bookDoc/BookDoc';
import Features from '../features/Features';
import Blog from '../Blog/Blog';
import Footer from '../footer/Footer';
import BackToTop from '../Footericon/BackToTop';




const Home = () => {
  return (
    <div>

    
      <Navbar/>
      <HomeBanner/>
      <Doctor/>
      <Clinics/>
      <Slider/>
        <BookDoc/>
        <Features/>
        <Blog/>
        <Footer/>
        <BackToTop/>
    </div>
  );
}

export default Home;
