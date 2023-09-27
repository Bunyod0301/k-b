const ContactForm = () => {
  return(
    <>
      <div className="contact-form">
        <div className="contact-title mb-30">
          <h2 className="title" data-aos="fade-up" data-aos-delay="200">Get In Touch</h2>
        </div>
        <form className="contact-form-style" id="contact-form" action="https://htmlmail.hasthemes.com/nazmul/mail.php" method="post">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <input name="name" placeholder="Name*" type="text" />
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <input name="email" placeholder="Email*" type="email" />
            </div>
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <input name="subject" placeholder="Subject*" type="text" />
            </div>
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <textarea name="message" placeholder="Your Message*"></textarea>
              <button className="btn btn-primary btn-hover-dark mt-4" data-aos="fade-up" data-aos-delay="200" type="submit">SEND</button>
            </div>
          </div>
        </form>
        <p className="form-messege"></p>
      </div>
    </>
  )
}
export default ContactForm;