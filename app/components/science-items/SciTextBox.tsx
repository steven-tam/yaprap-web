'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

function SciTextBox() {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // ["start end", "end end"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, .6], [0.2, 1]); // Moves from 50px right to 0
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
      <motion.div 
        ref={ref} 
        style={{ scale: scaleProgress, opacity: opacityProgress }} 
        className="flex flex-col items-center p-10 text-center" 
        >
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
            Backed by Science
          </span>
        </h1>
        <p className="text-gray-500 p-1">We&apos;ve done extensive research on <span className="font-bold">communication</span> and <span className="font-bold">creativity</span> so you don&apos;t have to</p>
      </motion.div>
    )
}

export default SciTextBox
