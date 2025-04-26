import React from 'react'
import Title from './Title'
import useMediaQuery from '../hooks/useMediaQuery'
const SectionWithImage = ({
  className = "", 
  title = null, 
  text, 
  image, 
  reverse = false, 
  maxHeight = false, 
  imagePositionVertical = 0,
  imagePositionHorizontal = 0,
  cropImageOnSmallDevices = false,
  textCenter = false
}) => {

  const textSections = text.map((part, index) => {
    return <p key={index} className='pb-4 text-justify'>{part}</p>
  });

  const vertical = imagePositionVertical !== 0 ? `${imagePositionVertical}%` : 'center';
  const horizontal = imagePositionHorizontal !== 0 ? `${imagePositionHorizontal}%` : 'center';

  const isLargeScreen = useMediaQuery('(min-width: 640px)');
  const imagePositionStyle = isLargeScreen ? {
    objectPosition: `${horizontal} ${vertical}`
  } : {};


  return (
    <div className={`lg:flex lg:items-stretch bg-gray-100 ${reverse ? " flex-row-reverse " : " flex-row"} ${className}`}>  {/* ← `items-stretch` forces children to full height */}
      {/* Image container - forces full height in flex mode */}
      <div className=
        {`
          lg:flex-1 w-full lg:h-auto lg:mb-0 overflow-hidden
         ${maxHeight ? "  xl:max-h-[80vh]" :" "} 
        `} 
      >

        <img 
          src={image} 
          alt={title}
          className=
          {`
            w-full h-full object-cover 
            ${cropImageOnSmallDevices ? " sm:max-h-[70vh] lg:max-h-none object-[50%_30%] " : " "}  
          `}
          style={imagePositionStyle}
        />
      </div>
      
      {/* Text container (also stretches to match height) */}
      <div className={`flex-1 ${textCenter ? " flex items-center " : ""}`}>
        <div className='lg:p-16 '>
          {title ? <Title text={title} className='mt-8 lg:mt-0'/> : <></>}
          <div className='text-lg 2xl:text-xl text-textPrimary px-4 pt-4'>
            {textSections}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SectionWithImage