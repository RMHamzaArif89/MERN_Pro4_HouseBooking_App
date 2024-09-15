import React from 'react';
import { FaUserTie, FaBars } from "react-icons/fa";  // Imported FaBars for menu icon
import './topBarAdmin.css';
import { useContext } from 'react';
import adminContext from '../../../Context/contextApi/AdminContext';

export default function TopBarAdmin() {
  const { setShowSideBar, showSideBar } = useContext(adminContext);
  
  return (
    <div className='topBarAdmin'>
      <div className="topBarHeading">
        Admin Panel <FaBars className="navMenu" onClick={() => { setShowSideBar(!showSideBar); }} />
      </div>
      <div className="topBarUser">
        Admin <FaUserTie />
      </div>
    </div>
  );
}
