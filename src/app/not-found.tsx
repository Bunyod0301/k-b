'use client'
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import MobilMenu from "@/components/mobil_menu/MobilMenu";
import Link from "next/link";
import { useEffect } from "react";

const NotFound =()=> {
  return(
    <>
      <Header />
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row breadcrumb_box  align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
                  <h2 className="breadcrumb-title">404</h2>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12">
                  <ul className="breadcrumb-list text-center text-md-end">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active">404</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blank-page-area pb-100px pt-100px">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blank-content-header">
                <h1>The page you are looking for was not found.</h1>
              </div>
              <div className="page-not-found text-center">
                <h4>Sorry For The Inconvenience.</h4>
                <p>Search again what you are looking for</p>
                <Link href="/">Go To Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default NotFound;