import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const HouseContext = createContext(null);


export const HouseContextProvider=({children})=>{
const [housesData,setHousesData]=useState([])
const [singleHouseData,setSingleHouseData]=useState()
    
//get orders data
const getHouses = async (search) => {

    const response = await fetch(`http://localhost:5000/api/Houses`, {
      method: 'GET',
  
    })
    const res = await response.json()
    if (response.ok) {
      setHousesData(res.data)
      
   
  
    }else{
      console.log('false')
    }
  
  }
  useEffect(()=>{
    getHouses()
  },[])


  const getHouseDataById = async (id) => {

    const response = await fetch(`http://localhost:5000/api/House/${id}`, {
      method: 'GET',
  
    })
    const res = await response.json()

    if (response.ok) {
      console.log(res.data)
      setSingleHouseData(res.data)
      
   
  
    }else{
      console.log('false')
    }
  
  }


  return(
    <HouseContext.Provider value={{housesData,getHouses,setHousesData,getHouseDataById,singleHouseData}}>
    {children}
</HouseContext.Provider>
  )

}

export default HouseContext;