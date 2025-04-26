import React from 'react'
import { useInView } from 'react-intersection-observer';

const ProgramItem = ({project, index}) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const textStyle = " inline text-xl";

  const text = project.text.map((sentence, index)=>{
    if(project.firstBold) {
      if(index % 2 !== 0) {
        return <p className={`${textStyle}`}>{sentence}</p>
      }
      return <p className={`${textStyle} font-bold text-primary`}>{sentence}</p>
    }

    if(index % 2 === 0) {
      return <p className={`${textStyle}`}>{sentence}</p>
    }
    return <p className={`${textStyle} font-bold text-primary`}>{sentence}</p>
  });
  return (
    <div className='p-4 py-8 sm:px-8 md:px-12 lg:px-16'>
      <h3 
        className=
        {`
          text-3xl text-secondary font-bold pb-2 transition-all duration-1000 ease-out transform 
          ${textInView
            ? `opacity-100 translate-y-0 `
            : 'opacity-0 -translate-y-10'
          }
        `}
        ref={titleRef}
      >
        {index}. {project.title}
      </h3>
      <p>{project.firstBold}</p>
      <div 
        className={`text-justify duration-1000 ease-out transform delay-700 
          ${textInView
            ? `opacity-100 translate-y-0 `
            : 'opacity-0 -translate-y-10'
          }
        `}
        ref={textRef}
      >
        {text}
      </div>
    </div>
  )
}

export default ProgramItem