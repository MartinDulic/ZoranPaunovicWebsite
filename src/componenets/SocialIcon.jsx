import React from 'react'

const SocialIcon = ({icon, link}) => {
  return (
    <a href={link} className='hover:text-primary'>
      {icon}
    </a>
  )
}

export default SocialIcon