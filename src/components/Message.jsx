import React from 'react'
import {picture} from '../assets'
import first from '../assets/1st.png'
import second from '../assets/feb.jpg'
import third from '../assets/mar.jpg'
import fourth from '../assets/apr.jpg'
import fifth from '../assets/may.jpg'
import sixth from '../assets/june.jpg'
import seventh from '../assets/july.jpg'
import eigth from '../assets/aug.jpg'
import nineth from '../assets/sep.jpg'
import tenth from '../assets/oct.jpg'
import eleventh from '../assets/nov.jpg'
import twelveth from '../assets/dec.jpg'
import thirteenth from '../assets/jan.jpg'
import fourteenth from '../assets/1year.jpg'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  const pictures = [
    { Image: first, title: 'November 25, 2022', description: "THIS WAS ONE OF OUR FIRST PICTURE TOGETHER MAGKALABAN US FOUNDATION DAY AND SUMISILIP SILIP US SA ROOM NG ISA'T ISA KASO PO NAGKASAKIT KA PAG-UWI :("},   
    { Image: second, title: 'February 27, 2023', description: "1ST PICTURE NATIN AFTER NATIN MAGING ILLEGAL COUPLE, WE LOOK SO ANGAS, SHORT HAIR ERA MO PO AHHAHAHAAHAHAH"},   
    { Image: third, title: 'March 27, 2023', description: "THE TEAM BUILDING YOU ALREADY KNOW PO HAHAHAHAHAHA, KIKIDNAPIN MO SANA KO KASO PO BUSY NAG BABASKETBALL DI RIN TULOY TAYO NAKAPAGSWIMMING"},   
    { Image: fourth, title: 'April 27, 2023', description: "COUPLE GOALS PAREHAS GRUMADUATE NG MAY HONORS, NASHOUTOUT PA PO KITA SA SPEECH KO, TO THE SPECIAL SOMEONE HAHAHAHAHAHA"},   
    { Image: fifth, title: 'May 27, 2023', description: "NO COMMENT HABS IKAW NA PO BAHALA DITO AHAHAHAHAHHAHAH"},   
    { Image: sixth, title: 'June 27, 2023', description: "Habshie I'm really thankful sayo cause this was yung sobrang sad ko due to eczema and you gave me meowie hehe I really appreciated it huhu kaso wala pa po siya ligo since then"},   
    { Image: seventh, title: 'July 27, 2023', description: "Habshie not much ganap this month since this was yung sobrang lala ng eczema ko BUT DITO PO US NAG DOWNLOAD NUNG WIDGETABBLE TAS NAG UUPDATAN PO TAYO DON ETO PO YUNG ISA SA DRAWINGS MO <3"},   
    { Image: eigth, title: 'August 27, 2023', description: "OUR FIRST LIFE4CUTS PARADE SA NU PAALAM NATIN PERO NAGDATE LANG TAYONG DALAWA AHAHHAHAHAHAHA"},   
    { Image: nineth, title: 'September 27, 2023', description: "OMG NAG BLK TAYO NETO TAPOS DIPO NATIN INUBOS AND THEN KUMAIN TAYO SA DATI NATING SPOT SA FOODCOURT HUHU SO SAD SINARA NA SIYA T_T"},   
    { Image: tenth, title: 'October 27, 2023', description: "MY BIRTHDAY AND YOU ARE THE BEST GIFT NA NATANGGAP KO NAHIHIYA KA PA NETO TAPOS NALIGAW YUNG GRAB NATIN CAUSE SA LUBAK DUMAAN KASAMA SINA MAMA AHHAHAAHAHAHH"},   
    { Image: eleventh, title: 'November 27, 2023', description: "THIS MONTH IS UNG 1ST OLD MOON NATIN TAPOS PO MAY GINAMIT TAYONG BIRTHDAY PARA MAKAPAG DATE SA MONTHSARY NATIN AHAHAHAHAHAH MAY NANGYARI PA HERE PERO DI KO NA SASABIHIN"},   
    { Image: twelveth, title: 'December 27, 2023', description: "CHRISTMAS PARTY AND GANDA MO NETO HABS, SUMAKAY US GRAB NETO AND HAPPY US CAUSE NAG SHORTCUT PA NU THIS WAS ALSO THE TIME I GAVE YOU FUZZY WIRES ALO MY 1ST GYM TUTOR MO PA PO AKO NETO SA PRECAL"},   
    { Image: thirteenth, title: 'January 27, 2024', description: "One comment lang po and that is HEALING STAGE AHAHAHAHAHAHAHAH"},   
    { Image: fourteenth, title: '1 Year Anniversary 🎉', description: "INTRAMUROS AND MOA HUHU HABS DI KASYA DITO MGA SASABIHIN KO PERO LAHAT NG PROBLEMA NARESOLVE SOBRANG SAYA KO NETO AND STILL MY FAVORITE DATE HUHU I LOVE YOUUUUUU OUR 1ST ANNIVERSARYYYYYY"}   
]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our 1st Year Together
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>
  )
}

export default Message