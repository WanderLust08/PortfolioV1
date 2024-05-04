import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'



const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
        <div className="mx-auto px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl lg:text-3xl text-white">
                        My <span>Projects</span>
                    </h2>
                   <p className='text-gray-500'>
                    These are my latest projects.
                    </p>
                </div>
            </div>
            <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                    <img src='https://miro.medium.com/v2/resize:fit:1400/1*dEo8x5swSiuFVp4VYsCGKg.jpeg' alt="" className="h-full w-full object cover object-center transition 
                                                        duration-200 group-hover:scale-110" />
                </a>

                <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                    <img src="https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg" alt="" className="h-full w-full object cover object-center transition 
                                                        duration-200 group-hover:scale-110" />
                </a>

                <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png" alt="" className="h-full w-full object cover object-center transition 
                                                        duration-200 group-hover:scale-110" />
                </a>

                <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                    <img src="https://img.freepik.com/free-vector/web-development-landing-page_52683-10432.jpg" alt="" className="h-full w-full object cover object-center transition 
                                                        duration-200 group-hover:scale-110" />
                </a>


            </div>
        </div>

    </div>
  )
}

export default Work
