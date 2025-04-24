import React from 'react'
import SectionWithImage from '../../componenets/SectionWithImage'
import ZoranSam from '../../assets/images/Zoran_sam_small.jpg'


const Biography = () => {
  return (
    <section id='biography'>
      <SectionWithImage
        className=' '
        title={"BIOGRAFIJA"}
        text={["Rođen sam 1980. godine u Makarskoj. Diplomirao sam na Ekonomskom fakultetu u Zagrebu, a doktorat iz poslovne ekonomije, sa specijalizacijom iz turizma, stekao sam na Sveučilištu u Splitu. Prije nego što sam postao gradonačelnik, vodio sam brojne projekte u privatnom i javnom sektoru – najviše volim istaknuti Dalmacija Wine Expo, koji je makarsku eno-gastro scenu učinio prepoznatljivom i živom, te otvaranje prvog hostela u Makarskoj 2010. godine."
          , "U mladosti sam se bavio sportom, svirao trubu i plesao folklor. Kroz rad u udrugama naučio sam koliko civilno društvo može učiniti za zajednicu – i to znanje danas koristim u vođenju Grada. Od 2021. obnašam dužnost gradonačelnika Makarske. Na tu sam se odgovornost odlučio jer više nisam mogao gledati kako se naš grad guši u korupciji i nemaru. Okupio sam tim sposobnih i poštenih ljudi, zajedno smo osmislili konkretan i ostvariv program i krenuli u promjene – s vizijom transparentne, održive i digitalne i zelene Makarske."
          ,"Najveća snaga u životu mi je obitelj – supruga Nataša i naše troje djece. Zbog njih i zbog sve djece ovoga grada želim Makarsku koja će biti pravedna, otvorena i dostojna života."
        ]}
        image={ZoranSam}
        maxHeight = {true}
        cropImageOnSmallDevices={true}
        imagePositionVertical={25}
        />
    </section>
  )
}

export default Biography