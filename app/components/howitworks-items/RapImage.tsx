'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import RapMockup from '@/assets/rapMockup.svg'

const fadeInAnimationVariant = {
  initial: {
    x: 50, 
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 0.5
    }
  }
}

function RapImage() {

    return (
      <motion.div 
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        className="flex items-center justify-center w-full h-96 gap-10 " 
        >
        <div className='flex flex-col items-center text-center gap-5'>
          <Image src={RapMockup} height={400} alt='Home Page' />
        </div>
    
      </motion.div>
    )
}

export default RapImage