import React, { useState } from 'react';
import OverlayMenu from './OverlayMenu';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center font-inter justify-between p-6 w-full">
      <div className="font-bold cursor-pointer">ROLLAND</div>
      <div className="cursor-pointer" onClick={toggleMenu}>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu--v6"
        />
      </div>
      <div>
        <button className="border-black border-2 px-3 cursor-pointer py-1 rounded-full text-sm hover:bg-black hover:text-white">
          CONTACT US
        </button>
      </div>
      {isMenuOpen && <OverlayMenu onClose={toggleMenu} />}
    </nav>
  );
};

export default Nav;
