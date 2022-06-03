import './App.css';
import Home from "./components/pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Paintprojects from "./components/pages/paintprojects/Paintprojects"
import Recentworks from "./components/pages/recentworks/Recentworks"
import Estimates from "./components/pages/estimates/Estimates"
import Contact from "./components/pages/contact/Contact"
import React from 'react';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/paintprojects" element={<Paintprojects/>} />
        <Route exact path="/recentworks" element={<Recentworks/>} />
        <Route exact path="/estimates" element={<Estimates/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>

    </>
  );
}

export default App;
