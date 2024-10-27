'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

function HowTextBox() {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // ["start end", "end end"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Moves from 50px right to 0
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
      <motion.div 
        ref={ref} 
        style={{ scale: scaleProgress, opacity: opacityProgress }} 
        className="flex items-center border-2 p-4 text-center" 
        >
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
            how it works
          </span>
        </h1>
      </motion.div>
    )
}

export default HowTextBox
