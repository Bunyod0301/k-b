import React from 'react';

const Product_Area = () => {
return (
    <div className="section product-tab-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up">
            <div className="section-title mb-0">
              <h2 className="title">Our Products</h2>
              <p className="sub-title mb-30px">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
            </div>
          </div>

          {/* <!-- Tab Start --> */}
          <div className="col-md-12 text-center mb-40px" data-aos="fade-up" data-aos-delay="200">
            <ul className="product-tab-nav nav justify-content-center">
              <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tab-product-new-arrivals">New Arrivals</a></li>
              <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-product-best-sellers">Best
                  Sellers </a></li>
              <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-product-sale-item">Sale
                  Items</a></li>
              <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-product-on-sales">On
                  Sales</a></li>
            </ul>
          </div>
          {/* <!-- Tab End --> */}
        </div>
        <div className="row">
          <div className="col">
            <div className="tab-content">
              {/* <!-- 1st tab start --> */}
              <div className="tab-pane fade show active" id="tab-product-new-arrivals">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/1.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/3.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/4.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-10%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$48.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/5.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/6.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-7%</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        <span className="old">$38.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/7.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/8.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/9.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/10.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-5%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Table</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$40.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/11.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/12.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/13.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/14.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 " data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/15.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/16.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                </div>
              </div>
              {/* <!-- 1st tab end --> */}
              {/* <!-- 2nd tab start --> */}
              <div className="tab-pane fade" id="tab-product-best-sellers">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/1.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/3.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/4.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-10%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$48.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/5.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/6.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-7%</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        <span className="old">$38.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/7.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/8.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/9.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/10.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-5%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Table</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$40.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/11.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/12.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/13.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/14.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 " data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/15.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/16.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                </div>
              </div>
              {/* <!-- 2nd tab end --> */}
              {/* <!-- 3rd tab start --> */}
              <div className="tab-pane fade" id="tab-product-sale-item">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/1.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/3.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/4.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-10%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$48.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/5.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/6.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-7%</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        <span className="old">$38.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/7.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/8.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/9.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/10.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-5%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Table</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$40.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/11.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/12.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/13.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/14.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 " data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/15.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/16.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                </div>
              </div>
              {/* <!-- 3rd tab end --> */}
              {/* <!-- 4th tab start --> */}
              <div className="tab-pane fade" id="tab-product-on-sales">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/1.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/2.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Simple minimal Chair </a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/3.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/4.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-10%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$48.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/5.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/6.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-7%</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        <span className="old">$38.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/7.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/8.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/9.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/10.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="sale">-5%</span>
                        <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Table</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        <span className="old">$40.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/11.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/12.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Wooden decorations</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px" data-aos="fade-up" data-aos-delay="600">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/13.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/14.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">High quality vase bottle</a></h5>
                        <span className="price">
                          <span className="new">$30.50</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 " data-aos="fade-up" data-aos-delay="800">
                    {/* <!-- Single Prodect --> */}
                    <div className="product">
                      <div className="thumb">
                        <a href="shop-left-sidebar.html" className="image">
                          <img src="assets/images/product-image/15.jpg" alt="Product" />
                          <img className="hover-image" src="assets/images/product-image/16.jpg" alt="Product" />
                        </a>
                        <span className="badges">
                          <span className="new">New</span>
                        </span>
                        <div className="actions">
                          <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                              className="icon-heart"></i></a>
                          <a href="#" className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              className="icon-size-fullscreen"></i></a>
                          <a href="compare.html" className="action compare" title="Compare"><i
                              className="icon-refresh"></i></a>
                        </div>
                        <button title="Add To Cart" className=" add-to-cart">Add
                          To Cart</button>
                      </div>
                      <div className="content">
                        <h5 className="title"><a href="shop-left-sidebar.html">Living & Bedroom Chair</a></h5>
                        <span className="price">
                          <span className="new">$38.50</span>
                        </span>
                      </div>
                    </div>
                    {/* <!-- Single Prodect --> */}
                  </div>
                </div>
              </div>
              {/* <!-- 4th tab end --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Area;