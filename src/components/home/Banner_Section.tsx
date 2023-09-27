import React from 'react';

const Banner_Section = () => {
return (
	<div className="section pb-100px pt-100px">
		<div className="container">
			{/* <!-- Banners Start --> */}
			<div className="row">
				{/* <!-- Banner Start --> */}
				<div className="col-lg-6 col-12 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
					<a href="shop-left-sidebar.html" className="banner">
						<img src="assets/images/banner/1.jpg" alt="" />
						<div className="info justify-content-end">
							<div className="content align-self-center">
								<h3 className="title">
									Sale Furniture <br /> For Summer
								</h3>
								<p>Great Discounts Here</p>
							</div>
						</div>
					</a>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Banner Start --> */}
				<div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="400">
					<a href="shop-left-sidebar.html" className="banner">
						<img src="assets/images/banner/2.jpg" alt="" />
						<div className="info justify-content-start">
							<div className="content align-self-center">
								<h3 className="title">
									Office Chair <br /> For Best Offer</h3>
								<p>Great Discounts Here</p>
							</div>
						</div>
					</a>
				</div>
				{/* <!-- Banner End --> */}
			</div>
			{/* <!-- Banners End --> */}
		</div>
	</div>
);
};

export default Banner_Section;