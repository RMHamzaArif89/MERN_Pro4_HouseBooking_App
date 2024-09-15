import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import SideBarAdmin from '../../components/sideBarAdmin/sideBarAdmin'
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin'
import { useContext } from 'react'
import adminContext from '../../../Context/contextApi/AdminContext'


function AdminLayout() {
  const {showSideBar}=useContext(adminContext)
  
  return (
 <>
  <TopBarAdmin/>

<div className="adminContainer">
{
  showSideBar&& <SideBarAdmin/>
 }
<Outlet/>

</div>

 </>
  )
}

export default AdminLayout
