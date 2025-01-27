'use client'
import React from 'react'
import Image from 'next/image';
import Homes from '@/assets/homes-sc.svg';

function HomeScreenshots() {
  return (
    <div className='w-11/12 md:w-4/12 hidden md:block'>
        <Image 
        src={Homes} 
        alt="Home Screenshots" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default HomeScreenshots