import Link from "next/link";

const BreadCrumb = () => {
  return(
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row breadcrumb_box  align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
                  <h2 className="breadcrumb-title">SHOP</h2>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12">
                  <ul className="breadcrumb-list text-center text-md-end">
                    <li className="breadcrumb-item"><Link href={'/'}>Home</Link></li>
                    <li className="breadcrumb-item active">Shop</li>
                    <li className="breadcrumb-item active">Product details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BreadCrumb;