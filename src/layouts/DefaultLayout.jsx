import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../componenets/Nav'
import Footer from '../sections/index/Footer'

const DefaultLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default DefaultLayout