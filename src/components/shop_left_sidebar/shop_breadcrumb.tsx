import React from 'react';

const Shop_breadcrumb = () => {
  return (
<>
  {/* breadcrumb-area start */}
  <div className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row breadcrumb_box  align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
              <h2 className="breadcrumb-title">Shop</h2>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12">
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list text-center text-md-end">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Shop</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
};

export default Shop_breadcrumb;