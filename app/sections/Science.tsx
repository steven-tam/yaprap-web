'use client'
import React from 'react'
import SciTextBox from '@/app/components/science-items/SciTextBox'
import Citations from '@/components/science-items/Citations'
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

function Science() {
  return (
    <div className="flex flex-col items-center w-full min-h-[50rem] bg-mildblack" >
      <div className='pt-64'>
        <motion.div 
          variants={fadeInAnimationVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <SciTextBox />
        </motion.div>
      </div>
    
      <motion.div 
        variants={fadeInAnimationVariant}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <Citations />
      </motion.div>
    </div>
  
  )
}

export default Science