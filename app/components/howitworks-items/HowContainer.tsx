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
    <div className='flex flex-col md:h-fit min-h-screen justify-center gap-20 p-10 pb-32 items-center'>
      
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
        <img
          src="./yaprap-demo.gif" 
          alt="Funny GIF" 
          width={310} 
          height={150} 
        />
      </motion.div>
  
        <motion.div 
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} // Ensures it only runs once
            className='w-full'
        >
          <Goal />
        </motion.div>
        <motion.div 
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} // Ensures it only runs once
            className='w-full'
        >
          <SimpleGoal />
        </motion.div>
    </div>
  )
}

export default HowText