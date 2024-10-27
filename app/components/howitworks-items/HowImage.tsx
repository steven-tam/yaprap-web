'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import YapRapMockup from '@/assets/yaprap-mockup.svg'

function HowImage() {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // ["start end", "end end"]
    });
    // const translateXProgress = useTransform(scrollYProgress, [0, 1], [-50, 0]); // Moves from 50px right to 0
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
      <motion.div 
        ref={ref} 
        style={{ opacity: opacityProgress }} 
        className="flex items-center border-2 w-full h-96" 
        >
        <Image src={YapRapMockup} height={300} alt='Home Page' />
        <h1>first you yap</h1>
        <h1>then, you rap</h1>
      </motion.div>
    )
}

export default HowImage