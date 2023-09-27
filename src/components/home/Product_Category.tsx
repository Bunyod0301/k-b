import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules'
const Product_Category = () => {
  return (
    <div className="section pt-100px pb-100px">
      <div className="container">
        <div className="category-slider swiper-container" data-aos="fade-up">
            <Swiper
              loop = {true}
              slidesPerView = {5}
              spaceBetween = {30}
              speed = {1500}
              autoplay = {{
                  delay: 2000,
                  disableOnInteraction: false,
              }}

              breakpoints = {{
                0: {
                    slidesPerView: 2,
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
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            }}
              modules={[Autoplay, Pagination, Navigation]}
              className="category-wrapper swiper-wrapper"
            >
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/1.png" alt="" />
                      <span className="title">Office Chair</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/2.png" alt="" />
                      <span className="title">Book Shelf</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/3.png" alt="" />
                      <span className="title">Light & Sofa</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/4.png" alt="" />
                      <span className="title">Reading Table</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/5.png" alt="" />
                      <span className="title">Corner Table</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/1.png" alt="" />
                      <span className="title">Office Chair</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/2.png" alt="" />
                      <span className="title">Book Shelf</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/3.png" alt="" />
                      <span className="title">Light & Sofa</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/4.png" alt="" />
                      <span className="title">Reading Table</span>
                    </div>
                  </a>
              </SwiperSlide>
              <SwiperSlide>
                  <a href="shop-left-sidebar.html" className="category-inner ">
                    <div className="category-single-item">
                      <img src="assets/images/icons/5.png" alt="" />
                      <span className="title">Corner Table</span>
                    </div>
                  </a>
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Product_Category;