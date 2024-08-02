import React, { createContext, useState } from 'react';

import "./YHome.css";
import Logo from "./Logo.png"
import Navbar from "./NavBar/YNavBar";
import MainPage from "./MainPage/YMainPage";
import Footer from "./Footer/YFooter";
// export const ThemeContext = createContext();

const Home = ({ children }) => {
  const [showWriteUp, setShowWriteUp] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleToggleClick = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setShowWriteUp(true);
  };

  const handleCloseClick = () => {
    setShowWriteUp(false);
  };


  return (
    
    // <div className={`containerFirst ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    
      <div className="YcontainerFirst">
      <Navbar />
      <div className="heroSection">
      {!showWriteUp ? (
        <a href="." className="navbar-log" onClick={handleLogoClick}>
          <img className='logo' src={Logo}/>
        </a>
      ) : (
        <div className="write-up" onClick={handleCloseClick}>
          <p className="navbar-logo show">-This is the moon. Our dreamland, the land of free beings. <br/>
          One race with many identites. <br/>
          Let's tell their stories-
          </p>
          {/* <p className="navbar-logo show">One race with many identites.</p>
          <p className="navbar-logo show">Let's tell their stories-</p> */}
          
        </div>
      )}

        
      </div>
      <div className="mainPage">
        <MainPage />
        <Footer />
      </div>
    </div>
    
  );
};

export default Home;
