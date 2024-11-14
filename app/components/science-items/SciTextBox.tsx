'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeInAnimationVariant = {
  initial: {
    scale: 0.9, 
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition:{
      duration: 0.4
    }
  }
}

function SciTextBox() {

    return (
      <motion.div 
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center p-10 text-center" 
        >
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
            backed by science
          </span>
        </h1>
        <p className="text-gray-500 p-1 text-2xl">We&apos;ve done extensive research on <span className="font-bold">communication</span> and <span className="font-bold">creativity</span> so you don&apos;t have to</p>
      </motion.div>
    )
}

export default SciTextBox
