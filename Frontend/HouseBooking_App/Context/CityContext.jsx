import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const CityContext = createContext(null);


export const CityContextProvider=({children})=>{
const [citiesData,setCitiesData]=useState([])
const [cityHouseData,setCityHouseData]=useState([])

    
//get orders data
const getCities = async (search) => {

    const response = await fetch(`http://localhost:5000/api/cities?search=${search}`, {
      method: 'GET',
      credentials:'include'
  
    })
    const res = await response.json()
    if (response.ok) {
      setCitiesData(res.Data)
      
   
  
    }else{
      console.log('false')
    }
  
  }
  useEffect(()=>{
    getCities()
  },[])



    
//get CityHouses
const getCityHouses = async (id) => {
console.log(id)
    const response = await fetch(`http://localhost:5000/api/cityHouses/${id}`, {
      method: 'GET',
      credentials:'include'
  
    })

    const res = await response.json()
    if (response.ok) {
      // console.log(res.data)
      setCityHouseData(res.data)
      
   
  
    }else{
      console.log('false')
    }
  
  }
  useEffect(()=>{
    getCityHouses()
  },[])


  return(
    <CityContext.Provider value={{citiesData,getCities,getCityHouses,cityHouseData}}>
    {children}
</CityContext.Provider>
  )

}

export default CityContext;