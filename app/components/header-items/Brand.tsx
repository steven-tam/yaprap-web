'use client'
import React from 'react'
import Image from 'next/image'
import YapRapLogo from '@/assets/yaprapkeet-simple3.png'

function Brand() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling
        });
        };


  return (
    <button onClick={handleScrollToTop} className='flex flex-row items-center gap-2 m-1'>
            <Image 
                src={YapRapLogo}
                width={50}
                alt="YapRapLogo"
            />
        <h1 className='text-4xl font-bold'>YapRap</h1>
    </button>
  )
}

export default Brand