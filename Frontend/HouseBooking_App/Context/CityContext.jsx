import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const CityContext = createContext(null);


export const CityContextProvider=({children})=>{
const [citiesData,setCitiesData]=useState([])
    
//get orders data
const getCities = async (search) => {

    const response = await fetch(`http://localhost:5000/api/Cities?search=${search}`, {
      method: 'GET',
  
    })
    const res = await response.json()
    if (response.ok) {
      setCitiesData(res.data)
      
   
  
    }else{
      console.log('false')
    }
  
  }
  useEffect(()=>{
    getCities()
  },[])


  return(
    <CityContext.Provider value={{citiesData,getCities}}>
    {children}
</CityContext.Provider>
  )

}

export default CityContext;