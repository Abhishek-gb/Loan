import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from '../Components/ContactUs';
import LoanServices from '../Components/LoanServices';
import AboutUs from '../Components/AboutUs';
import Home from '../Components/Home';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/loanservices' element={<LoanServices />} />
    </Routes>
  );
};

export default Routing;