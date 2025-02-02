import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './Components/InputPage';
import OutputPage from './Components/OutputPage';
import Trending from './Components/trending';
import  Home  from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InputPage" element={<InputPage />} />
        <Route path="/OutputPage" element={<OutputPage />} />
        <Route path="/Trending" element={<Trending />} />
        

      </Routes>
    </Router>
  );
}

export default App;

// {/* <Route path="/" element={<InputPage />} />
//         <Route path="/output" element={<OutputPage />} />
//         <Route path="/" ></Route> */}