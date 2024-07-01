import React, { useContext } from 'react'
import { FcHome } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import './nav.css'
import {NavLink} from 'react-router-dom'


function Nav() {

  
  return (
    <div className='nav'>
     
   
      <img src="/images/logo.jpg" className="logo-img" alt="" />
    
        <ul>
            <li><NavLink  className="navlink" to="/">Home</NavLink><FcHome/></li>
            <li><NavLink  className="navlink" to="/cities">Cities</NavLink></li>
            <li><NavLink  className="navlink" to="/houses">Houses</NavLink></li>
            <li><NavLink  className="navlink" to="/users">Users</NavLink></li>
            <li><NavLink className='navlink' to="/createCity">AddCity</NavLink></li>
            <li><NavLink className='navlink' to="/createHouse">AddHouse</NavLink></li>
            <li><NavLink className='navlink' to="/register">Register</NavLink></li>
            <li><NavLink className='navlink' to="/login">Login</NavLink></li>
            <li><NavLink className='logout' to="/logout">Logout</NavLink></li>
            
        </ul>

       

      
    </div>
  )
}

export default Nav
