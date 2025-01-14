'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PromptSC from '@/assets/prompts-sc.svg'

const fadeInAnimationVariant = {
    initial: {
      y: 40, 
    },
    animate: {
      y: 0,
      transition:{
        duration: 1.3
      }
    }
  }

function PromptsImage() {
  return (
    <motion.div
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
      className="flex items-center justify-center"
      viewport={{ once: true }} // Ensures it only runs once
    >
      <div className="w-11/12 md:w-1/2">
        <Image
          src={PromptSC}
          style={{ width: 480, height: "auto" }}
          alt="Home Page"
          layout='responsive'
        />
      </div>
    </motion.div>
  );
}

export default PromptsImage;
