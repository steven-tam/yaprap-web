'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeInAnimationVariant = {
  initial: {
    y: 20, 
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration: 1.3
    }
  }
}

function HowText() {
  return (
    <motion.div 
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        className='flex flex-col md:h-fit h-screen justify-center'
    >
        <h1 className="text-5xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
            how it works
        </span>
        </h1>
        <p className="text-gray-500 p-1 text-2xl">Our system is <span className="font-bold">simple</span>, <span className="font-bold">flexible</span>, and <span className="font-bold">powerful</span></p>
    </motion.div>
  )
}

export default HowText