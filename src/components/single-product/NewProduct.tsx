"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Link from "next/link";
const NewProduct = () => {
  return(
    <>
      {/* New Product Start */}
      <div className="section pb-100px" data-aos="fade-up" data-aos-delay={200}>
        <div className="container">
          {/* section title start */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-start mb-11">
                <h2 className="title">You Might Also Like</h2>
              </div>
            </div>
          </div>
          {/* section title start */}
          <div
            className="new-product-slider swiper-container slider-nav-style-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              speed={1500}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                  478: {
                  slidesPerView: 2,
                },
                  576: {
                  slidesPerView: 2,
                },
                  768: {
                  slidesPerView: 3,
                },
                  992: {
                  slidesPerView: 3,
                },
                  1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              className="new-product-wrapper swiper-wrapper"
            >
              {/* Single Prodect */}
              <SwiperSlide className="new-product-item swiper-slide">
                <div className="product">
                  <div className="thumb">
                    <Link href={"/shop"} className="image">
                      <img src="/assets/images/product-image/1.jpg" alt="Product" />
                      <img
                        className="hover-image"
                        src="/assets/images/product-image/2.jpg"
                        alt="Product"
                      />
                    </Link>
                    <span className="badges">
                  <span className="sale">-10%</span>
                  <span className="new">New</span>
                </span>
                    <div className="actions">
                      <a
                        href="wishlist.html"
                        className="action wishlist"
                        title="Wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                      <a
                        href="#"
                        className="action quickview"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon-size-fullscreen" />
                      </a>
                      <a
                        href="compare.html"
                        className="action compare"
                        title="Compare"
                      >
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    <button title="Add To Cart" className=" add-to-cart">
                      Add To Cart
                    </button>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={"/shop"}>Simple minimal Chair </Link>
                    </h5>
                    <span className="price">
                  <span className="new">$18.50</span>
                  <span className="old">$28.50</span>
                </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Single Prodect */}
              <SwiperSlide className="new-product-item swiper-slide">
                <div className="product">
                  <div className="thumb">
                    <Link href={"shop"} className="image">
                      <img src="/assets/images/product-image/3.jpg" alt="Product" />
                      <img
                        className="hover-image"
                        src="/assets/images/product-image/4.jpg"
                        alt="Product"
                      />
                    </Link>
                    <span className="badges">
                  <span className="sale">-7%</span>
                </span>
                    <div className="actions">
                      <a
                        href="wishlist.html"
                        className="action wishlist"
                        title="Wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                      <a
                        href="#"
                        className="action quickview"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon-size-fullscreen" />
                      </a>
                      <a
                        href="compare.html"
                        className="action compare"
                        title="Compare"
                      >
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    <button title="Add To Cart" className=" add-to-cart">
                      Add To Cart
                    </button>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={"/shop"}>Wooden decorations</Link>
                    </h5>
                    <span className="price">
                  <span className="new">$38.50</span>
                  <span className="old">$43.50</span>
                </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Single Prodect */}
              <SwiperSlide className="new-product-item swiper-slide">
                <div className="product">
                  <div className="thumb">
                    <Link href={"/shop"} className="image">
                      <img src="/assets/images/product-image/5.jpg" alt="Product" />
                      <img
                        className="hover-image"
                        src="/assets/images/product-image/6.jpg"
                        alt="Product"
                      />
                    </Link>
                    <span className="badges d-none">
                  <span className="new">New</span>
                </span>
                    <div className="actions">
                      <a
                        href="wishlist.html"
                        className="action wishlist"
                        title="Wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                      <a
                        href="#"
                        className="action quickview"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon-size-fullscreen" />
                      </a>
                      <a
                        href="compare.html"
                        className="action compare"
                        title="Compare"
                      >
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    <button title="Add To Cart" className=" add-to-cart">
                      Add To Cart
                    </button>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={"/shop"}>High quality vase bottle</Link>
                    </h5>
                    <span className="price">
                  <span className="new">$38.50</span>
                </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Single Prodect */}
              <SwiperSlide className="new-product-item swiper-slide">
                <div className="product">
                  <div className="thumb">
                    <Link href={"/shop"} className="image">
                      <img src="/assets/images/product-image/7.jpg" alt="Product" />
                      <img
                        className="hover-image"
                        src="/assets/images/product-image/8.jpg"
                        alt="Product"
                      />
                    </Link>
                    <span className="badges">
                  <span className="new">New</span>
                </span>
                    <div className="actions">
                      <a
                        href="wishlist.html"
                        className="action wishlist"
                        title="Wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                      <a
                        href="#"
                        className="action quickview"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon-size-fullscreen" />
                      </a>
                      <a
                        href="compare.html"
                        className="action compare"
                        title="Compare"
                      >
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    <button title="Add To Cart" className=" add-to-cart">
                      Add To Cart
                    </button>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={"/shop"}>
                        Living &amp; Bedroom Chair
                      </Link>
                    </h5>
                    <span className="price">
                  <span className="new">$38.50</span>
                </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Single Prodect */}
              <SwiperSlide className="new-product-item swiper-slide">
                <div className="product">
                  <div className="thumb">
                    <Link href={"/shop"} className="image">
                      <img src="/assets/images/product-image/9.jpg" alt="Product" />
                      <img
                        className="hover-image"
                        src="/assets/images/product-image/10.jpg"
                        alt="Product"
                      />
                    </Link>
                    <span className="badges">
                  <span className="sale">-5%</span>
                </span>
                    <div className="actions">
                      <a
                        href="wishlist.html"
                        className="action wishlist"
                        title="Wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                      <a
                        href="#"
                        className="action quickview"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon-size-fullscreen" />
                      </a>
                      <a
                        href="compare.html"
                        className="action compare"
                        title="Compare"
                      >
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    <button title="Add To Cart" className=" add-to-cart">
                      Add To Cart
                    </button>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={"/shop"}>
                        Living &amp; Bedroom Table
                      </Link>
                    </h5>
                    <span className="price">
                  <span className="new">$38.50</span>
                  <span className="old">$40.50</span>
                </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Single Prodect */}
            </Swiper>
            {/* Add Arrows */}
            <div className="swiper-buttons">
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </div>
      {/* New Product End */}
    </>
  )
}
export default NewProduct;