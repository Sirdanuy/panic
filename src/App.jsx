import React from 'react';

import Home from "./components/Home/YHome.jsx";
import "./App.css";
import Greetings from './components/GreetingsPage/Greetings.jsx';
import Chapter1 from './components/Chapters/Chapter1/Chapter1.jsx'
import Chapter2 from './components/Chapters/Chapter2/Chapter2.jsx'
import Chapter3 from './components/Chapters/Chapter3/Chapter3.jsx'
import Chapter4 from './components/Chapters/Chapter4/Chapter4.jsx'
import Chapter5 from './components/Chapters/Chapter5/Chapter5.jsx'
import Chapter6 from './components/Chapters/Chapter6/Chapter6.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    
    <div className={`App`}>
    
    
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />

          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="/Chapter1" element={<Chapter1 />} />
          <Route path="/Chapter2" element={<Chapter2 />} />
          <Route path="/Chapter3" element={<Chapter3 />} />
          <Route path="/Chapter4" element={<Chapter4 />} />
          <Route path="/Chapter5" element={<Chapter5 />} />
          <Route path="/Chapter6" element={<Chapter6 />} />
          <Route path="/Greetings" element={<Greetings />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
