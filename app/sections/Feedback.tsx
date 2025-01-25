'use client'
import FeedbackTextBox from '@/components/feedback-items/FeedbackTextBox'
import FeedbackSC from '@/components/feedback-items/FeedbackSC'
import React from 'react'
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
        duration: 0.6
      }
    }
  }

function Feedback() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 py-20" >
          <motion.div
            variants={fadeInAnimationVariant}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
            className='w-10/12'
          >
            <FeedbackTextBox />
          </motion.div>
    
          <motion.div
            variants={fadeInAnimationVariant}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
          >
            <FeedbackSC />
          </motion.div>
        </div>
      )
}

export default Feedback