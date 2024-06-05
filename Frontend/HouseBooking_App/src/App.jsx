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
import Form from './Pages/LoginForm/Form';
import Login from './Pages/LoginForm/Form';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route  element={<LayoutPage/>}>
   <Routes>
        
        <Route index element={<Items />} />
        <Route path="/" index element={<Home />} />
        <Route path="/register"  element={<Form />} />
        <Route path="/login"  element={<Login />} />
        
        
    
    </Routes>
  </Route>  
));
function App() {


  return (
 <RouterProvider router={router} />
  )
}

export default App
