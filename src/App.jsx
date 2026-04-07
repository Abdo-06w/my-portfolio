import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Background from './Background';
import About from "./About";
import Navbar from "./Navbar";
import Home from "./Home";
import Social from "./Social";
import './App.css';


function App() {

   const [darkMode,setMode] = useState(false);
  

  return (
    <>
      <Router>
        <Background darkMode={darkMode} />
        <Navbar darkMode={darkMode} setMode={setMode} />
        <div className={`page ${darkMode ? "dark-mode" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Social />
        </div>
      </Router>
    </>
  )
}

export default App;
