'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

function SciTextBox() {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // ["start end", "end end"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
      <motion.div 
        ref={ref} 
        style={{ scale: scaleProgress, opacity: opacityProgress}} 
        className="flex items-center justify-center border-2 w-full h-96" 
        >
          <p className='h-96'>backed by science</p>
      </motion.div>
    )
}

export default SciTextBox
