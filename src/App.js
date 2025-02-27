
import React from 'react';
import './App.css';

import Home from './Home';
import Mycv from './Mycv';
import Contact from './Contact';
import Aboutme from './Aboutme'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

  
function App() {
  return (
     
      <div className="App">
       <BrowserRouter>
                    <nav>
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mycv">My CV</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/aboutme">About Me</a></li>
                      </ul>
                    </nav>
                  
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/mycv" element={<Mycv />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/aboutme" element={<Aboutme />} />
                    </Routes>  
         </BrowserRouter>
       
      </div>
   
  );
}
export default App;


