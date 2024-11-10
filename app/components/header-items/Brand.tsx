'use client'
import React from 'react'
import Image from 'next/image'
import YapRapLogo from '@/assets/yaprap-logo-bone.svg'
import Name from './Name'

function Brand() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling
        });
    };

  return (
    <button onClick={handleScrollToTop} className='flex flex-row items-center gap-3 p-1'>
            <Image 
                src={YapRapLogo}
                style={{ width: '50px', height: 'auto' }}
                alt="YapRapLogo"
            />
            <Name />
    </button>
  )
}

export default Brand