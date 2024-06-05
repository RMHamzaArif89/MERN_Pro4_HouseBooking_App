import { useState } from 'react'
import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LayoutPage from './Pages/LayoutPage';
import Home from './Pages/Home';
import Login from './Pages/LoginForm/Form';
import Register from './Pages/LoginForm/Register';
import CreateCity from './Pages/LoginForm/CreateCities';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route  element={<LayoutPage/>}>
   
        
      
        <Route path="/" index element={<Home />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/createCity"  element={<CreateCity />} />
        
        
    
 
  </Route>  
));
function App() {


  return (
 <RouterProvider router={router} />
  )
}

export default App
