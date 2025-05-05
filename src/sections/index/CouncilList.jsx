import React from 'react'
import Title from '../../componenets/Title'
import { useInView } from 'react-intersection-observer';
import { council } from '../../data/council';
import CouncilMember from '../../componenets/CouncilMember';


const CouncilList = () => {
    
  const councilMemberItems = council.map((member, index) => {
    return <CouncilMember member={member} index={index}/>
  });  

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id='councilList' className='bg-gray-100 pt-4'>
      <div>
        <Title
          text={"LISTA KANDIDATA ZA GRADSKO VIJEĆE"}
          className='w-full lg:flex lg:items-center lg:justify-center mb-6 sm:mb-4 lg:mb-6 mt-4 sm:mt-8 md:mt-12 lg:mt-16 sm:px-4 md:px-8'
          centerText={true}
        />
        <div
          ref={textRef}
          className={`text-xl lg:text-2xl italic text-textSecondary pb-12 px-4 sm:px-8 md:px-12 lg:px-16  text-justify transition-all duration-1000 ease-out transform
            ${textInView
              ? `opacity-100 translate-y-0 `
              : 'opacity-0 translate-y-10'
            }
          `}
        >
          Nećemo previše dužiti s predstavljanjem liste, to su našim građanima većinom dobro poznata imena. Ponosan sam
          što imamo kontinuitet i što zajedno nastavljamo raditi s jednakim žarom kao kad smo počeli ovaj zaokret prije 4
          godine. Novu energiju donijet će neka nova imena. Drago mi je da nam se pridružuju i mlađi i stariji, koji su
          možda zazirali ranije od politike, dok nisu uvidjeli da se s pravim ljudima može časno baviti politikom za
          boljitak svoje zajednice.
        </div>
      </div>
      {councilMemberItems}
    </section>
  )
}

export default CouncilList