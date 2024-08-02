import React, { useState } from 'react';
import './YNavBar.css';
// import YelloMkp from './mktp.png'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="ynavbar">
        {/* <a href="#" className="navbar-logo">Logo</a> */}
      <div className="navbar-container">
        <div className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
          <a href="#" className="mkt ">
          {/* <div className='marketplc'></div> */}
          {/* <img src={YelloMkp} /> */}
            Marketplace
          </a>
          <a href="#" className="col"></a>
          <a href="#" className="mint"></a>
          <a href="#" className="con"></a>
        </div>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
