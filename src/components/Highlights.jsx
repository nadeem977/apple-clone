import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap"
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
const Highlights = () => {


  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1, y: 0
    })
    gsap.to(".link",{opacity:1,y:0,duration:1,stagger:0.25})
  }, [])

  return (
    <section id="heighlight" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className="screen-max-width">
        <div className='mb-12 w-full  md:flex justify-between'>
          <h1 id="title" className='section-heading'>
            Get the heighlights.
          </h1>
          <div className='flex flex-wrap items-center gap-5'>
            <p className='link'>
              Watch  tha film
            <img src={watchImg} alt="watchimg" className='ml-2' />
            </p>
            <p className='link'>
              Watch  tha events
            <img src={rightImg} alt="right" className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights
