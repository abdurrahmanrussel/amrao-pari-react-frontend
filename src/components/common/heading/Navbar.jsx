import React from 'react'
import Headd from './Headd'
import "./header.css"
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
     <Headd/>
      <nav className='containerflexsB'>
        <ul className='containerflexsB'>
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to="/cources"> All Cources </NavLink></li>
          <li><NavLink to="/quiz"> Quiz </NavLink></li>
          <li><NavLink to="/reviews"> Reviews </NavLink></li>
          <li><NavLink to="/about"> About </NavLink></li>
          <li><NavLink to="/contact"> Contact </NavLink></li>
        </ul>

        <div className="start">
          <div className="button">My Courses</div>
        </div>
      </nav>

    </>
  );
}

export default Navbar
