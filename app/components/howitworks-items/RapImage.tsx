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
      duration: 1.3,
    }
  }
}

function RapImage() {

    return (
      <motion.div 
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        className="flex items-center justify-center w-full h-96" 
        >
        <div className='flex flex-col items-center text-center'>
          <Image src={RapMockup} style={{ width: '200px', height: 'auto' }} alt='Home Page' />
        </div>
    
      </motion.div>
    )
}

export default RapImage