const BannerProduct = () => {
  return(
    <>
      <div className="banner-preduct-wrapper pt-100px pb-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 pr-0">
              <div className="banner-product-image">
                <a className="venobox " href="assets/images/banner/8.jpg" data-gall="myGallery">
                  <img src="assets/images/banner/8.jpg" className="img-fluid w-100" alt="Banner images" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="banner-product-image mt-lm-15px">
                <a className="venobox " href="assets/images/banner/9.jpg" data-gall="myGallery">
                  <img src="assets/images/banner/9.jpg" className="img-fluid w-100" alt="Banner images" />
                </a>
              </div>
              <div className="banner-product-image mt-3">
                <a className="venobox " href="assets/images/banner/10.jpg" data-gall="myGallery">
                  <img src="assets/images/banner/10.jpg" className="img-fluid w-100" alt="Banner images" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BannerProduct;