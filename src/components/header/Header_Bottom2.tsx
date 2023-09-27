'use client';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import MobilMenu from '../mobil_menu/MobilMenu';
import OffCanvasCard from '../off-canvas-card/OffCanvasCard';

const Header_Bottom2 = () => {
  const [Btn, setBtn] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [cartClassName, setCartClassName] = useState(false);
  const [MobilMenuClassName, setMobilMenuClassName] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      // Check if the click occurred outside the cart component
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        closeCart();
        closeMobilMenu();
      }
    };

    // Attach the event listener when the cart is open
    if (cartClassName || MobilMenuClassName) {
      document.addEventListener('click', handleBodyClick);
    }

    // Clean up the event listener when the cart is closed
    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, [cartClassName, MobilMenuClassName]);

  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY + 1;
      if (windowTop > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stickyNavClass = isSticky ? 'sticky-nav menu_fixed animated fadeInDown' : 'sticky-nav';

  const toggleSearch = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setBtn(!Btn);
  };

  const openCart = () => {
    setCartClassName(true);
    document.body.style.overflow = 'hidden';
    document.querySelector('.offcanvas-overlay')?.classList.add('d-block');
  };

  const openMobilMenu = () => {
    setMobilMenuClassName(true);
    document.body.style.overflow = 'hidden';
    document.querySelector('.offcanvas-overlay')?.classList.add('d-block');
  };

  const closeCart = () => {
    setCartClassName(false);
    document.body.style.overflow = '';
    document.querySelector('.offcanvas-overlay')?.classList.remove('d-block');
  };

  const closeMobilMenu = () => {
    setMobilMenuClassName(false);
    document.body.style.overflow = '';
    document.querySelector('.offcanvas-overlay')?.classList.remove('d-block');
  };

  return (
    <>
      <div className={`header-bottom d-lg-none ${stickyNavClass} bg-white`}>
        <div className="container position-relative">
          <div className="row align-self-center">
            {/* <!-- Header Logo Start --> */}
            <div className="col-auto align-self-center">
              <div className="header-logo">
                <Link href={'/'}>
                  <img src="/assets/images/logo/logo.png" alt="Site Logo" />
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
                  <button className="dropdown-toggle header-action-btn show" data-bs-toggle="dropdown">
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
                {/* <!-- Single Wedge End --> */}
                <a className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0" onClick={openCart}>
                  <i className="icon-handbag"></i>
                  <span className="header-action-num">01</span>
                  {/* <!-- <span className="cart-amount">€30.00</span> --> */}
                </a>
                <a
                  className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
                  onClick={openMobilMenu}
                >
                  <i className="icon-menu"></i>
                </a>
              </div>
            </div>
            {/* <!-- Header Action End --> */}
          </div>
        </div>
      </div>
      <MobilMenu className={MobilMenuClassName} onClick={closeMobilMenu} cartRef={cartRef} />
      <OffCanvasCard className={cartClassName} onClick={closeCart} cartRef={cartRef} />
    </>
  );
};

export default Header_Bottom2;
