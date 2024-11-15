'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Goal from './Goal'
import SimpleGoal from './SimpleGoal'
import HowTitle from './HowTitle'

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

function HowText() {
  return (
    <div className='flex flex-col md:h-fit h-screen justify-center gap-28 p-10 pb-32'>
      <motion.div 
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // Ensures it only runs once
      >
        <HowTitle />

      </motion.div>
      <motion.div 
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // Ensures it only runs once
      >
        <Goal />
      </motion.div>
      <motion.div 
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // Ensures it only runs once
      >
        <SimpleGoal />
      </motion.div>
    </div>
  )
}

export default HowText