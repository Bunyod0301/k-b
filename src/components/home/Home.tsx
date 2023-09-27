import React, { useEffect } from 'react';
import Intro_Slider from './Intro_Slider';
import Product_Category from './Product_Category';
import Product_Area from './Product_Area';
import Banner_Section from './Banner_Section';
import Blog_Are from './Blog_Are';
import Instagram_Area from './Instagram_Area';
const Home_page = () => {
  return (
    <div>
      <Intro_Slider />
      <Product_Category />
      <Product_Area />
      <Banner_Section />
      <Blog_Are />
      <Instagram_Area />
    </div>
  );
};

export default Home_page;