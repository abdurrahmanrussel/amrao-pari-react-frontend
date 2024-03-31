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
          <li className='active' ><NavLink to="/"> Home </NavLink></li>
          <li className='active' ><NavLink to="/cources"> All Courses </NavLink></li>
          <li className='active' ><NavLink to="/quiz"> Quiz </NavLink></li>
          <li className='active' ><NavLink to="/reviews"> Reviews </NavLink></li>
          <li className='active' ><NavLink to="/about"> About </NavLink></li>
          <li className='active' ><NavLink to="/contact"> Contact </NavLink></li>
        </ul>

        <a href="/Mycourses">
           <div className="start">
               <div className="button">My Courses</div>
            </div>
        </a>
      </nav>

    </>
  );
}

export default Navbar
