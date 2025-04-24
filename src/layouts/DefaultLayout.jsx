import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../componenets/Nav'

const DefaultLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default DefaultLayout