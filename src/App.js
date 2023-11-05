import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import StartNavbar from './Components/StarterNavBar';
import Actionmovies from './Components/Actionmovies';
import Comedymovies from './Components/Comedymovies';
import Scifimovies from './Components/Scifimovies';
import Dramamovies from './Components/Dramamovies';

function App() {

    return (
      <>
        <BrowserRouter>
           <StartNavbar/>
          
          <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/action" element={<Actionmovies/>} />
            <Route path="/comedy" element={<Comedymovies/>} />
            <Route path="/sci-fi" element={<Scifimovies/>} />
            <Route path="/Drama" element={<Dramamovies/>} />
   
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;
  