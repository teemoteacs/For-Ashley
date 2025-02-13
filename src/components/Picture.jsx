import React from 'react'
import { picture } from '../assets'
import aaa from '../assets/aaa.jpg'
import bbb from '../assets/bbb.jpg'
import ccc from '../assets/ccc.jpg'
import ddd from '../assets/ddd.jpg'
import eee from '../assets/eee.jpg'
import fff from '../assets/fff.jpg'
import ggg from '../assets/ggg.jpg'
import hhh from '../assets/hhh.jpg'
import iii from '../assets/iii.jpg'
import jjj from '../assets/jjj.jpg'
import kkk from '../assets/kkk.jpg'
import lll from '../assets/lll.jpg'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
     { Image: aaa, title: 'March 27, 2024', description: "Para"},   
        { Image: bbb, title: 'April 27, 2024', description: "May"},   
        { Image: ccc, title: 'May 27, 2024', description: "Topic"},   
        { Image: ddd, title: 'June 27, 2024', description: "Tayo"},   
        { Image: eee, title: 'July 27, 2024', description: "Bukas"},   
        { Image: fff, title: 'August 27, 2024', description: "Diko"},   
        { Image: ggg, title: 'September 27, 2024', description: "Muna"},   
        { Image: hhh, title: 'October 27, 2024', description: "Nilagyan"},   
        { Image: iii, title: 'November 27, 2024', description: "I"},   
        { Image: jjj, title: 'December 27, 2024', description: "Love"},   
        { Image: kkk, title: 'January 27, 2025', description: "You"},   
        { Image: lll, title: '2 Year Anniversary 🎉', description: "..."}   

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Mga Picture ng Dalawang Pango
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

export default Picture