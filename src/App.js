import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Home from './components/Home';
import Properties from './components/Properties';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Properties />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
