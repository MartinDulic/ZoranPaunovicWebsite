import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import HeroImage  from '../../assets/images/Banner.jpg'

const HeroSection = () => {
  
  // Preload the image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = HeroImage;
  }, []); // ← Empty dependency array = runs once on mount

  const [nameRef, nameInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='h-screen w-full relative'>
      <img 
        src={HeroImage}
        alt="Hero Image" 
        className="absolute inset-0 h-full w-full object-cover object-[76%] sm:object-[84%] md:object-[90%] "
        loading="eager" 
        fetchpriority="high" // Chrome 101+
        decoding="async"
      />
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-zinc-900"></div>
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 pr-4">
        <h1 
          ref={nameRef}
          className={`text-6xl font-frutiger font-bold text-white text-shadow-sm transition-all duration-500 ease-out transform delay-200 ${
            nameInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          Zoran Paunović
        </h1>
        <p 
          ref={subtitleRef}
          className={`text-gray-300 font-frutiger text-xl text-shadow-sm transition-all duration-500 ease-out transform delay-700 ${
            subtitleInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          Gradonačelnik Makarske
        </p>
      </div>
    </section>
  )
}

export default HeroSection;