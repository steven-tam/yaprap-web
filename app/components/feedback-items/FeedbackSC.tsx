'use client'
import React from 'react'
import feedback from '@/assets/feedback-sc.png'
import Image from 'next/image'
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

function FeedbackSC() {
    return (
        <motion.div 
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          className='text-lg text-blue'
          viewport={{ once: true }} // Ensures it only runs once
        >
          <Image src={feedback} style={{ width: 300, height: 'auto' }} alt='Home Page' /> 
        </motion.div>
      )
}

export default FeedbackSC