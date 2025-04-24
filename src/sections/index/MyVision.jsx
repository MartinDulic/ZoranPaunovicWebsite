import React from 'react'
import SectionWithImage from '../../componenets/SectionWithImage'
import Grupna from '../../assets/images/Grupna.jpg'
import Tim from '../../assets/images/Tim_medium.jpg'

const MyVision = () => {
  return (
    <section id='vision'>
      <SectionWithImage 
        title={"MOJA VIZIJA"} 
        text={["Ja sam Zoran Paunović, suprug, otac, sin, brat, prijatelj, ponosan Makaranin i gradonačelnik Makarske. Protekle četiri godine svoje znanje i iskustvo poduzetnika uložio sam u rad za svoj grad, odakle dolazim i kome se vraćam. Oni koji me poznaju kažu da sam radoholičar, što smatram pozitivnim kada mijenjaš svoj grad nabolje. Razmišljam dugoročno, održivo i usmjeren sam na rezultate. U vremenu u kojem živimo, to ponekad može djelovati usporeno, ali smatram, da je prije svake odluke, potrebno promisliti, čuti i uvažiti različita mišljenja i stavove, te tek onda odvagnuti najbolje rješenje. Pronaći pravu ravnotežu između slušanja i vođenja, jer na kraju dana morate donositi odluke na dobrobit sviju. Otvoren sam za nove ideje, kao i za konstruktivnu kritiku, jer vjerujem da svijet može biti bolje mjesto ako svatko krene od sebe, svoje kuće, svoje ulice, svoga grada. Samo zajedno i zajedničkim radom možemo ići naprijed."
          ,"Kandidiram se za drugi mandat gradonačelnika Makarske jer protekle četiri godine svi zajedno ostvarujemo viziju bolje Makarske, Makarske za našu djecu. Znam da smo na pravom putu i potrebno je završiti ono što smo svi zajedno započeli vašim povjerenjem meni i promjenama prije četiri godine. Da napravimo naš grad još boljim mjestom za život za sve. U protekle četiri godine napravili smo i više od obećanog. Značajno smo izmijenili grad u kojem se danas bolje živi i otvorili put za nove projekte. Mnoge smo već započeli, a sada je bitno da se nastave. Kako bi pokrenuli još veći i brži razvoj Makarske jer dobro znam da to možemo i zaslužujemo. Pred nama su danas i novi izazovi, jer se moramo jače nego ikada boriti za očuvanje našeg grada. Moramo spriječiti da privatni interesi pojedinaca, prevladaju nad interesima zajednice i pretvore grad koji volimo i u kojem živimo u betonsko ruglo. Zato je važno da Makarsku i naredne četiri godine vodi netko koga poznajete, čije stavove znate i znate da će, kao i do sad, raditi samo i isključivo u interesu Grada i svih Makarana."
        ]}
        image={Grupna}
        imagePositionHorizontal={40}
      />
      <SectionWithImage
        image={Tim}
        text={[
          "Glas za mene je glas za nastavak promjena nabolje i glas za daljnji održivi razvoj Makarske. Uz sebe imam kvalitetan tim, s kojim dijelim viziju naše zajedničke i bolje budućnosti, te ima znanja, volje, snage i upornosti za ostvariti je. Ne nasjedajte na priče, pogledajte učinjeno i sjetite se gdje smo bili prije četiri godine – djela, ono što smo napravili, govori više od riječi. Ideja je još mnogo, a protekle četiri godine smo postavili dobar temelj za daljnji rad i još jači razvoj grada, na korist svih građana. 18. svibnja svojim glasom za mene, glasate za bolju budućnost sebe i svoje djece, bolju budućnost naše Makarske."
        ]}
        reverse={true}
        maxHeight = {true}
        imagePositionVertical={36}
        cropImageOnSmallDevices={true}
      />
    </section>
  )
}

export default MyVision