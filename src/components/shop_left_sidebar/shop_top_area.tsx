import React from 'react';

const Shop_top_area = () => {
  return (
<div className="shop-top-bar d-flex">
  {/* Left Side start */}
  <p>There Are 17 Products.</p>
  {/* Left Side End */}
  {/* Right Side Start */}
  <div className="select-shoing-wrap d-flex align-items-center">
    <div className="shot-product">
      <p>Sort By:</p>
    </div>
    <div className="shop-select">
      <select className="shop-sort">
        <option data-display="Relevance">Relevance</option>
        <option value={1}> Name, A to Z</option>
        <option value={2}> Name, Z to A</option>
        <option value={3}> Price, low to high</option>
        <option value={4}> Price, high to low</option>
      </select>
    </div>
  </div>
  {/* Right Side End */}
</div>
  );
};

export default Shop_top_area;