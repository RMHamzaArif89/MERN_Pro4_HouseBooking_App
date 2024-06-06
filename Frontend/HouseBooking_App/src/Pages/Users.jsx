import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Users() {
    const{users,isloading,isError}=useLoaderData()

  return (
    <>
    {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
}
{
    users&&users.map(user=>(
        <div key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    ))
        
}
    </>
  )
}

export default Users




    //get orders data
  export const UserLoader=async()=>{
    try{
      const response=await fetch('http://localhost:5000/api/Users',{
        method:'GET',
    
    })

     return response.json()
        }
    
      catch(e){
        console.log('data not found',e)
      }
    }
