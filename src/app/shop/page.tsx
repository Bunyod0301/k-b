import React from 'react';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/Header';
import Shop_left_sidebar from '@/components/shop_left_sidebar/Shop_left_sidebar';

const Shop = () => {
  return (
    <div>
      <Header />
      <Shop_left_sidebar />
      <Footer />
    </div>
  );
};

export default Shop;