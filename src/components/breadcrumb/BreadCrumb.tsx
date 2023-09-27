const BreadCrumb = () => {
  return(
    <>
      {/*breadcrumb-area start*/}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row breadcrumb_box  align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
                  <h2 className="breadcrumb-title">Contact Us</h2>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12">
                  <ul className="breadcrumb-list text-center text-md-end">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*breadcrumb-area end*/}
    </>
  )
}
export default BreadCrumb;