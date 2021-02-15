import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
           <ul>
               <li className="logo">
                   <a>WEBDEV</a>
                </li>
              <li>
                  <a to="/">About</a>
              </li>
              <li>
                  <a to="/">Tutorials</a>
              </li>
              <li>
                  <a to="/">Contact Us</a>
              </li>
           </ul> 
        </nav>
    )
}

export default Navbar;
