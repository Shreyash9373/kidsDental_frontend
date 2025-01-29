import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import DentalServices from './pages/DentalServices.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element   ={<Home />} />
        <Route path="/dentalServices" element={<DentalServices />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
