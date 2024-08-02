import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./YMainPage.css";
// import Background from './Background'
// import Background from './panic_bg.png'
// import ThemeProvider from './ThemeContext';
// import { ThemeContext } from '../ThemeContext';
import ChapterOne from "./YAllChapters";
import HitchBy from '../../GreetingsPage/Assets/byhitch.gif'



function MainPage() {
  // const { toggleTheme } = useContext(ThemeContext);
  // const { isDarkMode } = useContext(ThemeContext);
 
  return (
    <>
      <div className="Ycont">
      <div className="homenavs">
      
      <div className="homebtn"></div>
      
        <div className="btn">
          <a href="https://discord.gg" className="disc">
            
          </a>
          <div className=" btn2">
          <Link to="/Greetings"><img src={HitchBy}/></Link>
          
          </div>
        </div>
      </div>
        {/* <Background/> */}
        <div className="intro">
          <p>
            ?an!c(Panic) NFT collectiion is about stories of fantasy Lives after
            the apocalypse.
            <br />
            <br />
            Graphics are a cast of metaphorical characters based on stories and
            inspired by pixelated 80-90's retro game style of pixel art. Created
            by Hitch.
            <br />
            <br />
            Collection will be minted in form of short chapters, each chapter
            has graphics for your own characters in these ?an!c stories.
            <br />
            <br />
            Each ?an!c NFT character has a unique emotional facial expression.
            This detailed individuality make stories from diversity. Diversity
            of ?an!c Lives forever on the blockchain.
            <br />
            <br />
            48*48 pixel, 6 chapters.
          </p>
        </div>
        <ChapterOne />
      </div>
    {/* </div> */}
    {/* </ThemeProvider> */}
    </>
  );
}

export default MainPage;
