"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { FreeMode, Navigation, } from 'swiper/modules';

export default function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="product-details-area pt-100px pb-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
              {/* Swiper */}
              <div className="swiper-container zoom-top">
                <Swiper
                  spaceBetween={0}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs]}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide zoom-image-hover">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/zoom-image/1.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide zoom-image-hover">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/zoom-image/2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide zoom-image-hover">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/zoom-image/3.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide zoom-image-hover">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/zoom-image/4.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide zoom-image-hover">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/zoom-image/5.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-container zoom-thumbs slider-nav-style-1 small-nav mt-15px mb-15px">
                <Swiper
                  onSwiper={setThumbsSwiper as any}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/1.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/3.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/4.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      className="img-responsive m-auto"
                      src="/assets/images/product-image/5.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                {/* Add Arrows */}
                <div className="swiper-buttons">
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="product-details-content quickview-content">
                <h2>Originals Kaval Windbr</h2>
                <p className="reference">
                  Reference:<span> demo_17</span>
                </p>
                <div className="pro-details-rating-wrap">
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <span className="read-review">
                    <a className="reviews" href="#">
                      Read reviews (1)
                    </a>
                  </span>
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price not-cut">$18.90</li>
                  </ul>
                </div>
                <p className="quickview-para">
                  Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor
                  incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo
                  quis nostrud exercitation ullamco
                </p>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      name="qtybutton"
                      defaultValue={1}
                    />
                  </div>
                  <div className="pro-details-cart">
                    <button
                      className="add-cart btn btn-primary btn-hover-primary ml-4"
                    >
                      {" "}
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href="">
                      <i className="ion-android-favorite-outline" />
                      Add to wishlist
                    </a>
                  </div>
                  <div className="pro-details-compare">
                    <a href="">
                      <i className="ion-ios-shuffle-strong" />
                      Add to compare
                    </a>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
                    <ul className="d-flex">
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-google" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pro-details-policy">
                  <ul>
                    <li>
                      <img src="/assets/images/icons/policy.png" alt="" />
                      <span>
                        Security Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                    <li>
                      <img src="/assets/images/icons/policy-2.png" alt="" />
                      <span>
                        Delivery Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                    <li>
                      <img src="/assets/images/icons/policy-3.png" alt="" />
                      <span>
                        Return Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
