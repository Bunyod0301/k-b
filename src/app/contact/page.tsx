'use client'
import { useEffect, useState } from 'react'
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import MapOuter from "@/components/mapouter/MapOuter";
import ContactInfo from "@/components/contact-info/ContactInfo";
import ContactForm from "@/components/contact-form/ContactForm";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

const ContactUsPage = () => {
  return(
    <>
      <Header />
      <BreadCrumb />
      {/*contact area start*/}
      <div className="contact-area pb-100px pt-100px">
        <div className="container">
          <div className="contact-map mb-50px">
            <div id="mapid" data-aos="fade-up" data-aos-delay="200">
              <MapOuter />
            </div>
          </div>
          <div className="custom-row-2 row">
            <div className="col-lg-4 col-md-5 mb-lm-60px col-sm-12 col-xs-12 w-sm-100">
              <ContactInfo />
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/*contact area end*/}
      <Footer />
    </>
  )
}
export default ContactUsPage;