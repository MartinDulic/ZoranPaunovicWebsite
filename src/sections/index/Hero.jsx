import React from 'react';
import { useInView } from 'react-intersection-observer';
import HeroImageMobile from '../../assets/images/Banner.jpg';
import HeroImageDesktop from '../../assets/images/HeroImageDesktop.jpg';
import SlusamoLjude from '../../assets/images/SlusamoLjude.webp';
import SdpLogoWhite from "../../assets/images/SdpLogoWhite.webp"


const HeroSection = () => {

  // Create refs and inView states for each animated element
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [nameRef, nameInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='h-screen w-full relative'>
      <img 
        src={HeroImageMobile}
        alt="Hero Image" 
        className="absolute inset-0 h-full w-full object-cover object-[62%]  xl:hidden"
        loading="eager" 
        fetchpriority="high"
        decoding="async"
      />
      <img 
        src={HeroImageDesktop} 
        alt="Hero Image" 
        className='absolute inset-0 h-full w-full object-fill hidden xl:block '  
        loading="eager" 
        fetchpriority="high"
        decoding="async"
      />

      <div className='absolute inset-0 bg-black bg-opacity-20 xl:hidden'></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-zinc-900 xl:hidden"></div>

      <div className='font-frutigerBold absolute top-1/3 ml-8 xl:hidden'>
        {/* Title */}
        <div 
          ref={titleRef}
          className={`text-3xl sm:text-5xl font-bold text-white w-20 pb-8 transition-all duration-1000 ease-out ${
            titleInView
              ? 'opacity-100 '
              : 'opacity-0 '
          }`}
        >
          NASTAVLJAMO ZAJEDNO!
        </div>
        
        {/* Name*/}
        <div
          ref={nameRef}
          className={`font-bold translate-y-1 transition-all duration-1000 ease-out ${
            nameInView
              ? 'opacity-100 '
              : 'opacity-0 '
          }`} 
        >
          <div className="bg-white border border-white text-primary p-2 pb-0 text-xl sm:text-2xl w-fit ">
            gradonačelnik
          </div>
          
          <div className="bg-white text-primary border-white text-3xl sm:text-5xl p-2 w-fit">
            ZORAN PAUNOVIĆ
          </div>
        </div>
        
        {/* Subtitle 2 */}
        <div 
          ref={subtitleRef}
          className={`text-white text-xl sm:text-2xl mt-2 font-bold italic transition-all duration-1000 ease-out ${
            subtitleInView
              ? 'opacity-100 '
              : 'opacity-0 '
          }`}
        >
          Za Makarsku kojom se ponosimo!
        </div>
        
        {/* Image - SlusamoLjude */}
        <div 
          ref={imageRef}
          className={`flex items-end transition-all duration-1000 ease-out  ${
            imageInView
              ? 'opacity-100'
              : 'opacity-0 '
          }`}
        >
          <img src={SlusamoLjude} alt="Slusamo Ljude" className='h-20 mt-8' />
          <img src={SdpLogoWhite} alt="Sdp Logo" className='h-16 mb-1 pl-4 mr-8' />
          
        </div>
      </div>
    </section>
  )
}

export default HeroSection;