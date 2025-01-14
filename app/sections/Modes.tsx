'use client'
import React from 'react'
import ModeTextBox from '@/components/mode-items/ModeTextBox'
import Carousel from '@/components/mode-items/Carousel'
import { motion } from 'framer-motion'

const fadeInAnimationVariant = {
  initial: {
    y: 60, 
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration: 0.6,
    }
  }
}

function Modes() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-20 gap-10 min-h-screen bg-mildblack" >
      <motion.div
        variants={fadeInAnimationVariant}
        initial='initial'
        whileInView='animate'
        viewport={{once: true}}
        className='w-11/12'
      >
        <ModeTextBox />
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariant}
        initial='initial'
        whileInView='animate'
        viewport={{once: true}}
      >
        <Carousel />
      </motion.div>
    </div>
  )
}

export default Modes
