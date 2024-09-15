import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const adminContext = createContext(null);


export const AdminContextProvider=({children})=>{

const[showSideBar,setShowSideBar]=useState(true)



  return(
    <adminContext.Provider value={{showSideBar,setShowSideBar}}>
    {children}
</adminContext.Provider>
  )

}

export default adminContext;