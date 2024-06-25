"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"

    

const HeroSection = () => {
  return (
     <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
           className='col-span-7 place-self-center text-center sm:text-left'
           >
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 '>Hello, Im {" "}</span>
       <br/>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Therendy',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
        Passionate and innovative web developer and web designer with a strong foundation in HTML, CSS, and JavaScript, dedicated to creating visually stunning and user-friendly websites that exceed client expectations.
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-blue-500  hover:slate-200 text-white'>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-500  hover:bg-slate-800 text-white  mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume Resume</span>
          </button>
        </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0' >
  
          <Image
             className='rounded-full'
             src="/images/hero-image.jpg"
             alt="hero-image"
             width={400}
             height={400}
             />
      
        </motion.div>
      </div>
     </section>
  )
}

export default HeroSection