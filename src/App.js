import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route href="/hobbies"path="/hobbies"  element={<Services />} />
          <Route path="/travel" element={<Products />}/>
          <Route path="/school" element={<SignUp />}/>
        </Routes>
      </Router>
    </>

    
  );
}

export default App;



