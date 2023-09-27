import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const Intro_Slider = () => {
return (
	<>
		<div className="section ">
			<div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1 dot-color-white">
				<Swiper
					loop={true}
					speed = {1000}
					effect={"fade"}
					autoplay={{
							delay: 7000,
							disableOnInteraction: false
					}}
					pagination = {{
						el: '.swiper-pagination',
						clickable: true,
					}}
					navigation = {{
						nextEl: '.next-hero',
						prevEl: '.prev-hero'
					}}
					
					modules = {[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
					className="swiper-wrapper"
				>
						<SwiperSlide>
							<div className="hero-slide-item slider-height-2 swiper-slide d-flex">
									<div className="hero-bg-image">
										<img src="/assets/images/slider-image/slider-2-1.jpg" alt="" />
									</div>
									<div className="container align-self-center">
										<div className="row justify-content-center">
											<div className="col-md-8 offset-2 align-self-center m-auto">
												<div className="hero-slide-content hero-slide-content-2 slider-animated-1 text-center">
													<span className="category">New Products</span>
													<h2 className="title-1">Flexible Sofa Set</h2>
													<p className="w-100">
														Torem ipsum dolor sit amet, consectetur adipisicing elitsed
														do eiusmo tempor incididunt ut labore et dolore magna
													</p>
													<a
														href="#"
														className="btn btn-lg btn-primary btn-hover-dark mt-5"
													>
														Shop Noww
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="hero-slide-item slider-height-2 swiper-slide d-flex text-center">
								<div className="hero-bg-image">
									<img src="assets/images/slider-image/slider-2-2.jpg" alt="" />
								</div>
								<div className="container align-self-center">
									<div className="row justify-content-center">
										<div className="col-md-8 offset-2 align-self-center m-auto">
											<div className="hero-slide-content hero-slide-content-2 slider-animated-1">
												<span className="category">New Products</span>
												<h2 className="title-1">Flexible Sofa Set</h2>
												<p className="w-100">
													Torem ipsum dolor sit amet, consectetur adipisicing elitsed
													do eiusmo tempor incididunt ut labore et dolore magna
												</p>
												<a
													href="#"
													className="btn btn-lg btn-primary btn-hover-dark mt-5"
												>
													Shop Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
					</SwiperSlide>
			</Swiper>
			{/* Add Pagination */}
			<div className="swiper-pagination swiper-pagination-white" />
			{/* Add Arrows */}
			<div className="swiper-buttons">
				<div className="swiper-button-next next-hero" />
				<div className="swiper-button-prev prev-hero" />
			</div>
		</div>
	</div>
	</>
);
};

export default Intro_Slider;