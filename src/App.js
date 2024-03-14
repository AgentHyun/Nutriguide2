import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from'./Navbar';
import InputPage from './components/InputPage';
import InfoPage from './components/InfoPage';
import ProductPage from './components/ProductPage';
import InputMenuPage from './components/InputMenuPage';
import LandingPage from './components/LandingPage';
function App() {
    

    return (
      <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/input/inputMenu" element={<InputMenuPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
      </>
    );
}
export default App;