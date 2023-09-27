import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules'
const Blog_Are = () => {
  return (
		<div className="main-blog-area pb-100px">
			<div className="container">
				{/* <!-- section title start --> */}
				<div className="row">
					<div className="col-md-12" data-aos="fade-up">
						<div className="section-title text-center mb-11">
							<h2 className="title">Latest News</h2>
							<p className="sub-title">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore
							</p>
						</div>
					</div>
				</div>
				{/* <!-- section title start --> */}
				<div className="blog-slider swiper-container slider-nav-style-1" data-aos="fade-up" data-aos-delay="200">
					{/* <!-- Start single blog --> */}
					<Swiper
						modules = {[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						spaceBetween={30}
						slidesPerView={3}
						speed={1500}
						loop={true}
						autoplay={{
								delay: 4000,
						}}
						navigation = {{
							prevEl: '.blog-prev',
							nextEl: '.blog-next',
						}}
						breakpoints= {{
							0: {
									slidesPerView: 1,
							},
							478: {
									slidesPerView: 1,
							},
							576: {
									slidesPerView: 1,
							},
							768: {
									slidesPerView: 2,
							},
							992: {
									slidesPerView: 2,
							},
							1200: {
									slidesPerView: 3,
							},
						}}
						className="swiper-wrapper"
					>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/1.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Interior design is the art.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/2.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Decorate your home with furns.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/3.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Spatialize with that the furns.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/4.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Unique products will impress.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>



						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/1.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Interior design is the art.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/2.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Decorate your home with furns.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/3.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Spatialize with that the furns.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className="single-blog swiper-slide">
							<div className="blog-image">
								<a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/4.jpg" className="img-responsive w-100" alt="" /></a>
							</div>
							<div className="blog-text">
								<div className="blog-athor-date">
									<a className="blog-date" href="#">14 November</a>
								</div>
								<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Unique products will impress.</a></h5>
								<p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

								<a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
							</div>
						</SwiperSlide>
					</Swiper>
					{/* <!-- Add Arrows --> */}
					<div className="swiper-buttons">
						<div className="swiper-button-prev blog-prev"></div>
						<div className="swiper-button-next blog-next"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog_Are;