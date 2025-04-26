import React from 'react'
import SocialIcon from './SocialIcon'
import { FaTiktok, FaFacebookF, FaInstagram  } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <>
      <SocialIcon 
        icon={<FaFacebookF className='text-2xl'/>} 
        link={"https://www.facebook.com/share/12HueEdUB5c/"}
      />
      <SocialIcon 
        icon={<FaInstagram className='text-2xl'/>} 
        link={"https://www.instagram.com/zoran_paunovic_makarska?igsh=MXY4NWRrdnBhMDJ0Mw=="}
      />
      <SocialIcon 
        icon={<FaTiktok className='text-2xl'/>} 
        link={"https://www.tiktok.com/@zoranpaunovic182?_t=ZN-8vQATQsjpgd&_r=1"}
      />
    </>
  )
}

export default SocialIcons