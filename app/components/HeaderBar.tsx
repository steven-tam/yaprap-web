import React from 'react'
import Image from 'next/image';
import YapRapLogo from '@/assets/yaprapkeet-simple3.png'

function HeaderBar() {
  return (
    <div className='flex flex-row items-center'>
      <Image 
        src={YapRapLogo}
        width={70}
        alt="YapRapLogo"
      />
      <h1 className='text-6xl font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400'>YapRap</span></h1>
    </div>
  )
}

export default HeaderBar
