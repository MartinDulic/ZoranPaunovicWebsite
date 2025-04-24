import React from 'react'
import { useInView } from 'react-intersection-observer';

const MainText = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  

  return (
    <section className='' >
      <p
        ref={textRef} 
        className={`text-secondary font-bold text-3xl lg:text-5xl px-8 py-16 md:px-16 lg:px-40 xl:px-60 text-center transition-all duration-1000 ease-out transform 
          ${textInView
          ? `opacity-100 translate-y-0 `
          : 'opacity-0 translate-y-10'
          }
        `}>      
        NASTAVLJAMO ZAJEDNO ZA MAKARSKU KOJOM SE PONOSIMO!
      </p>
    </section>
  )
}

export default MainText