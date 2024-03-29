import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/common/heading/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './components/pages/Home'
import CourseHome from './components/allcourses/CourseHome';
import {Quiz} from './components/pages/Quiz';
import {Reviews} from './components/pages/Reviews';
import {About} from './components/pages/About';
import {Contact} from './components/pages/Contact';
import { Cources } from './components/pages/Cources';



function App() {

  return <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cources" element={<Cources/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
      </>
  
};

export default App
