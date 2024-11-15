'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeInAnimationVariant = {
  initial: {
    y: 40, 
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration: 0.4
    }
  }
}

function SciTextBox() {

    return (
      <div className='pt-64'>
        <motion.div 
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center p-10 text-center" 
          viewport={{ once: true }} // Ensures it only runs once
          >
          <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
              backed by science
            </span>
          </h1>
          <p className="text-gray-400 p-1 text-2xl">We&apos;ve done extensive research on <span className="font-bold">communication</span> and <span className="font-bold">creativity</span> so you don&apos;t have to</p>
        </motion.div>
      </div>
    )
}

export default SciTextBox
