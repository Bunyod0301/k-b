'use client'
import React, { useEffect, useState } from 'react';

function Scroll_active() {
  const [backToButton, setBackToButton] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if(window.scrollY > 160) {
        setBackToButton(true)
      } else {
        setBackToButton(false)
      }
    })
  }, [])

  const scrollUp =()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  return (
    <>
      {backToButton && (
        <a id="scrollUp"
          style={{
            position: 'fixed',
            zIndex: '2147483647'
          }}
          onClick={scrollUp}
        >
          <i className="ion-android-arrow-up"></i>
        </a>
      )}
    </>
  );
}

export default Scroll_active;
