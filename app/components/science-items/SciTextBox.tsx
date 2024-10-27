'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

function SciTextBox() {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // ["start end", "end end"]
    });
    const translateXProgress = useTransform(scrollYProgress, [0, 1], [50, 0]); // Moves from 50px right to 0
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
      <motion.div 
        ref={ref} 
        style={{ x: translateXProgress, opacity: opacityProgress }} 
        className="flex items-center border-2 w-full h-96" 
        >
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
            backed by modern research
          </span>
        </h1>
      </motion.div>
    )
}

export default SciTextBox
