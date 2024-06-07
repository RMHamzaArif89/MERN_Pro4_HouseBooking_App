import React from 'react'
import { useLoaderData } from 'react-router-dom'

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
{
  users.map((user)=>{
    return(
      <div key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    )
  })
        
}
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
