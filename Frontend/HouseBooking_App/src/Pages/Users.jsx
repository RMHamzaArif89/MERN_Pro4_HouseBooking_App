import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './css/users.css'
function Users() {
    const users=useLoaderData()
   

  return (
    <>
    {/* {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
} */}

<div className="users-container">
  <div className="users-con">
    <div className="users-heading">
      <div className="name">Name</div>
      <div className="email">Email</div>
      <div className="password">Password</div>
            
    </div>
  {
  users.map((user)=>{
    return(
      <div key={user._id} className='users-row'>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-password">{user.password}</div>
        </div>
        
    )
  })
        
}
  </div>
</div>
    </>
  )
}

export default Users




    //get orders data
  export const UserLoader=async()=>{

      const response=await fetch('http://localhost:5000/api/Users',{
        method:'GET',
    
    })
    const res=await response.json()
    if(response.ok){
      return res.data
      
    }
 
  }
