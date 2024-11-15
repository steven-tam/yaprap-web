import React from 'react'
import HowContainer from '@/components/howitworks-items/HowContainer'
import Image from 'next/image'
import Wave from '@/assets/wave.svg'

function HowItWorks() {
  return (
    <div className="flex flex-col w-full items-center justify-center" >
      <Image src={Wave} className='w-full' alt='Waves' />
      <div className='flex bg-mildblack w-full items-center justify-center min-h-[55rem]'>
        <HowContainer />
      </div>
    </div>
  )
}

export default HowItWorks
