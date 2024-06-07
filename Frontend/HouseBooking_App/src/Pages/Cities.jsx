import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Cities() {
    const cities=useLoaderData()
   

  return (
    <>
    {/* {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
} */}
{
  cities.map((city)=>{
    return(
      <div key={city._id}>
           <div className="name">{city.name}</div>
           <div className="addrss">{city.detail}</div>
           <div className="rooms">{city.country}</div>
           <div className="images">
{city.img}
           </div>
        </div>
    )
  })
        
}
    </>
  )
}

export default Cities




    //get orders data
  export const CityLoader=async()=>{

      const response=await fetch('http://localhost:5000/api/Cities',{
        method:'GET',
    
    })
    const res=await response.json()
    if(response.ok){
      return res.data
      
    }
 
  }
