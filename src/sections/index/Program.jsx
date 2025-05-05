import React from 'react'
import Title from '../../componenets/Title'
import ZelenaTim from '../../assets/images/Zelena_tim.jpg'
import ProgramItem from '../../componenets/ProgramItem'
import { projects } from '../../data/programPoints'
import { useInView } from 'react-intersection-observer';



const Program = () => {
  
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  

  const programItems = projects.map((project, index) => {
    return(
      <ProgramItem project={project} index={index+1}/>
    )
  });

  return (
    <section id='program' className='flex flex-col'>
      <div className='lg:flex items-center justify-center lg:mx-20 lg:mt-20 xl:mx-28 xl:mt-28 '>
        <div className='lg:w-[80vw] xl:w-[60vw] relative'>
          <img
            src={ZelenaTim}
            alt="Team"
            className='w-full h-full object-cover object-top lg:shadow-xl'
          />
        </div>
      </div>
      <div className=''>
        <Title
          className='w-full lg:flex lg:items-center lg:justify-center mb-2 sm:mb-4 lg:mb-6 mt-4 sm:mt-8 md:mt-12 lg:mt-16 sm:px-4 md:px-8'
          text={"PROGRAM"}
          centerText={true}
        />

        <div
          ref={textRef} 
          className={`text-xl lg:text-2xl italic text-textSecondary px-4 sm:px-8 md:px-12 lg:px-16 xl:px-56 text-justify transition-all duration-1000 ease-out transform 
            ${textInView
              ? `opacity-100 translate-y-0 `
              : 'opacity-0 translate-y-10'
            }
          `}
        >	
          U protekle četiri godine postavili smo čvrste temelje za daljnji razvoj Makarske. U novom mandatu nastavljamo
           s uspješnim projektima, te krećemo u realizaciju novih kojima ćemo dodatno poboljšati svakodnevni život u 
           gradu i učiniti Makarsku gradom za sve generacije. Nastavljamo zajedno za Makarsku kojom se ponosimo!
        </div>
      </div>

      <div className='mt-8 xl:px-40 mb-12'>
        {programItems}
      </div>
    </section>
  )
}

export default Program