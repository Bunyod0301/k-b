import React from 'react';
import Single_prodect from './single_prodect';
import Sidebar_area from './sidebar_area';
import Shop_top_area from './shop_top_area';

const Shop_category = () => {
  return (
<>
  {/* Shop Category pages */}
  <div className="shop-category-area pb-100px pt-70px">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
          {/*Shop Top Area Start */}
          <Shop_top_area />
          {/* Shop Bottom Area Start */}
          <Single_prodect />
          {/* Shop Bottom Area End */}
        </div>
        {/* Sidebar Area Start */}
        <Sidebar_area />
      </div>
    </div>
  </div>
</>

  );
};

export default Shop_category;