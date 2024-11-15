'use client'
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

function TranscriptionTextBox() {
  return (
    <motion.div 
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }} // Ensures it only runs once
      className='text-center w-11/12'
    >
        <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                free transcription
            </span>
        </h1>
        <p className="text-gray-500 p-1 text-2xl">Get your recordings transcribed with up to <span className="font-bold">98.5% accuracy</span> using our AI-powered transcriber, built on <span className="font-bold">OpenAI Whisper</span> for top tier performance</p>
    </motion.div>
  )
}

export default TranscriptionTextBox
