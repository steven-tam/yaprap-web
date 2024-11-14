import React from 'react'
import RapImage from './RapImage'
import YapImage from './YapImage'
import HowText from './HowText'
import { isMobile } from 'react-device-detect';

function HowTextBox() {
    return (
      <div className="flex flex-col items-center p-4 text-center gap-20">
        {
          isMobile ? <HowText /> :
          <div className='flex flex-col md:h-fit h-screen justify-center'>
            <h1 className="text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                how it works
              </span>
            </h1>
            <p className="text-gray-500 p-1 text-2xl">Our system is <span className="font-bold">simple</span>, <span className="font-bold">flexible</span>, and <span className="font-bold">powerful</span></p>
          </div>
        }
        <div className="w-full relative mb-16">
          {/* Centered dotted vertical line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-0 md:border-l-2 h-[65rem] border-dotted border-gray-300"></div>
          <div className='p-0 md:mr-[30rem] md:mb-0 mb-96'>
            <h1 className="text-4xl font-bold mb-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                first you yap
              </span>
            </h1>
            <YapImage />
          </div>

          <div className='p-0 pt-10 md:ml-[30rem]'>
            <h1 className="text-4xl font-bold mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                  then you rap
                </span>
            </h1>
            <RapImage />
          </div>
        </div>
        
      </div>
    )
}

export default HowTextBox
