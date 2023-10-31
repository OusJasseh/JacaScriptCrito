import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import Contact from './Views/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
      </BrowserRouter>
      
  </React.StrictMode>
);

