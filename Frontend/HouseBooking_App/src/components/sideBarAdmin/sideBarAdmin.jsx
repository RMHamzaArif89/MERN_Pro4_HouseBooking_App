import React from 'react'
import './sideBarAdmin.css'
import { NavLink } from 'react-router-dom'

function SideBarAdmin() {
  return (
    
    <div className='sideBarAdmin'>
        <div className="sideBarAdminHeading">Admin Pages
        
        </div>
        <div className="sideBarAdminLinks">
            <NavLink to={'/houseOwn'} activeclassname='active'>House Owners</NavLink>
        </div>
      
    </div>
  )
}

export default SideBarAdmin
