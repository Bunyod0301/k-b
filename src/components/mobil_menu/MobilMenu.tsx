import Link from 'next/link';
import React from 'react';

interface MobilMenuProps{
  className: boolean;
  onClick: any;
  cartRef: any;
}
const MobilMenu: React.FC<MobilMenuProps> = ({className, onClick, cartRef}) => {
  return (
  <>
    {/* OffCanvas Menu Start */}
    <div id="offcanvas-mobile-menu" ref={cartRef} className={`offcanvas offcanvas-mobile-menu ${className && 'offcanvas-open'}`}>
      <button onClick={onClick} className="offcanvas-close" />
      <div className="inner customScroll">
        <div className="offcanvas-menu mb-20px">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* OffCanvas Menu End */}
        {/* Language Currency start */}
        <div className="offcanvas-userpanel mt-8">
          <ul>
            {/* Language Start */}
            <li className="offcanvas-userpanel__role">
              <a href="#">
                English <i className="ion-ios-arrow-down" />
              </a>
              <ul className="user-sub-menu">
                <li>
                  <a className="current" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a href="#"> Italiano</a>
                </li>
                <li>
                  <a href="#"> Français</a>
                </li>
                <li>
                  <a href="#"> Filipino</a>
                </li>
              </ul>
            </li>
            {/* Language End */}
          </ul>
        </div>
        {/* Language Currency End */}
        <div className="offcanvas-social mt-auto">
          <ul>
            <li>
              <a href="#">
                <i className="ion-social-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-google" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* OffCanvas Menu End */}
    <div className="offcanvas-overlay" />
  </>

  );
};

export default MobilMenu;