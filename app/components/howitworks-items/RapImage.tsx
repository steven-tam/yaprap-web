'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import RapMockup from '@/assets/yaprap-mockup.svg'

function RapImage() {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // ["start end", "end end"]
    });
    const translateXProgress = useTransform(scrollYProgress, [0, 0.6], [70, 0]); // Moves from 70px left to 0
    const opacityProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    return (
      <motion.div 
        ref={ref} 
        style={{x:translateXProgress, opacity: opacityProgress }} 
        className="flex items-center justify-center w-full h-96 gap-10 " 
        >
        <div className='flex flex-col items-center text-center gap-5'>
          <Image src={RapMockup} height={400} alt='Home Page' />
        </div>
    
      </motion.div>
    )
}

export default RapImage