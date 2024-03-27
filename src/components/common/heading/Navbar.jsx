import React from 'react'
import Headd from './Headd'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
     <Headd/>
      <nav>
        <ul>
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to="/cources"> Cources </NavLink></li>
          <li><NavLink to="/quiz"> Quiz </NavLink></li>
          <li><NavLink to="/reviews"> Reviews </NavLink></li>
          <li><NavLink to="/contact"> Contact </NavLink></li>
          <li><NavLink to="/about"> About </NavLink></li>
        </ul>
      </nav>

    </>
  );
}

export default Navbar
