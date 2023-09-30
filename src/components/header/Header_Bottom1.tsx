'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import OffCanvasCard from '../off-canvas-card/OffCanvasCard';
// import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../public/assets/bootstrap/bootstrap.min'
const Header_Bottom1 = () => {
  const [Btn, setBtn] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const [cartClassName, setCartClassName] = useState(false);

  const toggleSearch = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setBtn(!Btn);
  };
  const openCart = () => {
    setCartClassName(true);
    // document.body.style.overflow = 'hidden';
    document.body.classList.add('offcanvas-open');
    document.querySelector('.offcanvas-overlay')?.classList.add('d-block');
  };
  const closeCart = () => {
    setCartClassName(false);
    // document.body.style.overflow = '';
    document.body.classList.remove('offcanvas-open');
    document.querySelector('.offcanvas-overlay')?.classList.remove('d-block');
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      // Check if the click occurred outside the cart component
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        closeCart();
      }
    };

    // Attach the event listener when the cart is open
    if (cartClassName) {
      document.addEventListener('click', handleBodyClick);
    }

    // Clean up the event listener when the cart is closed
    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, [cartClassName]);
  return (
    <>
      <div className="header-bottom d-none d-lg-block">
        {/* // <!-- Header Bottom  Start --> */}
        <div className="container position-relative">
          <div className="row align-self-center">
            {/* <!-- Header Logo Start --> */}
            <div className="col-auto align-self-center">
              <div className="header-logo">
                <Link href={'/'}>
                  <h5>FURNS</h5>
                </Link>
              </div>
            </div>
            {/* <!-- Header Logo End --> */}

            {/* <!-- Header Action Start --> */}
            <div className="col align-self-center">
              <div className="header-actions">
                <div className="header_account_list">
                  <a
                    onClick={toggleSearch}
                    className={`header-action-btn search-btn ${Btn ? 'active' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="icon-magnifier"></i>
                  </a>
                  <div className={`dropdown_search ${isDropdownVisible ? 'd-block' : ''}`}>
                    <form className="action-form" action="#">
                      <input className="form-control" placeholder="Enter your search key" type="text" />
                      <button className="submit" type="submit">
                        <i className="icon-magnifier"></i>
                      </button>
                    </form>
                  </div>
                </div>
                {/* <!-- Single Wedge Start --> */}
                <div className="header-bottom-set dropdown">
                  <button className="dropdown-toggle header-action-btn" data-bs-toggle="dropdown">
                    <i className="icon-user"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a className="dropdown-item" href="my-account.html">
                        My account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="checkout.html">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Sign in
                      </a>
                    </li>
                  </ul>
                </div>
                <a
                  onClick={openCart}
                  className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="icon-handbag"></i>
                  <span className="header-action-num">01</span>
                  {/* <!-- <span className="cart-amount">€30.00</span> --> */}
                </a>
                <a onClick={openCart} className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                  <i className="icon-menu"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OffCanvasCard className={cartClassName} onClick={closeCart} cartRef={cartRef} />
    </>
  );
};

export default Header_Bottom1;
