import React, { useState, useEffect } from 'react';
import { FcHome } from "react-icons/fc";  // Home icon
import { IoIosAddCircleOutline } from "react-icons/io";  // Add icons
import { FaCity, FaHouseUser, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"; // Additional icons
import { GiHouse } from "react-icons/gi";  // Logo icon
import './nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  // State to track if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if token exists in localStorage (indicating user is logged in)
  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming you store the token here
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <div className='nav'>
      <div className="logo-container">
        <GiHouse className="logo-icon" size={40} />  {/* Logo icon */}
        {/* <img src="/images/logo.jpg" className="logo-img" alt="logo" /> */}
      </div>

      <ul>
        <li>
          <NavLink className="navlink" to="/">
            <FcHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/cities">
            <FaCity /> Cities
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/houses">
            <FaHouseUser /> Houses
          </NavLink>
        </li>
        
        {/* Conditionally render AddCity and AddHouse links if the user is logged in */}
        {isAuthenticated && (
          <>
            <li>
              <NavLink className='navlink' to="/createCity">
                <IoIosAddCircleOutline /> Add City
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to="/createHouse">
                <IoIosAddCircleOutline /> Add House
              </NavLink>
            </li>
          </>
        )}
        
       
        
        {isAuthenticated ? (
          <li>
            <NavLink className='logout' to="/logout">
              <FaSignOutAlt /> Logout
            </NavLink>
          </li>
        ):<>
         <li>
          <NavLink className='navlink' to="/register">
            <FaUserPlus /> Register
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to="/login">
            <FaSignInAlt /> Login
          </NavLink>
        </li>
        </>}
      </ul>
    </div>
  );
}

export default Nav;
