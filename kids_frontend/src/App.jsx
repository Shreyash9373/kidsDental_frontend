import React from 'react'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx'
import DentalServices from './pages/DentalServices.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dentalServices' element={<DentalServices/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
