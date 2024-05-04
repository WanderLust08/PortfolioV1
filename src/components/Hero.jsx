import React from 'react'
import profilepic from '../assets/prof2.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
function Hero() {
  return (
    <div>
      <div className="my-12 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center" id="home">

        <div className="flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">Hi, I am Samarth Shetty</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              <TypeAnimation 
                sequence = {[
                  "Web Developer",1000,
                  "Data Analyst",1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-4xl sm:text-3xl text-xl font-bold text-gray-500">With a passion towards new tech</p>
            </div>
            <div className="md:text-5xl flex justify-start gap-16 my-7 text-purple-500">
              <AiFillLinkedin/>
              <AiFillGithub/>
              <AiFillInstagram/>
            </div>
            <div className="relative inline-flex group my-3">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-rgadient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF67SE]
                rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="/" title='Download CV' role='button'
                className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-6 py-4 text-lg
                        font-bold text-white transition-all duration-200 bg-primary-color rounded-xl
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                >Download CV</a>
              
            </div>
   
        </div>


        <div className="my-auto">
          <img className='w-[300px] sm:w-[400px] mx-auto h-auto' src={profilepic} alt='profile pic' />
        </div>
      </div>
    </div>
  )
}

export default Hero