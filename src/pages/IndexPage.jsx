import React from 'react'
import HeroSection from '../sections/index/Hero'
import MainText from '../sections/index/MainText'
import MyVision from '../sections/index/MyVision'
import Biography from '../sections/index/Biography'
import Program from '../sections/index/Program'
import CouncilList from '../sections/index/CouncilList'

const IndexPage = () => {
  return (
    <>
      <HeroSection/>
      <MainText/>
      <MyVision/>
      <Biography/>
      <Program/>
      <CouncilList/>
    </>
  )
}

export default IndexPage