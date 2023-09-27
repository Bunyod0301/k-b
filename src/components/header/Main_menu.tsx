'use client';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
const Main_menu = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY + 1;
      if (windowTop > 250) {
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

  return (
    <div className={`bg-black d-none d-lg-block ${stickyNavClass}`}>
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12 align-self-center">
            <div className="main-menu">
              <ul>
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'/shop'}>Shop</Link>
                </li>
                <li>
                  <Link href={'/about'}>About us</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_menu;
