'use client'
import TranscriptionTextBox from '@/components/transcription-items/TranscriptionTextBox'
import TranscriptionTypewriter from '@/components/transcription-items/TranscripionTypewriter'
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

function Transcription() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[50rem] gap-10" >
      <motion.div
        variants={fadeInAnimationVariant}
        initial='initial'
        whileInView='animate'
        viewport={{once: true}}
        className='w-10/12'
      >
        <TranscriptionTextBox />
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariant}
        initial='initial'
        whileInView='animate'
        viewport={{once: true}}
      >
        <TranscriptionTypewriter />
      </motion.div>
    </div>
  )
}

export default Transcription
