import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav/Nav'

function LayoutPage() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>

  )
}

export default LayoutPage
