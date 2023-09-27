const ContactInfo = () => {
  return(
    <>
      <div className="contact-info-wrap">
        <h2 className="title" data-aos="fade-up" data-aos-delay="200">Contact Info</h2>
        <div className="single-contact-info" data-aos="fade-up" data-aos-delay="200">
          <div className="contact-info-inner">
            <span className="sub-title">Phone:</span>
          </div>
          <div className="contact-info-dec">
            <p><a href="tel:+012345678102">+012 345 678 102</a></p>
            <p><a href="tel:+012345678102">+012 345 678 102</a></p>
          </div>
        </div>
        <div className="single-contact-info" data-aos="fade-up" data-aos-delay="200">
          <div className="contact-info-inner">
            <span className="sub-title">Email:</span>
          </div>
          <div className="contact-info-dec">
            <p><a href="mailto://urname@email.com">urname@email.com</a></p>
            <p><a href="mailto://urwebsitenaem.com">urwebsitenaem.com</a></p>
          </div>
        </div>
        <div className="single-contact-info" data-aos="fade-up" data-aos-delay="200">
          <div className="contact-info-inner">
            <span className="sub-title">Address:</span>
          </div>
          <div className="contact-info-dec">
            <p>Address goes here,</p>
            <p>street, Crossroad 123.</p>
          </div>
        </div>
        <div className="contact-social">
          <h3 className="title" data-aos="fade-up" data-aos-delay="200">Follow Us</h3>
          <div className="social-info" data-aos="fade-up" data-aos-delay="200">
            <ul className="d-flex">
              <li>
                <a href="#"><i className="icon-social-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="icon-social-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="icon-social-youtube"></i></a>
              </li>
              <li>
                <a href="#"><i className="icon-social-google"></i></a>
              </li>
              <li>
                <a className="m-0" href="#"><i className="icon-social-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactInfo;