import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Home, About, Contact } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);