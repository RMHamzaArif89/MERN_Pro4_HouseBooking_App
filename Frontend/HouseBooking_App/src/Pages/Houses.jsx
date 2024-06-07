import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Houses() {
    const houses=useLoaderData()
   

  return (
    <>
    {/* {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
} */}
{
  houses.map((house)=>{
    return(
      <div key={house._id}>
           <div className="name">{house.name}</div>
           <div className="addrss">{house.address}</div>
           <div className="rooms">{house.rooms}</div>
           <div className="images">
{
    house.images.map((img)=>{
        return <div className="img">{img}</div>
    })
}
           </div>
        </div>
    )
  })
        
}
    </>
  )
}

export default Houses




    //get orders data
  export const HouseLoader=async()=>{

      const response=await fetch('http://localhost:5000/api/Houses',{
        method:'GET',
    
    })
    const res=await response.json()
    if(response.ok){
      return res.data
      
    }
 
  }
