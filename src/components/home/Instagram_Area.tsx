import React from 'react';

const Instagram_Area = () => {
  return (
    <div className="section pb-100px">
      <div className="container">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <div className="section-title text-center mb-11">
              <h2 className="title">Follow Us Instagram</h2>
              <p className="sub-title">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- Single Item --> */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
            <div className="insta-wrapper">
              <a href="https://www.instagram.com/" target="_blank"><img className="w-100" src="assets/images/instragram-image/1.png" alt="" />

              </a>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
            <div className="insta-wrapper">
              <a href="https://www.instagram.com/" target="_blank"><img className="w-100" src="assets/images/instragram-image/2.png" alt="" />

              </a>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-xs-30px" data-aos="fade-up" data-aos-delay="600">
            <div className="insta-wrapper">
              <a href="https://www.instagram.com/" target="_blank"><img className="w-100" src="assets/images/instragram-image/3.png" alt="" />

              </a>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div className="col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up" data-aos-delay="800">
            <div className="insta-wrapper">
              <a href="https://www.instagram.com/" target="_blank"><img className="w-100" src="assets/images/instragram-image/4.png" alt="" />

              </a>
            </div>
          </div>
          {/* <!-- Single Item --> */}
        </div>
      </div>
    </div>
  );
};

export default Instagram_Area;