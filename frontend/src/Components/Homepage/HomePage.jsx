import React from 'react'
import { HomePageDiv } from './homepageStyle'
import Navbar from './util/Navbar'
import { Outlet } from 'react-router-dom'


const HomePage = () => {
  return (
    <HomePageDiv data-aos="fade">
        <Navbar/>
        <Outlet/>
    </HomePageDiv>
  )
}

export default HomePage