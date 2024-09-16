import { useState } from 'react'
import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLoaderData,

} from "react-router-dom";
import LayoutPage from './Pages/layout/LayoutPage';
import AdminLayout from './Pages/layout/AdminLayout';
import Home from './Pages/Home';
import Login from './Pages/LoginForm/Form';
import Register from './Pages/LoginForm/Register';
import CreateCity from './Pages/LoginForm/CreateCities';
import {UserLoader} from './Pages/AdminPage/HomeOwners/HouseOwn'

import CreateHouse from './Pages/LoginForm/CreateHouse'
import Houses from './Pages/Houses';
import Cities from './Pages/Cities';
import HouseDetail from './Pages/HouseDetail';
import Logout from './Pages/Logout'
import CityHouses from './Pages/CityHouses';




//adminpages
import AdminPage from './Pages/AdminPage/AdminPage'
import HouseOwn from './Pages/AdminPage/HomeOwners/HouseOwn';
import AdminHousesPage from './Pages/AdminPage/AdminHousesPage/AdminHousesPage';
import AdminCitiesPage from './Pages/AdminPage/AdminCitiesPage/AdminCitiesPage';
import AdminBookingList from './Pages/AdminPage/AdminBookingList/AdminBookingList'

const router = createBrowserRouter(
  createRoutesFromElements(
  
 <Route>
 <Route  element={<LayoutPage/>}>
   
        
      
   <Route path="/" index element={<Home />} />
   <Route path="/register"  element={<Register />} />
   <Route path="/login"  element={<Login />} />
   <Route path="/createCity"  element={<CreateCity />} />
   <Route path="/createHouse"  element={<CreateHouse />} />
  
   <Route path="/houses" element={<Houses />} />
   <Route path="/cities" element={<Cities />} />
   <Route path="/logout" element={<Logout />} />
   <Route path="/houseDetail/:id" element={<HouseDetail />} />
   <Route path="/cityHouses/:id" element={<CityHouses />} />
   
   


</Route> 
<Route element={<AdminLayout />}>
<Route path='/adminPage' element={<AdminPage/>}/>
<Route path="/houseOwn" element={<HouseOwn />} loader={UserLoader} />
<Route path='adminHousesPage' element={<AdminHousesPage/>}/>
<Route path='adminCitiesPage' element={<AdminCitiesPage/>}/>
<Route path='adminBookingList' element={<AdminBookingList/>}/>
</Route>
 </Route>
   
));
function App() {


  return (
 <RouterProvider router={router} />
  )
}

export default App
