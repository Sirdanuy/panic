import React, { createContext, useState } from 'react';

import "./Greetings.css";
import Logo from "./Assets/hero.gif"
import Navbar from "./NavBar";
import MainPage from "./MainPage";
import Footer from "./Footer";
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
    
      <div className="BcontainerFirst">
      <Navbar />
      <div className="heroSection">
      <a href="." className="navbar-logo" onClick={handleLogoClick}>
          <img className='logo' src={Logo}/>
        </a>

        
      </div>
      <div className="BmainPage">
        <MainPage />
        <Footer />
      </div>
    </div>
    
  );
};

export default Home;
