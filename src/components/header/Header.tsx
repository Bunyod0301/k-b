import React from 'react';
import Header_Bottom1 from './Header_Bottom1';
import Header_Bottom2 from './Header_Bottom2';
import Main_menu from './Main_menu';
import Scroll_active from '../scroll/Scroll_active';

const Header = () => {
  return (
    <>
      <div className="header section">
        <Header_Bottom1 />
        <Header_Bottom2 />
        <Main_menu />
      </div>
      <Scroll_active />
    </>
  );
};

export default Header;
