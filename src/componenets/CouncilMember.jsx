import React, { useEffect, useState }  from 'react'
import Title from './Title';
import { useInView } from 'react-intersection-observer';


const CouncilMember = ({member, index}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const [titleShown, setTitleShown] = useState(false);
  
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setTitleShown(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [inView]);



  const text = member.text.map((item, textIndex) => {
    return <p key={textIndex} className='my-4 text-justify'>{item}</p>
  });

  return (
    <div className={`pt-4 lg:pt-0 lg:flex lg:items-stretch bg-gray-100 ${index % 2 == 0 ? " flex-row-reverse " : " flex-row"}`}>  {/* ← `items-stretch` forces children to full height */}
    {/* Image container - forces full height in flex mode */}
    <div className = "lg:flex-1 w-full lg:h-auto lg:mb-0 overflow-hidden">

      <img 
        src={member.image} 
        className="w-full h-full object-cover" 
      />
    </div>
    
    {/* Text container (also stretches to match height) */}
    <div className="flex-1 flex items-center">
      <div className='lg:p-16 '>
        <Title text={(index + 1) + ". " + member.name} className='mt-8 lg:mt-0'/>
        {/* <h3 className='text-4xl text-secondary font-bold mx-4'>{(index + 1) + ". " + member.name}</h3> */}
        <div 
          ref={ref} 
          className={`
            text-primary font-bold text-2xl mx-4 mt-4 transition-all duration-500 ease-out 
            ${titleShown ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
          `}

        >
          {member.title}
        </div>
        <div className='text-xl text-textPrimary px-4 pt-4'>
          {text}
        </div>
      </div>
    </div>

  </div>



  )
}

export default CouncilMember