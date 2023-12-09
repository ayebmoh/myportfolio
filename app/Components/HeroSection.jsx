"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
   <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Hello, I'm{" "} </span>
           <br />
            <TypeAnimation
      sequence={[
        'Mohamed',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
          Welcome to my portfolio! I'm delighted to have you here. As you navigate through these digital pages, you'll discover the culmination of my passion for technology and creativity. From innovative coding projects to insights into my academic journey and experiences, this space reflects my dedication to the world of software engineering and web development. Feel free to explore, 
          and if you have any questions or just want to connect, I'm just a click away. Enjoy your visit!
            </p>
            <div>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-600  hover:bg-slate-200 text-white'>
                Hire Me</button>
              <a href='https://drive.google.com/uc?export=download&id=1TwUOWthcqBPC8HtdXP4jMGnLrLxfqD8h'>
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-600 hover:bg-slate-800 text-white border  mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
                </span>
                </button></a>
            </div>
            </motion.div>
            < motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-5 place-self-center mt-4 lg:mt-0 md:m-l-0" >
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative'>
                <Image
                  src="/images/Hero.png"
                  alt="hero image"
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  width={300}
                  height={300}
                  />
              </div> 
            </motion.div>
        </div>
   </section>
  )
}

export default HeroSection
