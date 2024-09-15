import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'



function Logout() {

    const navigate=useNavigate()

    const LogoutApi=async()=>{
    
 try{
  const response=await fetch('http://localhost:5000/api/logout',{
    method:'GET',
    headers:{
  "Content-Type":'application/json'
    },
    credentials: 'include'  
})

 if(response.ok){
  
navigate("/login")
 }else{
    console.log('logout error')

 }
    }

  catch(e){
    console.log('logout error',e)
  }
}
const handleLogout = () => {
  localStorage.removeItem('token'); // Remove token on logout
  setIsAuthenticated(false);
};
useEffect(()=>{
LogoutApi()
handleLogout()
},[])

  return (
   <>
   <h1>'LOGOUT'</h1>
   </>
  )
}

export default Logout