import React from 'react'
import SocialIcons from '../../componenets/SocialIcons'
import SdpLogoWhite from '../../assets/images/SdpLogoWhite.webp'

const Footer = () => {
  return (
    <section className='h-24 w-full bg-secondary text-white flex items-center justify-between'>
      <div className='flex flex-col sm:flex-row sm:gap-4  ml-4'>
        <img src={SdpLogoWhite} alt="Sdp logo" className='hidden sm:block h-8 mr-4'/>
        <div className='font-bold text-xl'>Kontakt: </div>
        <a href="mailto:info@zoranpaunovic.hr" className='hover:text-primary text-xl'>info@zoranpaunovic.hr</a>
      </div>
      <div className='flex gap-4 mr-4'>
        <SocialIcons/>
      </div>
    </section>
  )
}

export default Footer