'use client'
import React from 'react'
import DisplayText from '../components/display-items/DisplayText'
import AppScreeshots from '../components/display-items/AppScreeshots'
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

function Display() {
    return (
      <div className='flex flex-col items-center text-center w-full'>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          className="w-3/4" 
          viewport={{ once: true }} // Ensures it only runs once
        >
          <DisplayText />
        </motion.div>
        <AppScreeshots />
      </div>
      )
  }
export default Display